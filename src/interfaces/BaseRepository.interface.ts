export interface BaseRepositoryInterface {
  create: (params: object) => Promise<any>;
  update: (id, params: object) => Promise<any>;
  delete: (id: number) => Promise<void>;
  findById: (id: number) => Promise<any>;
  findAll: () => Promise<any>;
}
