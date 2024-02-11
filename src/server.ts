import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import Router from "@koa/router";

(async () => {

    const app = new Koa();
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

    app.use(cors());
    app.use(bodyParser());
    app.use(router.routes());
    app.use(router.allowedMethods());

    const port = Number(process.env.PORT || 4000);
    app.listen(port, () => {
        console.log(`Server running on port ${port} (\u001b[36mhttp://localhost:${port}\u001b[0m)`);
    });
})();