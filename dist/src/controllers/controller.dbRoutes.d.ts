import { Request, Response } from 'express';
export declare const getAllRoutes: (req: Request, res: Response) => Promise<void>;
export declare const search: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getDistance: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
