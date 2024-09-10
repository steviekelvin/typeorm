import { UserParamsDTO } from "../../interfaces/UserParamsDTO";
import { UserRepositoryInterface } from "../../interfaces/UserRepository.interface";

export class UserCreateUseCase {
  constructor(private repository: UserRepositoryInterface) {}
  execute = async ({ name, email, password }: UserParamsDTO) => {
    return await this.repository.create({ name, email, password });
  };
}
