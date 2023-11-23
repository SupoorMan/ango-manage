<!-- 商品展示卡片 -->
<template>
	<view class="pro-card">
		<view class="image-box">
			<image :src="proImg" mode="aspectFit"></image>
		</view>
		<view class="info">
			<view class="title" @tap="toAddPro">
				<p class="p">{{item.productName}}</p>
				<uni-icons type="right" size="14" style="margin-left: 4rpx;vertical-align: middle;" v-if="type!=='none'"></uni-icons>
			</view>
			<view class="space">
				<text>月售{{(item.sellNum||0)}}</text>
				<text>库存 {{(item.num||0)}}</text>
			</view>
			<view class="buy-count">
				<p class="price">
					<span class="small">￥</span>{{item.price}}
				</p>
				<view class="cart-btn">
					<view class="btn" v-if="type==='down'" @tap="updatePro(item.selling)">
						上架
					</view>
					<view class="btn" v-if="type==='sellout'" @tap="toAddPro">
						库存
					</view>
				</view>
			</view>
			<view class="footer" v-if="type==='all'">
				<!-- <view class="btn">
					促销
				</view> -->
				<view class="btn" @tap="showCount">
					库存
				</view>
				<view class="btn" @tap="updatePro(item.selling)">
					{{item.selling==0?'上架':'下架'}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		props: {
			item: {
				require: true,
			},
			type: {
				default: ''
			}
		},
		computed:{
			proImg(){
				if(this.item.images){
					let images  = JSON.parse(this.item.images)
					return images[0].url
				}
				return '/static/img/2310841.png'
			}
		},
		methods:{
			showCount(){ // 设置库存
				this.$emit('showCount',this.item)
			},
			updatePro(type){ // 上下架
				
				this.$emit('updatePro',{id:this.item.id,selling: type===0?1:0})
			},
			toAddPro(){ // 编辑商品
				if(this.type==='none') return
				uni.navigateTo({
					url:"/pages/manage/pro_view/editProd?id="+this.item.id,
					success:(res)=> {
						// 通过eventChannel向被打开页面传送数据
						res.eventChannel.emit('acceptDataFromOpenerPage', this.item);
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	// 横向商品卡片
		.pro-card {
			display: flex;
			padding: 16rpx;
			overflow: hidden;
			// width: 100%;
			image {
				background-color: #f9f9f9;
				width: 120rpx;
				height: 120rpx;
				margin-right: 12rpx;
				border-radius: 12rpx;
			}
	
			.info {
				flex:1;
				overflow: hidden;
				padding: 8rpx 0;
				.title {
					font-weight: bolder;
					font-size: 26rpx;
					overflow: hidden;
					p,.p {
						width: calc(100% - 36rpx);
						display: inline-block;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						word-break: break-all;
						vertical-align: middle;
						color: $text-color;
					}
				}
	
				.price {
					font-size: 32rpx;
					color: $price-color;
					.small {
						font-size: 16rpx;
					}
				}
				.space {
					color: $text-color-second;
					line-height: 36rpx;
					font-size: 24rpx;
					text {
						margin-right: 24rpx;
					}
				}
			}
	
			.buy-count {
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				margin-top: 4rpx;
				.btn {
					background-color: $primary-color;
					color: #fff;
					font-size: 24rpx;
					border-radius: 20rpx;
				}
			}
			.cart-btn {
				display: flex;
				align-items: center;
				.btn {
					background: linear-gradient(90deg, #41757B, $primary-color);
					border-radius: 24rpx;
					width: 96rpx;
					height: 48rpx;
					text-align: center;
					line-height: 48rpx;
					display: inline-block;
					box-shadow: 2rpx 2rpx 6rpx 0 #898989;
					margin-right: 8rpx;
					font-size: 24rpx;
				}
			}
			.footer {
				display: flex;
				align-items: center;
				justify-content: flex-end;
				// margin-top: 24rpx;
				.btn {
					border: 2rpx solid $tip-text-color;
					padding: 4rpx 24rpx;
					color: $text-color-second;
					margin-left: 30rpx;
					border-radius: 24rpx;
					position: relative;
					font-size: 24rpx;
				}
			}
		}
	
</style>