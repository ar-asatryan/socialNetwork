import Route from 'express';
import AuthRoutes from './AuthRoutes';

const router = new Route();

router.use('/api/auth',AuthRoutes);

router.get('/',(req, res)  => {
    try {
        res.sendFile('index.html', { root: __dirname + '/../../frontend/'});
    } catch(error) {
        console.log('files route error: ', error);
        res.end();
    }
});

router.get('/files/*', (req, res)  => {
    res.sendFile(req.params[0], {root: __dirname + '/../../frontend/'});
});

export default router;
