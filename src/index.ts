import { ProductServices } from "./services/product.services";
import { StoreServices } from "./services/store.services";

const storeServices = new StoreServices();

const productServices = new ProductServices();

async function exampleController() {
   const response = await productServices.updateMany(6, { price: 4000 });
   console.log(response);
}

 exampleController();
