import Koa from 'koa';
import url from 'url';
import koaLogger from 'koa-logger';
import koaRes from 'koa-res';
import koaBodyparser from 'koa-bodyparser';
import koaCors from 'koa-cors';
import config from './config';
import {router, io} from './routes';

const koa = new Koa();
io.attach(koa);

koa
    .use(koaCors())
    .use(koaRes())
    .use(koaLogger())
    .use(koaBodyparser())
    .use(router.routes())
    .use(router.allowedMethods());

const {
    port: PORT,
    hostname: HOSTNAME,
    href: HREF
} = url.parse(config.API);

koa.listen(PORT, HOSTNAME, () => {
    console.log('App server start at ' + HREF);
});