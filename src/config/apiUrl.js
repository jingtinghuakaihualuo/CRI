let baseUrl = '';
let routerMode = 'history';
let baseImgPath;


if (process.env.NODE_ENV == 'development') {
	 baseUrl = 'http://localhost:3000';
    baseImgPath = 'http://localhost:8002/img/';
}else{
	 baseUrl = '';
    baseImgPath = '';
}

export {
	baseUrl,
	routerMode,
	baseImgPath
}
