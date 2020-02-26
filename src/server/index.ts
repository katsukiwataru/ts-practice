import Express from 'express';
import cors from 'cors';

const app = Express();

app.use(cors())

// app.get('/', (req, res) => {
//   const data = { message: 'pong' };
//   res.send(data);
// });
app.get('/api/health', (req, res) => {
  const data = { message: 'pong' };
  res.send({ message: data });
});

app.get('/api/health', (req, res, next) => {
  res.sendStatus(404);
  next({ statusCode: 404 });
})

app.use((
  err: { statusCode: number },
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
  ) => {
    console.log(err.statusCode)
  })

const port = 8888;
const host = 'localhost';

app.listen(port, host, () => {
  console.log(`running on http${host}:${port}`);
});

// app.post('/', (req, res) => {
//   res.send('got a post reqest');
// });

// app.put('/user', (req, res) => {
//   res.send('got a post request');
// });

// app.put('/user', (req, res) => {
//   res.send('got a put request at /user');
// });
