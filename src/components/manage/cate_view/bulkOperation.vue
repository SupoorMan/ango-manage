<!-- 批量分类操作 -->
<template>
	<view  class="page-body">
		<view class="list" :style="currentIndex!==-1?'overflow:hidden;':''">
			<!-- :style="currentIndex===index?'transform:translateY('+moveY+'px);':''" -->
			<view class="cates-cell" 
			 v-for="(cate,index) in list" :key="cate.id" :class="{'moving':currentIndex===index}" 
			  :style="currentIndex===index?'transform:translateY('+moveY+'px);':''" >
				<view class="" @tap="toggleCate(cate)">
					<uni-icons type="checkbox-filled" size="24" color="#f94170" v-if="selectedId.includes(cate.id)"></uni-icons>
					<uni-icons type="circle" size="24" color="#b5b5b5" v-else></uni-icons>
				</view>
				<view class="content">
					<view>{{cate.classifyName}}</view>
					<view class="tip-text">{{cate.index}}个商品</view>
				</view>
				<view class="opt-box"
					@touchstart.stop="startMove($event,index)" @touchmove.stop="moveTouch($event,index)" @touchend.stop="endTouch($event,index)">
					<uni-icons type="bars" size="20" color="#3F757C"></uni-icons>
				</view>
			</view>
		</view>
		<view @click="delChecked" class="delete-btn">删除</view>
	</view>
	
</template>

<script >
	import { getSelfCates,addOrUpdateCate,UpdateCateBatch } from '@/service/api/procate.js'
	export default {
		data(){
			return {
				list:[],
				pages: {
					size:10,
					current:1,
					total:99
				},
				selectedId:[],
				currentIndex: -1,
				// startX:0,
				startY:0,
				// moveX:0,
				moveY:0,
			}
		},
		
		methods:{
			toggleCate(item){
				const index= this.selectedId.indexOf(item.id)
				if(index!==-1){
					this.selectedId.splice(index,1)
				}else{
					this.selectedId.push(item.id)
				}
			},
			delChecked(){
				if(!this.selectedId.length){
					uni.showToast({
						icon:'none',
						title:'请选择需要删除的分组'
					})
				}
			},
			startMove(e,index){
				this.currentIndex = index
				this.startY = e.changedTouches[0].clientY
			},
			async moveTouch(e,index){
				const offsetY = e.changedTouches[0].clientY - this.startY
				// console.log(this.currentIndex)
				this.moveY = offsetY
				// 每上下移动一位则交换元素位置
				let dragIndex = this.currentIndex
				let targetIndex= Math.floor(Math.abs(offsetY)/uni.upx2px(142))
				
				if(targetIndex>=1){
					let dragItem  = {...this.list[dragIndex]}
					this.list.splice(dragIndex,1)
					if(offsetY > 0 && targetIndex<this.list.length){
						let changeItem = {...this.list[targetIndex+dragIndex]}
						this.list.splice(targetIndex+dragIndex,0,{...dragItem,index:changeItem.index})
						this.list[targetIndex+dragIndex].index = dragItem.index
						this.currentIndex = targetIndex+dragIndex
						this.startY = e.changedTouches[0].clientY
						// console.log('change')
					}else if(offsetY<0 && dragIndex-targetIndex>=0){
						let changeItem = this.list[dragIndex-targetIndex]
						this.list.splice(dragIndex-targetIndex,0,{...dragItem,index:changeItem.index})
						changeItem.index = dragItem.index
						this.currentIndex = dragIndex-targetIndex
						this.startY = e.changedTouches[0].clientY
					}
				}
			},
			async endTouch(e){
				 this.updateSort()
				if(e.type==='touchend'){
					
					this.currentIndex = -1
					this.startY=0
					this.moveY=0
					
				}
			},
			 updateSort(){
				 UpdateCateBatch(this.list.map((m,i)=>({id:m.id,index:m.index})))
				 // .then(res=>{
					//   if(res.code==200){
					// 	this.loadList()
					//   }
				 // })
				// let newpos = null
				// let moveItem = this.list[this.currentIndex]
				// // 调整一个元素到两个元素中间
				// if(this.currentIndex>0 && this.currentIndex<this.list.length-1){
				// 	let prvItem = this.list[this.currentIndex-1]
				// 	let nextItem = this.list[this.currentIndex+1]
				// 	newpos = (prvItem.index+nextItem.index)/2
				// }else if(this.currentIndex===0) {// 调整一个元素到第一个元素
				// 	let oldFirst = this.list[this.currentIndex+1]
				// 	newpos = oldFirst.index/2
				// } else if(this.currentIndex===this.list.length-1){// 调整一个元素到最后一个元素
				// 	let oldLast = this.list[this.currentIndex-1]
				// 	newpos = oldLast.index+100
				// }else {
				// 	console.log('元素移动位置错误')
				// }
				// if(newpos%1!==0){ // 当新索引不为整数时，重置索引
				// 	  UpdateCateBatch(this.list.map((m,i)=>({id:m.id,index: (i+1)*100}))).then(res=>{
				// 		  if(res.code==200){
				// 			this.loadList()
				// 		  }
				// 	  })
				// }else{
					
				// 	  addOrUpdateCate({id:moveItem.id, index: newpos}).then(res=>{
				// 		  if(res.code==200){
				// 			moveItem.index=newpos
				// 		  }
				// 	  })
				// }
				
			},
			loadList(){
				getSelfCates(this.pages).then(res=>{
					if(res.code==200) {
						this.list = res.data.records
						this.pages.total= res.data.total
					}
				})
			},
		},
		onLoad() {
			this.loadList();
			// this.list = [...this.procates]
		}
	}
</script>

<style scoped lang="scss">
	$barheight: 110rpx;
	.page-body {
		height: 100%;
		overflow: hidden;
		.list {
			height: calc(100% - $barheight - env(safe-area-inset-bottom));
			position: relative;
			display: flex;
			flex-direction: column;
			overflow-y: auto;
		}
	}
	.cates-cell {
		margin: 0 24rpx;
		padding: 24rpx 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2rpx solid $border-color;
		background-color: #fff;
		height: 142rpx;
		&.moving {
			// opacity: 0.9;
			background-color: #f8f8f8;
			position: relative;
			// position: absolute;
			width: calc(100% - 48rpx);
			box-shadow: 2rpx 2rpx 2rpx 0  #f8f8f8;
			
		}
		.content {
			padding-left: 12rpx;
			flex: 1;
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
			padding: 24rpx;
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
	.delete-btn {
		// display: inline-block;
		// vertical-align: middle;
		width: 390rpx;
		border-radius: 66rpx;
		line-height: 64rpx;
		// padding: 036rpx;
	
		// background: linear-gradient(90deg,#3F757C, $primary-color);//$primary-color;
		text-align: center;
		margin: 16rpx auto;
		border: 2rpx solid $red-color;
		background: #fff;
		color: $red-color;
	}
</style>