"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
app.set('view engine', 'ejs'); // choice engine -> ejs
app.set('views', 'templates'); // contain views -> template
app.use('/assets', express_1.default.static(path_1.default.join("dist/frontend"))); // concat
app.use('/', express_1.default.static(path_1.default.join('public'))); // use content inside folder public
app.get('/board', (req, res) => {
    res.render('index', {});
});
app.get('/login', (req, res) => {
    res.render('login', {});
});
const port = 3001;
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(port, '<-server running---');
});
//# sourceMappingURL=index.js.map