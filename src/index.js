const express = require('express');
const app = express();
var cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi  = require('swagger-ui-express');
const options = require('./swagger.json');

const swaggerOptions = {
  swaggerDefinition: options,
  apis: ["./src/index.js", "./src/routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, { explorer: false })
);


// settings

app.set('port', process.env.PORT || 5000);

// middlewares
app.use(express.json());
app.use(cors());


// routes
app.use(require('./routes/index'));
app.use(require('./routes/cliente'));
//errores
app.use((error, req, res, next) => {
  res.status(404).json({
    status: 'error',
    message: error.message
  });
});


//Iniciando Server
app.listen(app.get('port'), () => {
  console.log(`Server Listen on port ${app.get('port')}`);
});

module.exports = app;