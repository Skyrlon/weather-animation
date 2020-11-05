<template>
  <div id="rain-fall">
    <div
      class="rain"
      :key="index"
      v-for="(drop, index) in numberOfDrops"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: "RainFall",
  props: {
    numberOfDrops: Number,
  },
};
</script>

<style lang="scss">
.rain {
  position: absolute;
  background: white;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 100%
  );
  height: $rain-height;

  width: $rain-width;
}

@for $i from 1 through 150 {
  $top: (random(50) + 50) * 1%;
  $left: random(100) * 1%;
  $opacity: (random(30) + 30) * 0.01;
  $delay: random(20) - 1s;

  .rain:nth-of-type(#{$i}) {
    animation-name: rain-#{$i};
    animation-delay: $delay;
    animation-duration: random(6) + 4s;
    animation-iteration-count: infinite;
    left: $left;
    opacity: $opacity;
    top: -$top;
  }

  @keyframes rain-#{$i} {
    0% {
      left: $left;
      opacity: $opacity;
      top: -$top;
    }
    100% {
      opacity: 0;
      top: $top + 40%;
    }
  }
}
</style>