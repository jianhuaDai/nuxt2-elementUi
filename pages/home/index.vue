<template>
  <div>
    测试ajax
    <div>
        {{title}}
    </div>
    <div>
      {{serveData}}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { HomeServe } from '@/services/index'
export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      title: 'name',
      serveData: null,
      items: [
        { name: '1111' },
        { name: '2222' },
        { name: '3333' },
        { name: '4444' }
      ]
    }
  },
  created() {
    console.log('home');
    this.init();
  },
  methods: {
    async init() {
      this.serveData = await HomeServe.serveOne({ url: 'http://icanhazip.com' });
    }
  }
})
</script>

function res(res: any, arg1: (any: any) => void) {
  throw new Error('Function not implemented.');
}
