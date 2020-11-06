<template>
  <div id="rain-fall">
    <div
      :class="'rain ' + rainIntensity"
      :key="index"
      v-for="(drop, index) in numberOfDrops(rainIntensity)"
    ></div>
  </div>
</template>

<script>
export default {
  name: "RainFall",
  props: {
    rainIntensity: String,
  },
  methods: {
    numberOfDrops(rain) {
      switch (rain) {
        case "light":
          return 25;
          break;
        case "moderate":
          return 50;
          break;
        case "heavy":
          return 100;
          break;

        default:
          return 25;
          break;
      }
    },
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

@for $i from 1 through 25 {
  $top: (random(50) + 50) * 1%;
  $left: random(100) * 1%;
  $opacity: (random(30) + 30) * 0.01;
  $delay: random(20) - 1s;

  .light.rain:nth-of-type(#{$i}) {
    animation-name: rain-#{$i};
    animation-delay: $delay;
    animation-duration: random() + 1s;
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

@for $i from 1 through 50 {
  $top: (random(50) + 50) * 1%;
  $left: random(100) * 1%;
  $opacity: (random(30) + 30) * 0.01;
  $delay: random(20) - 1s;

  .moderate.rain:nth-of-type(#{$i}) {
    animation-name: rain-#{$i};
    animation-delay: $delay;
    animation-duration: random() + 1s;
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

@for $i from 1 through 100 {
  $top: (random(50) + 50) * 1%;
  $left: random(100) * 1%;
  $opacity: (random(30) + 30) * 0.01;
  $delay: random(20) - 1s;

  .heavy.rain:nth-of-type(#{$i}) {
    animation-name: rain-#{$i};
    animation-delay: $delay;
    animation-duration: random() + 1s;
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