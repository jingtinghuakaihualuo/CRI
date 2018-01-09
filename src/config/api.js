/**
*  baseUrl 基本请求地址
*  suc 成功时执行的回调函数
*  err 失败时执行的回调函数
*/

import { baseUrl } from './apiUrl'
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.axios = axios
//, suc, err
export default async(url = '', data = {}, type = 'GET') => {
	type = type.toUpperCase();
	url = baseUrl + url;
	console.log(url);
	if (type === 'GET') {
		let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
		axios.get(url)
			.then((response) => {
				// suc(response);
				return response;
			})
			.catch((error) => {
				// err(error);
				return response;
			})
	}
	else {
		let  postData = [...data];
		let newData = JSON.stringify(postData);
		axios.post(url, newData)
		.then(function (response) {
			// suc(response);
			return response;
		})
		.catch(function (error) {
			// err(error);
			return response;
		});
	}

}
