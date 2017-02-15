import KoaRouter from 'koa-router';
import Category from './category';

const api = KoaRouter();


const validateCategory = async (ctx, next) => {
  const { category_name } = ctx.params;
  if (!(ctx.state.categories.includes(category_name))) {
    return ctx.throw(404);
  }
  await next();
};

api.get('/:category_name',
  validateCategory,
  async (ctx, next) => {
    const { category_name } = ctx.params;
    const category = new Category(category_name);
    ctx.body = { category };
});



export default api;
