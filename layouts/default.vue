<template>
	<div class="common-layout">
		<el-container>
			<el-header style="padding: 0px">
				<AppHeader />
			</el-header>
			<el-container style="padding: 20px 10vw 0px 20vw;box-sizing: border-box">
				<el-container>
					<el-main>
						<slot></slot>
					</el-main>
				</el-container>
				<el-aside width="20vw" style="height:600px">
					<AppLeft style="height: 98%;width: 100%;"></AppLeft>
				</el-aside>
			</el-container>
		</el-container>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss"></style>