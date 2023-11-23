<!-- 商品排序 -->
<template>
	<!-- 水果分类和列表 -->
	<view class="content">
		<!-- 类别 -->
		<scroll-view :scroll-y="true" class="cates-list" :scroll-with-animation="true" :show-scrollbar="false">
			<view class="cate-cell" v-for="cate in cates" :key="cate.id" 
			:class="{'active':activeCateId==cate.id}" @tap="changeCate(cate)">
				<p class="p">{{cate.classifyName}}</p>	
			</view>
		</scroll-view>
		<!-- 商品 -->
		<scroll-view class="goods-list"  :scroll-y="true" :scroll-with-animation="true">
			<view v-for="pro in showProds" :key="pro.id" class="good-card">
				<ProCard :item="pro" type="none"/>
			</view>
		</scroll-view>
	</view>
	
</template>

<script>
	import { getSelfCates } from '@/service/api/procate.js'
	import {getProds,UpdateBatch} from '@/service/api/pro.js'
	import ProCard from '../components/ProCard.vue'
	export default {
		data(){
			return {
				activeCateId:'',
				cates:[],
				prods:[],
				showProds:[],
				current:{}
			}
		},
		components:{
			ProCard
		},
		methods:{
			changeCate(cate) {
				this.activeCateId = cate.id
				this.showProds = this.prods.filter(m=>m.goodsClassifyId==cate.id)
			},
			async loadData(){ // 加载分类
				await this.loadPro()
				getSelfCates({size:99,current:1}).then(async res=>{
					if(res.code==200) {
						let cates = []
						for (var i = 0; i < res.data.records.length; i++) {
						 	let m= res.data.records[i]
							if(m.count>0){
								cates.push({...m})
							}
						}
						this.cates = cates
						this.changeCate(cates[0])
					}
				})
			},
			async loadPro(){ // 加载商品
				try{
					const res = await getProds({size:999,current:1})
					this.prods = res.code===200?  res.data.records:[]
				}catch(e){
					//TODO handle the exception
					this.prods =[]
				}
			},
		},
		mounted () {
			this.loadData()
		}
	}
</script>

<style scoped lang="scss">
	$barHeight: 96rpx;
	$cateWidth: calc(750rpx/4);
	
	.content {
		display: flex;
		align-items: flex-start;
		overflow: hidden;
		height: calc(100% - $barHeight);
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
	.goods-list {
		width: calc(100% - $cateWidth);
		height: 100%;
		overflow-x: hidden;
		padding-bottom: calc($barHeight + var(--window-bottom));
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
</style>