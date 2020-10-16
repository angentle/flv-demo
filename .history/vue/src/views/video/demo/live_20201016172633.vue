<script>
import Reflv from "../components/reflv";
// import demo from "./demo.flv";
export default {
  components: {
    Reflv
  },
  data() {
    //这里存放数据
    return {};
  },
  render() {
    // return <div>124</div>;
    return (
      <Reflv
        url={"http://192.168.1.115:7001/live/movie.flv"}
        type="flv"
        isLive
        hasAudio
        hasVideo
        cors
        config={{
          enableWorker: true,
          enableStashBuffer: false,
          stashInitialSize: 128
        }}
      />
    );
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
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>