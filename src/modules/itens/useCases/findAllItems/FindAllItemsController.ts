import { FindAllItemsUseCase } from "./FindAllItemsUseCase";
import { Request, Response } from "express";



export class FindAllItemsController{
    async handle(request: Request, response: Response) {
        const findAllItemsUseCase = new FindAllItemsUseCase()

        const available = await findAllItemsUseCase.execute()

        return response.json(available)
    }
}