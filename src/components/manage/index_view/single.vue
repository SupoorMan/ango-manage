<!-- 单点不送 -->
<template>
	<view>
		<IllustracteCard title="单点不送" >
			<p>商品设置单点不送后，用户不能单独购买该商品，可以有效保障每单的利润</p>
		</IllustracteCard>
		<!-- 商品 -->
		<scroll-view class="goods-list" :scroll-y="true" :scroll-with-animation="true">
			<ProCard :item="pro" v-for="pro in prods" :key="pro.id" />
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
				loading:true
			}
		},
		components:{ IllustracteCard,ProCard },
		methods:{
			getProds(){
				let prods = []
					for (var i = 1; i < 16; i++) {
						prods.push({
							id: `fruit_${i}`,
							title: '美早山东精品大樱桃大量上市'+i,
							price: (Math.random()*100).toFixed(1),
							sellNum: parseInt(Math.random()*10),
							count: parseInt(Math.random()*10)
						})
					}
				this.prods = prods
			},
			async loadData(){ // 加载商品
			this.loading=true
				try{
					const res = await getProds({size:999,current:1,single:1})
					this.prods= res.code===200?  res.data.records:[]
					this.loading=false
				}catch(e){
					//TODO handle the exception
					this.prods= []
					this.loading=false
				}
				
			}
		},
		
	}
</script>

<style scoped lang="scss">
</style>