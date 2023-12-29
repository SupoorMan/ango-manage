import axios from 'axios'

// 创建一个 axios 实例
const service = axios.create({
	baseURL: 'http://127.0.0.1:7788/mall', // 所有的请求地址前缀部分
	timeout: 30000, // 请求超时时间毫秒
	withCredentials: true, // 异步请求携带cookie
	headers: { // 设置后端需要的传参类型
		'Content-Type': 'application/json',
		'source': 'manage',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Expose-Headers':'token'
	},
})

// 添加请求拦截器
service.interceptors.request.use(
	function (config) {
		// console.log(config)
		return config
	},
	function (error) {
		return Promise.reject(error)
	}
)

// 添加响应拦截器
service.interceptors.response.use(
	function (response) {
		console.log(response.headers)
		// console.log(response.headers.token)
		// dataAxios 是 axios 返回数据中的 data
		const dataAxios = response.data
		// 这个状态码是和后端约定的
		// const code = dataAxios.reset
		return dataAxios
	},
	function (error) {
		return Promise.reject(error)
	}
)
export default service
