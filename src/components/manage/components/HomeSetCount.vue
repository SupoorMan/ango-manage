<!-- 设置库存弹出框内容 -->
<template>
	<view class="pop-content">
		<uni-nav-bar title="库存" left-text="取消" right-text="完成" :border="false" @clickRight="saveCount" @clickLeft="close"></uni-nav-bar>
		<view class="content">
			<uni-forms ref="form" class="form-box" border :label-width="90" >
				<uni-forms-item required label="剩余库存" name="num">
					<uni-easyinput :styles="styles" :inputBorder="false"  type="number" v-model="formData.num" placeholder="请输入剩余库存" />
					<view class="opt-btn">
						<text @tap="setCount(0)">售罄</text>｜
						<text @tap="setCount(9999)">最大</text>
					</view>	
					
				</uni-forms-item>
				<!-- <uni-forms-item required label="最大库存" name="maxcount">
					<uni-easyinput :inputBorder="false"  type="number" v-model="formData.maxcount" placeholder="请输入最大库存" />
				</uni-forms-item> -->
				<!-- <uni-forms-item label="自动补足" name="name">
					<switch :checked="formData.autoFix" color="#f94170" style="transform:scale(0.7);float: right;" @change="toggleFixed" />			
				</uni-forms-item> -->
			</uni-forms>
		</view>
	</view>
</template>

<script>
	
	export default {
		props:['current'],
		data(){
			return {
				formData:{},
				styles: {width: '70%','border-bottom':'2rpx solid #e5e5e5'},
				rules:[{
					name: {
						required:true,
					}
				}]
			}
		},
		methods:{
			setCount(type){
				this.formData.num =type
			},
			toggleFixed(e){
				this.formData.autoFix= e.detail.value
			},
			saveCount(){
				console.log('save')
				this.$emit('popOpenChange',this.formData)
			},
			close(){
				this.$emit('popOpenChange',false)
			}
		},mounted() {
			this.formData = {...this.current}
		}
	}
</script>

<style lang="scss" scoped>
	.pop-content {
		border-radius: 24rpx 24rpx 0 0;
		overflow: hidden;
		background-color: #fff;
		padding-bottom: 64rpx;
		.content {
			padding: 24rpx;
		}
	}
	
	.opt-btn {
		display: inline;
		position: absolute;
		top: 24rpx;
		right: 24rpx;
	}
	.form-box {
		padding: 32rpx;
		// height: calc(100vh - 300rpx);
		overflow-y: auto;
		// margin-bottom: 32rpx;
		background-color: #fff;
		text {
			font-size: 24rpx;
		}
	}
</style>