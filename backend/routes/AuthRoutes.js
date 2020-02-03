import Route from 'express';
import {signInUser} from '../controllers/AuthController';

const router = new Route();

router.post('/signIn',signInUser);


export default router;
