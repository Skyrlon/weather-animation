<template>
  <div id="snow-fall">
    <div
      class="snowflake"
      :key="index"
      v-for="(drop, index) in numberOfDrops"
      :style="makeSnowFall(numberOfDrops)[index]"
    >
      <div
        :key="index"
        :class="`snowflake-branch-${branch}`"
        v-for="(branch, index) in snowflakeBranch"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SnowFall",
  props: {
    numberOfDrops: Number,
  },
  data() {
    return {
      snowflakeBranch: ["n", "s", "nw", "ne", "se", "sw"],
    };
  },
  methods: {
    makeSnowFall(numberOfDrops) {
      let arrayOfStyle = [];
      for (let i = 0; i < numberOfDrops; i++) {
        let posLeft = Math.random() * 99.8;
        let posTop = Math.random() * 100;
        let duration = Math.random() + 3;
        let delay = Math.random();
        let left = `${posLeft}%`;
        let top = `-${posTop}vw`;
        let animation = `snow-fall ${duration}s ${delay}s linear infinite`;
        arrayOfStyle.push(
          `left: ${left}; top: ${top}; animation: ${animation};`
        );
      }
      return arrayOfStyle;
    },
  },
};
</script>

<style lang="scss">
.snowflake {
  position: absolute;

  &-branch {
    &-n {
      position: absolute;
      width: $snowflake-width;
      height: $snowflake-height;
      border-radius: $snowflake-height;
      background-color: white;

      &::before {
        content: "";
        position: absolute;
        width: $snowflake-width;
        height: $snowflake-height/2.5;
        border-radius: $snowflake-height;
        background-color: white;
        transform-origin: bottom;
        transform: rotate(-45deg);
      }

      &::after {
        content: "";
        position: absolute;
        width: $snowflake-width;
        height: $snowflake-height/2.5;
        border-radius: $snowflake-height;
        background-color: white;
        transform-origin: bottom;
        transform: rotate(45deg);
      }
    }

    &-s {
      position: absolute;
      top: $snowflake-height;
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
    }

    &-nw {
      position: absolute;
      top: $snowflake-height;
      width: $snowflake-width;
      height: $snowflake-height;
      border-radius: $snowflake-height;
      background-color: white;
      transform-origin: top;
      transform: rotate(120deg);

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
    }

    &-ne {
      position: absolute;
      top: $snowflake-height;
      width: $snowflake-width;
      height: $snowflake-height;
      border-radius: $snowflake-height;
      background-color: white;
      transform-origin: top;
      transform: rotate(-120deg);

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
    }

    &-se {
      position: absolute;
      top: $snowflake-height;
      width: $snowflake-width;
      height: $snowflake-height;
      border-radius: $snowflake-height;
      background-color: white;
      transform-origin: top;
      transform: rotate(-60deg);

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
    }

    &-sw {
      position: absolute;
      top: $snowflake-height;
      width: $snowflake-width;
      height: $snowflake-height;
      border-radius: $snowflake-height;
      background-color: white;
      transform-origin: top;
      transform: rotate(60deg);

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
    }
  }
}
</style>