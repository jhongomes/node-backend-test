import express from "express";

import { Router } from "express";
import { usersRouter } from "./users";

const routes = Router();


routes.get('/', (request, response ) =>
response.json({ message: 'BACKEND 🚀🚀'  }));


routes.use("/users", usersRouter);

export default routes;
