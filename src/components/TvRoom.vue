<template>
  <div class="room">
    <div class="wall front"></div>
    <div class="wall ceiling"></div>
    <div class="wall floor"></div>
    <div class="wall right"></div>
    <div class="wall left"></div>
    <TvStand />
    <FlatScreen />
  </div>
</template>

<script>
import TvStand from "./TvStand.vue";
import FlatScreen from "@/components/FlatScreen";

export default {
  name: "TvRoom",
  components: {
    TvStand,
    FlatScreen,
  },
};
</script>

<style lang="scss">
.room {
  position: absolute;
  width: $wall-width;
  height: $wall-height;
  perspective-origin: 45% 20%;
  transform-style: preserve-3d;
  perspective: $wall-depth/1.25;

  & .wall {
    position: absolute;
    width: $wall-width;
    height: $wall-height;

    &.front {
      background-color: #fb08e3;
      transform: rotateY(180deg) translateZ($wall-depth/2);
    }

    &.ceiling {
      height: $wall-depth;
      background-color: purple;
      transform: rotateX(90deg) translateZ($wall-depth/2);
    }

    &.floor {
      height: $wall-depth;
      background-color: yellow;
      transform: rotateX(-90deg) translateZ($wall-height - $wall-depth/2);
    }

    &.right {
      width: $wall-depth;
      background-color: green;
      transform: rotateY(90deg) translateZ($wall-width - $wall-depth/2);
    }

    &.left {
      width: $wall-depth;
      background-color: blue;
      transform: rotateY(-90deg) translateZ($wall-depth/2);

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: $wall-width/7;
        height: $wall-height * 0.9;
        background-color: #b24018;
      }

      &::after {
        content: "";
        position: absolute;
        top: $wall-height/2;
        left: 0;
        width: $wall-height/20;
        height: $wall-height/20;
        border-radius: $wall-height/20;
        background-color: black;
      }
    }
  }
}
</style>