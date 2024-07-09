import { Hono } from 'hono'
import { cors } from 'hono/cors'
import userRouter from './Routers/userRoutes';
import blogRouter from './Routers/blogRoutes';
import {prismaMW} from './middlewares/prismaMiddleware'
import { PrismaClient } from '@prisma/client/edge';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }, 
  Variables : {
		userId: string,
    prisma: PrismaClient
	}
}>()
app.use(cors());
app.use(prismaMW);

app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);

export default app
