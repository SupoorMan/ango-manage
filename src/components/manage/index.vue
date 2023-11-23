<template>
	<view class="page">
		<view class="page-body">
			<scroll-view class="tabs" scroll-x="true" @scroll="scroll" :show-scrollbar="false" :scroll-into-view="scrollInto">
				<view v-for="(cate,index) in cates" :key="cate.id" class="tab" :id="cate.id" @click="changeCate(index)"
					:class="{'active': activeTab==index}">
					{{cate.label}}
				</view>
				<view class="line-active" :style="{'transform': 'translateX('+moveLine+')'}"></view>
			</scroll-view>
			<swiper :current="activeTab" class="pro-swiper" :indicator-dots="false" :autoplay="false" :interval="3000"
				:duration="300" @change="ontabchange">
				<swiper-item key="0" class="swiper-item">
					<All ref="0"/>
				</swiper-item>
				<swiper-item key="1" class="swiper-item">
					<AreadyDown ref="1"/>
				</swiper-item>
				<swiper-item key="2" class="swiper-item">
					<Single ref="2"/>
				</swiper-item>
				<swiper-item key="3" class="swiper-item">
					<SellOut ref="3"/>
				</swiper-item>
			</swiper>
		</view>
		<TabBar :selected="1"/>
	</view>
</template>

<script>
	import All from './index_view/all.vue'
	import Single from './index_view/single.vue'
	import AreadyDown from './index_view/areadyDown.vue'
	import SellOut from './index_view/sellOut.vue'
	export default {
		data() {
			return {
				activeTab:0,
				scrollInto: null,
				cates: [{label: '全部',count:122,id:0},
				{label: '已下架',count:12,id:1},
				{label: '单点不送',count:2,id:2},
				{label: '已售磬',count:12,id:3}]
			}
		},
		components:{
			All,
			AreadyDown,
			Single,
			SellOut
		},
		computed:{
			moveLine(){
				return (this.activeTab)*176 +(30+146/2-60)+'rpx';
			}
		},
		methods: {
			scroll(){},
			ontabchange(e) {
				let index = e.target.current || e.detail.current;
				this.changeCate(index);
			},
			changeCate(index) {
				if (this.activeTab === index) {
					return;
				}
				this.activeTab = index
				this.$refs[this.activeTab].loadData()
			},
		},
		onShow() {
			this.$nextTick(()=>{
				this.$refs[this.activeTab].loadData()
			})
		}
	}
</script>

<style scoped lang="scss">
	$tab-height: 72rpx;
	$tabbar-height: 100rpx;
	
	.page {
		height: 100%;
	}
	.page-body {
		display: flex;
		flex-direction: column;
		height: calc(100%  - 100rpx - env(safe-area-inset-bottom));
	}
		
	.tabs {
		background-color: #fff;
		height: $tab-height;
		width: 100%;
		white-space: nowrap;
		padding-left: 30rpx;
	
		.tab {
			width: 146rpx;
			border-radius: 48rpx;
			padding: 0 16rpx;
			display: inline-block;
			margin-right: 30rpx;
			height: $tab-height;
			line-height: $tab-height;
			color: $text-color-second;
			text-align: center;
			position: relative;
			
			&.active {
				// background-color: $primary-color;
				color:  $primary-color;
				// font-weight: bolder;
			}
			
		}
		.line-active {
			position: absolute;
			left: 0;
			top: 60rpx;
			transition: all 0.2s;
			width: 60rpx;
			height: 8rpx;
			border-radius: 8rpx;
			background: linear-gradient(90deg,#3F757C,$primary-color)  ;
		}
	}

	// 商品列表滑块
	.pro-swiper {
		// padding: 24rpx 0;
		height: calc(100% - $tab-height);
	}
</style>
