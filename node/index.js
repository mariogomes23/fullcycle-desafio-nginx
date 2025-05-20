const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const connection = mysql.createConnection(config);

// Cria tabela se não existir
const createTable = `
  CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
)
`;
connection.query(createTable);

// Insere nome
const insertName = `INSERT INTO people(name) VALUES('Mario Gomes')`;
connection.query(insertName);

app.get('/', (req, res) => {
  connection.query('SELECT name FROM people', (err, results) => {
    if (err) {
      return res.status(500).send('Erro ao consultar o banco de dados');
    }

    let list = results.map(row => `<li>${row.name}</li>`).join('');
    res.send(`<h1>Full Cycle Rocks!</h1><ul>${list}</ul>`);
  });
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
