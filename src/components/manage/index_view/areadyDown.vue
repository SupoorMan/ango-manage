<!-- 已下架 -->
<template>
	<view>
		<IllustracteCard title="已下架" >
			<p>已下架代表该商品暂时停止售卖，顾客点餐时会看不到该商品</p>
		</IllustracteCard>
		<!-- 商品 -->
		<scroll-view class="goods-list" :scroll-y="true" :scroll-with-animation="true">
			<ProCard :item="pro" type="down" v-for="pro in prods" :key="pro.id"  @updatePro="updatePro"/>
			<Empty content="抱歉,您暂未配置该类型商品" v-if="prods.length===0 && !loading"/>
		</scroll-view>
		
	</view>
</template>

<script>
	import {getProds,addOrUpdatePro} from '@/service/api/pro.js'
	import IllustracteCard from'../components/IllustrateCard.vue'
	import ProCard from'../components/ProCard.vue'
	export default {
		data(){
			return {
				prods:[],
				loading: true,
			}
		},
		components:{IllustracteCard,ProCard},
		methods:{
			
			async updatePro(item){
				uni.showLoading()
				try{
					await addOrUpdatePro(item)
					uni.hideLoading()
					uni.showToast({
						icon:'none',
						title:'操作成功'
					})
					await this.loadData()
				}catch(e){
					uni.hideLoading()
					//TODO handle the exception
				}
			},
			async loadData(){ // 加载商品
				this.loading=true
				try{
					const res = await getProds({size:999,current:1,selling:0})
					this.prods= res.code===200?  res.data.records:[],
					this.loading = false
				}catch(e){
					//TODO handle the exception
					this.prods= []
					this.loading = false
				}
				
			}
		}
	}
</script>

<style scoped lang="scss">
</style>