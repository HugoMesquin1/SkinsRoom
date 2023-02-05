import { prisma } from "../../../../database/prismaClient"

export class deleteItemUseCase {
  async execute(itemID: string, salesmanID: string) {
    const foundItem = await prisma.item.findFirst({
      where: {
        id: itemID,
        salesman: {
          id: salesmanID,
        },
      },
      include: {
        salesman: {
          select: {
            id: true,
          },
        },
      },
    })

    if (!foundItem || !foundItem.salesman) {
      throw new Error("Unable to delete this item.")
    }

    if (foundItem.salesman?.id?.toString() !== salesmanID?.toString()) {
      throw new Error("You are not authorized to delete this item.")
    }

    await prisma.item.delete({
      where: {
        id: itemID,
      },
    })

    return "Item deleted sucessfully"
  }
}
