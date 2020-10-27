<template>
  <div class="home">
    <ThoughtBubble />
    <Forearm />
    <CreateCylinder
      parentClassName="cylinder"
      :partsArray="alphabet"
      :numberOfParts="numberParts"
      :radius="radius"
      :divisorRadius="divisorRadius"
      :arrayStyleParts="alphabet"
      :rotateValue="rotateValue"
      :widthValue="widthValue"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ThoughtBubble from "@/components/ThoughtBubble.vue";
import Forearm from "@/components/Forearm.vue";
import CreateCylinder from "@/components/CreateCylinder.vue";

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
    Forearm,
    CreateCylinder,
  },
  computed: {
    widthValue() {
      let partsAngle = 360 / this.numberParts;
      let partsAngleRad = ((partsAngle / 2) * Math.PI) / 180;
      let partsAngleCos = Math.cos(partsAngleRad);
      let partsHyp = this.radius / partsAngleCos;
      let partsHalfWidth = Math.sqrt(partsHyp ** 2 - this.radius ** 2);
      return Math.ceil(partsHalfWidth * 2 * 10) / 10;
    },
    rotateValue() {
      let arrayRotateValue = [];
      let value = -(360 / this.numberParts);
      for (let i = 0; i < this.numberParts; i++) {
        value += 360 / this.numberParts;
        arrayRotateValue.push(value);
      }
      return arrayRotateValue;
    },
  },
};
</script>

<style lang="scss">
.cylinder {
  position: absolute;
  top: 15%;
  left: 25%;
  transform-style: preserve-3d;
  transform: rotateX(70deg);
  & div {
    position: absolute;
    height: 5vw;
    background-color: lightblue;
  }
}
</style>
