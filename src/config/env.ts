import * as dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || (3000 as number);
export const SECRET_KEY = process.env.SECRET_KEY as string;
export const NODE_ENV = process.env.NODE_ENV as string;
