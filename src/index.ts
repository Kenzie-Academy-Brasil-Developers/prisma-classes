import { ProductServices } from "./services/product.services";
import { StoreServices } from "./services/store.services";

const storeServices = new StoreServices();

const productServices = new ProductServices();

async function exampleController() {
   const response = await storeServices.deleteMany("Osvaldo Store");
   console.log(response);
}

 exampleController();
