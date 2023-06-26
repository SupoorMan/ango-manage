<script setup lang="ts">
import axios from '../http/index'
import router from '../router/index'

import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { RouterLink } from 'vue-router';

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const username = ref('')
const invite = ref('')

const register = () => {
  let param = {
    "username": username.value,
    "invite": invite.value,
    "type": 1
  }
  axios.post('/auth/register', param)
    .then((res: any) => {
      if (res.code === 200) {
        console.log(res.code)
        router.push("/")
      }
    })
}
</script>

<template>
  <div>
    <div class="tab-box">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="邮箱" name="first">
          <el-input v-model="username" placeholder="Please input email" clearable input-style="width:68%"
            class="username-input">
            <template #prepend>邮&ensp;&ensp;箱</template>
          </el-input>
          <el-input v-model="invite" clearable placeholder="Please input invite" input-style="width:68%"
            class="password-input">
            <template #prepend>邀请码</template>
          </el-input>

          <br />
          <el-button type="primary" link @click="register">
            <el-icon>
              <Sugar />
            </el-icon>
            &nbsp;注册
          </el-button>
        </el-tab-pane>

        <el-tab-pane label="手机" name="second">
          <el-input v-model="username" placeholder="Please input email" clearable input-style="width:68%"
            class="username-input">
            <template #prepend>手&ensp;&ensp;机</template>
          </el-input>
          <el-input v-model="invite" clearable placeholder="Please input password" input-style="width:68%"
            class="password-input">
            <template #prepend>验证码</template>
          </el-input>

          <br />
          <el-button type="primary" link @click="register">
            <el-icon>
              <Watermelon />
            </el-icon>
            &nbsp;发送短信
          </el-button>
          <el-button type="primary" link @click="register">
            <el-icon>
              <Pear />
            </el-icon>
            &nbsp;注册
          </el-button>
        </el-tab-pane>

        <el-tab-pane label="微信" name="third">
          <el-input v-model="username" placeholder="Please input email" clearable input-style="width:68%"
            class="username-input">
            <template #prepend>邮&ensp;&ensp;箱</template>
          </el-input>
          <el-input v-model="invite" type="password" clearable placeholder="Please input password" show-password
            input-style="width:68%" class="password-input">
            <template #prepend>密&ensp;&ensp;码</template>
          </el-input>

          <br />
          <el-button type="primary" link @click="register">
            <el-icon>
              <CreditCard />
            </el-icon>
            &nbsp;注册
          </el-button>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="tab-box">
      Supoor Man
    </div>
  </div>
</template>


<style scoped>
.tab-box {
  width: 50%;
  margin-top: 1rem;
  color: rgb(255, 255, 255);
  user-select: none;
}

.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.username-input {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.password-input {
  margin-bottom: 1rem;
}</style>