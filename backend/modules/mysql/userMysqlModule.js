import knex from './mysqlModule';
import md5 from 'md5';


export async function accountUserInfo (body) {
    const account = await knex.raw("SELECT id,username,is_active,created_at,locale " +
        "FROM core_users WHERE username = ? AND password = ?",[body.username,md5(body.password)]);
    return account[0];
}
