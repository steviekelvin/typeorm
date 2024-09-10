import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";
import { UserRepositoryInterface } from "../../interfaces/UserRepository.interface";
import { BaseRepositoryInterface } from "../../repository/BaseRepository.interface";
import { UserRepository } from "../../repository/UserRepository";

export class UserFindAllUseCase {
  constructor(private repository: UserRepositoryInterface) {}
  execute = async () => {
    const users = await this.repository.findAll();
    return await users;
  };
}
