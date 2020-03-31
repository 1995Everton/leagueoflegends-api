/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  type: 'postgres',
  username: process.env.DATABASE_USERNAME,
  port: parseInt(process.env.DATABASE_PORT), 
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,
  extra: {
    charset: "utf8mb4_unicode_ci",
    ssl: process.env.NODE_ENV === 'production'
  },
  logging: ["query", "error"]
}