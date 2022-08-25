import { RequestHandler } from "express";

export const createBlog: RequestHandler = async(req, res) => {
    try {
        
    } catch (error: any) {
        res.json({success: false, error: error.message})
    }
}

export const getAllBlogs: RequestHandler = async(req, res) => {
    try {
        
    } catch (error: any) {
        res.json({success: false, error: error.message})
    }
}

export const getBlog: RequestHandler<{id: string}> = async(req, res) => {
    try {
        
    } catch (error: any) {
        res.json({success: false, error: error.message})
    }
}

export const updateBlog: RequestHandler<{id: string}> = async(req, res) => {
    try {
        
    } catch (error: any) {
        res.json({success: false, error: error.message})
    }
}


export const deleteBlog: RequestHandler<{id: string}> = async(req, res) => {
    try {
        
    } catch (error: any) {
        res.json({success: false, error: error.message})
    }
}