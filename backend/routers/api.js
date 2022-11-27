import { Router } from 'express';
import tgValidatiion from '../middleware/tgValidation';

const api = new Router();

api.use(tgValidatiion);

api.post('/validate', (req, res) => {

    console.log(req.body);
    res.status('200').send('echo  ' + req.body.message);
});

export default api;