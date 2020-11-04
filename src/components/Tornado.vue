<template>
  <div id="tornado">
    <div :key="stage" v-for="stage in alphabet" :class="stage"></div>
  </div>
</template>

<script>

export default {
  name: "Tornado",
  data() {
    return {
      alphabet: "abcdefghijklmnopqrstuvwxyz".split(""),
    };
  },
};
</script>

<style lang="scss">
#tornado {
  position: absolute;
  bottom: 0;
  left: 10%;
  width: $tornado-width;
  height: $tornado-height;
}

@for $i from 1 through 20 {
  #tornado > div:nth-child(#{$i}) {
    position: absolute;
    top: #{$tornado-height/20 * ($i - 1)};
    left: #{($tornado-width - ($tornado-width - $tornado-width*($i - 1)/25))/2};
    width: #{$tornado-width - $tornado-width*($i - 1)/25};
    height: $tornado-height/20;
    background-color: grey;
  }
}
</style>