<!-- 分组管理 -->
<template>
	<view class="home-b-bar">
		<ul class="bar">
			<!-- <li class="" @tap="toNext()">管理分组</li> -->
			<li @tap="toNext(1)"><uni-icons type="list" class="icons" color="#f94170"></uni-icons>排序&批量操作</li>
			<!-- <li><uni-icons type="list" class="icons"></uni-icons>商品排序</li> -->
			<li @tap="toNext(2)"><uni-icons type="plusempty" class="icons" color="#f94170"></uni-icons>新建分组</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			toNext(type){
				
				// debugger
				uni.navigateTo({
					url:type===1 ? "/pages/manage/cate_view/bulkOperation" :"/pages/manage/cate_view/editCate"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	$height: 96rpx;
	.home-b-bar {
		bottom: 0;
		height: calc($height + env(safe-area-inset-bottom));
		padding-bottom:  env(safe-area-inset-bottom);
		position: absolute;
	
		width: 100%;
		left: 0;
		box-shadow: 0 -2rpx 10rpx 0 rgba(230,230,230);
		overflow: hidden;
		.bar {
			height: $height;
			display: flex;
			align-items: center;
			margin: 0;
			padding: 0;
			li ,&>view {
				flex: 1;
				line-height: $height;
				height: $height;
				list-style: none;
				background-color: #fff;
				text-align: center;
				font-weight: bolder;
				font-size: 24rpx;
				// &:first-child {
				// 	background-color: #FAFAFA;
				// }
			}
		}
		.icons {
			color: $red-color !important;
			padding-top: 4rpx !important;
		}
	}
</style>