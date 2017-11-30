//类装饰器的参数是类的构造函数
/*
 * 方法装饰器 参数
        target 对于静态成员来说是类的构造函数,对于实例成员是类的原型对象
        propertyKey 成员的名字  这里是method
        descriptor 成员的属性描述符
 如果方法装饰器返回一个值 ,它会被用作方法的塑形描述符
 */

export function log(target: any, key:string, descriptor:any){
    //console.log(target);
    console.log(key);
    console.log(descriptor.value);
}


