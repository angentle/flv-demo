<!--  -->
<template>
  <div class="">
    <h1>本地flv视频</h1>
    <Basic />
    <h3>在线flv视频,url让后端提供</h3>
    <Live />
  </div>
</template>

<script>
import Basic from "./demo/basic";
import Live from "./demo/live";

export default {
  components: {
    Basic,
    Live
  },
  data() {
    //这里存放数据
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {}
};
</script>
<style scoped>
</style>