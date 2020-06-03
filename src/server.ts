import express from 'express';

const app = express();

app.use(express.json()); // funcionalidade do expess para interpretar Jsons

// ROTA: Endereço completo da requisição
// RECURSOS: Qual entidade estamos acessando do sistema

// GET  : Buscar uma ou mais informações no backend
// POST : Criar uma nova informação no backend 
// PUT  : Atualizar uma informação existenten do backend
// DELETE: Deletar uma informação existenten do backend

// POST http://localhost:3333/users => Criar um usuário
// GET  http://localhost:3333/users => Listar usuários
// GET  http://localhost:3333/users/23 => Listar usuário do ID = 23

// Request param: Parametros que vem na propria rota que identificam um recurso
// Query param: Parametros que vem na própria rota geralmetne opcionais para filtros, paginacao ...
// Request body: Parametros para criação/atualização de informações

// knex*
 
const users = [
    'Guilherme', // 0
    'Allan',     // 1
    'Xavier',    // 2
    'Almeida'    // 3
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    console.log(filteredUsers);
    
    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];
    return response.json(user);
});

app.post('/users', (request, response) => {

    const data = request.body;

    const user = {
        name: data.name,
        sobrenome: data.sobrenome,
        email: data.email
    };
    return response.json(user);
});

app.listen(3333);