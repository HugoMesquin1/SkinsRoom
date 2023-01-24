import {sign} from "jsonwebtoken"
import { compare } from "bcrypt"
import { prisma } from "../../../database/prismaClient"


interface IAuthBuyer {
    username: string,
    password: string
}


export class AuthBuyerUseCase { 
    async execute({username, password}: IAuthBuyer){

        const buyer = await prisma.buyer.findFirst({
            where:{
                username
            }
        })

        if(!buyer){
            throw new Error("Login ou senha incorretos")
        }

        const passwordMatch = await compare(password, buyer.password)

        if(!passwordMatch){
            throw new Error("Login ou senha incorretos")
        }

        const token = sign({username}, "51ac18eba35aecab762a32c8de0ab7f7", {
            subject: buyer.id,
            expiresIn: "2d"
        })

        return {token}
    }
}