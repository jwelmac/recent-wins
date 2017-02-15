import Koa from 'koa';
import api from './api';
import parser from 'koa-bodyparser';
import {categories} from '../data/categories';

const app = new Koa()
  .use(parser())
  .use(api.routes())
  .use(api.allowedMethods());

export default app;
