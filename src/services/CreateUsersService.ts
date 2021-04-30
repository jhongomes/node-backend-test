import AppError from "../errors/AppError";

import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { TreeChildren } from "typeorm";


interface IRequest{

  name: string;
  lastname: string;
  nickname: string;
  address: string;
  bio: string;
}

class CreateUsersService {

  constructor(private usersRepository: IUsersRepository){
    this.usersRepository = usersRepository;
  }

  public async execute({ name, lastname, nickname, address, bio}: IRequest): Promise<User>{

    const users = await this.usersRepository.create({
      name,
      lastname,
      nickname,
      address,
      bio
    });
    return users;
  }
}
export { CreateUsersService }
