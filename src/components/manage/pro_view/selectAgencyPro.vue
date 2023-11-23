<!-- 商品批量操作 -->
<template>
	<!-- 水果分类和列表 -->
	<view class="content">
		<!-- 类别 -->
<!-- 		<scroll-view :scroll-y="true" class="cates-list" :scroll-with-animation="true" :show-scrollbar="false">
			<view class="cate-cell" v-for="cate in cates" :key="cate.id" 
			:class="{'active':activeCateId==cate.id}" @tap="changeCate(cate)">
				<p class="p">{{cate.classifyName}}</p>	
			</view>
		</scroll-view> -->
		<!-- 商品 -->
		<scroll-view class="goods-list"  :scroll-y="true" :scroll-with-animation="true">
			<view v-for="pro in prods" :key="pro.id" class="good-card"  @tap="toggleCheck(pro)">
				<view class="">
					<uni-icons type="checkbox-filled" size="24" color="#f94170" v-if="selectedId.includes(pro.id)"></uni-icons>
					<uni-icons type="circle" size="24" color="#b5b5b5" v-else></uni-icons>
				</view>
				<ProCard :item="pro" type="none"/>
			</view>
		</scroll-view>
	</view>
	<view class="next-btn" @tap="toConfirm"> 确认添加 </view>
</template>

<script>
	import { getSelfCates } from '@/service/api/procate.js'
	import {UpdateBatch,deletePro} from '@/service/api/pro.js'
	import {getModalPros} from '@/service/api/modalPro.js'
	import ProCard from '../components/ProCard.vue'
	import BulkBar from '../components/bar/bulkBar.vue'
	import HomeSetCount from '../components/HomeSetCount.vue'
	export default {
		data(){
			return {
				activeCateId:'',
				cates:[],
				prods:[],
				selectedId:[],
				showProds:[],
				current:{}
			}
		},
		components:{
			ProCard,
			BulkBar,
			HomeSetCount
		},
	
		methods:{
			changeCate(cate) {
				this.activeCateId = cate.id
				this.selectedId=[]
				this.showProds = this.prods.filter(m=>m.goodsClassifyId==cate.id)
			},
			toggleCheck(item){
				const index= this.selectedId.indexOf(item.id)
				if(index!==-1){
					this.selectedId.splice(index,1)
				}else{
					this.selectedId.push(item.id)
				}
			},
			showCount(ids){
				if(this.checkSelect()){	
					this.current={num:''}
					this.$refs.popup.open('bottom')
				}
			},
			async loadData(){ // 加载分类
				await this.loadPro()
				// getSelfCates({size:99,current:1}).then(async res=>{
				// 	if(res.code==200) {
				// 		let cates = []
				// 		for (var i = 0; i < res.data.records.length; i++) {
				// 		 	let m= res.data.records[i]
				// 			if(m.count>0){
				// 				cates.push({...m})
				// 			}
				// 		}
				// 		this.cates = cates
				// 		this.changeCate(cates[0])
				// 	}
				// })
			},
			async loadPro(){ // 加载商品
				try{
					const res = await getModalPros()
					this.prods = res.code===200?  res.data.records:[]
				}catch(e){
					//TODO handle the exception
					this.prods =[]
				}
				
			},
			toConfirm(){
				if(this.selectedId.length==0){
					uni.showToast({
						icon:'none',
						title: '请选择模版商品'
					})
					return 
				}
				uni.navigateTo({
					url:`/pages/manage/pro_view/editProd?id=${this.selectedId[0]}` 
				})
			}
		},
		mounted () {
			this.loadData()
		}
	}
</script>

<style scoped lang="scss">
	$barHeight: 96rpx;
	$cateWidth: 0rpx;//calc(750rpx/4);
	
	.content {
		display: flex;
		align-items: flex-start;
		overflow: hidden;
		height: calc(100% - $barHeight - env(safe-area-inset-bottom));
		background-color: #FDFDFD;
		
	}
	.cates-list {
		background-color: $bar-bg-color;
		height: 100%;
		width: $cateWidth;
	
		
		view.cate-cell {
			width: $cateWidth;
			padding: 24rpx 24rpx;
			color: #6A6A6A;
			position: relative;
			p,.p {
				display: -webkit-box;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				line-height: 1.5;
			}
			&.active{
				background-color: $uni-bg-color;
				border-left: 6rpx solid #3F757C;
				color: #333;
			}
		
		}
		
	}
	.selected-all {
		display: flex;
		align-items: center;
		// line-height: 80rpx;
		padding: 24rpx;
	}
	.goods-list {
		width: calc(100% - $cateWidth);
		height: 100%;
		overflow-x: hidden;
		padding-bottom: calc($barHeight + env(safe-area-inset-bottom));
		-webkit-overflow-scrolling:touch;
		scroll-behavior: smooth;
		
		&::-webkit-scrollbar {
			height: 0;
		}
		.good-card {
			display: flex;
			padding-left: 24rpx ;
			align-items: center;
		}
	}
	.next-btn {
		background-color: #fff;
		width: 100%;
		text-align: center;
		color: $red-color;
		// margin-top: 50rpx;
		line-height: 90rpx;
		&:active {
			background-color: #F3F8F9;
		}
	}
</style>