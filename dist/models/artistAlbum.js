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
exports.ArtistAlbum = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const artista_1 = require("./artista");
const album_1 = require("./album");
let ArtistAlbum = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({
            timestamps: false,
            tableName: 'artista_album'
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _artistId_decorators;
    let _artistId_initializers = [];
    let _artistId_extraInitializers = [];
    let _albumId_decorators;
    let _albumId_initializers = [];
    let _albumId_extraInitializers = [];
    var ArtistAlbum = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.artistId = __runInitializers(this, _artistId_initializers, void 0);
            this.albumId = (__runInitializers(this, _artistId_extraInitializers), __runInitializers(this, _albumId_initializers, void 0));
            __runInitializers(this, _albumId_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "ArtistAlbum");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _artistId_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => artista_1.Artista), (0, sequelize_typescript_1.Column)({
                type: 'number'
            })];
        _albumId_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => album_1.Album), (0, sequelize_typescript_1.Column)({
                type: 'number'
            })];
        __esDecorate(null, null, _artistId_decorators, { kind: "field", name: "artistId", static: false, private: false, access: { has: obj => "artistId" in obj, get: obj => obj.artistId, set: (obj, value) => { obj.artistId = value; } }, metadata: _metadata }, _artistId_initializers, _artistId_extraInitializers);
        __esDecorate(null, null, _albumId_decorators, { kind: "field", name: "albumId", static: false, private: false, access: { has: obj => "albumId" in obj, get: obj => obj.albumId, set: (obj, value) => { obj.albumId = value; } }, metadata: _metadata }, _albumId_initializers, _albumId_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ArtistAlbum = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ArtistAlbum = _classThis;
})();
exports.ArtistAlbum = ArtistAlbum;
