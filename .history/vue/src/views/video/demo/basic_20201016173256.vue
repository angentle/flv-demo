

<script>
import Reflv from "../components/reflv";
// import demo from "./demo.flv";
export default {
  components: {
    Reflv
  },
  data() {
    //这里存放数据
    return {
      a: 1,
      b: 2,
      fz: 94114867
    };
  },
  render() {
    // return <div>124</div>;
    console.log(this.a);
    let { fz } = this;
    return (
      <Reflv
        url={"demo.flv"}
        type="flv"
        filesize={fz}
        hasAudio
        hasVideo
        duration
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
<style scoped>
</style>