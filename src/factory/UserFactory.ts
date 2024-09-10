import { fakerPT_BR as faker } from "@faker-js/faker";
import { UserParamsDTO } from "../interfaces/UserParamsDTO";

export class UserFactory {
  execute = (): UserParamsDTO => {
    return {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      // password: '12345678',
    };
  };
}
