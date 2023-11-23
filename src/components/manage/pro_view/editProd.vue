<template>
	<view class="page-body">
		<view class="form-box">
			<uni-forms ref="form" :modelValue="formData" labelAlign="right" labelPosition="right" :label-width="labelWidth" :rules="rules">
				<uni-section title="基础信息" type="line">
					 <view  class="section" >
						<uni-forms-item required name="images" :label-width="1">
							<uni-file-picker 
								:auto-upload="false"
								fileMediatype="image" 
								:image-styles="imgStyles" 
								mode="grid"
								v-model="formData.images" limit="5"
								@select="uploadfiles($event,'images')"
								@fail="uploadFail"
								@delete="deletFiles"
								>
								<view style="text-align: center;">
									<uni-icons type="camera" color="" size="40"></uni-icons> 
									<view class="fs12">上传图片{{formData.images ? formData.images.length:0}}/5</view>
								</view>
								</uni-file-picker>
						</uni-forms-item>
						<uni-forms-item required name="productName" label="商品名称" >
							<uni-easyinput type="text" :styles="styles" v-model="formData.productName" placeholder="请输入商品名称"/>
						</uni-forms-item>
						<uni-forms-item required name="goodsClassifyId" label="菜单分组" >
							<uni-data-select :styles="styles" :localdata="menuData" v-model="formData.goodsClassifyId"></uni-data-select>
						</uni-forms-item>
						<uni-forms-item required name="classifyId" label="商品分类" >
							<uni-data-picker  :styles="styles" :map="mapValue" :localdata="cateData" popup-title="请选择" 
								v-model="formData.classifyId"></uni-data-picker>
						</uni-forms-item>
					 </view>
				</uni-section>
				<uni-section title="售卖信息" type="line">
					 <view class="section" >
						<uni-forms-item required name="spaceUnit" label="商品份量" >
							<uni-easyinput :styles="{...styles,...width85}" type="text" v-model="formData.spaceUnit" placeholder="请输入"/>
							<text class="unit">份</text>
						</uni-forms-item>
						<uni-forms-item required name="price" label="销售价" >
							<uni-easyinput :styles="{...styles,...width85}" type="digit" v-model="formData.price" placeholder="请输入"/> 
							<text class="unit">元</text>
						</uni-forms-item>
						<!-- <uni-forms-item required name="vipPrice" label="会员价" >
							<uni-easyinput :styles="{...styles,...width85}" type="digit" v-model="formData.vipPrice" placeholder="请输入"/> 
							<text class="unit">元</text>
						</uni-forms-item> -->
						<uni-forms-item required name="num" label="商品库存" style="align-items: center;">
							<uni-easyinput :styles="styles" type="number" v-model="formData.num" placeholder="请输入库存" />
							<view class="opt-btn">
								<text @tap="setCount(0)">置零</text>
								｜
								<text @tap="setCount(9999)">最大</text>
							</view>
							
						</uni-forms-item>
					</view>
				</uni-section>
				<uni-section title="详细信息" type="line">
					 <view  class="section" >
						<uni-forms-item name="address" label="商品产地" >
							<uni-easyinput :styles="styles" type="text" v-model="formData.address" placeholder="请输入产地"/>
						</uni-forms-item>
						<uni-forms-item name="info" label="商品描述" >
							<uni-easyinput :styles="styles" type="textarea" v-model="formData.info" placeholder="200字以内,请输入"/>
						</uni-forms-item>
					</view>
				</uni-section>
				
				<uni-section title="高级信息" type="line">
					<view class="section">
						<uni-forms-item name="type" label="首页推荐" >
							<uni-data-select :styles="styles" :localdata="typeData" v-model="formData.type"></uni-data-select>
						</uni-forms-item>
						<uni-forms-item name="minNum" label="最少购买" >
							<uni-easyinput :styles="{...styles,...width85}" type="number" v-model="formData.minNum" placeholder="请输入"/> 
							<text class="unit">份</text>
						</uni-forms-item>
						<!-- <uni-forms-item name="sellNumBase" label="基础销量" >
							<uni-easyinput :styles="{...styles,...width85}" type="number" v-model="formData.sellNumBase" placeholder="请输入"/>
							<text class="unit">份</text>
						</uni-forms-item> -->
						<uni-forms-item label="单点不送" name="single" >
							<switch :checked="formData.single" color="#f94170" style="transform:scale(0.7)" @change="toggleSingle"/>
						</uni-forms-item>
					</view>
				</uni-section>
			</uni-forms>
		</view>
		<view @click="delPro" class="delete-btn">{{formData.id?`删除`:`重置`}}</view>
		<view @click="submitForm" class="btn">保存</view>
	</view>
</template>

<script >
	import {getCates,getSelfCates} from '@/service/api/procate.js'
	import {uploadFile} from '@/service/api/file.js'
	import {deletePro,addOrUpdatePro} from '@/service/api/pro.js'
	import {getModalPro} from '@/service/api/modalPro.js'
	export default {
		data(){
			return {
				styles: {backgroundColor: "#f8f8f8",borderColor:"#f8f8f8",},
				width85: {width: `85%`},
				labelWidth: uni.upx2px(156),
				disable:false,
				rules:{
					images: {
						rules:[{
							required:true,
							errorMessage:'请上传至少一张商品图片'
						}]
					},productName: {
						rules:[{
							required:true,
							errorMessage:' '
						}]
					},goodsClassifyId: {
						rules:[{
							required:true,
							errorMessage:'请选择菜单分组'
						}]
					},classifyId: {
						rules:[{
							required:true,
							errorMessage:'请选择商品分类'
						}]
					},spaceUnit: {
						rules:[{
							required:true,
							errorMessage:' '
						}]
					},price: {
						rules:[{
							required:true,
							errorMessage:' '
						}]
					},vipPrice: {
						rules:[{
							required:true,
							errorMessage:' '
						}]
					},num: {
						rules:[{
							required:true,
							errorMessage:' '
						}]
					}
				},
				imgStyles:{
						"height": 90,	// 边框高度
						"width": 90,	// 边框宽度
						"background":"#f8f8f8",
						"border":{ // 如果为 Boolean 值，可以控制边框显示与否
							"color":"#eee",		// 边框颜色
							"width":"2rpx",		// 边框宽度
							"style":"solid", 	// 边框样式
							"radius":"12rpx" 		// 边框圆角，支持百分比
						}
					},
				formData:{
					type:0,
					sellNum:1,
					single:0,
				},
				menuData:[],
				cateData:[],
				typeData:[ 
					// {text: "普通商品", value: 0},
					{text: "畅销单品", value:1},
					{text: "新品推荐", value:3}],
				mapValue:{text:'classifyName',value:'id',children: 'list'}
				
			}
		},
		methods:{
			toggleSingle(e){
				this.formData.single = e.detail.value
			},
			setCount(value){
				this.formData.num = value
			},
			submitForm(){
				this.$refs.form.validate().then(data=>{
					
					addOrUpdatePro({...this.formData,images:JSON.stringify(data.images),cover:data.images[0].url,single:data.single?1:0}).then(res=>{
						if(res.code===200) {
							 uni.showModal({
								title:'温馨提示',
								content:`操作成功，是否继续${this.formData.id ? '编辑':'新增商品'}`,
								cancelText:'返回',
								confirmText:'继续',
								success:(res)=> {
									if(res.cancel) {
										uni.navigateBack({delta:1})
										return
									}
									if(!this.formData.id) {
										this.formData = {
											type:0,
											sellNum:1,
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
			async delPro(){
				if(this.formData.id) { 
					deletePro(this.formData.id).then(res=>{
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
					this.formData ={type:0, sellNum:1}
				}
				
			},
			async uploadfiles(file,keyName){
				const { code, data } = await uploadFile('pro-photos', file.tempFiles[0]);
				if(code===200){
					const element = {
							"name":file.tempFiles[0].name,
							"extname":file.tempFiles[0].extname,
							"url":data,
						}
					if(this.formData[keyName]){
						this.formData[keyName].push(element)
					}else{
						this.formData[keyName]= [element]
					}
					
				}
			},
			uploadFail(files){
				uni.showToast({
					title:'上传失败，请稍后重试'
				})
				console.log('error',files)
			},
			deletFiles(files){
				console.log('delet',files)
			},
			loadCates(){ // 获取商品分类
				getCates().then(res=>{
					if(res.code==200){
						this.cateData = res.data.children
					}
					// console.log(res.data.list)
				})
			},
			loadMenu(){ // 获取商品菜单分组
				getSelfCates({current:1,size:99}).then(res=>{
					if(res.code==200) {
						this.menuData = res.data.records.map(m=>({text: m.classifyName,value:m.id}))
					}
				})
			},
			loadModalPro(_id){
				getModalPro(_id)
			}
		},
		onLoad(option) {
			let _this = this;
			this.loadCates() // 分类加载
			this.loadMenu() // 分组加载
			if(option.type){// 模版商品
				// 加载模版商品
				loadModelPro(option.id)
				this.formData = {tid:option.id}
			}else{
				if(option.goodsClassifyId){
					this.formData = {...this.formData,goodsClassifyId:option.goodsClassifyId}
				}else if (option.id) {
					const eventChannel = this.getOpenerEventChannel();
					eventChannel.on('acceptDataFromOpenerPage', function(data) {
						if (data) {
							_this.formData = { ...data,single: data.single ?true:false};
							
							if(data.images){
								_this.formData.images = JSON.parse(data.images)
							}
						}
					});
				}
			}
				
		}
	}
</script>

<style scoped lang="scss">
	.page-body {
		background-color: $bg-color;
		.section {
			padding: 0 24rpx 10rpx 24rpx;
			margin-bottom: 24rpx;
		}
		.fs12 {
			font-size: 22rpx;
			color: $tip-text-color;
			
		}
		.form-box {
			// padding: 32rpx;
			height: calc(100vh - 140rpx - env(safe-area-inset-bottom));
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
	}
	.unit {
		position: absolute;
		right: 33rpx;
		top: 0;
		line-height: 36px;
		}
	.opt-btn {
			position: absolute;
			right: 64rpx;
			 top: 0;
			 line-height: 36px;
			 font-size: 26rpx;
			 color:#999;
			 z-index: 99;
		}
	}
</style>