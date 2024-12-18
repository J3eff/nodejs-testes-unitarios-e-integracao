import request from 'supertest';
import { describe } from '@jest/globals';
import app from '../../app.js';

// hooks -> ganchos
let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('GET em /editoras', () => {
  it('Deve retornar uma lista de editoras', async () => {
    const resposta = await request(app)
      .get('/editoras')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);

    expect(resposta.body[0].email).toEqual('e@e.com');
  });
});

let respostId;
describe('POST em /editoras', () => {
  it('Deve adicionar uma nova editora', async () => {
    const reposta = await request(app)
      .post('/editoras')
      .send({
        nome: 'CDC',
        cidade: 'São Paulo',
        email: 's@s.com',
      })
      .expect(201);
    respostId = reposta.body.content.id;
  });
});

describe('GET em /editoras/id', () => {
  it('Deve retornar o recurso selecionado', async () => {
    await request(app)
      .get(`/editoras/${respostId}`)
      .expect(200);
  });
});

describe('DELETE em /editoras/id', () => {
  it('Deletar o recusos adicionado!', async () => {
    await request(app)
      .delete(`/editoras/${respostId}`)
      .expect(200);
  });
});
