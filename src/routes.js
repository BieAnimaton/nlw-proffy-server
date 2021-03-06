"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ClassesController_1 = __importDefault(require("./controllers/ClassesController"));
const ConnectionController_1 = __importDefault(require("./controllers/ConnectionController"));
const routes = express_1.default.Router();
const classesController = new ClassesController_1.default();
const connectionsController = new ConnectionController_1.default();
routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);
routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);
exports.default = routes;
