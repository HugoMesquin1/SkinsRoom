import { Request, Response } from "express";
import { CreateBuyerUseCase } from "./createBuyerUseCase";


export class CreateBuyerController { 
    async handle(request: Request, response: Response) {
        const createBuyUseCase = new CreateBuyerUseCase()

        const {username, password} = request.body

        const result = await createBuyUseCase.execute({
            username,
            password
        })

        return response.json(result)
    }
}