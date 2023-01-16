import { Request, Response } from "express"
import { AuthBuyerUseCase } from "./AuthBuyerUseCase"  


export class AuthBuyerController{
    async handle(request: Request, response:Response) {
        const {username, password} = request.body
        const authBuyerUseCase = new AuthBuyerUseCase()


        const result = await authBuyerUseCase.execute({
            username,
            password
        })

        return response.json(result)
    }
}