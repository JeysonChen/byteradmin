/**
 * @file 数据请求api入口
 * @author
 */

import apiList from './url';
import apiFactory from './factory';

const Api = {};

// 按模块划分
for (let module in apiList) {
    Api[module] = {};
    // 循环模块中的每个接口
    for (let method in apiList[module]) {
        Api[module][method] = apiFactory(apiList[module][method]);
    }
}

export default Api;