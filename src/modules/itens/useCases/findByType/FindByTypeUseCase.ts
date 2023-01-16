import { prisma } from "../../../../database/prismaClient"

interface IRequest{
    type_skin?: String
  }


export class FindByTypeUseCase {
    async execute(type_skin: string) {
        const FindByType = await prisma.item.findMany({
            where: {
                type_skin: type_skin
            }
        });
        return FindByType
    }
}

    


