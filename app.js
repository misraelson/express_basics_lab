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

App.get('/car_year_form_submit', (request, response) => {
  const params = request.query;
  const { year } = params
  response.render('carStatus', {
    year,
  });
})

App.get('/random_person', (request, response) => {
  response.render('randomPerson', {
    person: null,
    names: null,
  })
})

App.get('/random_person_form_submit', (request, response) => {
  const params = request.query;
  const { names } = params
  const namesArray = names.trim().split(',')
  let num = Math.round(Math.random() * (namesArray.length -1))
  let person = namesArray[num];
  response.render('randomPerson', {
    person,
    names: names.trim(),
  });
})

App.get('/fizz_buzz', (request, response) => {
  response.render('fizzBuzz', {
    number1: null,
    number2: null,
  })
})

App.get('/fizz_buzz_form_submit', (request, response) => {
  const params = request.query;
  const { number1, number2 } = params
  

  
  response.render('fizzBuzz', {
    number1,
    number2,
  });
})

const PORT=4545;
const ADDRESS='127.0.0.1';

App.listen(PORT, ADDRESS, () => {
  console.log(`Server is listening on port http://${ADDRESS}:${PORT}`);
})