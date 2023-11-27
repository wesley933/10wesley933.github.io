const express = require('express');
const app = express();
const porta = 8080;

// Rota estática
app.get('/', (req, res) => {
  res.send('Rota estática: Olá, mundo!');
});

// Rota dinâmica com placeholder
app.get('/usuario/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Rota dinâmica: Informações do usuário ${userId}`);
});

// Rota com controle de fluxo usando query parameter
app.get('/mensagem', (req, res) => {
  const isAdmin = req.query.admin === 'true';

  if (isAdmin) {
    res.send('Você é o administrador');
  } else {
    res.send('Você não é o administrador');
  }
});

// Rota de fallback para qualquer outra rota não definida
app.get('*', (req, res) => {
  res.status(404).send('a página não encontrada');
});

// Inicie o servidor
app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});