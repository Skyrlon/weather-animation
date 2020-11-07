<template>
  <div :class="'snow-fall ' + snowIntensity">
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
        return 15;
      } else if (rain === "moderate") {
        return 40;
      } else if (rain === "heavy") {
        return 80;
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

.snow-fall {
  & .snowflake {
    top: -$snowflake-height * 2;
    animation-name: snow-fall;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @for $i from 1 through 15 {
    &.light .snowflake:nth-of-type(#{$i}) {
      animation-delay: random(5) + 0s;
      animation-duration: random() + 5s;
      left: random(100) * 1%;
    }
  }

  @for $i from 1 through 40 {
    &.moderate .snowflake:nth-of-type(#{$i}) {
      animation-delay: random(5) + 0s;
      animation-duration: random() + 5s;
      left: random(100) * 1%;
    }
  }

  @for $i from 1 through 80 {
    &.heavy .snowflake:nth-of-type(#{$i}) {
      animation-delay: random(5) + 0s;
      animation-duration: random() + 5s;
      left: random(100) * 1%;
    }

    @keyframes snow-fall {
      0% {
        transform: translateX(0);
        top: -$snowflake-height * 2;
      }
      50% {
        transform: translateX($snowflake-height * 10);
      }
      100% {
        top: $screen-height + $snowflake-height;
        transform: translateX(0);
      }
    }
  }
}
</style>