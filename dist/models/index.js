"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const artista_1 = require("./artista");
const album_1 = require("./album");
const musicas_1 = require("./musicas");
const artistAlbum_1 = require("./artistAlbum");
const albumSom_1 = require("./albumSom");
const sequelize = new sequelize_typescript_1.Sequelize({
    database: "projetofinal",
    dialect: 'mysql',
    username: "root",
    password: "",
    models: [artista_1.Artista, album_1.Album, musicas_1.Song, artistAlbum_1.ArtistAlbum, albumSom_1.AlbumSong],
});
exports.sequelize = sequelize;
