const Koa = require('koa');
const KoaRouter = require('./router');

const app = new Koa();
const router = new KoaRouter();

router.get('/abc/:id',
    async (ctx, next) => {
        console.log(1);
        await next();
        console.log(3);
    },
    async (ctx, next) => {
        console.log(2);
        await next();
        console.log(4);
    }
);

router.get('/abc/11',
    async (ctx, next) => {
        console.log(6);
        await next();
        console.log(7);
    },
    async (ctx, next) => {
        console.log(8);
        await next();
    }
);

app.use(router.routes());

app.use((ctx, next) => {
    console.log(5);
    ctx.body = 'aaa';
});

app.listen(3000);
