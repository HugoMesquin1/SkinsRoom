import { prisma } from "../../../../database/prismaClient"

export class FindAllItemsUseCase {
  async execute() {
    const items = await prisma.item.findMany({
      where: {},
      select: {
        item_name: true,
        type_skin: true,
        float_item: true,
        price: true,
      },
    })

    return items
  }
}
