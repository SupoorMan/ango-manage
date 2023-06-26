<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import axios from '../http/index'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  //console.log(tab, event)
}

const username = ref('')
const password = ref('')

const login = () => {
  let param = {
    "username": username.value,
    "password": password.value,
    "type": 1
  }
  axios.post('/auth', param)
    .then((res) => {
      console.log(res)
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
          <el-input v-model="password" type="password" clearable placeholder="Please input" show-password
            input-style="width:68%" class="password-input">
            <template #prepend>密&ensp;&ensp;码</template>
          </el-input>

          <br />
          <el-button type="primary" link @click="login">
            <el-icon>
              <SwitchButton />
            </el-icon>
            &nbsp;登录
          </el-button>
        </el-tab-pane>

        <el-tab-pane label="短信" name="second">
          <el-input v-model="username" placeholder="Please input email" clearable input-style="width:68%"
            class="username-input">
            <template #prepend>手&ensp;&ensp;机</template>
          </el-input>
          <el-input v-model="password" clearable placeholder="Please input password" input-style="width:68%"
            class="password-input">
            <template #prepend>验证码</template>
          </el-input>

          <br />
          <el-button type="primary" link @click="login">
            <el-icon>
              <Watermelon />
            </el-icon>
            &nbsp;发送短信
          </el-button>
          <el-button type="primary" link @click="login">
            <el-icon>
              <Pear />
            </el-icon>
            &nbsp;登录
          </el-button>
        </el-tab-pane>
        <el-tab-pane label="微信" name="third">


          Get official tools and libraries for your project:
          <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
          <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
          <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
          <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
          you need more resources, we suggest paying
          <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
          a visit.

        </el-tab-pane>
        <el-tab-pane label="暗号" name="fourth">
          Got stuck? Ask your question on
          <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
          Discord server, or
          <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener">StackOverflow</a>.
          You
          should also subscribe to
          <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
          the official
          <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
          twitter account for latest news in the Vue world.
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