<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <AppHeader />
            </el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-container>
                    <el-main>
                        <slot></slot>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss"></style>