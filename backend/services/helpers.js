import * as crypto from 'crypto';

export default class Helpers {

    static tokenGenerator(data) {
        const md5Sum = crypto.createHash('md5');
        const shaSum = crypto.createHash('sha1');
        const date = new Date();
        const salt = '123465798ABSDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-+=' + data;
        const hashString = date + salt;
        const tempMD5 = md5Sum.update(hashString).digest('hex');
        const tempSHA1 = shaSum.update(tempMD5);
        return tempSHA1.digest('hex');
    }

}

