<!--批量操作底部 -->
<template>
	<view class="home-b-bar">
		<ul class="bar">
			<li @tap="toNext(1)"><uni-icons type="upload-filled" class="icons" color="#f94170"></uni-icons>上架</li>
			<li @tap="toNext(2)"><uni-icons type="download-filled" class="icons" color="#f94170"></uni-icons>下架</li>
			<li @tap="toNext(3)"><uni-icons type="settings-filled" class="icons" color="#f94170"></uni-icons>修改库存</li>
			<li @tap="toNext(4)" :class="{'active': showMenu}"><uni-icons type="more-filled" class="icons" color="#f94170"></uni-icons>更多</li>
		</ul>
		
		<ul class="menus" :style="{'height':showMenu?'80rpx':'0'}">
			<li @tap="toNext(5)" >删除</li>
		</ul>
		
	</view>
</template>

<script>
	export default {
		props:{
			ids: {
				type: Array,
			}
		},
		data(){
			return {
				showMenu:false
			}
		},
		methods:{
			toNext(type){
				// debugger
				console.log(type)
				
				switch (type){
					case 1:
						this.$emit('updateProds',{selling:1})
						break;
					case 2:
						this.$emit('updateProds',{selling:0})
						break;
					case 3:
						this.$emit('showCount')
						break;
					case 4:
						this.showMenu = !this.showMenu
						break;
					case 5: // 删除
						this.$emit('deleteProds')
						this.showMenu= false
						break;
					default:
						break;
				}
			},
			
		}
	}
</script>

<style scoped lang="scss">
	$height: 96rpx;
	$menuHeight: 80rpx;
	.home-b-bar {
		bottom: 0;
		position: absolute;
		height: calc($height + env(safe-area-inset-bottom) );
		padding-bottom:  env(safe-area-inset-bottom);
		width: 100%;
		left: 0;
		box-shadow: 2rpx 4rpx 8rpx #eee;
		ul ,.ul {
			margin: 0;
			padding: 0;
		}
		.bar {
			margin: 0;
			padding: 0;
			height: $height;
			display: flex;
			align-items: center;
		
			li,&>view {
				flex: 1;
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
			}
			.active {
				background-color: $bg-color;
			}
		}
		.icons {
			color: $red-color !important;
			padding-top: 4rpx !important;
		}
	}
	.menus {
		transition: all 0.2s;
		position: absolute;
		background-color: #fff;
		border-radius: 12rpx;
		overflow: hidden;
		width: 25%;
		bottom: calc($height + 24rpx);
		right: 24rpx;
		box-shadow: 2rpx 4rpx 8rpx #eee;
		
		li {
			
			line-height: $menuHeight;
			height: $menuHeight;
			list-style: none;
			background-color: #fff;
			text-align: center;
			// font-weight: bolder;
			font-size: 24rpx;
			// display:flex;
			// align-items: center;
			// justify-content: center;
		&+li{ border-top: 2rpx solid $border-color;}
		}
	}
</style>