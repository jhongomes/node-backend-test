import { Router } from "express";

import {UsersController} from "../controllers/UsersController";

const usersRouter = Router();
const usersController = new UsersController();


usersRouter.post("/", usersController.create);
usersRouter.get("/", usersController.list);


export { usersRouter }
