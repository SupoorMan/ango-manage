<!-- 已售磬 -->
<template>
	<view>
		<IllustracteCard title="已售磬" >
			<p>商品设置单点不送后，用户不能单独购买该商品，可以有效保障每单的利润</p>
		</IllustracteCard>
		<!-- 商品 -->
		<scroll-view class="goods-list" :scroll-y="true" :scroll-with-animation="true">
			<ProCard :item="pro" type="sellout" v-for="pro in prods" :key="pro.id" />
			<Empty content="抱歉,暂无售罄的商品" v-if="prods.length===0&& !loading"/>
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
				loading:true,
			}
		},
		components:{IllustracteCard,ProCard},
		methods:{
		
			async loadData(){ // 加载商品
			this.loading=true
				try{
					const res = await getProds({size:999,current:1,num:0})
					this.prods = res.code===200?  res.data.records:[],
					this.loading=false
				}catch(e){
					//TODO handle the exception
					this.prods= []
					this.loading=false
				}
				
			}
		}
	}
</script>

<style scoped lang="scss">
</style>