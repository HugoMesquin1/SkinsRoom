import { FindByTypeUseCase } from "./FindByTypeUseCase"
import { Request, Response } from "express"

export class FindByTypeController {
  async handle(request: Request, response: Response) {
    const { type_skin } = request.params

    const findByTypeUseCase = new FindByTypeUseCase()

    const filter = await findByTypeUseCase.execute(type_skin)

    return response.json(filter)
  }
}
