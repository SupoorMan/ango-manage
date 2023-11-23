<!-- 首页底部 -->
<template>
	<view class="home-b-bar">
		<ul class="bar">
			<li class="" @tap="toNext(1)">管理分组</li>
			<li  @tap="toNext(2)"><uni-icons type="bars" class="icons" color="#f94170"></uni-icons>批量操作</li>
			<!-- <li @tap="toNext(3)"><uni-icons type="list" class="icons"></uni-icons>商品排序</li> -->
			<li  @tap="toNext(4)" ><uni-icons type="plusempty" class="icons" color="#f94170"></uni-icons>新建商品</li>
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
				let url = ''
				switch(type){
					case 1:
						url= "/pages/manage/cate_view/list"
						break;
					case 2:
						url= "/pages/manage/pro_view/proBulkOpt"
						break;
					case 3:
						url= "/pages/manage/pro_view/proSort"
						break;
					case 4:
						url ="/pages/manage/pro_view/selectProType"
						break;
				}
				
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	$height: 96rpx;
	.home-b-bar {
		bottom: 0;
		position: absolute;
		height: $height;
		width: 100%;
		left: 0;
		box-shadow: 0 -2rpx 5rpx 0 #e6e6e6;
		.bar {
			height: $height;
			display: flex;
			align-items: center;
			margin: 0;
			padding: 0;
			background-color: #fff;
			li ,&>view {
				width: 25%;
				// line-height: $height;
				height: $height;
				list-style: none;
				background-color: #fff;
				text-align: center;
				font-weight: bolder;
				font-size: 24rpx;
				display:flex;
				align-items: center;
				justify-content: center;
				&:first-child {
					background-color: #FAFAFA;
				}
			}
		}
		.icons {
			color: $red-color !important;
			padding-top: 4rpx !important;
		}
	}
</style>