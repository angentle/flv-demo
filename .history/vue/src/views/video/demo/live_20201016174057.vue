<script>
import Reflv from "../components/reflv";
export default {
  components: {
    Reflv
  },
  data() {
    return {};
  },
  render() {
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