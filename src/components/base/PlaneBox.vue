<template>
    <div class="main-box">
        <div class="title">
            <span>💫 进行中 - 10项</span>

            <button class="add">新增</button>
        </div>

        <div class="context">
            <el-table :data="filterTableData" style="width: 100%; margin-bottom: 20px" row-key="id" border
                :default-expand-all="false" lazy :load="load">
                <el-table-column type="expand">
                    <template #default="props">
                        <div m="4">
                            <p m="t-0 b-2">State: {{ props.row.name }}</p>
                            <p m="t-0 b-2">City: {{ props.row.address }}</p>
                            <p m="t-0 b-2">Address: {{ props.row.address }}</p>
                            <h3>Family</h3>
                            <el-table :data="props.row.family" :border="childBorder">
                                <el-table-column label="Name" prop="name" />
                                <el-table-column label="City" prop="city" />
                                <el-table-column label="Address" prop="address" />
                            </el-table>
                        </div>
                    </template>
                </el-table-column>

                <el-table-column prop="date" label="项目" sortable />
                <el-table-column prop="name" label="负责人" />
                <el-table-column prop="name" label="开始时间" sortable />
                <el-table-column prop="address" label="进度" sortable />

                <el-table-column align="right">
                    <template #header>
                        <el-input v-model="search" size="small" placeholder="Type to search" />
                    </template>
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                        <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                    </template>
                </el-table-column>
                
            </el-table>
        </div>


    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const childBorder = ref(false)
interface User {
    id: number
    date: string
    name: string
    address: string
    hasChildren?: boolean
    children?: User[]
}

const tableData: User[] = [
    {
        id: 1,
        date: '2016-05-02',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        id: 2,
        date: '2016-05-04',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        id: 3,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
        children: [
            {
                id: 31,
                date: '2016-05-01',
                name: 'wangxiaohu',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                id: 32,
                date: '2016-05-01',
                name: 'wangxiaohu',
                address: 'No. 189, Grove St, Los Angeles',
            },
        ],
    },
    {
        id: 4,
        date: '2016-05-03',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
    },
]

const search = ref('')
const filterTableData = computed(() =>
    tableData.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)
const handleEdit = (index: number, row: User) => {
    console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
    console.log(index, row)
}
const load = (
  row: User,
  treeNode: unknown,
  resolve: (date: User[]) => void
) => {
  setTimeout(() => {
    resolve([
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])
  }, 1000)
}
</script>

<style lang="scss" scoped>
.main-box {
    background-color: rgb(228, 227, 227);
    border: 1px solid rgba(0, 0, 0, 0.189);
    box-shadow: 1px 2px 8px 0px #b3b3b3;

    .title {
        height: 40px;
        padding-top: 8px;
        padding-left: 8px;
        padding-right: 8px;
        border-bottom: 1px solid #a3a3a3;

        span {
            user-select: none;
        }

        .add {
            float: right;
            color: rgb(23, 114, 84);
        }
    }

    .context {
        padding-top: 8px;
        padding-left: 8px;
        padding-right: 8px;

        // .progress{
        //     background-color: chocolate;
        // }
    }

    .progress{
            background-color: chocolate;
        }
}
</style>