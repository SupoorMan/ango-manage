<template>
	<view  class="page-body">
		<scroll-view scroll-y="true" scroll-with-animation="true" class="list" @scrolltolower="loadmore">
			<view class="cates-cell" v-for="cate in list" :key="cate.id">
				<view class="content">
					<view>{{cate.classifyName}}</view>
					<view class="tip-text">{{cate.count}}个商品</view>
				</view>
				<view class="opt-box">
					<view class="btn" @tap="toAddPro(cate.id)">新建商品</view>
					<view class="btn" @tap="toEdit(cate)">编辑</view>
				</view>
			</view>
			<uni-load-more status="noMore" v-if="this.list.length===this.pages.total"></uni-load-more>
		</scroll-view>
		<CateListBar />
	</view>
</template>

<script>
	import { getSelfCates } from '@/service/api/procate.js'
	import CateListBar from '../components/bar/cateListBar.vue'
	export default {
		data(){
			return {
				list:[],
				pages: {
					size:10,
					current:1,
					total:99
				}
			}
		},
		components:{CateListBar},
		computed:{
			procates(){
				let list = []
				for (var i = 1; i < 16; i++) {
					list.push({
						id: `cates_${i}`,
						title: '分类'+i,
						procout: parseInt(Math.random()*100)
					})
				}
				return list
			}
		},
		methods:{
			toEdit(item){
				uni.navigateTo({
					url:'/pages/manage/cate_view/editCate?id='+item.id,
					success: function(res) {
						// 通过eventChannel向被打开页面传送数据
						res.eventChannel.emit('acceptDataFromOpenerPage', item);
					}
				})
			},
			toAddPro(_id){
				uni.navigateTo({
					url:"/pages/manage/pro_view/editProd?goodsClassifyId="+_id
				})
			},
			loadList(){
				getSelfCates(this.pages).then(res=>{
					if(res.code==200) {
						this.list = res.data.records
						this.pages.total= res.data.total
					}
				})
			},
			loadmore(){
				if(this.pages.total > (this.pages.size* this.pages.current)){
					this.pages.current+=1
					this.loadList()
				}
			}
		},
		onShow() {
			this.loadList()
		}
	}
</script>

<style scoped lang="scss">
	$barheight: 96rpx;
	.page-body {
		height: 100%;
		overflow: hidden;
		.list {
			height: calc(100% - $barheight - var(--window-bottom));
		}
	}
	.cates-cell {
		margin: 0 24rpx;
		padding: 24rpx 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2rpx solid $border-color;
		.content {
			.tip-text {
				color: $tip-text-color;
				font-size: 24rpx;
				margin-top: 12rpx;
			}
		}
		.opt-box {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			margin-left: 24rpx;
			.btn {
				border: 2rpx solid $tip-text-color;
				padding: 4rpx 24rpx;
				color: $text-color;
				margin-left: 30rpx;
				border-radius: 24rpx;
				position: relative;
				font-size: 24rpx;
			}
		}
	}
</style>