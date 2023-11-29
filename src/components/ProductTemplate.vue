<template>
    <div class="context-box">
        <el-row :gutter="20" class="context-header">
            <el-col :span="12">
                搜索
            </el-col>

            <el-button type="success" @click="dialogVisible = true" class="add">新增</el-button>
            <el-button type="success" @click="test">新增111</el-button>
            <el-input v-model="form.cover" type="file" @change="test"/>
        </el-row>
        <el-row :gutter="20" class="context-body">
            <el-table :data="list" stripe style="width: 100%">
                <el-table-column prop="id" label="id" v-if="false" />
                <el-table-column prop="productName" label="名称" />
                <el-table-column prop="cover" label="首图" />
                <el-table-column prop="price" label="价格" />

                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
    </div>

    <el-dialog v-model="dialogVisible" title="商品模板 - 操作" width="60%" :before-close="handleClose">
        <el-form :model="form" label-width="120px">
            <el-form-item label="商品名称">
                <el-input v-model="form.productName" />
            </el-form-item>
            <el-form-item label="首图">
                <el-input v-model="form.cover" type="file" />
            </el-form-item>

            <el-form-item label="首图2222">
                <fileupload></fileupload>
            </el-form-item>

            <el-form-item label="副图">
                <el-input v-model="form.images0" type="file" />
                <el-input v-model="form.images1" type="file" />
                <el-input v-model="form.images2" type="file" />
                <el-input v-model="form.images3" type="file" />
                <el-input v-model="form.images4" type="file" />
            </el-form-item>

            <el-form-item label="简介">
                <el-input v-model="form.info" type="textarea" />
            </el-form-item>


            <el-form-item label="首图">
                <el-select v-model="form.region" placeholder="please select your zone">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Activity time">
                <el-col :span="11">
                    <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
                </el-col>
                <el-col :span="2" class="text-center">
                    <span class="text-gray-500">-</span>
                </el-col>
                <el-col :span="11">
                    <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
                </el-col>
            </el-form-item>
            <el-form-item label="Instant delivery">
                <el-switch v-model="form.delivery" />
            </el-form-item>
            <el-form-item label="Activity type">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="Online activities" name="type" />
                    <el-checkbox label="Promotion activities" name="type" />
                    <el-checkbox label="Offline activities" name="type" />
                    <el-checkbox label="Simple brand exposure" name="type" />
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources">
                <el-radio-group v-model="form.resource">
                    <el-radio label="Sponsor" />
                    <el-radio label="Venue" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity form">
                <el-input v-model="form.desc" type="textarea" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogVisible = false">
                    确定
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { ElMessageBox } from 'element-plus'
import fileupload from '@/components/file/Fileupload.vue'
import axios from '@/http/index'


// const fileInput = document.querySelector('#fileInput');
const fileInput = ref();
const file = fileInput.value;

const formData = new FormData();
formData.append('file', fileInput.value);


const test = () => {
    console.log(formData)

    axios.post('/file/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            "source":"manage"
        }
    }).then(response => {
        console.log('上传成功', response.data);
    }).catch(error => {
        console.error('上传失败', error);
    });
}


const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}

interface Pt {
    id: number
    productName: string
    cover: string


    price: string
}

const form = reactive({
    productName: '',
    cover: '',
    info: '',

    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const onSubmit = () => {
    console.log('submit!')
}

const list: Pt[] = [{
    "id": 1,
    "productName": "ss",
    "cover": "2",
    "price": "11"
}, {
    "id": 2,
    "productName": "撒打算",
    "cover": "2的撒旦",
    "price": "在这种"
}]

const handleEdit = (index: number, row: Pt) => {
    console.log(index, row)
}
const handleDelete = (index: number, row: Pt) => {
    console.log(index, row)
}

const add = () => {
    console.log("新增商品模板")
}
</script>
  
<style lang="scss" scoped>
.context-box {
    height: 100%;
    background-color: antiquewhite;

    .context-header {
        margin-left: 10px !important;
        height: 40px;

        .add {
            position: absolute;
            right: 20px;
            top: 4px;
        }
    }

    .context-body {
        margin-left: 0px !important;
        margin-right: 0px !important;
    }
}
</style>
  