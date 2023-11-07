import { ProductServices } from "./services/product.services";
import { StoreServices } from "./services/store.services";

const storeServices = new StoreServices();

const productServices = new ProductServices();

async function exampleController() {
   const response = await productServices.create({
      name: "Computador",
      price: 2500,
      description: "Computador bonito",
      storeId: 6,
   });

   console.log(response);
}

// exampleController();
