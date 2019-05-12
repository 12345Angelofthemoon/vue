//导出一个东西
export let a=12;
// export const a=5;



//导出一堆东西
let name='blue';
let age=18;

export {name, age};


//导出函数
export function show(){
  return 12;
}

export class Person{
  constructor(){

  }
}



//导出默认成员
export default {
  a: 12,
  b: 5
};
