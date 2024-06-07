"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const artista_1 = require("./artista");
const som_1 = require("./som");
const artistAlbum_1 = require("./artistAlbum");
const albumSom_1 = require("./albumSom");
let Album = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({
            timestamps: true,
            tableName: 'albums'
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _title_decorators;
    let _title_initializers = [];
    let _title_extraInitializers = [];
    let _artists_decorators;
    let _artists_initializers = [];
    let _artists_extraInitializers = [];
    let _songs_decorators;
    let _songs_initializers = [];
    let _songs_extraInitializers = [];
    var Album = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.title = __runInitializers(this, _title_initializers, void 0);
            this.artists = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _artists_initializers, void 0));
            this.songs = (__runInitializers(this, _artists_extraInitializers), __runInitializers(this, _songs_initializers, void 0));
            __runInitializers(this, _songs_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Album");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _title_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false,
            })];
        _artists_decorators = [(0, sequelize_typescript_1.BelongsToMany)(() => artista_1.Artista, () => artistAlbum_1.ArtistAlbum)];
        _songs_decorators = [(0, sequelize_typescript_1.BelongsToMany)(() => som_1.Song, () => albumSom_1.AlbumSong)];
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _artists_decorators, { kind: "field", name: "artists", static: false, private: false, access: { has: obj => "artists" in obj, get: obj => obj.artists, set: (obj, value) => { obj.artists = value; } }, metadata: _metadata }, _artists_initializers, _artists_extraInitializers);
        __esDecorate(null, null, _songs_decorators, { kind: "field", name: "songs", static: false, private: false, access: { has: obj => "songs" in obj, get: obj => obj.songs, set: (obj, value) => { obj.songs = value; } }, metadata: _metadata }, _songs_initializers, _songs_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Album = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Album = _classThis;
})();
exports.Album = Album;
