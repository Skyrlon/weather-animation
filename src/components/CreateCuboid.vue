<template>
  <div :class="parentClassName">
    <slot></slot>
    <div
      :key="faceName"
      :class="childrenClassName + faceName"
      v-for="faceName in faceArray"
    ></div>
    
  </div>
</template>

<script>
export default {
  name: "CreateCuboid",
  props: {
    parentClassName: String,
    childrenClassName: String,
    faceArray: Array,
  },
};
</script>