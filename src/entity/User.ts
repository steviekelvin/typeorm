import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Encript } from "../utils/encrypt/Encrypt";

// mudar para classe de encriptação

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
  @Column()
  email!: string;

  @Column({
    name: "password",
    transformer: {
      to: (value: string) => {
        const encript = new Encript();
        return encript.execute(value);
        return ;
      },
      from: (value: string) => {
        const encript = new Encript();
        return encript.decrypt(value);
       
      },
    },
  })
  password!: string;

  @Column({
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
    update: false,
  })
  createdAt?: Date;

  @Column({
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
    update: true,
  })
  updatedAt?: Date;
}
