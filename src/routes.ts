import express from 'express';

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

// METODOS EM CONVENÇÃO NA COMUNIDADE:
/*
    index: listar varios registros
    show:  buscar/listar registro especifico
    create: criar novo registro
    update: atualizar registros
    delete: excluir registros
*/

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;