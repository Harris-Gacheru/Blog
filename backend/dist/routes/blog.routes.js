"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("../controller/blog.controller");
const router = express_1.default.Router();
router.post('/create', blog_controller_1.createBlog);
router.get('/', blog_controller_1.getAllBlogs);
router.get('/:id', blog_controller_1.getBlog);
router.patch('/:id', blog_controller_1.updateBlog);
router.delete('/:id', blog_controller_1.deleteBlog);
exports.default = router;
//# sourceMappingURL=blog.routes.js.map