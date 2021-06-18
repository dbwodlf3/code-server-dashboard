/**
*/
import { Request, Response } from 'express'

export interface DBError {
    name: string;
    fatal: boolean;
    errno: number;
    sqlState: string;
    code: string;
}

export interface ViewFunction{
    (req: Request, res:Response): any;
};

export interface ControlFunction{
    (req: Request, res:Response): ControlResult;
}

export interface ControlResult{
    "fail": boolean;
    "msg"?: string;
    "data"?: any;
    "errno"?: number;
}

export interface Middleware{
    (req: Request, res:Response, next:{():any}): any;
}

export interface User{
    "id": number // exactly, unsigned int. database internal primary key.
    "username": string // username. it is used to login by user.
    "userEmail": string
    "password": string // encrpyted password.
    "activation": boolean
    "joinDate": Date
    "type": number
    "phone": string
};

// Helpers
export interface User{
    "id": number // exactly, unsigned int. database internal primary key.
    "username": string // username. it is used to login by user.
    "userEmail": string
    "password": string // encrpyted password.
    "activation": boolean
    "joinDate": Date
    "type": number
    "phone": string
};

export interface UserUpdateFields {
    userEmail?: string;
    phone?: string;
    type?: number;
}

type customUser = User;

declare global {
    namespace Express {
        export interface User extends customUser {
        }
    }
}