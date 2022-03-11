<div />

<style>
	div {
		position: fixed;
		inset: 0;
		background: url(/gradientbg.png) no-repeat center center fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}

	@supports (-webkit-touch-callout: none) {
		div {
			background: url(/gradientbg.png) no-repeat center top scroll;
			background-size: auto 100vh;
		}
	}
</style>
