import { Context } from "hono"
import {signInZodType, signUpZodType, signInType, signUpType} from "codedemon-medium-types"
import { Jwt } from "hono/utils/jwt"

enum StatusCode {
    BADREQ = 400,
    NOTFOUND = 404,
    NOTPERMISSIOON = 403,
    INTERNALSERVERERROR = 500,
    SUCCESS = 200
}

export const signUp = async (c: Context) => {
    const prisma = c.get("prisma");

    try{
        const body: signUpType = await c.req.json();
        const {success} = signUpZodType.safeParse(body);

        if(!success) {
            return c.json({
                message: "Invalid input !"
            }, StatusCode.BADREQ);
        }

        const isExist = await prisma.user.findFirst({
            where: {
                email: body.email
            }
        })

        if(isExist != null) {
            return c.json({
                message: "User already exists !"
            }, StatusCode.BADREQ);
        }

        const res = await prisma.user.create({
            data: {
                email: body.email, 
                password: body.password, 
                name: body.name
            },
            select: {
                id: true,
                email: true,
                name: true
            }
        })

        const token = await Jwt.sign({id: res.id}, c.env.JWT_SECRET);

        return c.json({
            message: "Account successfuly created !",
            jwt: token,
            res, 
        }, StatusCode.SUCCESS);
    }catch(e) {
        return c.json({
            message: "Something went wrong !"
        }, StatusCode.INTERNALSERVERERROR)
    }
}

export const signIn = async (c: Context) => {
    const prisma = c.get("prisma");

    try{
        const body: signInType = await c.req.json();
        const {success} = signInZodType.safeParse(body);

        if(!success) {
            return c.json({
                message: "Invalid input !"
            }, StatusCode.BADREQ);
        }

        const currUser = await prisma.user.findFirst({
            where: {
                email: body.email,
                password: body.password
            },
            select: {
                id: true,
                email: true,
                name: true
            }
        })

        if(currUser == null) {
            return c.json({
                message: "User does not exists !"
            }, StatusCode.NOTFOUND);
        }

        const token = await Jwt.sign({id: currUser.id}, c.env.JWT_SECRET);

        return c.json({
            message: "Successfuly signed in !",
            jwt: token
        }, StatusCode.SUCCESS)

    }catch(e) {
        return c.json({
            message: "Something went wrong !"
        }, StatusCode.INTERNALSERVERERROR)
    }
}