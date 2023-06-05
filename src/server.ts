import { app } from "./app";
import { appRoutes } from "./http/router/routes";

app
    .listen({
        host: "0.0.0.0",
        port: 3333,
    })
    .then(() => {
        console.log("🚀 HTTP Server Running!");
    });

app.register(appRoutes, { prefix: '/api' });