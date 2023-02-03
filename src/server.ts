import "express-async-errors"
import express, { Request, Response, NextFunction } from "express"
import { routes } from "./routes"

import swaggerUI from "swagger-ui-express"
import swaggerDocument from "../swagger.json"

const app = express()

app.use(express.json())

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.use(routes)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      })
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    })
  }
)

app.listen(3000, () => console.log("server ok"))
