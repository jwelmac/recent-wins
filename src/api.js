import KoaRouter from 'koa-router';
import Resume from './resume';

const api = KoaRouter();

// Set a prefix of our api, in this case resume
export const api_prefix = 'resume'
api.prefix(`/${api_prefix}`);

/**
* Redirect to all if prefix called without additional parameters
*/
api.redirect('/', '/all');


/** Middleware to ensure category is valid */
const validateCategory = async (ctx, next) => {
  const { category_name } = ctx.params;
  if (!(ctx.state.categories.includes(category_name))) {
    return ctx.throw(404);
  }
  await next();
};

/**
* Get all categories
*/
api.get('/all',
  async (ctx, next) => {
    const { category_name } = ctx.params;
    const all = Resume.allCategories();
    ctx.body = { all };
});

/**
* Request a category using GET
*/
api.get('/category/:category_name',
  validateCategory,
  async (ctx, next) => {
    const { category_name } = ctx.params;
    const category = Resume.category(category_name);
    ctx.body = { category };
});


export default api;
