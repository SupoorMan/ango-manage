<!-- 说明卡片 -->
<template>
	<view class="illustrate-card">
		<h4>
			<uni-icons type="info" color="#737176"></uni-icons>
			{{title}}商品说明
		</h4>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			title:{
				type: String
			}
		}
	}
</script>

<style scoped lang="scss">
	$info-color: #737176;
	$info-bg: #F7F5FA;
	.illustrate-card {
		background-color: $info-bg;
		color: $info-color;
		margin: 30rpx;
		padding: 24rpx;
		border-radius: 12rpx;
		font-size: 24rpx;
		h4 {
			margin-bottom: 12rpx;
		}
	}
</style>