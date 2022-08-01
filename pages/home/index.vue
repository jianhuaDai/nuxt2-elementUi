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
import  {HomeServe} from '@/services/index'
export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
        title: 'name',
        serveData: null
    }
  },
  created() {
    console.log('home');
    this.init();
  },
  methods: {
    async init() {
       this.serveData = await HomeServe.serveOne({url: 'http://icanhazip.com'});
       console.log(this.serveData);
    }
  }
})
</script>

function res(res: any, arg1: (any: any) => void) {
  throw new Error('Function not implemented.');
}
