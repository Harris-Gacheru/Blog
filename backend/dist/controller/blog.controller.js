"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.updateBlog = exports.getBlog = exports.getAllBlogs = exports.createBlog = void 0;
const uuid_1 = require("uuid");
const mssql_1 = __importDefault(require("mssql"));
const sqlconfig_1 = __importDefault(require("../config/sqlconfig"));
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = (0, uuid_1.v1)();
        const { title, body } = req.body;
        const image = (_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname;
        let pool = yield mssql_1.default.connect(sqlconfig_1.default);
        yield pool.request()
            .input('id', mssql_1.default.VarChar, id)
            .input('title', mssql_1.default.VarChar, title)
            .input('body', mssql_1.default.VarChar, body)
            .input('coverImage', mssql_1.default.VarChar, image)
            .execute('createBlog');
        res.status(200).json({ success: true, message: 'Blog created successfully' });
    }
    catch (error) {
        res.json({ success: false, error: error.message });
    }
});
exports.createBlog = createBlog;
const getAllBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssql_1.default.connect(sqlconfig_1.default);
        const blogs = yield pool.request().execute('getAllBlogs');
        if (blogs.recordset.length !== 0) {
            return res.status(200).json({ success: true, message: `${blogs.recordset.length} blog(s) available`, blogs: blogs.recordset });
        }
        res.status(200).json({ success: false, message: 'No blogs available' });
    }
    catch (error) {
        res.json({ success: false, error: error.message });
    }
});
exports.getAllBlogs = getAllBlogs;
const getBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        let pool = yield mssql_1.default.connect(sqlconfig_1.default);
        const blog = yield pool.request()
            .input('id', mssql_1.default.VarChar, id)
            .execute('getBlog');
        if (blog.recordset[0]) {
            return res.status(200).json({ success: true, message: 'Blog available', blog: blog.recordset[0] });
        }
        res.status(400).json({ success: false, message: `Blog:[${id}] does not exist` });
    }
    catch (error) {
        res.json({ success: false, error: error.message });
    }
});
exports.getBlog = getBlog;
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { title, body } = req.body;
        let pool = yield mssql_1.default.connect(sqlconfig_1.default);
        const blog = yield pool.request()
            .input('id', mssql_1.default.VarChar, id)
            .execute('getBlog');
        if (blog.recordset[0]) {
            yield pool.request()
                .input('id', mssql_1.default.VarChar, id)
                .input('title', mssql_1.default.VarChar, title)
                .input('body', mssql_1.default.VarChar, body)
                .execute('updateBlog');
            return res.status(200).json({ success: true, message: 'Updated successfully' });
        }
        res.status(400).json({ success: false, message: `Blog: [${id}] does not exist` });
    }
    catch (error) {
        res.json({ success: false, error: error.message });
    }
});
exports.updateBlog = updateBlog;
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        let pool = yield mssql_1.default.connect(sqlconfig_1.default);
        const blog = yield pool.request()
            .input('id', mssql_1.default.VarChar, id)
            .execute('getBlog');
        if (blog.recordset[0]) {
            yield pool.request()
                .input('id', mssql_1.default.VarChar, id)
                .execute('deleteBlog');
            return res.status(200).json({ success: true, message: 'Deleted successfully' });
        }
        res.status(400).json({ success: false, message: `Blog: [${id}] does not exist` });
    }
    catch (error) {
        res.json({ success: false, error: error.message });
    }
});
exports.deleteBlog = deleteBlog;
//# sourceMappingURL=blog.controller.js.map