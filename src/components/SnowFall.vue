<template>
  <div :class="'snow-fall ' +  snowIntensity">
    <div
      class="snowflake"
      :key="index"
      v-for="(drop, index) in numberOfDrops(snowIntensity)"
    >
      <div
        :key="index"
        :class="`snowflake__branch snowflake__branch--${branch}`"
        v-for="(branch, index) in snowflakeBranch"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SnowFall",
  props: {
    snowIntensity: String,
  },
  data() {
    return {
      snowflakeBranch: ["n", "s", "nw", "ne", "se", "sw"],
    };
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
.snowflake {
  position: absolute;

  &__branch {
    position: absolute;
    width: $snowflake-width;
    height: $snowflake-height;
    border-radius: $snowflake-height;
    background-color: white;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: $snowflake-width;
      height: $snowflake-height/2.5;
      border-radius: $snowflake-height;
      background-color: white;
      transform-origin: top;
      transform: rotate(45deg);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: $snowflake-width;
      height: $snowflake-height/2.5;
      border-radius: $snowflake-height;
      background-color: white;
      transform-origin: top;
      transform: rotate(-45deg);
    }
    
    &--n {
      &::before {
        content: "";
        position: absolute;
        top: $snowflake-height/2.5;
        width: $snowflake-width;
        height: $snowflake-height/2.5;
        border-radius: $snowflake-height;
        background-color: white;
        transform-origin: top;
        transform: rotate(135deg);
      }

      &::after {
        content: "";
        position: absolute;
        top: $snowflake-height/2.5;
        width: $snowflake-width;
        height: $snowflake-height/2.5;
        border-radius: $snowflake-height;
        background-color: white;
        transform-origin: top;
        transform: rotate(-135deg);
      }
    }
    &--s {
      top: $snowflake-height;
    }

    &--nw {
      top: $snowflake-height;
      transform-origin: top;
      transform: rotate(120deg);
    }

    &--ne {
      top: $snowflake-height;
      transform-origin: top;
      transform: rotate(-120deg);
    }

    &--se {
      top: $snowflake-height;
      transform-origin: top;
      transform: rotate(-60deg);
    }

    &--sw {
      top: $snowflake-height;
      transform-origin: top;
      transform: rotate(60deg);
    }
    
  }
}

@for $i from 1 through 25 {
  $top: (random(50) + 50) * 1%;
  $left: random(100) * 1%;
  $delay: random(20) - 1s;

  .snow-fall.light .snowflake:nth-of-type(#{$i}) {
    animation-name: snow-#{$i};
    animation-delay: $delay;
    animation-duration: random() + 5s;
    animation-iteration-count: infinite;
    left: $left;
    top: -$top;
  }

  @keyframes snow-#{$i} {
    0% {
      transform: translateX(0);
      left: $left;
      top: -$top;
    }
    50% {
      transform: translateX($snowflake-height*10);
    }
    100% {
      top: $top + 40%;
      transform: translateX(0);
    }
  }
}

@for $i from 1 through 50 {
  $top: (random(50) + 50) * 1%;
  $left: random(100) * 1%;
  $delay: random(20) - 1s;

  .snow-fall.moderate .snowflake:nth-of-type(#{$i}) {
    animation-name: snow-#{$i};
    animation-delay: $delay;
    animation-duration: random() + 5s;
    animation-iteration-count: infinite;
    left: $left;
    top: -$top;
  }

  @keyframes snow-#{$i} {
    0% {
      transform: translateX(0);
      left: $left;
      top: -$top;
    }
    50% {
      transform: translateX($snowflake-height*10);
    }
    100% {
      top: $top + 40%;
      transform: translateX(0);
    }
  }
}

@for $i from 1 through 100 {
  $top: (random(50) + 50) * 1%;
  $left: random(100) * 1%;
  $delay: random(20) - 1s;

  .snow-fall.heavy .snowflake:nth-of-type(#{$i}) {
    animation-name: snow-#{$i};
    animation-delay: $delay;
    animation-duration: random() + 5s;
    animation-iteration-count: infinite;
    left: $left;
    top: -$top;
  }

  @keyframes snow-#{$i} {
    0% {
      transform: translateX(0);
      left: $left;
      top: -$top;
    }
    50% {
      transform: translateX($snowflake-height*10);
    }
    100% {
      top: $top + 40%;
      transform: translateX(0);
    }
  }
}
</style>