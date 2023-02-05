import { Router } from "express"
import { EnsureAutheticateSalesman } from "./middlewares/EnsureAutheticateSalesman"
import { AuthBuyerController } from "./modules/accounts/AuthBuyer/AuthBuyerController"
import { AuthSalesmanController } from "./modules/accounts/AuthSalesman/AuthSalesmanController"
import { CreateBuyerController } from "./modules/buyer/useCases/createBuyer/createBuyerController"
import { CreateItemController } from "./modules/itens/useCases/createItem/CreateItemController"
import { CreateSalesmanController } from "./modules/salesman/useCases/createSalesman/CreateSalesmanController"
import { FindAllItemsController } from "./modules/itens/useCases/findAllItems/FindAllItemsController"
import { FindByTypeController } from "./modules/itens/useCases/findByType/FindByTypeController"
import { GetItemController } from "./modules/buyer/useCases/getItem/GetItemController"
import { deleteItemController } from "./modules/itens/useCases/deleteItem/deleteItemController"

const routes = Router()

const createSalesmanController = new CreateSalesmanController()
const createBuyerController = new CreateBuyerController()

const authSalesmanController = new AuthSalesmanController()
const authBuyerController = new AuthBuyerController()

const createItemController = new CreateItemController()
const deleteItem = new deleteItemController()

const findAll = new FindAllItemsController()

const findBy = new FindByTypeController()

const getItem = new GetItemController()

routes.post("/salesman/create", createSalesmanController.handle)
routes.post("/buyer/create", createBuyerController.handle)

routes.post("/authsalesman", authSalesmanController.handle)
routes.post("/authbuyer", authBuyerController.handle)

routes.post("/sellskin", EnsureAutheticateSalesman, createItemController.handle)

routes.get("/findall", findAll.handle)
routes.get("/finditem/:type_skin", findBy.handle)
routes.get("/salesmaninfo/:id", getItem.handle)

routes.delete("/delete", deleteItem.handle)

export { routes }
