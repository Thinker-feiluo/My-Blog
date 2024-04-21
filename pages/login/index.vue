<template>
	<div class="box">
		<img class="logo" alt="dribble-logo" src="../../public/img/网站log.png" />
		<p class="signin">登录页面</p>
		<p class="signin-text">使用微信,QQ扫码或者短信验证码登录</p>
		<div class="signin-row">
			<i class="ic1 fab fa-twitter"><span class="iconfont icon-weixin"></span></i>
			<i class="ic2 fab fa-facebook"><span class="iconfont icon-QQ"></span></i>
			<i class="ic3 fab fa-google"><span class="iconfont icon-shouji"></span></i>
		</div>
		<input name="user" type="text" placeholder="请输入账号" v-model="username">
		<br />
		<input name="pass" type="password" placeholder="请输入密码" required v-model="password">
		<button @click="handelLogin">登录</button>
		<p class="foot-txt">忘记密码?</p>
		<p class="foot-txt">验证码登录/<span class="bold">注册账号</span></p>
	</div>
</template>

<script setup lang="ts">
	import useLoginStore from '@/store/loginStore';
	const store = useLoginStore()
	
	const username = ref("")
	const password = ref("")
	const handelLogin = async () => {
		const res = store.Login(username.value, password.value)
		if(res.code === 200){
			
		}else{
			
		}
	}
</script>

<style scoped lang="scss">
	$charcoal: #444;
	$grey: #f3f4f4;
	$link: #3a8bbb;
	$pink: #ea4c89;
	$slate: #9da3a5;
	$white: #fff;

	@import url('https://fonts.googleapis.com/css?family=Work+Sans:400,500,600');
	$title-text: 'Work Sans', sans-serif;

	.box {
		margin-left: 18vw;
		background: $white;
		border-radius: .625rem;
		box-shadow: 0 0 40px 0 rgba(234, 76, 137, .6);
		display: flex;
		flex-direction: column;
		height: 31.25rem;
		position: absolute;
		width: 18.75rem;
	}

	.logo,
	.signin,
	input,
	button,
	.foot-txt,
	.signin-row {
		margin: 0 auto;
		position: relative;
	}

	.logo {
		height: 3.125rem;
		margin-top: 1.875rem;
		width: 3.125rem;
	}

	p {
		color: $charcoal;
	}

	.signin {
		font: 600 1.8rem $title-text;
		padding: .17em;
	}

	.signin-row {
		display: flex;
		justify-content: space-around;
		padding: .625rem;
		width: 11rem;
	}

	.signin-row>i {
		color: $charcoal;
		font-size: 2rem;
		transition: all .15s ease-out;
		-webkit-transition: all .15s ease-out;
	}

	.signin-row>i>span {
		font-size: 24px;
	}

	.signin-text {
		color: $slate;
		font: 500 .85rem $title-text;
		margin: 0;
		padding-top: 0.625rem;
		text-align: center;
	}

	i:hover {
		cursor: pointer;
	}

	.ic1:hover {
		color: #1da1f2;
	}

	.ic2:hover {
		color: #3b5998;
	}

	.ic3:hover {
		color: #4285f4;
	}

	input {
		-webkit-appearance: none;
		-moz-appearance: none;
		background: none;
		border: 0;
		border-bottom: 2px solid $slate;
		font: 500 .9rem $title-text, sans-serif;
		height: 2.15em;
		margin-top: .7em;
		transition: all .15s ease-out;
		-webkit-transition: all .15s ease-out;
		width: 80%;
	}

	input:focus {
		border-bottom: 2px solid $pink;
		outline: none;
	}

	::-webkit-input-placeholder {
		color: $slate;
	}

	::-moz-placeholder {
		color: $slate;
	}

	:-ms-input-placeholder {
		color: $slate;
	}

	:-moz-placeholder {
		color: $slate;
	}

	button {
		background: $pink;
		border: 0;
		border-radius: 1.4em;
		color: $white;
		font: 1.1rem $title-text;
		margin: 1.7em auto .6em;
		outline: none;
		padding: .6em;
		transition: all .15s ease-out;
		-webkit-transition: all .15s ease-out;
		width: 80%;
	}

	button:hover {
		background: $charcoal;
		cursor: pointer;
	}

	button:focus {
		outline: none;
	}

	.foot-txt {
		color: $slate;
		font: 500 .85rem $title-text;
		padding: .3em;
	}

	.foot-txt:hover {
		cursor: pointer;
		text-decoration: underline;
	}

	.bold {
		font-weight: 600;
	}
</style>