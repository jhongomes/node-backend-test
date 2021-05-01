import IUsersRepository from './IUsersRepository'
import ICreateUsersDTO  from "../Dtos/ICreateUsersDTO";
import  User from "../entities/User";
import { getRepository, Repository} from 'typeorm';


class UsersRepository implements IUsersRepository{
  private ormRepository: Repository<User>;

  constructor(){
    this.ormRepository = getRepository(User);

  }


 public async create({name, lastname, nickname, address, bio}: ICreateUsersDTO): Promise<User> {
  const users = this.ormRepository.create({
    name,
    lastname,
    nickname,
    address,
    bio,
  });

  await this.ormRepository.save(users);

  return users;
}

  public async listar(): Promise<User[]> {
    return this.ormRepository.find();

  }

  public async save(users: User): Promise<User> {
    return this.ormRepository.save(users);

  }

  public async remove(users: User): Promise<User> {
    return this.ormRepository.remove(users);

  }

  public async findById(id: string): Promise<User | undefined> {
    return this.ormRepository.findOne({
      id,
    })
  }

  public async findByNickname(nickname: string): Promise<User | undefined> {
    return this.ormRepository.findOne({
      nickname

    })
  }

}
export default  UsersRepository;
