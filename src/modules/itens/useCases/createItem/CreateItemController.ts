import {CreateItemUseCase} from "./CreateItemUseCase"
import { Request, Response } from "express"

export class CreateItemController {
    
    async handle(request:Request, response: Response) {
        const {item_name,float_item, price, type_skin} = request.body
        const {id_salesman} = request
        const createItemUseCase = new CreateItemUseCase()

        const skin = await createItemUseCase.execute({
            item_name,
            id_salesman,
            float_item,
            price,
            type_skin,
        })

        return response.json(skin)


    }
}