"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_dbRoutes_1 = require("../controllers/controller.dbRoutes");
const router = (0, express_1.Router)();
router.get('/db', controller_dbRoutes_1.getAllRoutes);
exports.default = router;
//# sourceMappingURL=db.routes.js.map