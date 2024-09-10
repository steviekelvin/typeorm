import { UserParamsDTO } from "../interfaces/UserParamsDTO";
import { BaseRepositoryInterface } from "./BaseRepository.interface";


export class BaseRepository implements BaseRepositoryInterface {
  create = async (params: UserParamsDTO): Promise<any> => {
    return console.log("create base");
  };

  findById = async (id: number): Promise<any> => {
    return console.log("findById base");
  };

  findAll = async (): Promise<any> => {
    return console.log("findAll base");
  };

  update = async (id:number, params: UserParamsDTO): Promise<any> => {
    return console.log("update base");
  };

  delete = async (id: number): Promise<void> => {
    return console.log("delete base");
  };
}
