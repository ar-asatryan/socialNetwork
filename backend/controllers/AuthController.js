import {generate} from "../services/responseGenerator";
/**
 * handling all functions from routes
 * @class AuthController
 * */

export async function signInUser (req, res) {
    try {
        res.json(generate(false,0)).end();

    } catch (e){
        console.log('SIGN-IN error! - ',e);
        res.status(400).json(generate(true,3)).end();
    }
}
