import { Context } from "hono"
import {
    createBlogType, 
    createBlogInp,
    updateBlogType,
    updateBlogInp
} from "codedemon-medium-types"
import { PrismaClient } from "@prisma/client/edge";

enum StatusCode {
    BADREQ = 400,
    NOTFOUND = 404,
    NOTPERMISSIOON = 403,
    INTERNALSERVERERROR = 500,
    SUCCESS = 200
}

export const createPost = async (c: Context) => {
    const prisma: PrismaClient = c.get("prisma");
    try {
        const body: createBlogType = await c.req.json();
        const id: string = c.get("userId");
        const {success} = createBlogInp.safeParse(body);
        if(!success) {
            return c.json({
                message: "Invalid input !"
            }, StatusCode.BADREQ);
        }

        const res = await prisma.post.create({
            data: {
                content: body.content,
                title: body.title,
                authorId: id
            }, 
            select: {
                author: {
                    select: {
                        email: true
                    }
                },
                title: true,
                createdAt: true,
                id: true,
            }
        })
        return c.json({
            message: "Post created successfuly !", 
            res
        }, StatusCode.SUCCESS);
    } catch(e) {
        return c.json({
            message: "Internal server error ! Post not created !"
        }, StatusCode.INTERNALSERVERERROR); 
    }
}

export const updatePost = async (c: Context) => {
    const prisma: PrismaClient = c.get("prisma");
    try {
        const body: updateBlogType = await c.req.json();
        const {success} = updateBlogInp.safeParse(body);
        if(!success) {
            return c.json({
                message: "Invalid input !"
            }, StatusCode.BADREQ);
        }

        const res = await prisma.post.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content, 
                published: body.publish
            }, 
            select: {
                author: {
                    select: {
                        email: true
                    }
                },
                title: true,
                createdAt: true,
                published: true,
                id: true,
            }
        })
        return c.json({
            message: "Post updated successfuly !", 
            res
        }, StatusCode.SUCCESS);
    } catch(e) {
        return c.json({
            message: "Internal server error ! Post not updated !"
        }, StatusCode.INTERNALSERVERERROR); 
    }
}

export const getPostById = async (c: Context) => {
    const prisma: PrismaClient = c.get("prisma");
    try {
        const postId: string = c.req.param("id");

        const res = await prisma.post.findFirst({
            where: {
                id: postId
            },
        })
        return c.json({
            res
        }, StatusCode.SUCCESS);
    } catch(e) {
        return c.json({
            message: "Internal server error !"
        }, StatusCode.INTERNALSERVERERROR); 
    }
}

export const getAllPost = async (c: Context) => {
    const prisma: PrismaClient = c.get("prisma");
    try {
        const res = await prisma.post.findMany({})
        return c.json({
            res
        }, StatusCode.SUCCESS);
    } catch(e) {
        return c.json({
            message: "Internal server error !"
        }, StatusCode.INTERNALSERVERERROR); 
    }
}