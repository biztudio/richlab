import { Tree } from "element-ui";

//类装饰器的参数是类的构造函数
/*
 * 方法装饰器 参数
        target 对于静态成员来说是类的构造函数,对于实例成员是类的原型对象
        key 成员的名字  这里是method
        descriptor 成员的属性描述符
 如果方法装饰器返回一个值 ,它会被用作方法的塑形描述符
 */

 /*
 装饰器根据实现可以分两种：
 Case 1: 
 不带括号，和属性一样，如 @Testable;
 
 Case 2: 
 带括号的，和函数一样，如 @Log('controller')，实现函数里的参数就是括号里的参数，而且需要返回一个function
 */

//Case 1 Example 1: 类装饰器 -- (target: Function) 是类装饰器参数，指向的是类的构造函数
export function ModelMonitorAttribute(target:Function){// 类、方法、属性、方法参数的参数各不相同
    console.log('This is a class decorator: ModelMonitor');
    console.log(target);
}

//Case 1 Example 2: 
export function MethodLogAttribute(target: any, key:string, descriptor:any){
    console.log('This is a method decorator: MethodLog');
    //console.log(target);
    console.log(key);
    console.log(descriptor.value);
}

//Case 2 Example 1:
export function FlagAttribute(flag_message:string){//装饰器工厂

    //装饰器定义
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){// 类、方法、属性、方法参数的参数各不相同
        // do something with "target" and "flag_message"...
        console.log(flag_message);
        console.log(target);
        console.log('function: ' + propertyKey);
        console.log(descriptor);
    }
}