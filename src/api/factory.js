import axios from 'axios';
import store from '@/store';
// import {DetaAdapter} from 'api-adapt';
// import {prefix} from './prefix';
// import {EventBus} from '../event/custom-event';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config, 'config');
  if (config.url !== '/api/admin/login') {
      config.headers.authorization = localStorage.token;
  }
  config.headers.isajax = true;
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log(response.status, 'response')

  return response;
}, function (error) {
  // 对响应错误做点什么
  console.log(error.response, '6zheshixiang')
  console.log(error.response.status, '6zheshixiang');
  // http状态为401
  if (+error.response.status === 401) {
      console.log('这是401');
      store.dispatch('logOut').then(res => {
          console.log('logout')
      })
  }
  return Promise.reject(error);
});

export default api => {
    let method = api.method === 'post' ? 'post' : 'get';
    let pathExp = /(?:\$\{)([a-zA-Z0-9]+)(?:\})/gi;
    let matches = api.url.match(pathExp);

    api.variables = matches ? matches.map(item => item.substring(2, item.length - 1)) : [];

    return (params, Option = {}) => {
        console.log(Option, 'ioopt')
        // 这个应该最先被执行
        // if (!(params instanceof FormData)) {
        //     params = params && new DateAdapter(params, api.rules && api.rules.req);
        // }

        if (api.url.indexOf('${') > -1) {
            // 对${xxx}的替换
            // eslint-disable-next-line
            let fn = new Function('params', 'with(params) {return `'+api.url+'`}');
            api.ruUrl = fn(params);
        }

        // 删除params中被${xxx}替换掉的变量
        api.variables.forEach(item => {
            delete params[item];
        });
        let {path, payload} = Option;
        console.log(payload, 'payload')
        let localUrl = api.reUrl || api.url;
        let url = path ? localUrl + path : localUrl;
        // if (!api.noPrefix) {
        //     url = prefix + url;
        // }

        return axios.request({
            url,
            method,
            ...payload,
            headers: {
                ...Option,
                // 'X-Access-Token': localStorage.getItem('token') || ''
            },
            [method === 'get' ? 'params' : 'data']: params
        }).then(({data}) => {
            // 0 是ok
            // 1 是用户错误
            // -1 服务器端错误
            if (data.code === 0) {
                console.log(data, 0);
                // let rules = api.rules && api.rules.res;
                // return rules ? new DateAdapter(data, rules) : data;
                return Promise.resolve(data);
            } else {
                console.log(data, 999)
                return Promise.reject(data);
            }
        }).catch(err => {
            console.log('promise cattch', err);
            return Promise.reject(err);
            // if (http.isCancle(res)) {
            //     console.log('Request canceled', res.message);
            // } else {
            //     if (res && res.status !== 0) {
            //         if (typeof (res) === 'string' && res.includes('403')) {
            //             window.location.href = '/common/403.jsp';
            //         } else {
            //             EventBus.$toast.error(res.message);
            //             console.error(`errNo: ${res.status}, message:${res.message}`);
            //         }
            //     }
            //     return Promise.reject(res);
            // }

        });


    };


};


