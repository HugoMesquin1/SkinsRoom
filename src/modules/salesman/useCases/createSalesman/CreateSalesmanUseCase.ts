import { prisma } from "../../../../database/prismaClient"
import {hash} from "bcrypt"

interface ICreateSalesman {
    username: string
    password: string
    contact: number
}


export class CreateSalesmanUseCase { 

    async execute({username, password, contact}: ICreateSalesman) {
        // Validar se o SalesmanUser já esta em uso
        const SalesmanExist = await prisma.salesman.findFirst({
            where: {
                username:{
                    equals: username,
                    mode: "insensitive",
                }
            }
        })
                    
        if(SalesmanExist) {
            throw new Error("Este usuário já esta em uso.")
        }
            
        // verificar se o telefone já existe
        const ContactExist = await prisma.salesman.findFirst({
            where: {
                contact:{
                    equals: String(contact),
                    mode: "insensitive"
                }
            }
        })

        if(ContactExist) {
            throw new Error ("Este telefone já está em uso.")
        }

        // Criptografar a senha
        const hashPassword = await hash(password, 10)

        // Salvar o vendedor
        const salesman = await prisma.salesman.create({
            data: {
                username,
                password: hashPassword,
                contact: String(contact)
            },
        })
        return salesman
    }
}

        





         