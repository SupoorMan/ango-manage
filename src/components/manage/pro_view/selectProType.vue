<template>
	<view class="page-body">
		<view class="title">
			请选择商品类型
		</view>
		<view class="select-tabs">
			
			<view class="tab-unit" :class="{'active':activeType==1}" @tap="select(1)">
				<image src="@/static/img/agency.png" mode="aspectFit"></image>
				<p>代理商品</p>
				</view>
				<view class="tab-unit" :class="{'active':activeType==2}" @tap="select(2)">
				<image src="@/static/img/own-pro.png" mode="aspectFit"></image>
				
				<p>自定义商品</p>
				</view>
		</view>
		<view class="next-btn" @tap="toNext">
			下一步
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				activeType:1,
				types: []
			}
		},
		methods:{
			select(type){
				this.activeType = type
			},
			toNext(){
				uni.navigateTo({
					url: this.activeType==1 ? '/pages/manage/pro_view/selectAgencyPro' :'/pages/manage/pro_view/editProd'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.page-body {
		background-color: #F8F9FB;
		height: 100vh;
		
		.title {
			padding: 30rpx;
			color: #788691;
		}
		
		.select-tabs {
			display: flex;
			align-items: center;
			padding: 0 24rpx;
			.tab-unit {
				
				margin: 13.5rpx;
				border-radius: 16rpx;
				width: 216rpx;
				padding: 36rpx 12rpx;
				border: 1rpx solid #ffffff;
				background-color: #fff;
				text-align: center;
				image {
					width:67rpx;
					height: 67rpx;
					margin-bottom: 8rpx;
				}
				&.active {
					border-color: $primary-color-light;
					position: relative;
					overflow: hidden;
					box-shadow: 0 2rpx 6rpx #B0D2D7;
					&:after {
					    content: "";
					    position: absolute;
					    right: 8rpx;
					    top: 10rpx;
					    width: 20rpx;
					    height: 10rpx;
					    border: 4rpx solid #fff;
					    border-radius: 4rpx;
					    border-top: none;
					    border-right: none;
					    background: transparent;
					    transform: rotate(-45deg);
					}
				
					&:before {
						content: '';
						position: absolute;
						border-top: 64rpx solid  $primary-color-light;
						border-left: 64rpx solid  transparent;
						right: -1rpx;
						top: 0;
						text-align: left;
					
						width: 0;
						height: 0;
					}
				}
			}
		}
		.next-btn {
			background-color: #fff;
			width: 100%;
			text-align: center;
			color: $primary-color;
			margin-top: 50rpx;
			line-height: 90rpx;
			&:active {
				background-color: #F3F8F9;
			}
		}
	}
</style>