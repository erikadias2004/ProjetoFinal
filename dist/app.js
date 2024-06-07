"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const models_1 = require("./models");
const artistsRoutes_1 = __importDefault(require("./routes/artistsRoutes"));
const albumRoutes_1 = __importDefault(require("./routes/albumRoutes"));
const songRoutes_1 = __importDefault(require("./routes/songRoutes"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('public'));
app.use('/artists', artistsRoutes_1.default);
app.use('/albums', albumRoutes_1.default);
app.use('/songs', songRoutes_1.default);
models_1.sequelize.sync().then(() => {
    console.log('Database conectado com sucesso!');
});
exports.default = app;
