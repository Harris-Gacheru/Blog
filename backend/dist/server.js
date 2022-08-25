"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const blog_routes_1 = __importDefault(require("./routes/blog.routes"));
const app = (0, express_1.default)();
const PORT = 3500;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/blogs', blog_routes_1.default);
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
//# sourceMappingURL=server.js.map