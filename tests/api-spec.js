import request from 'supertest';
import app from '../src/app';
import test from 'ava';

//Create instance of app to be used for tests
const inst = app.listen(4000);

test('category: unknown category returns 404', async t => {
    t.plan(1);

    const res = await request(inst)
        .get('/unknown')
        .send();

    t.is(res.status, 404);
});

test('category: known category returns category name', async t => {
    t.plan(2);

    const category = 'about-me';
    const res = await request(inst)
        .get(`/${category}`)
        .send();

    t.is(res.status, 200);
    t.is(res.body.category.name, category);
});
