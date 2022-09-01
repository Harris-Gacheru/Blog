import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controller/blog.controller'
import upload from '../utility/imageUpload'

const router = express.Router()

router.post('/create', upload.single('coverImage'), createBlog)
router.get('/', getAllBlogs)
router.get('/:id', getBlog)
router.patch('/:id', updateBlog)
router.delete('/:id', deleteBlog)

export default router