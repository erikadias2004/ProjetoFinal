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
const express_1 = require("express");
const album_1 = require("../models/album");
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const albums = yield album_1.Album.findAll();
    res.render('albums', { albums });
}));
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = req.body;
    yield album_1.Album.create({ title });
    res.redirect('/albums');
}));
router.post('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield album_1.Album.destroy({ where: { id } });
    res.redirect('/albums');
}));
router.post('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title } = req.body;
    yield album_1.Album.update({ title }, { where: { id } });
    res.redirect('/albums');
}));
exports.default = router;
