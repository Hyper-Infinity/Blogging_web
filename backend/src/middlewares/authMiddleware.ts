import { Context, Next } from "hono";
import { Jwt } from "hono/utils/jwt";

export const authMW = async (c: Context, next: Next) => {
    try {
        const authHeader = c.req.header("authorization");
        if(authHeader == undefined || authHeader.split(" ")[0] != "Bearer") {
            return c.json({
                message: "unauthorized"
            }, 403);
        }

        const token: string = authHeader.split(" ")[1];
        const decoded = await Jwt.verify(token, c.env.JWT_SECRET);

        if(!decoded) {
            return c.json({
                message: "unauthorized"
            }, 403);
        }   
        else {
            c.set("userId", decoded.id);
            await next();
        }
    }
    catch(e) {
        return c.json({
            message: "Error while Authentication !"
        }, 500);
    }
} 