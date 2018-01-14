/**
*  baseUrl 基本请求地址
*  suc 成功时执行的回调函数
*  err 失败时执行的回调函数
*/

import { baseUrl } from './apiUrl'
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.axios = axios
//请求格式
// {
//   "version": "1.0.0",
//   "osflag": "4", //1:android,2:IOS 3 WX小程序 4 浏览器
//   "appflag": "3", //1:置业顾问端,2:开发商客服,3:平台管理
//   "sign": null,
//   "token": null,
//   "data": {}
// }

let res = '';

export default async(url = '', data = {}, type = 'GET', suc, err) => {
	type = type.toUpperCase();
	url = baseUrl + url;

	let constData = {version: "1.0.0", "appflag": "3", osflag: "4", "sign": null, "token": null, data:{}}

	Object.assign(constData.data, data);

	if (type === 'GET') {
		let dataStr = ''; //数据拼接字符串
		Object.keys(constData).forEach(key => {
			dataStr += key + '=' + constData[key] + '&';
		})

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
		axios.get(url)
			.then((response) => {
				suc(response);
			})
			.catch((error) => {
				err(error);
			})
	}
	else {
		let  postData = { ...constData };
		axios.post(url, postData)
		.then(function (response) {
			suc(response);
		})
		.catch(function (error) {
			err(error);
		});

	}
}
