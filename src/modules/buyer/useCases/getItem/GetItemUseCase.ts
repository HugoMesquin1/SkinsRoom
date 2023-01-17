import { prisma } from "../../../../database/prismaClient"




export class GetItemUseCase {
    async execute(id: string){
        const GetInfo = await prisma.item.findFirst({
            where:{
                id: id
            },
            
            include:{
                salesman: {
                    select: {
                        username: true,
                        contact: true
                        
                    }
                }
            }
        })
        return GetInfo
    }}