/*
  We don't need to import this file anywhere. 
  It's automatically included by TypeScript.
  It tells it that anything imported that ends in .vue has the same shape of the Vue constructor itself.
*/

//https://hackernoon.com/import-json-into-typescript-8d465beded79
declare module "*.json" {
    const value: any;
    export default value;
}  