<template>
	<el-affix :offset="0">
		<el-card
			style="min-width: 90vw;width: 100%;height: 100%;position: relative;padding-right: 15vw;background: rgba(255, 255, 255, 0.5);box-sizing: border-box;">
			<el-menu :default-active="activeIndex" style="border: 0;position: absolute;top: 0px;margin-left: 20vw;"
				class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
				<el-menu-item index="1" style="font-size:18px;font-weight: 800;">
					<NuxtLink to="/" @click="store.ShowHide = true">首页</NuxtLink>
				</el-menu-item>
				<el-menu-item index="2" style="font-size:18px;font-weight: 800;">数据可视化</el-menu-item>
				<el-menu-item index="3" style="font-size:18px;font-weight: 800;">地图预览</el-menu-item>
				<el-menu-item index="4" style="font-size:18px;font-weight: 800;">讨论区</el-menu-item>
				<el-menu-item index="5" style="font-size:18px;font-weight: 800;">会员中心</el-menu-item>
				<el-menu-item index="6" style="font-size:18px;font-weight: 800;">个人中心</el-menu-item>
			</el-menu>
			<div style="float: right;margin-top: -22px;height:8vh;line-height: 8vh;">
				<span>
					<a target="_blank" href="https://github.com/Thinker-feiluo/My-Blog" class="iconfont icon-github"
						style="font-size: 24px;"></a>
				</span>
			</div>
		</el-card>
	</el-affix>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'
	import useLoginStore from '@/store/loginStore';
	const store = useLoginStore()
	const activeIndex = ref('1')
	const handleSelect = (key : string) => {
		switch (key) {
			// case "1" : 
		}
	}
</script>

<style scoped lang="scss">
	.flex-grow {
		flex-grow: 1;
	}
</style>