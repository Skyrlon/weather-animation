<template>
  <div :class="parentClassName">
    <div
      :key="part"
      :class="part"
      v-for="(part, index) in partsArray.slice(0, numberOfParts)"
      :style="`transform: rotateY(${rotateValue[index]}deg) translateZ(${radius / divisorRadius}vw); width: ${widthValue / divisorRadius}vw`"
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
    rotateValue: Array,
    widthValue: Number,
  },
};
</script>