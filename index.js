const app = require('./server/server');

app.get('/', (req, res) => {
  res.send('Hello Express!!');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 GraphQL Express Server Launched. Listening at port ${PORT}...`);
});
