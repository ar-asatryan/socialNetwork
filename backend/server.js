import http from 'http';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import Routes from './routes/index';

/**
 * @class Server
 * */
export default class Server {

    /**
     * Creates express application static instance
     *
     * @async
     * @function createApp
     * @memberOf Server
     * @return {Void}
     * */
    static createApp() {
        Server.app = express();
    }

    /**
     * Setup express application with createServer, adding middleware for authorization and adding routes for GraphQL
     * Adding static global config variables from mysql and etc
     *
     * @async
     * @function setupExpress
     * @memberof Server
     * @return {Void}
     * */
    static async setupExpress() {

        Server.app.server = http.createServer(Server.app);

        Server.app.disable('x-powered-by');
        Server.app.use(express.json());
        Server.app.use(express.urlencoded({extended: false}));
        Server.app.use(morgan('tiny'));
        Server.app.use(helmet());
        Server.app.use(cors());
        Server.app.use(express.static(__dirname + "/../frontend"));

        Server.app.use('/', Routes);

        Server.app.server.listen(
            process.env.PORT,
            () => console.log(`Server listening on http://localhost:${process.env.PORT}`)
        );

    }

    /**
     * Returns Express instance
     *
     * @async
     * @function getApp
     * @memberOf Server
     * @return {Object} Server.app
     * */
    static getApp() {
        return Server.app;
    }
}
