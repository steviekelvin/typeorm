import { User } from "../entity/User";
import { UserParamsDTO } from "./UserParamsDTO";

export interface UserRepositoryInterface {
  create(params: UserParamsDTO): Promise<User>;
  findById(id: number): Promise<User>;
  findAll(): Promise<User[]>;
  update(id: number, params: UserParamsDTO): Promise<User>;
  delete(id: number): Promise<void>;
}
