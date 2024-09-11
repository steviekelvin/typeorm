import { UserRepositoryInterface } from "../../interfaces/UserRepository.interface";

export class UserFindByIdUseCase {
  constructor(private repository: UserRepositoryInterface) {}
  execute = async (id: number) => {
    const user = await this.repository.findById(id);
    return await user;
  };
}
