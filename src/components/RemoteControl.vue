<template>
  <div class="remote-control">
    <div class="remote-button">
      <div class="remote-button-top"></div>
      <CreateCylinder
        parentClassName="remote-button-center"
        :partsArray="alphabet"
        :numberOfParts="numberParts"
        :radius="radius"
        :divisorRadius="divisorRadius"
      />
      <div class="remote-button-bottom"></div>
    </div>
  </div>
</template>

<script>
import CreateCylinder from "./CreateCylinder.vue";

export default {
  name: "RemoteControl",
  components: { CreateCylinder },
  data() {
    return {
      alphabet: "abcdefghijklmnopqrstuvwxyz".split(""),
      numberParts: 24,
      radius: (6 / 5) / 2,
      divisorRadius: 1,
    };
  },
};
</script>

<style lang="scss">
.remote-control {
  position: absolute;
  top: -$remote-height/7;
  left: -$palm-width * 1.45;
  width: $remote-width;
  height: $remote-height;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
  perspective: $remote-height * 100;
  background-color: black;
  transform: rotate(-0deg) translateZ($palm-depth);

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: $remote-width;
    height: $remote-height/10;
    transform-origin: bottom;
    background-color: grey;
    transform: rotateX(90deg);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: $remote-height/10;
    height: $remote-height;
    transform-origin: left;
    background-color: grey;
    transform: rotateY(90deg);
  }
}

.remote-button {
  position: absolute;
  top: 15%;
  left: 25%;
  width: $button-size;
  height: $button-size;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
  perspective: $button-size * 100;
  transform: translateZ(0);

  &-top {
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: red;
    border-radius: 100%;
    border: 1px solid;
  }

  &-bottom {
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    background-color: red;
    border-radius: 100%;
    transform: rotateY(180deg) translateZ(-$button-size/2);
  }

  &-center {
    position: absolute;
    left: $button-size/2;
    transform-style: preserve-3d;
    transform: rotateX(90deg) translateZ(-$button-size/2);
  }
}

.remote-button-center div {
  position: absolute;
  height: $button-size/2;
  transform-style: preserve-3d;
  background-color: red;
}
</style>