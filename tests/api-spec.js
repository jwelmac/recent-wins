import request from 'supertest';
import app from '../src/app';
import {api_prefix} from '../src/api';
import test from 'ava';

//Create instance of app to be used for tests
const inst = app.listen(4000);
const known = 'about-me';

test('route: unknown route returns 404', async t => {
    t.plan(1);

    const res = await request(inst)
        .get('/unknown')
        .send();

    t.is(res.status, 404);
});

test('route: api prefix request redirects', async t => {
    t.plan(1);

    const res = await request(inst)
        .get(`/${api_prefix}`)
        .send();

    t.is(res.status, 301);
});

test('category: unknown category returns 404', async t => {
    t.plan(1);

    const res = await request(inst)
        .get(`/${api_prefix}/category/unknown`)
        .send();

    t.is(res.status, 404);
});

test('category: known category returns category name', async t => {
    t.plan(2);

    const res = await request(inst)
        .get(`/${api_prefix}/category/${known}`)
        .send();

    t.is(res.status, 200);
    t.is(res.body.category.name, known);
});

test('all: returns object with known category info', async t => {
    t.plan(2);

    const res = await request(inst)
        .get(`/${api_prefix}/all`)
        .send();

    const hasKnown = known in res.body.all;

    t.is(res.status, 200);
    t.true(hasKnown);
});
