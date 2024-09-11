import { AppDataSource } from "./data-source";
import * as dotenv from "dotenv";
import * as express from "express";
import { Request, Response } from "express";
import { UserRepository } from "./repository/UserRepository";
import { UserFindAllUseCase } from "./use-case/users/UserFindAllUseCase";
import { UserFindByIdUseCase } from "./use-case/users/UserFindByIdUseCase";
import { UserCreateUseCase } from "./use-case/users/UserCreateUseCase";
import { UserFactory } from "./factory/UserFactory";

dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
const dataSouce = AppDataSource.initialize();

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Bem vindo a API de usuários",
    endpoints: {
      users: {
        list: "/users",
        create: "/user",
        show: "/users/:id",
        faker: "/users/faker/:number_of_users",
      },
      vesion: "1.0.0",
      description: "API de usuários com TypeORM + Express + Postgres",
    },
  });
});

app.get("/users", async (req: Request, res: Response) => {
  const userFindAllUseCase = await new UserFindAllUseCase(
    new UserRepository(AppDataSource)
  );
  const users = await userFindAllUseCase.execute();
  res.json(users);
});

app.get("/users/:id", async (req: Request, res: Response) => {
  const userFindByIdUseCase = await new UserFindByIdUseCase(
    new UserRepository(AppDataSource)
  );
  const user = await userFindByIdUseCase.execute(req.params.id);
  res.json(user);
});

app.post("/user", async (req: Request, res: Response) => {
  const userCreateUseCase = await new UserCreateUseCase(
    new UserRepository(AppDataSource)
  );
  const user = await userCreateUseCase.execute({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  res.json(user);
});

app.get(
  "/users/faker/:number_of_users",
  async (req: Request, res: Response) => {
    const repository = new UserRepository(AppDataSource);
    const userFindAllUseCase = await new UserFindAllUseCase(repository);
    const userCreateUseCase = await new UserCreateUseCase(repository);
    const userFactory = await new UserFactory();
    const qnt = parseInt(req.params.number_of_users);
    for (let i = 0; i < qnt; i++) {
      await userCreateUseCase.execute(userFactory.execute());
    }
    res.json({
      message: `Quantidade de usuários no banco:  ${
        (await userFindAllUseCase.execute()).length
      }`,
    });
  }
);

dataSouce.catch((error) => {
  if (error.errno === -111) {
    console.log(
      `\nErro de conexão com o banco de dados, por favor verifique se seu banco de dados esta online\n`
    );
  }
  // console.error(error);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
