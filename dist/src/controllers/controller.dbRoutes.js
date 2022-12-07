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
exports.getDistance = exports.search = exports.getAllRoutes = void 0;
const data_1 = require("../utils/data");
const calculateDistance_1 = require("../utils/calculateDistance");
const deg2rad_1 = require("../utils/deg2rad");
// get all posts
const getAllRoutes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json(data_1.data);
    }
    catch (err) {
        res.status(400).send("Data error");
    }
});
exports.getAllRoutes = getAllRoutes;
const search = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.params;
        const obj = data_1.data.filter(item => item.NAME.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
        // console.log(obj)
        // const name = obj.map(item => item.NAME)[0]
        return res.status(200).json(obj);
    }
    catch (err) {
        res.status(400).send(err);
    }
});
exports.search = search;
const getDistance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { from, to } = req.params;
        //Vaidation
        if (!from || !to) {
            return res.status(401).send("origin and destination have to");
        }
        const obj1 = data_1.data.filter(item => {
            return item.DS100 === from;
        });
        const obj2 = data_1.data.filter(item => {
            return item.DS100 === to;
        });
        // get name from originLocation
        const originLocationName = obj1.map(item => item.NAME)[0];
        // get name from destinationLocation
        const destinationLocationName = obj2.map(item => item.NAME)[0];
        //get lat from originLocation 
        const latOrigin = obj1.map(item => item.Breite)[0];
        const latOriginInRad = (0, deg2rad_1.Deg2Rad)(latOrigin);
        //get long from originLocation in string format  
        const longOrigin = obj1.map(item => item.Laenge)[0];
        // get lat origin in number fromat and transform in radian 
        const longOriginInRad = (0, deg2rad_1.Deg2Rad)(longOrigin);
        //get lat from destinationLocation 
        const latDestination = obj2.map(p => p.Breite)[0];
        //get lat from destination location in number fromat and transform it in radian 
        const latDestinationInRad = (0, deg2rad_1.Deg2Rad)(latDestination);
        //get long from originLocation 
        const longDestination = obj2.map(item => item.Laenge)[0];
        // get long from destination in number format and transform in radian 
        const longDestinationInRad = (0, deg2rad_1.Deg2Rad)(longDestination);
        // calculate the distance
        const distance = (0, calculateDistance_1.calculateDistance)(latOriginInRad, latDestinationInRad, longOriginInRad, longDestinationInRad);
        return res.status(200).json({
            from: originLocationName,
            to: destinationLocationName,
            distance: distance,
            unit: "Km"
        });
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.getDistance = getDistance;
//# sourceMappingURL=controller.dbRoutes.js.map