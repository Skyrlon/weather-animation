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
