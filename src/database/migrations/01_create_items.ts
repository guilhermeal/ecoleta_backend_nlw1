import Knex from 'knex';

// FUNCAO (UP) PARA REALIZAR AS ALTERACOES DO BANCO
// NESSE CASO - VAI CRIAR A TABELA
export async function up(knex: Knex){
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

// FUNCAO (DOWN) PARA DESFAZER OPERACOES NO METODO UP
// NESSE CASO VAI DELETAR A TABELA
export async function down(knex: Knex){
    return knex.schema.dropTable('items');
}