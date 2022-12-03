"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db_routes_1 = __importDefault(require("./routes/db.routes"));
const app = (0, express_1.default)();
const port = process.env.PORT;
//middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// const postRouter = require('./routes/post.routes');
app.get('/', (req, res) => {
    res.send('Hallo das ist die erste Nachicht');
});
//Routes
//user routes
//post routes
app.use('/api', db_routes_1.default);
app.listen(port, () => {
    console.log(`server läuft auf http://localhost:${port} !!!`);
});
//# sourceMappingURL=index.js.map