import { UserParamsDTO } from "../../interfaces/UserParamsDTO";
import { UserRepositoryInterface } from "../../interfaces/UserRepository.interface";

export class UserUpdateUseCase {
  constructor(private repository: UserRepositoryInterface) {}
  execute = async (id, params: UserParamsDTO) => {
    return await this.repository.update(id, params);
  };
}
