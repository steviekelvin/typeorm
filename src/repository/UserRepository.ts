import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { UserParamsDTO } from "../interfaces/UserParamsDTO";
import { UserRepositoryInterface } from "../interfaces/UserRepository.interface";
import { BaseRepository } from "./BaseRepository";
import { BaseRepositoryInterface } from "./BaseRepository.interface";

export class UserRepository
  extends BaseRepository
  implements UserRepositoryInterface
{
  constructor(private appDataSource: typeof AppDataSource) {
    super();
  }

  create = async (params: UserParamsDTO): Promise<User> => {
    const user = await new User();
    console.log("Criando usuario no banco de dados ...");
    user.name = params.name;
    user.email = params.email;
    user.password = params.password;
    await this.appDataSource.manager.save(user);
    console.log("Novo usuário salvo com id: " + user.id);
    console.log("Usuário", user);
    return user;
  };

  findById = async (id: number) => {
    const user = await this.appDataSource.manager.findOneBy(User, { id });
    console.log("Usuário", user);
    return user;
    // return await this.appDataSource.manager.findOneBy(User, { id });
  };

  findAll = async () => {
    const usuarios = await this.appDataSource.manager.find(User);
    console.log("Usuários", usuarios);
    return usuarios;
  };

  update = async (id: number, params: UserParamsDTO): Promise<User> => {
    const user = await this.findById(id);
    user.name = params.name || user.name;
    user.email = params.email || user.email;
    user.password = params.password || user.password;
    console.log("Atualizando usuário no banco de dados ...");
    await this.appDataSource.manager.save(user);
    console.log("Usuário atualizado", user);
    return await user;
  };

  delete = async (id: number) => {
    const user = await this.findById(id);
    if (user) {
      console.log("Deletando usuário no banco de dados ...");
      await this.appDataSource.manager.remove(user);
      console.log("Usuário deletado com sucesso");
    } else {
      console.log("Usuário não encontrado");
    }
  };
}
