


export function calculateDistance(lat1: number, lat2: number, long1: number, long2: number) {


    // Calculation
    const earthRadius = 6371;
    const x = (long2 - long1) * Math.cos((lat1 + lat2) / 2)
    const y = (lat1 - lat2);
    const distance = (Math.sqrt(x * x + y * y) * earthRadius).toFixed()

    return distance;
}