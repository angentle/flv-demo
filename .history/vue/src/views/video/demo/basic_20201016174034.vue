

<script>
import Reflv from "../components/reflv";

export default {
  components: {
    Reflv
  },
  data() {
    return {
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