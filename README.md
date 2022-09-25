Tendo o node e yarn instalado execute em seu console comando abaixo para atualizar os requisitos do projeto

```
yarn
```

É necessário também ter o postgres instalado, configure o arquivo .env com seu usuário e senha do baco e crie um banco com o mesmo nome que está na variável POSTGRES_DB que no caso é cliente_contatos

Logado no postgres
```
CREATE DATABASE cliente_contatos;
```

volte no código e execute as migrações com o comando:

```
yarn typeorm migration:generate src/migrations/createTables -d src/data-source.ts
```

Após finalizar as migrações inicie o servidor: 

```
yarn dev
```

Se tudo ocorrer bem, ele está pronto para trabalhar com o frontend. Execute então os passos conforme orientação no readme do front.
