/*
  We don't need to import this file anywhere. 
  It's automatically included by TypeScript.
  It tells it that anything imported that ends in .vue has the same shape of the Vue constructor itself.
*/
declare module "*.vue" {
    import Vue from 'vue'
    export default Vue
  }