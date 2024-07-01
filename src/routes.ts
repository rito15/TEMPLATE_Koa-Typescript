import Router from "@koa/router";

const router = new Router();

router.get('/', (ctx, next) => {
    console.log("/ -> OK");
    ctx.body = "Ok";
    ctx.status = 200;
});
router.get('/health', (ctx, next) => {
    console.log("/health -> success");
    ctx.body = "success";
    ctx.status = 200;
});

export default router;