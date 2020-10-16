<!-- video标签默认使用muted 静音处理 -->
<template>
  <video
    :class="[className, 'aaa']"
    :controls="true"
    style="width:'100%' "
    ref="initFlv"
    muted
  />
</template>

<script>
import flvjs from "flv.js";
/**
 * @see https://github.com/Bilibili/flv.js/blob/master/docs/api.md#config
 */
export default {
  components: {},
  props: {
    className: String,
    url: String, // 表示媒体URL，可以以'https(s)'或'ws(s)'（WebSocket）开头
    type: {
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return ["flv", "mp4"].indexOf(value) !== -1;
      }
    },
    isLive: Boolean, // 指示数据源是否为实时流
    cors: Boolean,
    withCredentials: Boolean, // 指示是否对Cookie进行http提取
    hasAudio: Boolean, // 指示流是否有音轨
    hasVideo: Boolean, // 指示流中是否有视频轨道
    duration: Boolean, // 指示总媒体持续时间（以毫秒为单位）
    filesize: Number, // 指示媒体文件的总文件大小，以字节为单位
    config: Object,
    segments: Array // 多段播放的可选字段 {duration: number(ms),filesize:number(b),url:string}[]
  },
  data() {
    //这里存放数据
    return {
      flvPlayer: null
    };
  },
  // computed: {},
  // watch: {},
  // methods: {},
  // created() {},
  mounted() {
    console.log("mounted======", flvjs.isSupported()); // 浏览器是否支持
    const $video = this.$refs.initFlv;
    if ($video) {
      if (flvjs.isSupported()) {
        let {
          className,
          url,
          type,
          isLive,
          cors,
          withCredentials,
          hasAudio,
          hasVideo,
          duration,
          filesize,
          config
        } = this;
        let flvPlayer = flvjs.createPlayer(
          {
            className,
            url,
            type,
            isLive,
            cors,
            withCredentials,
            hasAudio,
            hasVideo,
            duration,
            filesize,
            config
          },
          this.config
        );
        flvPlayer.attachMediaElement($video);
        flvPlayer.load();
        flvPlayer.play();
        this.flvPlayer = flvPlayer;
      }
    }
  },
  // beforeCreate() {},
  // beforeMount() {},
  // beforeUpdate() {},
  // updated() {},
  beforeDestroy() {
    if (this.flvPlayer) {
      this.flvPlayer.unload();
      this.flvPlayer.detachMediaElement();
    }
  }
  // destroyed() {},
  // activated() {}
};
</script>
<style scoped>
.aaa {
  width: 80vw;
  height: 80vh;
}
</style>