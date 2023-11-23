<template>
	<view class="page-body">
		<view class="form-box">
			
		
			<uni-forms ref="form" :modelValue="formData"  :rules="rules" :border="true" :label-width="80" label-position="right">
				<uni-forms-item required label="分组名称" name="classifyName">
					<uni-easyinput :inputBorder="false"  type="text" v-model="formData.classifyName" placeholder="请输入分组名称" />
				</uni-forms-item>
				<uni-forms-item label="分组描述" name="intro">
					<uni-easyinput :inputBorder="false"  type="text" v-model="formData.intro" placeholder="请输入分组描述" />
				</uni-forms-item>
				<uni-forms-item label="排序索引" name="index" style="border-bottom: 2rpx solid #eee;">
					<uni-easyinput :inputBorder="false"  type="text" v-model="formData.index" placeholder="不填可默认生成" />
				</uni-forms-item>
				<!-- <uni-forms-item label="是否置顶" name="top">
					<switch :checked="formData.top" color="#f94170" style="transform:scale(0.7)" @change="isTop"/>
				</uni-forms-item> -->
			</uni-forms>
		</view>
		<view @click="delIt" class="delete-btn">{{formData.id?`删除`:`重置`}}</view>
		<view @click="submitForm" class="btn">保存</view>
	</view>
</template>

<script >
	import { addOrUpdateCate,deleteCate } from '@/service/api/procate.js'
	export default {
		data(){
			return {
				formData: {
					classifyName:'' , /* 分类名称 */ 
					intro:'',
					index:''
				},
				rules:{
					classifyName: {
						rules:[
							{
								required:true,
								errorMessage: '必填项',}
						]
						
					}
				}
			}
		},
		methods:{
			submitForm(){
				this.$refs.form.validate().then(async data=>{
					addOrUpdateCate(this.formData).then(res=>{
						if(res.code===200) {
							uni.showModal({
								title:'温馨提示',
								content:`操作成功，是否继续${this.formData.id ? '编辑':'新增'}分组`,
								cancelText:'返回',
								confirmText:'继续',
								success:(res)=> {
									if(res.cancel) {
										uni.navigateBack({delta:1})
										return
									}
									if(!this.formData.id) {
										this.formData = {
											classifyName:'' , /* 分类名称 */ 
											intro:'',
											index:''
										}
									}
									
								}
							})
							
						}else{
							uni.showModal({
								title:'温馨提示',
								content: `提交失败(${res.msg}),请稍后重试`,
								showCancel:false
							})
						}
					})
				})
			},
			 delIt(){
				if(this.formData.id) {
					 deleteCate(this.formData.id).then(res=>{
						 if(res.code==200){
							 uni.showToast({
							 	icon:'none',
								title:'删除成功',
							 })
							 setTimeout(()=>{
								 uni.navigateBack({delta:1})
							 },1000)
						 }
					 })
				}else{
					this.formData ={
						classifyName:'' , /* 分类名称 */ 
						intro:'',
						index:''
					}
				}
				
			}
		},
		onLoad(option) {
			let _this = this;
			if (option.id) {
				uni.setNavigationBarTitle({
					title:'编辑商品'
				})
				const eventChannel = this.getOpenerEventChannel();
				eventChannel.on('acceptDataFromOpenerPage', function(data) {
					if (data) {
						_this.formData = { ...data };
					}
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.page-body {
		.form-box {
			padding: 32rpx;
			height: calc(100vh - 120rpx - env(safe-area-inset-bottom));
			overflow-y: auto;
			margin-bottom: 32rpx;
		}
	.btn ,.delete-btn {
		display: inline-block;
		vertical-align: middle;
		width: 260rpx;
		border-radius: 60rpx;
		line-height: 64rpx;
		padding: 4rpx 36rpx;
		color: #fff;
		background: linear-gradient(90deg,#3F757C, $primary-color);//$primary-color;
		text-align: center;
		margin-left: 64rpx;
		box-shadow: 0 2rpx 10rpx 0 rgba(230,230,230);
	}
	.delete-btn {
		
		background: #fff;
		color: $red-color;
	
		// border:2rpx solid  $uni-color-primary;
	}}
</style>