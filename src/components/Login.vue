<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const username = ref('')
const password = ref('')
</script>

<style>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>

<template>
  <WelcomeItem>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="用户名" name="first">
        <template #heading>Documentation</template>
        <el-input v-model="username" placeholder="Please input" clearable input-style="width:70%">
          <template #prepend>用户名</template>
        </el-input>
        <el-input v-model="password" type="password" placeholder="Please input password" show-password
          input-style="width:70%">
          <template #prepend>密&ensp;&ensp;码</template>
        </el-input>

        <br />
        <el-button type="primary" link>
          <el-icon>
            <CreditCard />
          </el-icon>
          &nbsp;登录
        </el-button>
      </el-tab-pane>

      <el-tab-pane label="短信" name="second">
        <template #icon>
          <ToolingIcon />
        </template>
        <template #heading>Tooling</template>

        This project is served and bundled with
        <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
        recommended IDE setup is
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
        you need to test your components and web pages, check out
        <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
        <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>.

        <br />

        More instructions are available in <code>README.md</code>.
      </el-tab-pane>
      <el-tab-pane label="微信" name="third">
        <template #icon>
          <EcosystemIcon />
        </template>
        <template #heading>Ecosystem</template>

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
        <template #icon>
          <CommunityIcon />
        </template>
        <template #heading>Community</template>

        Got stuck? Ask your question on
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
        Discord server, or
        <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener">StackOverflow</a>. You
        should also subscribe to
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
        the official
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
        twitter account for latest news in the Vue world.
      </el-tab-pane>
    </el-tabs>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    dsadadasds
  </WelcomeItem>
</template>
