<template>
  <div :class="'rain-fall ' + rainIntensity">
    <div
      class="rain"
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
      if (rain === "light") {
        return 25;
      } else if (rain === "moderate") {
        return 50;
      } else if (rain === "heavy") {
        return 100;
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

  .rain-fall.light .rain:nth-of-type(#{$i}) {
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

  .rain-fall.moderate .rain:nth-of-type(#{$i}) {
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

  .rain-fall.heavy .rain:nth-of-type(#{$i}) {
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