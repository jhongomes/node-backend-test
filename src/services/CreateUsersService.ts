import AppError from "../errors/AppError";

import  User  from "../entities/User";
import IUsersRepository  from "../repositories/IUsersRepository";



interface IRequest{

  name: string;
  lastname: string;
  nickname: string;
  address: string;
  bio: string;
}

class CreateUsersService {

 private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository){
    this.usersRepository = usersRepository;
  }

  public async execute({ name, lastname, nickname, address, bio}: IRequest): Promise<User>{

    const verifyNickname = await this.usersRepository.findByNickname(nickname);

    if(verifyNickname){
      throw new AppError("Nickname already exists! ", 400);
    }

    const users = await this.usersRepository.create({
      name,
      lastname,
      nickname,
      address,
      bio
    });
    return users
  }
}
export default  CreateUsersService;
