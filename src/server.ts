import app from "./app";
import { sequelize } from "./config/database";
import { ENV } from "./config/env";

async function start() {
  try {
    await sequelize.authenticate();

    console.log("Database Connected");

    await sequelize.sync();

    app.listen(ENV.PORT, () => {
      console.log(`Server running on port ${ENV.PORT}`);
    });
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
}

start();
