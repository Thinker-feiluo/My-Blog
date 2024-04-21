import type { LocationQuery } from 'vue-router';
import type { NitroFetchRequest } from 'nitropack';
import type { FetchOptions } from 'ofetch';

interface Params {
	url : NitroFetchRequest;
	opts : FetchOptions<any>;
	method ?: 'get' | 'post';
}

export async function getFetchData({ url, opts, method = 'get' } : Params) {
	// 接口传参要求
	interface QueryItem {
		uid ?: string;
		token ?: LocationQuery;
	}
	const route = useRoute();
	const query : QueryItem = route.query;
	const config = useRuntimeConfig();
	const data = await useFetch(url, {
		method,

		// 请求拦截
		onRequest({ request, options }) {
			// 设置请求头
			// options.headers = { ...options.headers, authorization: 'xxx' };
			// 设置请求参数
			if (method === 'post') {
				options.body = { ...opts };
				options.query = query;
			} else {
				options.query = Object.assign(query, { ...opts });
			}
		},

		// 响应拦截
		onResponse({ response }) {
			if (response._data.error) {
				console.warn('=== error url: ', url, '\n params:', opts, '\n response:', response._data);
				myElMessage("这是提示", 'success')
			} else {
				return response;
			}
		},

		onRequestError({ request, options, error }) {
			console.warn('request error', error);
		},
		onResponseError({ request, response, options }) {
			console.warn('request error', response);
		},
	});
	return data.data.value;
}