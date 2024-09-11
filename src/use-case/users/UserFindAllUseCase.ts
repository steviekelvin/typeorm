import { UserRepositoryInterface } from "../../interfaces/UserRepository.interface";

export class UserFindAllUseCase {
  constructor(private repository: UserRepositoryInterface) {}
  execute = async () => {
    const users = await this.repository.findAll();
    return await users;
  };
}
