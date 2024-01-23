import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import Router from "@koa/router";

(async () => {

    const app = new Koa();
    const router = new Router();

    router.get('/', (ctx, next) => {
        ctx.body = "Ok";
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