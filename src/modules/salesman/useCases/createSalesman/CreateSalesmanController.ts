import { Request, Response } from "express"
import { CreateSalesmanUseCase } from "./CreateSalesmanUseCase"

export class CreateSalesmanController {
    async handle(request: Request, response: Response) {
        const createSalesmanUseCase = new CreateSalesmanUseCase()

        const {username, password, contact} = request.body

        const result = await createSalesmanUseCase.execute({
            username,
            password,
            contact
        })

        return response.json(result)
    }
}