
<script>
export default {
  data () {
    return {
      transitionName: 'fade'
    }
  },
  render () {
   
          <keep-alive>
            <router-view key={fullPath} />
          </keep-alive>
      
  }
}
</script>

<style lang="less">
@import url("./assets/style/common.less");

#app {
  font-family: PingFang SC, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  width: 750px;
  margin: 0 auto;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.7s;
}
</style>
