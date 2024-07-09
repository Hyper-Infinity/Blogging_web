import {Context, Hono} from "hono";
import {signUp, signIn} from "../controller/userController"
import { PrismaClient } from "@prisma/client/edge";

const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }, 
    Variables : {
            userId: string,
        prisma: PrismaClient
        }
}>();

userRouter.post('/signup', signUp)

userRouter.post('/signin', signIn)

export default userRouter;