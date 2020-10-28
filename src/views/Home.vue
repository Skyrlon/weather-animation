<template>
  <div class="home">
    <ThoughtBubble />
    <Forearm />
  </div>
</template>

<script>
// @ is an alias to /src
import ThoughtBubble from "@/components/ThoughtBubble.vue";
import Forearm from "@/components/Forearm.vue";

export default {
  name: "Home",
  data() {
    return {
      alphabet: "abcdefghijklmnopqrstuvwxyz".split(""),
      numberParts: 24,
      radius: 5,
      divisorRadius: 1,
    };
  },
  components: {
    ThoughtBubble,
    Forearm
  },
};
</script>

<style lang="scss">
body {
  overflow: hidden;
}
</style>
