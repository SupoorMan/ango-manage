<template>
    <el-row>
        <el-col :span="3">
            <el-input v-model="worker" placeholder="领取人">
                <template #prepend>姓名</template>
            </el-input>
        </el-col>
        <el-col :span="1">
        </el-col>
        <el-col :span="4">
            <el-input v-model="provinceName" placeholder="全名 例如: 浙江省">
                <template #prepend>省</template>
            </el-input>
        </el-col>
        <el-col :span="1">
        </el-col>
        <el-col :span="4">
            <el-input v-model="cityName" placeholder="全名 例如: 杭州市">
                <template #prepend>市</template>
            </el-input>
        </el-col>
        <el-col :span="1">
        </el-col>
        <el-col :span="4">
            <el-input v-model="areaName" placeholder="全名 例如: 西湖区">
                <template #prepend>区</template>
            </el-input>
        </el-col>
        <el-col :span="1">
        </el-col>
        <el-col :span="5">
            <el-button type="success" @click="search">搜索</el-button>
        </el-col>
    </el-row>

    <el-table :data="tableData" style="width: 100%" highlight-current-row :row-class-name="tableRowClassName">
        <el-table-column property="id" label="ID" width="80" />
        <el-table-column property="worker" label="领取人" width="100" />
        <el-table-column property="name" label="名称" width="240" />
        <el-table-column property="tel" label="手机号" width="240" />
        <el-table-column property="addr" label="地址" show-overflow-tooltip />

        <el-table-column label="操作">
            <template #default="scope">
                <el-button size="small" type="success" v-if="scope.row.status == 0"
                    @click="handleAdd(scope.$index, scope.row)">领取</el-button>
                <el-button size="small" type="danger" v-if="scope.row.status == 1"
                    @click="handleUnAdd(scope.$index, scope.row)">未通过</el-button>
                <span v-if="scope.row.status == 2" style="margin-left: 10px;">已拒绝</span>
            </template>
        </el-table-column>
    </el-table>

    <div class="pagination">
        <el-pagination background layout="prev, pager, next" :page-size="size" :total="totals" @current-change="crtPage" />
    </div>
</template>
  
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from '../http/index'

const crt = ref(1)
const size = ref(15)
const totals = ref(0)
const tableData: any = ref([])

onMounted(() => {
    search(crt.value, size.value)
})

const provinceName = ref('')
const cityName = ref('')
const areaName = ref('')
const worker = ref('')

const search = (current: number, sizeIndex: number) => {
    if (sizeIndex === undefined) {
        sizeIndex = size.value
    }
    let path = '/fruitShop/page?size=' + sizeIndex + '&current=' + crt.value
    if (provinceName.value != '') {
        path = path + '&provinceName=' + provinceName.value;
    }
    if (cityName.value != '') {
        path = path + '&cityName=' + cityName.value;
    }
    if (areaName.value != '') {
        path = path + '&areaName=' + areaName.value;
    }

    axios.get(path)
        .then((res) => {
            totals.value = res.data.total
            tableData.value = res.data.records
        })
}

const crtPage = (current: number) => {
    crt.value = current
    search(current, size.value)
}

interface User {
    id: number
    worker: string
    name: string
    tel: string
    addr: string
    status: number
}

const tableRowClassName = ({
    row,
    rowIndex,
}: {
    row: User
    rowIndex: number
}) => {
    if (row.status === 1) {
        return 'add-row'
    } else if (row.status === 2) {
        return 'unadd-row'
    }
    return ''
}
const handleAdd = (index: number, row: User) => {
    if (worker.value === '') {
        alert('请填写领取人')
        return
    }

    let param = {
        'id': row.id,
        'status': 1,
        'worker': worker.value
    }
    axios.post('/fruitShop/update', param)
        .then((res) => {
            search(crt.value, size.value)
        })
}
const handleUnAdd = (index: number, row: User) => {
    let param = {
        'id': row.id,
        'status': 2
    }
    axios.post('/fruitShop/update', param)
        .then((res) => {
            search(crt.value, size.value)
        })
}

</script>
  
<style>
.pagination {
    margin-top: 20px;
}

.el-table .add-row {
    --el-table-tr-bg-color: rgb(241, 241, 242);
    color: rgb(76, 192, 19);
}

.el-table .unadd-row {
    --el-table-tr-bg-color: rgb(241, 241, 242);
    color: rgb(243, 115, 115);
}
</style>
  