<template>
	<div style="width: 100%;overflow: hidden;padding-top: 20px;">
		<section class="about-dev">
			<header class="profile-card_header">
				<div class="profile-card_header-container">
					<div class="profile-card_header-imgbox">

					</div>
					<h1>名称 <span>爱好</span></h1>
				</div>
			</header>
			<div class="profile-card_about">
				<h2>个人简介</h2>
				<p style="padding-top: 20px;">I'm an aspiring ruler of hoomans from Chicago, looking for my fur-ever home. I like treats and
					playing and treats. And treats. I'd do well in a home where hoomans give me lots of treats!</p>
				<div style="display:flex;justify-content: space-between;">
					<footer class="profile-card_footer_left">
						<p><a class="back-to-profile back-to-profile-left" href="#">登录</a></p>
					</footer>
					<footer class="profile-card_footer_right">
						<p><a class="back-to-profile back-to-profile-right" href="#">个人中心</a></p>
					</footer>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
</script>

<style scoped>
	.about-dev {
		width: 100%;
		margin: auto;
		box-shadow: 2px 4px 2px -2px rgba(0, 0, 0, .3), -2px -4px 15px -2px rgba(0, 0, 0, .2);
		animation: profile_in 0.8s;
	}

	@keyframes profile_in {
		0% {
			opacity: 0;
			transform: translateY(30%);
		}

		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.profile-card_header-container {
		max-width: 15rem;
		margin: auto;
	}

	.profile-card_header {
		background: #272727;
		border-left: 0.625rem solid #97ece1;
		padding: 1.5em 1.5em 1em;
		text-align: center;
	}

	.profile-card_header-imgbox {
		display: block;
		width: 9.5rem;
		height: 9.5rem;
		overflow: hidden;
		border-radius: 50%;
		margin: auto;
		background: rgba(250, 214, 195, 1);
		border: 0.375rem solid rgba(250, 214, 195, 1);
	}

	.profile-card_header img {
		max-width: 100%;
		filter: grayscale(100%);
	}

	.profile-card_header h1 {
		color: #f3f3f3;
		font-size: 1.5rem;
		margin-top: 0.8em;
		font-family: 'Oswald', sans-serif;
		font-weight: normal;
		position: relative;
	}

	.profile-card_header h1 span {
		font-size: 1.2rem;
		font-weight: 300;
		display: block;
		color: rgba(220, 220, 220, .95);
		margin-top: 0.25em;
		padding-top: 0.25em;
		border-top: 0.075em solid rgba(250, 214, 195, 1);
	}

	.profile-card_about {
		line-height: 1.5;
		background: #ededed;
		padding: 1.5em 2rem;
		color: #222;
		font-family: 'Lato', sans-serif;
	}

	.profile-card_about h2 {
		margin: 0;
		display: inline-block;
		color: #333;
		font-weight: normal;
		text-transform: uppercase;
		font-size: 1.3rem;
		position: relative;
		z-index: 2;
		vertical-align: middle;
	}

	.profile-card_about h2::before {
		content: '';
		position: absolute;
		width: 110%;
		height: 1rem;
		background: #c6f1eb;
		left: -5px;
		top: 50%;
		z-index: -1;
	}

	.profile-card_about p {
		font-weight: 300;
	}

	.profile-card_footer_right {
		margin-top: 1.5em;
	}

	.profile-card_footer_left {
		margin-top: 1.5em;
	}

	.profile-card_footer {
		margin-top: 1.5em;
		text-align: right;
	}

	#pawi,
	#hearti {
		height: 1.8rem;
		width: 1.8rem;
		cursor: help;
		-webkit-transition: fill 0.3s ease-in-out;
		transition: fill 0.3s ease-in-out;
	}

	#pawi path,
	#hearti path {
		fill: #272727;
	}

	.back-to-profile,
	.back-to-profile:visited {
		width: 110px;
		text-align: center;
		display: inline-block;
		padding-left: 0.5em;
		padding-bottom: 0.1em;
		color: #222;
		text-decoration: none;
		font-weight: bold;
		border-top: 0.3125rem solid rgba(0, 0, 0, 0);
		border-bottom: 0.3125rem solid #97ece1;
		-webkit-transition: border 0.3s ease-in-out;
		transition: border 0.3s ease-in-out;
	}

	.back-to-profile-right::after {
		content: "\25b6";
		margin: 0 0.75em;
		color: #222;
	}
	
	.back-to-profile-left::before {
		content: "\25c0";
		margin: 0 0.75em;
		color: #222;
	}

	.back-to-profile:hover,
	.back-to-profile:focus {
		border-top-color: #222;
		border-bottom-color: #fdc1a0;
	}

	@media screen and (max-width: 26em) {
		.side_wrapper {
			min-height: 100vh;
			background: #ededed;
		}

		.about-dev {
			box-shadow: none;
		}
	}

	@media screen and (min-width: 33em) {
		.side_wrapper {
			margin: 2rem auto;
		}

		.profile-card_header {
			padding: 1.5em 4em 1em;
		}
	}

	@media screen and (min-height: 46em) {
		.side_wrapper {
			width: 100%;
			max-width: 26rem;
			margin: 0;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		.about-dev {
			max-width: 26rem;
		}
	}
</style>