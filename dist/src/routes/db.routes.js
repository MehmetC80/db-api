"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_dbRoutes_1 = require("../controllers/controller.dbRoutes");
const router = (0, express_1.Router)();
// router.get('/db', getAllRoutes);
router.get("/v1/distance/:from/:to", controller_dbRoutes_1.getDistance);
router.get("/search/:searchTerm", controller_dbRoutes_1.search);
exports.default = router;
//# sourceMappingURL=db.routes.js.map