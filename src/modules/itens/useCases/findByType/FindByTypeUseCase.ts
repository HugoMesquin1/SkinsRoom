import { prisma } from "../../../../database/prismaClient"

export class FindByTypeUseCase {
  async execute(type_skin: string) {
    const FindByType = await prisma.item.findMany({
      where: {
        type_skin: {
          equals: type_skin,
        },
      },
      select: {
        item_name: true,
        float_item: true,
        price: true,
        type_skin: true,
        id: true,
      },
    })

    return FindByType
  }
}
