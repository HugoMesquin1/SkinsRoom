import {prisma} from "../../../../database/prismaClient"


interface ICreateSkin{
    item_name: string,
    id_salesman: string,
    type_skin: string,
    float_item: string,
    price: string,
    
}

export class CreateItemUseCase {
    async execute({item_name, id_salesman, type_skin, float_item,price, }: ICreateSkin) {
        const skin = await prisma.item.create({
            data:{
                item_name,
                id_salesman,
                type_skin,
                float_item,
                price
            }
        })

        return {skin}

    }
}