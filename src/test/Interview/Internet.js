/*
 * @Author: zemin zheng
 * @Date: 2022-04-12 10:01:42
 * @LastEditTime: 2022-04-12 10:03:13
 * @LastEditors: zemin zheng
 * @Description: 面试 -- 网络类 -- 测试文件
 * @FilePath: \npm\src\test\Interview\Internet.js
 */
 
import { Internet } from "../../Interview"

export default (isLog) => {
  if (!isLog) {
    return
  }

  let internet = new Internet()
  internet.start()
  
  const middlewares = [];

middlewares.push(async function (ctx, next) {
  console.log("1");
  await next();
  console.log("6");
});

middlewares.push(async function (ctx, next) {
  console.log("2");
  await next();
  console.log("5");
});

middlewares.push(async function (ctx, next) {
  console.log("3");
  await next();
  console.log("4");
});

async function run() {
    const middleware = middlewares.shift();
    await (middleware && middleware({}, run));
  }

run(); // expect output: 1 2 3 4 5 6




  internet.end()
}
