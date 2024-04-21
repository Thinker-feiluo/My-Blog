// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	//开关ssr模板
	ssr: true,
	// 开关调试工具
	devtools: { enabled: false },
	// 导入的包需要在这里注册
	modules: ['@element-plus/nuxt', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
	css: ["bootstrap/dist/css/bootstrap.min.css"],
	components: [
		{
			path: '~/components/layoutsComponents',
			pathPrefix: false,
		},
	],
	app: {
		head: {
			script: [
				// { src: 'https://cdn.jsdelivr.net/gh/Ukenn2112/UkennWeb@3.0/index/web.js' }
				// { src: 'https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js' },
				// { src: 'https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js' },
			],
			link: [
				// 在这里导入在iconfont阿里巴巴中项目的图标 导入成功后可以直接在span上使用
				{ rel: 'stylesheet', href: '//at.alicdn.com/t/c/font_4512548_m8iosy5san9.css' },
				// { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css' }
			]
		}
	},
	runtimeConfig: {
		// apiSecret 只能在服务器端上访问
		apiSecret: '123',
		// public 命名空间中定义的，在服务器端和客户端都可以普遍访问
		public: {
			apiBase: process.env.NUXT_PUBLIC_API_BASE
		}
	},
	nitro: {
		devProxy: {
			"/api": {
				target: 'http://localhost:3001/',
				prependPath: true,
				changeOrigin: true,
			}
		}
	}
})