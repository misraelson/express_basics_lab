const Express = require('express');
const Logger = require('morgan');

const App = Express();
App.set('view engine', 'ejs');
App.use(Logger('dev'));

App.get('/', (request, response) => {
  response.render('index');
})

App.get('/car_status', (request, response) => {
  response.render('carStatus', {
    year: null,
  });
});

App.get('/form_submit', (request, response) => {
  const params = request.query;
  console.log('params', params);
  const { year } = params
  response.render('carStatus', {
    year,
  });
})


const PORT=4545;
const ADDRESS='127.0.0.1';

App.listen(PORT, ADDRESS, () => {
  console.log(`Server is listening on port http://${ADDRESS}:${PORT}`);
})