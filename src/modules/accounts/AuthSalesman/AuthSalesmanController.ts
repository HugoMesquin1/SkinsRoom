import { Request, Response } from "express";
import { AuthSalesmanUseCase } from "./AuthSalesmanUseCase";


export class AuthSalesmanController {
    async handle(request: Request, response:Response){
        const {username, password} = request.body
        const authSalesmanUseCase = new AuthSalesmanUseCase()

        const result = await authSalesmanUseCase.execute({
            username,
            password
        })
        
        return response.json(result)
    }
}