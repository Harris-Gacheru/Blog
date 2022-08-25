import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controller/blog.controller'

const router = express.Router()

router.post('/create', createBlog)
router.get('/blogs', getAllBlogs)
router.get('/blogs/:id', getBlog)
router.patch('/blogs/:id', updateBlog)
router.delete('/blogs/:id', deleteBlog)

export default router