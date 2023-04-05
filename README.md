# Small NNM: Nodejs - Nginx - Mysql

Este projeto é composto por um conjunto de serviços Docker, que incluem um servidor Node.js, um banco de dados MySQL e um servidor Nginx. O objetivo do projeto é fornecer uma aplicação Web simples que recupera informações de um banco de dados e as exibe em uma página HTML.

O projeto utiliza o Docker Compose para gerenciar e orquestrar os diferentes serviços. O arquivo `docker-compose.yml` define os serviços e as redes utilizadas no projeto.

## Requisitos
Para executar este projeto, é necessário ter o Docker e o Docker Compose instalados em sua máquina. Você pode baixá-los nos seguintes links:

[Docker](https://www.docker.com/get-started/)

[Docker Compose](https://docs.docker.com/compose/install/)

## Executando o projeto
Para executar o projeto, abra um terminal na pasta raiz do projeto e execute o seguinte comando:

Copy code
```prompt
docker-compose up
```
Este comando irá construir as imagens Docker necessárias e iniciar os serviços definidos no arquivo docker-compose.yml. Depois que os serviços estiverem em execução, você pode acessar a aplicação Web em http://localhost:8080.

## Arquivos do projeto
O projeto é composto pelos seguintes arquivos:

- `docker-compose.yml`: Define os serviços e as redes utilizadas no projeto.
- `node/index.js`: Código Node.js que recupera informações do banco de dados e as exibe em uma página HTML.
- `nginx/nginx.conf`: Arquivo de configuração do servidor Nginx, que atua como um proxy reverso para o servidor Node.js.
- `db/sql-inicial.sql`: Script SQL que é executado na inicialização do banco de dados, criando a tabela e inserindo alguns dados de exemplo.

Este projeto utiliza o [Dockerize](https://github.com/jwilder/dockerize) para garantir que o serviço de banco de dados esteja pronto antes que o servidor Node.js comece a ser executado. O Dockerize aguarda até que a porta do banco de dados esteja disponível antes de executar o script de entrada e iniciar o servidor Node.js. Isso ajuda a garantir que o servidor Node.js tenha acesso aos recursos necessários para funcionar corretamente. O Dockerize é incluído no arquivo `docker-compose.yml`, usando um entrypoint personalizado.


## Considerações finais
Este projeto é apenas uma demonstração simples do uso de serviços Docker para a construção de uma aplicação Web. O projeto não é recomendado para uso em produção e não inclui recursos de segurança ou escalabilidade.