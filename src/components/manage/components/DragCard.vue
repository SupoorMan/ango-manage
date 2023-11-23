<!-- 拖拽卡片 -->
<template>
	<view class="">
		<slot></slot>
		<view class="opt-box"
			@touchstart.stop="startMove($event,index)" @touchmove.stop="moveTouch($event,index)" @touchend.stop="endTouch($event,index)">
			<uni-icons type="bars" size="20" color="#3F757C"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			startMove(e,index){
				this.currentIndex = index
				this.startY = e.changedTouches[0].clientY
			},
			moveTouch(e,index){
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
						this.list.splice(targetIndex+dragIndex,0,dragItem)
						this.currentIndex = targetIndex+dragIndex
						this.startY = e.changedTouches[0].clientY
						console.log('change')
					}else if(offsetY<0 && dragIndex-targetIndex>=0){
						this.list.splice(dragIndex-targetIndex,0,dragItem)
						this.currentIndex = dragIndex-targetIndex
						this.startY = e.changedTouches[0].clientY
					}
				}
				if(e.type==='touchend'){
					this.currentIndex = -1
				}
			},
			endTouch(e){
				if(e.type==='touchend'){
					this.currentIndex = -1
					this.startY=0
					this.moveY=0
				}
			}
		}
	}
</script>

<style scoped lang="scss">
</style>