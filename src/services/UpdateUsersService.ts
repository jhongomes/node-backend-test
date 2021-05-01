import AppError from "../errors/AppError";
import User from "../entities/User";
import IUsersRepository from "../repositories/IUsersRepository";



interface IRequest{
  id: string;
  lastname: string;
  address: string;
}

class UpdateUsersService{
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository){
    this.usersRepository = usersRepository;

  }

  public async execute({id, lastname, address}:IRequest):Promise<User>{

    const users = await this.usersRepository.findById(id);

    if(!users){
      throw new AppError("User not found!", 400);

    }


    users.lastname = lastname;
    users.address = address;

    await this.usersRepository.save(users);

    return users;
  }

}


export default UpdateUsersService;
