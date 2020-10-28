<template>
  <div :class="parentClassName">
    <div
      :key="part"
      :class="part"
      v-for="(part, index) in partsArray.slice(0, numberOfParts)"
      :style="`transform: rotateY(${rotateValue(numberOfParts)[index]}deg) translateZ(${radius / divisorRadius}vw); width: ${widthValue(numberOfParts, radius) / divisorRadius}vw`"
    ></div>
  </div>
</template>

<script>
export default {
  name: "CreateCylinder",
  props: {
    parentClassName: String,
    partsArray: Array,
    numberOfParts: Number,
    radius: Number,
    divisorRadius: Number,
    arrayStyleParts: Array,
  },
  methods: {
     widthValue(numberParts, radius) {
      let partsAngle = 360 / numberParts;
      let partsAngleRad = ((partsAngle / 2) * Math.PI) / 180;
      let partsAngleCos = Math.cos(partsAngleRad);
      let partsHyp = this.radius / partsAngleCos;
      let partsHalfWidth = Math.sqrt(partsHyp ** 2 - radius ** 2);
      return Math.ceil(partsHalfWidth * 2 * 10) / 10;
    },
    rotateValue(numberParts) {
      let arrayRotateValue = [];
      let value = -(360 / numberParts);
      for (let i = 0; i < numberParts; i++) {
        value += 360 / numberParts;
        arrayRotateValue.push(value);
      }
      return arrayRotateValue;
    }
  }
};
</script>