<template>
  <div id="rain-fall">
    <div
      class="rain"
      :key="index"
      v-for="(drop, index) in numberOfDrops"
      :style="makeRainFall(numberOfDrops)[index]"
    >
      <div class="rain-drop"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RainFall",
  props: {
    numberOfDrops: Number,
  },
  methods: {
    makeRainFall(numberOfDrops) {
      let arrayOfStyle = [];
      for (let i = 0; i < numberOfDrops; i++) {
        let posLeft = Math.random() * 99.8;
        let posTop = Math.random() * 100;
        let duration = Math.random() + 0.5;
        let delay = Math.random();
        let left = `${posLeft}%`;
        let top = `-${posTop}vw`;
        let animation = `rain-fall ${duration}s ${delay}s linear infinite`;
        arrayOfStyle.push(
          `left: ${left}; top: ${top}; animation: ${animation};`
        );
      }
      return arrayOfStyle;
    },
  },
};
</script>

<style lang="scss">
.rain {
  position: absolute;
  &-drop {
    position: absolute;
    width: $rain-drop-width;
    height: $rain-drop-width;
    background-color: lightblue;
    border-radius: 0 50% 50% 50%;
    transform: rotate(45deg);
  }
}
</style>