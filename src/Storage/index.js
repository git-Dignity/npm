/*
 * @Author: zemin zheng
 * @Date: 2021-08-19 12:56:38
 * @LastEditTime: 2022-04-13 15:07:37
 * @LastEditors: zemin zheng
 * @Description: 缓存类入口
 * @FilePath: \npm\src\Storage\index.js
 */
import Storage from './Storage' // 浏览器存储相关storage工具函数
import LRUCache from './LRUCache'   // LRU缓存函数
import Localstorage1M from './Localstorage1M'   // 基于 Localstorage 设计一个 1M 的缓存系统，需要实现缓存淘汰机制

export {
    Storage,
    LRUCache,
    Localstorage1M
}