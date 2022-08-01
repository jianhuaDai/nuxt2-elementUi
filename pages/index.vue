<template>
  <div>
    <el-button type="primary" @click="junpToHome">跳转到home页面</el-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  methods: {
    junpToHome() {
      this.$router.push({
        path: "/home",
      });
    },
  },
});
</script>
