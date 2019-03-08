<template lang="pug">
	v-container(fluid fill-height)
		v-layout(align-center justify-center)
			div
				h2 Social
				.bar
					a(href="https://www.facebook.com/isoki.s" target="_blank").fab.fa-facebook
					a(href="https://github.com/Isoki-s" target="_blank").fab.fa-github
					v-tooltip(bottom)
						template(v-slot:activator="{ on }")
							.fab.fa-instagram.close(slot="activator")
						span.test will know it we are close
					v-tooltip(bottom)
						template(v-slot:activator="{ on }")
							.fab.fa-twitter.close(slot="activator")
						span.test will know it we are close
</template>

<style lang="stylus" conputed>

.head-text
	font-size 18px
	font-weight bold
	text-align center
.bar
	position relative
	padding 0 8px
	margin 10px 0 60px
	display flex
	font-weight normal

	a
		text-decoration none

	&::before
		content ""
		position absolute
		top 0
		right 0
		bottom 0
		left 0
		background #fff
		box-shadow 0 5px 15px rgba(0,0,0,0.2)
		transform skew(-12deg)

	&::after
		display block
		content ""
		clear bloth

	&:hover
		.fab
			padding 0 2px

	.fab
		position relative
		z-index 1
		color #2c2c2c
		width 45px
		height 50px
		text-align center
		font-size 18px
		line-height 50px
		transition all ease 0.25s, opacity ease 0.6s
		cursor pointer
		backface-visibility hidden

		&::after
			content ""
			position absolute
			z-index -1
			top -4px
			right -8px
			bottom -4px
			left -8px
			transform skew(-12deg) scale(0.8)
			opacity 0
			transition all ease 0.25s
			box-shadow 0 5px 15px rgba(0,0,0,0.2)

		&.fa-facebook::after
			background #3B5998

		&.fa-github::after
			background #333

		&.fa-instagram::after
			background linear-gradient(45deg, #F2CB24 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#AC14BF 100%)

		&.fa-twitter::after
			background #1da1f2

		&:hover
			color #fff
			transform translate(-1px, 4px)
			padding 0

			&::after
				transform skew(-12deg) scale(1)
				opacity 1

.v-tooltip__content
	background #333
</style>
