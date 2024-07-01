import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import router from "./routes";

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

const port = Number(process.env.PORT || 4000);
app.listen(port, () => {
    console.log(`Server running on port ${port} (\u001b[36mhttp://localhost:${port}\u001b[0m)`);
});