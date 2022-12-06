"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDistance = void 0;
function calculateDistance(lat1, lat2, long1, long2) {
    // Calculation
    const earthRadius = 6371;
    const x = (long2 - long1) * Math.cos((lat1 + lat2) / 2);
    const y = (lat1 - lat2);
    const distance = (Math.sqrt(x * x + y * y) * earthRadius).toFixed();
    return distance;
}
exports.calculateDistance = calculateDistance;
//# sourceMappingURL=calculateDistance.js.map