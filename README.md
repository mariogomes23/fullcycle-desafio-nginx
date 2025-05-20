# Desafio Full Cycle - NGINX + Node.js + MySQL

Este projeto resolve o desafio proposto pela Full Cycle, utilizando:

- **NGINX** como proxy reverso
- **Node.js** para inserir e listar nomes do banco
- **MySQL** como banco de dados
- **Docker Compose** para orquestração

---

## ✅ Objetivo

Ao acessar `http://localhost:8080`, a aplicação:

1. Insere um nome no banco (`people`)
2. Retorna:

```html
<h1>Full Cycle Rocks!</h1>
<ul>
  <li>Mario Gomes</li>
  <li>João Silva</li>
  ...
</ul>
