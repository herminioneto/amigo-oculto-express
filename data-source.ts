import { DataSource } from "typeorm";
import { User } from "./src/domain/entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",

    host: "localhost",
    port: 5433,
    database: "amigo-oculto",
    username: "amigo-oculto",
    password: "amigoculto123",

    synchronize: false,
    logging: true,
    entities: [User],
    migrations: ["src/persistence/typeorm/migrations/**/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Datasource is UP!!!");
  })
  .catch((err) => {
    console.log("Erro ao inicilizar o DS!", err);
  });