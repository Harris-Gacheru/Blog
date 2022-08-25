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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.updateBlog = exports.getBlog = exports.getAllBlogs = void 0;
const getAllBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        res.json({ success: false, error: error.message });
    }
});
exports.getAllBlogs = getAllBlogs;
const getBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        res.json({ success: false, error: error.message });
    }
});
exports.getBlog = getBlog;
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        res.json({ success: false, error: error.message });
    }
});
exports.updateBlog = updateBlog;
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        res.json({ success: false, error: error.message });
    }
});
exports.deleteBlog = deleteBlog;
//# sourceMappingURL=blog.js.map