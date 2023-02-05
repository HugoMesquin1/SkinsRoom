import { Request, Response } from "express"
import { GetItemUseCase } from "./GetItemUseCase"

export class GetItemController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const GetItem = new GetItemUseCase()

    const getItemInfo = await GetItem.execute(id)

    return response.json(getItemInfo)
  }
}
