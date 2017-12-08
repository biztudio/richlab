//https://oyyd.gitbooks.io/typescript-handbook-zh/content/gitbook/writing_.d.ts_files.html
//TS 玩的顺溜不顺溜，就看你的 d.ts 文件写的溜不溜。
//所有 d.ts 文件里面声明，都需要加上 declare ，d.ts 只能声明，不能有任何默认值。

export declare class MyDtm {
        code:number
        name:string   
        constructor() 
        DtmInfo():any
    }
