import Server from "./server";

global._ = require('lodash');

Server.createApp();
Server.setupExpress();
