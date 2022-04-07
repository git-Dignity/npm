/*
 * @Author: zemin zheng
 * @Date: 2021-08-19 12:56:38
 * @LastEditTime: 2021-09-15 14:31:57
 * @LastEditors: Please set LastEditors
 * @Description: 缓存类入口
 * @FilePath: \npm\src\Storage\index.js
 */
import Storage from './Storage' // 浏览器存储相关storage工具函数
import LRUCache from './LRUCache'   // LRU缓存函数

export {
    Storage,
    LRUCache
}