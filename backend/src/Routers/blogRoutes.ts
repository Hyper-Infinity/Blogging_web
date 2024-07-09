import {Hono} from "hono";
import {authMW} from "../middlewares/authMiddleware"
import { PrismaClient } from "@prisma/client/edge";
import { createPost, getAllPost, getPostById, updatePost } from "../controller/blogController";

const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }, 
    Variables : {
            userId: string,
        prisma: PrismaClient
        }
}>();

blogRouter.use('/*', authMW);

blogRouter.post('/post', createPost);

blogRouter.put('/post', updatePost);

blogRouter.get('/post/bulk', getAllPost)

blogRouter.get('/post/:id', getPostById)

export default blogRouter;