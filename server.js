const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/auth/login', (req, res) => {
  const user = router.db.get('users').find({ username: req.body.username, password: req.body.password }).value();
  if (user) {
    res.jsonp({ token: user.token });
  } else {
    res.status(401).jsonp({ error: 'Invalid credentials' });
  }
});

server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running on port 3001');
});