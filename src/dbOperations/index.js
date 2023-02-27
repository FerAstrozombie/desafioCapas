import { MongoContainer } from "./managers/mongo.manager.js";
import { ProductModel } from "./dbModels/products.model.js"

export const ProductManager = new MongoContainer(ProductModel);