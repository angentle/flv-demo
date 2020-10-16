<script>
import Reflv from "../components/reflv";
export default {
  components: {
    Reflv
  },
  data() {
    return {
      url: "http:xxxxx/flv.js"
    };
  },
  render() {
    let { url } = this;
    return (
      <Reflv
        url={url}
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
  }
  // computed: {},
  // watch: {},
  // methods: {},
  // created() {},
  // mounted() {},
  // beforeCreate() {},
  // beforeMount() {},
  // beforeUpdate() {},
  // updated() {},
  // beforeDestroy() {},
  // destroyed() {},
  // activated() {}
};
</script>
<style scoped>
</style>