import { Router } from "express";

import {UsersController} from "../controllers/UsersController";

const usersRouter = Router();
const usersController = new UsersController();


usersRouter.post("/", usersController.create);
usersRouter.get("/", usersController.list);
usersRouter.get("/:nickname", usersController.findByNickname);
usersRouter.put("/:id", usersController.Update);
usersRouter.delete("/:id", usersController.Delete)
export { usersRouter }
