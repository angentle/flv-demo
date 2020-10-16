
<script>
export default {
  data () {
    return {
      transitionName: 'fade'
    }
  },
  render () {
    const { $route: { meta, fullPath }, transitionName } = this
    const { keepAlive } = meta
    const inKeep = (
      <div id="app">
        <transition name={transitionName}>
          <keep-alive>
            <router-view key={fullPath} />
          </keep-alive>
        </transition>
      </div >
    )
    const notKeep = (
      <div id="app">
        <transition name={transitionName}>
          <router-view />
        </transition>
      </div >
    )
    return keepAlive ? inKeep : notKeep
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
