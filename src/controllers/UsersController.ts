import { Request, Response } from "express";
import UsersRepository from "../repositories/UsersRepository";
import  CreateUsersService  from "../services/CreateUsersService";
import UpdateUsersService from "../services/UpdateUsersService";


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

  public async list(request: Request, response: Response): Promise<Response>{

    const usersRepository = new UsersRepository();
    const users = await usersRepository.listar();


    return response.json(users);
  }

  public async findByNickname(request: Request, response: Response): Promise<Response>{
    const { nickname } = request.params;

    const usersRepository = new UsersRepository();
    const createUsers = await usersRepository.findByNickname(nickname);


     return response.json(createUsers)
  }


  public async Update(request: Request, response: Response): Promise<Response>{
    const { id } = request.params;
    const { lastname, address} = request.body;

    const usersRepository = new UsersRepository();
    const updateUsers = new UpdateUsersService(usersRepository);

    const users = await updateUsers.execute({
      id,
      lastname,
      address,
    });

    return response.status(201).json(users);
  }

}
export { UsersController }
