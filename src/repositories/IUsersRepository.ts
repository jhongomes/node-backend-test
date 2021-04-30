import ICreateUsersDTO  from "../Dtos/ICreateUsersDTO";
import  User  from "../entities/User";

export default interface IUsersRepository {

  create(createUsersDTO: ICreateUsersDTO): Promise<User>;
  listar(): Promise<User[]>;
  save(users: User): Promise<User>;
  remove(users: User): Promise<User>;
  findById(id: string): Promise<User | undefined>;


}


