import { Router } from "express";
import { EnsureAutheticateClient } from "./middlewares/ensureAutheticateClient";
import { AuthBuyerController } from "./modules/accounts/AuthBuyer/AuthBuyerController";
import { AuthSalesmanController } from "./modules/accounts/AuthSalesman/AuthSalesmanController";
import { CreateBuyerController } from "./modules/buyer/useCases/createBuyer/createBuyerController";
import { CreateItemController } from "./modules/itens/useCases/createItem/CreateItemController";
import { CreateSalesmanController } from "./modules/salesman/useCases/createSalesman/CreateSalesmanController"
import { FindAllItemsController } from "./modules/itens/useCases/findAllItems/FindAllItemsController";
import { FindByTypeController } from "./modules/itens/useCases/findByType/FindByTypeController";

const routes = Router()

const createSalesmanController = new CreateSalesmanController()
const createBuyerController = new CreateBuyerController()

const authSalesmanController = new AuthSalesmanController()
const authBuyerController = new AuthBuyerController()

const createItemController = new CreateItemController()

const findAll = new FindAllItemsController()

const findBy = new FindByTypeController()


routes.post("/salesman/", createSalesmanController.handle)
routes.post("/buyer/", createBuyerController.handle)



routes.post("/authsalesman", authSalesmanController.handle)
routes.post("/authbuyer", authBuyerController.handle)


routes.post("/sellskin", EnsureAutheticateClient, createItemController.handle )

routes.get("/findall", EnsureAutheticateClient, findAll.handle )
routes.get("/finditem/:type_skin", findBy.handle )






export {routes}