import { IProduct } from "./products.interface";

/*
model Store{
  id Int @id @default(autoincrement())
  name String 
  products Product[]
}
*/

export interface IStore{
    id: number;
    name: string;
    products?: IProduct[]
}

export type TUpdateStoreBody = Partial<Pick<IStore, 'name'>>; 