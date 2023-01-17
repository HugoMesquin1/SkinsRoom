import { prisma } from "../../../../database/prismaClient"




export class GetItemUseCase {
    async execute(id: string){
        const GetInfo = await prisma.item.findUnique({
          
            where:{
                id: id,
            },
            
            
            
            
            
            include:{
                salesman: {
                },
                
                    
                
            }
        })

        const ItemConfirmation = {
            
            type_skin: GetInfo?.item_name,
            item_name: GetInfo?.item_name,
            price: GetInfo?.price,
            float_item: GetInfo?.float_item,


        }

        const ContactSeller = {
            username: GetInfo?.salesman?.username,
            contact: GetInfo?.salesman?.contact
        }
            
            


            
        return {ItemConfirmation, ContactSeller}
    }}