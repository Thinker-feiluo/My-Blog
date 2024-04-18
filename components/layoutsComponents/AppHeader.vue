<template>
	<el-card
		style="width: 100%;height: 104%;position: relative;padding: 0px 15vw 0px 0px;background: rgba(255, 255, 255, 0.5);">
		<el-menu :default-active="activeIndex"
			style="border: 0;position: absolute;top: 0px;left: 50%;margin-left: -20vw;" class="el-menu-demo"
			mode="horizontal" :ellipsis="false" @select="handleSelect">
			<el-menu-item index="1" style="font-size:18px;font-weight: 800;">首页</el-menu-item>
			<el-menu-item index="2" style="font-size:18px;font-weight: 800;">数据可视化</el-menu-item>
			<el-menu-item index="3" style="font-size:18px;font-weight: 800;">地图预览</el-menu-item>
			<el-menu-item index="4" style="font-size:18px;font-weight: 800;">讨论区</el-menu-item>
			<el-menu-item index="5" style="font-size:18px;font-weight: 800;">会员中心</el-menu-item>	
		</el-menu>
		<div style="float: right;margin-top: -22px;height:8vh;line-height: 8vh;">
			<span>
				<a target="_blank" href="https://github.com/Thinker-feiluo/My-Blog" class="iconfont icon-github"
					style="font-size: 24px;"></a>
			</span>
		</div>
	</el-card>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'

	const activeIndex = ref('1')
	const handleSelect = (key : string, keyPath : string[]) => {
		console.log(key, keyPath)
	}
</script>

<style scoped lang="scss">
	.flex-grow {
		flex-grow: 1;
	}
</style>