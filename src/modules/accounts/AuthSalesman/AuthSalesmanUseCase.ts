import { prisma } from "../../../database/prismaClient"
import { compare } from "bcrypt"
import { sign } from 'jsonwebtoken'

interface IAuthenticateSalesman {
    username: string
    password: string
}


export class AuthSalesmanUseCase {
    async execute({username, password}: IAuthenticateSalesman) {
        // receber dados do salesman


        // verificar se ta tudo cadastrado

        const salesman = await prisma.salesman.findFirst({
            where: {
                username
            }
        })

        if(!salesman) {
            throw new Error("Login de vendedor ou senha incorreta.")
        }

        // senha não corresponde

        const passwordMatch = await compare(password, salesman.password)

        if(!passwordMatch){
            throw new Error ("Login de vendedor ou senha incorreta.")
        }
        

        // gerar token

        const token = sign({username}, "51ac18eba35aecab762a32c8de0ab7f6", {
            subject: salesman.id,
            expiresIn: "2d"
        })

        return token
    }
}