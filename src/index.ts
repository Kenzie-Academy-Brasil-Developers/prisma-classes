import { StoreServices } from "./services/store.services";

const storeServices = new StoreServices();

async function exampleController(){
    const response = await storeServices.createMany(["Otavio Store", "Osvaldo Store"]);

    console.log(response);
}

exampleController();
