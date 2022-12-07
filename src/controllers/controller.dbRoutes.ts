import { Request, Response } from 'express';
import { data } from "../utils/data";
import { calculateDistance } from "../utils/calculateDistance"
import { Deg2Rad } from '../utils/deg2rad';



// get all posts
export const getAllRoutes = async (req: Request, res: Response) => {
    try {
        res.status(200).json(data);
    } catch (err) {
        res.status(400).send("Data error")
    }

};


export const search = async (req: Request, res: Response) => {

    try {

        const { searchTerm } = req.params

        const obj = data.filter(item => item.NAME.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

        // console.log(obj)
        // const name = obj.map(item => item.NAME)[0]


        return res.status(200).json(obj)
    } catch (err) {
        res.status(400).send(err)
    }



}




export const getDistance = async (req: Request, res: Response) => {

    try {
        const { from, to } = req.params

        //Vaidation

        if (!from || !to) {
            return res.status(401).send("origin and destination have to")
        }


        const obj1 = data.filter(item => {
            return item.DS100 === from

        })


        const obj2 = data.filter(item => {
            return item.DS100 === to

        })


        // get name from originLocation
        const originLocationName = obj1.map(item => item.NAME)[0];

        // get name from destinationLocation
        const destinationLocationName = obj2.map(item => item.NAME)[0];


        //get lat from originLocation 
        const latOrigin = obj1.map(item => item.Breite)[0];

        const latOriginInRad = Deg2Rad(latOrigin)

        //get long from originLocation in string format  
        const longOrigin = obj1.map(item => item.Laenge)[0]

        // get lat origin in number fromat and transform in radian 
        const longOriginInRad = Deg2Rad(longOrigin);


        //get lat from destinationLocation 
        const latDestination = obj2.map(p => p.Breite)[0];

        //get lat from destination location in number fromat and transform it in radian 
        const latDestinationInRad = Deg2Rad(latDestination);

        //get long from originLocation 
        const longDestination = obj2.map(item => item.Laenge)[0];

        // get long from destination in number format and transform in radian 
        const longDestinationInRad = Deg2Rad(longDestination);

        // calculate the distance
        const distance = calculateDistance(latOriginInRad, latDestinationInRad, longOriginInRad, longDestinationInRad)


        return res.status(200).json({
            from: originLocationName,
            to: destinationLocationName,
            distance: distance,
            unit: "Km"
        })

    } catch (err) {
        res.status(500).send(err)
    }


}