export default {
    client: 'mysql',
    connection: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB,
        debug: false,
        typeCast: function (field, next) {
            if (field.type == "BIT" && field.length == 1) {
                const bit = field.string();
                const b = (bit === null) ? null : bit.charCodeAt(0);
                return !!b;
            }
            return next();
        },
    }
}