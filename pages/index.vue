<template>
	<div class="box" v-for="(item,index) in data" :key="index">
		<el-card style="height: 400px;">
			{{item}}
		</el-card>
	</div>
	<el-pagination background layout="prev, pager, next" :total="1000" :page-size="5" />
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	const data = ref([1, 2, 3, 4, 5])
</script>

<style scoped>
	.box {
		margin-bottom: 20px;
	}
</style>