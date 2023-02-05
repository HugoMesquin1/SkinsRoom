import { prisma } from "../../../../database/prismaClient"

export class GetItemUseCase {
  async execute(id: string) {
    const GetInfo = await prisma.item.findFirst({
      where: {
        id: id,
      },

      include: {
        salesman: {},
      },
    })

    if (!GetInfo) {
      throw new Error("Item not found")
    }

    const { type_skin, item_name, price, float_item } = GetInfo
    const ItemConfirmation = { type_skin, item_name, price, float_item }

    const ContactSeller = {
      username: GetInfo.salesman?.username,
      contact: GetInfo.salesman?.contact,
    }

    return { ItemConfirmation, ContactSeller }
  }
}
