<!-- 全部 -->
<template>
	<!-- 水果分类和列表 -->
	<view class="content">
		<!-- 类别 -->
		<scroll-view :scroll-y="true" class="cates-list" :scroll-with-animation="true" :show-scrollbar="false">
			<view class="cate-cell" v-for="cate in cateProds" :key="cate.id" :class="{'active':activeCateId==cate.id}" @tap="()=>activeCateId=cate.id+''">
				<p class="p">{{cate.classifyName}}</p>	
			</view>
			<view class="blank-block"></view>
		</scroll-view>
		<!-- 商品 -->
		<scroll-view class="goods-list" :scroll-into-view="'a_'+activeCateId" :scroll-y="true" :scroll-with-animation="true">
			<view v-for="catePro in cateProds" :key="catePro.id">
				<view :id="'a_'+catePro.id" class="cate-title">{{catePro.classifyName}}</view>
				<ProCard :item="pro" type="all" v-for="pro in catePro.children" :key="pro.id" @showCount="showCount" @updatePro="updatePro"/>
			</view>
		</scroll-view>
		<HomeBar />
		<uni-popup ref="popup">
			<HomeSetCount :current="current" @popOpenChange="popOpenChange"/>
		</uni-popup>
	</view>
	
</template>

<script>
	import { getSelfCates } from '@/service/api/procate.js'
	import {getProds,addOrUpdatePro} from '@/service/api/pro.js'
	import ProCard from'../components/ProCard.vue'
	import HomeBar from'../components/bar/homeBar.vue'
	import HomeSetCount from '../components/HomeSetCount.vue'
	export default {
		data(){
			return {
				activeCateId:'',
				cateProds:[],
				current:{}
			}
		},
		components:{
			ProCard,
			HomeBar,
			HomeSetCount
		},
		methods:{
			showCount(currentItem){
				this.current = currentItem
				this.$refs.popup.open('bottom')
			},
			async updatePro(item){
				uni.showLoading()
				try{
					await addOrUpdatePro(item)
					uni.hideLoading()
					this.loadData()
					uni.showToast({
						icon:'none',
						title:'操作成功'
					})
				}catch(e){
					uni.hideLoading()
					//TODO handle the exception
				}
			},
			async popOpenChange(item){
				if(item){
					this.updatePro(item)
					this.current.num = item.num
				}
				this.$refs.popup.close()
				this.current={}
			},
			loadData(){ // 加载分类
				getSelfCates({size:99,current:1}).then(async res=>{
					if(res.code==200) {
						const prods = await this.loadPro()
						const groupByGoodsClassifyId = prods.reduce((prv,cur)=> {
							if(prv[cur.goodsClassifyId]) {
								prv[cur.goodsClassifyId].push(cur)
							}else{
								prv[cur.goodsClassifyId] = [cur]
							}
							return prv
						},{})
						let cates = []
						for (var i = 0; i < res.data.records.length; i++) {
						 	let m= res.data.records[i]
							if(m.count>0){
								cates.push({...m,children:groupByGoodsClassifyId[m.id] })
							}
						}
						this.cateProds = cates
						this.activeCateId =cates.length>0? cates[0].id :''
					}
				})
			},
			async loadPro(){ // 加载商品
				try{
					const res = await getProds({size:999,current:1,})
					return res.code===200?  res.data.records:[]
				}catch(e){
					//TODO handle the exception
					return []
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	$barHeight: 100rpx;
	$cateWidth: calc(750rpx/4);
	
	.content {
		display: flex;
		align-items: flex-start;
		overflow: hidden;
		height: calc( 100% - $barHeight);
		background-color: #FDFDFD;
		
	}
	.cates-list {
		background-color: $bar-bg-color;
		height: 100%;
		width: $cateWidth;
	
		.blank-block {
			padding-bottom: $barHeight;
		}
		view.cate-cell {
			width: $cateWidth;
			padding: 24rpx;
			color: #6A6A6A;
			position: relative;
			p ,.p{
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
		.cate-title {
			color: #6A6A6A;
			padding-top: 24rpx;
			padding-bottom: 16rpx;
		}
	}
</style>