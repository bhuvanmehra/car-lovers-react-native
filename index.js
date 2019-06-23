const app = require('./server/server');

app.get('/', (req, res) => {
  res.send('Hello Express!!');
});

app.listen(4000, () => {
  console.log('🚀 GraphQL Express Server Launched. Listening at port 4000...');
});
