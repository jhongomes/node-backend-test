import { Request, Response } from "express";
import UsersRepository  from "repositories/UsersRepository";

import { CreateUsersService } from "../services/CreateUsersService";


class UsersController {
  public async create(request: Request, response:Response): Promise<Response>{
    const {name, lastname, nickname, address, bio} = request.body;

    const usersRepository = new UsersRepository()
    const createUsers = new CreateUsersService(usersRepository);

    const users = await createUsers.execute({
      name,
      lastname,
      nickname,
      address,
      bio
    });

    return response.status(201).json(users);
  }

}
export { UsersController }
