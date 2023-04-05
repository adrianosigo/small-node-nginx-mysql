const http = require('http');

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'db',
  user: 'db_user',
  password: '123456',
  database: 'db_node',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conexão bem sucedida!');
});

let resultados

connection.query('SELECT * FROM people', (error, results, fields) => {
    if (error) throw error;
    resultados = results;
    console.log('Os resultados são: ', results);
});


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<html>
                <head>
                    <meta charset="UTF-8">
                    <title>Lista de Nomes Full Cycle</title>
                </head>`);

    res.write(` <body>
                <h1>Full Cycle Rocks!</h1>
                <ul>`);

    resultados.forEach(resultado => {
        res.write(`<li>${resultado.name}</li>`);        
    });

    res.write(` </ul>
                </body>
               </html>`);

    res.end();
});

server.listen(3000, () => {
    console.log('Servidor escutando na porta 3000...');
});

connection.end();
