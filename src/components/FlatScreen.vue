<template>
  <div class="flat-screen">
    <div class="flat-screen-support"></div>
    <div class="screen">
      <weather-elements />
      <weather-guy />
    </div>
  </div>
</template>

<script>
import WeatherElements from "./WeatherElements.vue";
import WeatherGuy from './WeatherGuy.vue';

export default {
  name: "FlatScreen",
  components: {
    WeatherElements,
    WeatherGuy,
  },
};
</script>

<style lang="scss">
.flat-screen {
  position: absolute;
  bottom: $tv-stand-height + $flat-screen-height/20 + $flat-screen-height/11;
  left: 32.5%;
  width: $flat-screen-width;
  height: $flat-screen-height;
  background-color: black;
  border-radius: 1%;
  transform: translateZ(-$wall-depth/2 + $tv-stand-depth);

  &-support {
    position: absolute;
    top: $flat-screen-height + $flat-screen-height/10;
    left: ($flat-screen-width -$flat-screen-width/2)/2;
    width: $flat-screen-width/2;
    height: $flat-screen-height/20;
    background-color: black;

    &::after {
      content: "";
      position: absolute;
      top: -$flat-screen-width/20;
      left: ($flat-screen-width/2 - $flat-screen-width/20)/2;
      width: $flat-screen-width/20;
      height: $flat-screen-height/11;
      background-color: black;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: $flat-screen-width/2;
      height: $flat-screen-height/20;
      background-color: grey;
      transform-origin: top;
      transform: perspective($flat-screen-height) rotateX(250deg);
    }
  }
}

.screen {
  position: absolute;
  top: ($flat-screen-height - $screen-height)/2;
  left: ($flat-screen-width - $screen-width)/2;
  width: $screen-width;
  height: $screen-height;
  background-color: grey;
  border-radius: 1%;
  overflow: hidden;
}
</style>