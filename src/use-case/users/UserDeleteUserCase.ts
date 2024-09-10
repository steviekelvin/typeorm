import { UserParamsDTO } from "../../interfaces/UserParamsDTO";
import { UserRepositoryInterface } from "../../interfaces/UserRepository.interface";

export class UserDeleteUseCase {
  constructor(private repository: UserRepositoryInterface) {}
  execute = async (id: number) => {
    return await this.repository.delete(id);
  };
}
