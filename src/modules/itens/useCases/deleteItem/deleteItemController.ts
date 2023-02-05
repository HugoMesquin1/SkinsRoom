import { Request, Response } from "express"
import { deleteItemUseCase } from "./deleteItemUseCase"

export class deleteItemController {
  async handle(request: Request, response: Response) {
    const { itemID } = request.body
    const { salesmanID } = request.body

    const deleteItem = new deleteItemUseCase()
    const itemDeleted = await deleteItem.execute(itemID, salesmanID)

    if (!itemID || !salesmanID) {
      return response.status(400).json({ error: "Missing parameters" })
    }

    return response.json(itemDeleted)
  }
}
