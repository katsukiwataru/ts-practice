import path from 'path';
import Express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

export default (app: Express.Application) => {
  const publicDir = path.join(__dirname, '../public');
  const clientDir = path.join(__dirname, '../client');

  app.use(Express.static(publicDir));
  app.set('view engine', 'ejs');
  app.set('views', clientDir);

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
};
