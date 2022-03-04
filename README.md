
# Trybesmith Project! :coin:

Nesse projeto, o objetivo era desenvolver um **CRUD** (_Create, Read, Update_ e _Delete_) de itens medievais, no formato de uma _API_, utilizando _Typescript_ e criar alguns _endpoints_ que irão ler e escrever em um banco de dados, utilizando o **MySQL**.
Desafio:
 - Declarar variáveis e funções com tipagens _Typescript_;
 - Construir uma _API Node Express_ utilizando o _Typescript_.



Essa API, possui alguns endpoints (seguindo os princípios do REST) que estão conectados ao banco de dados, sempre pensando no modelo de negócio. A ideia dessa API é criar um api de produto.Nessa API o usuário irá fazer o login e caso não tenha cadastro ainda, se cadastrar. Caso as autentificações estejam corretas e ele exista no banco de dados, irá criar um token de autentificação e esterá permitido cadastrar um novo produto ou listá-los.


# Ferramentas usadas 🧰

 🔨 Este projeto foi feito com Node.js utilizando TypeScript.
 
---

### INSTRUÇÕES :

1. Clone o repositório
  * `git clone git@github.com:juan-formoso/trybesmith-project.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd trybesmith-project`

2. Instale as dependências
  * `npm install`
 
3. Crie, na raíz do projeto, um arquivo `.env` contendo as seguintes variáveis:

```
  host: process.env.MYSQL_HOST
  user: process.env.MYSQL_USER
  password: process.env.MYSQL_PASSWORD
  
```
4. Conexão com o banco de dados local

A conexão do banco local deverá conter os seguintes parâmetros:

```typescript
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

export default connection;
```
**:warning: É essencial configurar essas 3 variáveis de ambiente para testar o projeto localmente: :warning:**

```
  host: process.env.MYSQL_HOST
  user: process.env.MYSQL_USER
  password: process.env.MYSQL_PASSWORD
```
## Tabelas

O banco terá três tabelas: pessoas usuárias, produtos e pedidos.

```sql
DROP SCHEMA IF EXISTS Trybesmith;
CREATE SCHEMA Trybesmith;

CREATE TABLE Trybesmith.Users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL,
  classe TEXT NOT NULL,
  level INTEGER NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE Trybesmith.Orders (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  userId INTEGER,
  FOREIGN KEY (userId) REFERENCES Trybesmith.Users (id)
);

CREATE TABLE Trybesmith.Products (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  amount TEXT NOT NULL,
  orderId INTEGER,
  FOREIGN KEY (orderId) REFERENCES Trybesmith.Orders (id)
);
```

---


5. Inicie o projeto
  * `npm start `
  
6. Acesse as rotas através de softwares como Postman e Insomnia através do endereço:
  * `http://localhost:3000`
---
