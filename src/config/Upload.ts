import multer = require ('multer')
import { prisma } from '../database/prismaClient'



const storage = multer.diskStorage({
    destination: function(request,file,cb){
        cb(null, 'uploads/')
    },
    filename: function(request, file, cb){
        cb(null, file.fieldname + '-' + Date.now())
    }
})

   export const upload = multer({storage: storage })

   export async function saveImageToDb(path: string) {
    const image = await prisma.file.create({
        data:{
            path,
        },
    })
    
    return image
}



