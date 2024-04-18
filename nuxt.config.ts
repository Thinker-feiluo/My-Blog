// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	//开关ssr模板
	ssr: true,
	// 开关调试工具
	devtools: { enabled: false },
	// 导入的包需要在这里注册
	modules: ['@element-plus/nuxt', '@pinia/nuxt'],
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
				{ src: 'https://cdn.jsdelivr.net/gh/Ukenn2112/UkennWeb@3.0/index/web.js' }
				// { src: 'https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js' },
				// { src: 'https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js' },
			],
			link: [
				// 在这里导入在iconfont阿里巴巴中项目的图标 导入成功后可以直接在span上使用
				{ rel: 'stylesheet', href: '//at.alicdn.com/t/c/font_4512548_xbwqoa5ru19.css' },
				// { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css' }
			]
		}
	}
})