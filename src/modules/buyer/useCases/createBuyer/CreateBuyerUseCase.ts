import { prisma } from "../../../../database/prismaClient"
import {hash} from "bcrypt"

interface ICreateBuyerUseCase{
    username: string
    password: string
}


export class CreateBuyerUseCase{
    async execute({username, password}: ICreateBuyerUseCase) {
        const BuyerAlreadyExist = await prisma.buyer.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: "insensitive"
                }
            }
            
            
            
        })
        
        if (BuyerAlreadyExist){
            throw new Error ( "Este usuário ou email já esta em uso" )
        }


        const hashPassword = await hash(password, 10)


        const buyer = await prisma.buyer.create({
            data:{
                username,
                password: hashPassword
            }
        })

        return (buyer)
    }
}