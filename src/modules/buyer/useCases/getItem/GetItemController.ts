import { Request, Response } from "express";
import { GetItemUseCase } from "./GetItemUseCase";


export class GetItemController{
    async handle(request: Request, response: Response) {
        const {id} = request.params

        const GetItem = new GetItemUseCase()

        const GetItemInfo = await GetItem.execute(id)

        return response.json(GetItemInfo)

    }
}