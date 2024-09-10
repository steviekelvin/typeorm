import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";
import { UserRepositoryInterface } from "../../interfaces/UserRepository.interface";
import { BaseRepositoryInterface } from "../../repository/BaseRepository.interface";
import { UserRepository } from "../../repository/UserRepository";

export class UserFindByIdUseCase {
  constructor(private repository: UserRepositoryInterface) {}
  execute = async (id: number) => {
    const user = await this.repository.findById(id);
    return await user;
  };
}
