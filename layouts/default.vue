<template>
	<el-container>
		<el-header style="padding: 0px">
			<AppHeader />
		</el-header>
		<el-container style="padding: 20px 10vw 0px 20vw;box-sizing: border-box">
			<el-container>
				<el-main>
					<slot style="margin: 0 auto;"></slot>
				</el-main>
			</el-container>
			<el-aside style="height:700px;width: 300px;" v-if="store.ShowHide === true">
				<AppRight style="height: 98%;width: 100%;"></AppRight>
			</el-aside>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
	import useLoginStore from '@/store/loginStore.js'
	const store = useLoginStore()
</script>

<style scoped lang="scss"></style>