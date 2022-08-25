import { RequestHandler } from "express";
import { v1 as uuid } from 'uuid';
import mssql from 'mssql';
import sqlConfig from "../config/sqlconfig";

export const createBlog: RequestHandler = async(req, res) => {
    try {
        const id = uuid()
        const { title, body } = req.body as { title: string, body: string }

        let pool = await mssql.connect(sqlConfig)
        await pool.request()
        .input('id', mssql.VarChar, id)
        .input('title', mssql.VarChar, title)
        .input('body', mssql.VarChar, body)
        .execute('createBlog')
        
        res.status(200).json({success: true, message: 'BLog created successfully'})
    } catch (error: any) {
        res.json({success: false, error: error.message})
    }
}

export const getAllBlogs: RequestHandler = async(req, res) => {
    try {
        let pool = await mssql.connect(sqlConfig)
        const blogs = await pool.request().execute('getAllBlogs')
        
        if (blogs.recordset) {
            return res.status(200).json({success: true, message: `${blogs.recordset.length} blog(s) available`, blogs: blogs.recordset})
        }

        res.status(400).json({success: true, message: 'No blogs available'})
    } catch (error: any) {
        res.json({success: false, error: error.message})
    }
}

export const getBlog: RequestHandler<{id: string}> = async(req, res) => {
    try {
        const id = req.params.id
        
        let pool = await mssql.connect(sqlConfig)
        const blog = await pool.request()
        .input('id', mssql.VarChar, id)
        .execute('getBlog')

        if (blog.recordset[0]) {
            return res.status(200).json({success: true, message: 'Blog available', blog: blog.recordset[0]})
        }

        res.status(400).json({success: false, message: `Blog:[${id}] does not exist`})
    } catch (error: any) {
        res.json({success: false, error: error.message})
    }
}

export const updateBlog: RequestHandler<{id: string}> = async(req, res) => {
    try {
        const id = req.params.id
        const { title, body } = req.body as { title: string, body: string }
        
        let pool = await mssql.connect(sqlConfig)
        const blog = await pool.request()
        .input('id', mssql.VarChar, id)
        .execute('getBlog')

        if(blog.recordset[0]){
            await pool.request()
            .input('id', mssql.VarChar, id)
            .input('title', mssql.VarChar, title)
            .input('body', mssql.VarChar, body)
            .execute('updateBlog')

            return res.status(200).json({success: true, message: 'Updated successfully'})
        }
        res.status(400).json({success: false, message: `Blog: [${id}] does not exist`})
    } catch (error: any) {
        res.json({success: false, error: error.message})
    }
}


export const deleteBlog: RequestHandler<{id: string}> = async(req, res) => {
    try {
        const id = req.params.id

        let pool = await mssql.connect(sqlConfig)
        const blog = await pool.request()
        .input('id', mssql.VarChar, id)
        .execute('getBlog')

        if(blog.recordset[0]){
            await pool.request()
            .input('id', mssql.VarChar, id)
            .execute('deleteBlog')

            return res.status(200).json({success: true, message: 'Deleted successfully'})
        }

        res.status(400).json({success: false, message: `Blog: [${id}] does not exist`})
    } catch (error: any) {
        res.json({success: false, error: error.message})
    }
}