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

    if(!name){
      throw new AppError('Fill in the name field !', 400);
     }

    if(!lastname){
      throw new AppError('Fill in the lastname field !', 400);
     }

   if(!nickname){
      throw new AppError('Fill in the nickname field !', 400);
     }

   if(!address){
      throw new AppError('Fill in the address field !', 400);
     }
     if(!bio){
      throw new AppError('Fill in the bio field !', 400);
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
