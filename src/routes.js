const express = require('express');

const routes = express.Router();


/**
 * Rota / Recurso
 */

 /**
  * Metodos HTTP:
  * 
  * GET: Busca/listar um informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Altera uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

/**
 * Tipos de parâmentros
 * 
 * Query Params, Route Params, Request Body
 */

/**
 *  Query: Parámetros nomeados e enviados na rota após "?" (Filtros, paginação)
 * 
 *  /users?nome=Kaio&idade=55
 */

routes.get('/users',(request,response)=>{
    const { nome , idade } = request.query;
    return response.json({
      nome,
      idade
    });
});

/**
 * Route: Parametros utilizados para identificar recursos
 * 
 * /users/50
*/

routes.get('/users/:id',(request,response)=>{
  const { id } = request.params;
  return response.json({
    id
  });
});

/**
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

routes.post('/users',(request,response)=>{
  const { nome, idade } = request.body;
  return response.json({
    nome,
    idade
  });
});

module.exports = routes;