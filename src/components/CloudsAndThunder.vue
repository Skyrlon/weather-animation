<template>
  <div id="clouds">
    <div class="cloud_row" :key="row" v-for="row in 5">
      <div class="cloud" :key="cloud" v-for="cloud in numberOfClouds">
        <div class="thunder" v-if="thunder"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CloudsAndThunder",
  props: {
    thunder: Boolean,
    numberOfClouds: Number,
  },
};
</script>

<style lang="scss" scoped>
@for $i from 0 through 5 {
  .cloud_row:nth-child(#{$i}) {
    position: absolute;
    top: #{-$cloud-height + $cloud-height * $i};
    width: $screen-width;
    @for $j from 0 through 3 {
      & .cloud:nth-child(#{$j}) {
        left: random(150) / 150 * 100%;
        opacity: #{1.2 - 0.2 * $i};
        transform: scale(#{1.2 - 0.2 * $i});
      }
    }
  }
}

.cloud {
  position: absolute;
  height: $cloud-height;
  width: $cloud-width;
  background: white;
  border-radius: $cloud-height;

  &::before {
    content: "";
    position: absolute;
    top: -$cloud-height/3;
    box-sizing: border-box;
    height: $cloud-width/3;
    width: $cloud-width/3;
    left: $cloud-width/6;
    border-radius: 50%;
    border-bottom-color: transparent;
    border-right-color: transparent;
    background: white;
    transform: rotate(40deg);
  }

  &::after {
    content: "";
    position: absolute;
    height: $cloud-width/2;
    width: $cloud-width/2;
    top: -$cloud-height/2;
    left: $cloud-width/3;
    border-radius: 50%;
    box-sizing: border-box;
    border-bottom-color: transparent;
    background: white;
    border-right-color: transparent;
    transform: rotate(55deg);
  }

  & .face {
    & .eye {
      position: absolute;
      top: 0;
      width: $celestial-eye-size;
      height: $celestial-eye-size;
      border-radius: $celestial-eye-size;
      background-color: black;

      &-left {
        left: $celestial-size/2;
      }

      &-right {
        z-index: 2;
        right: $celestial-size/2;
      }
    }

    & .mouth {
      z-index: 2;
      position: absolute;
      top: $cloud-height/2;
      left: ($cloud-width - $celestial-mouth-width)/2;
      width: $celestial-mouth-width;
      height: $celestial-mouth-width/2.5;
      border-radius: 50% / 100%;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      background-color: black;
    }
  }
}

.thunder {
  position: absolute;
  top: $cloud-height;
  left: ($cloud-width - $thunder-width * 2)/2;
  width: $thunder-width;
  height: $thunder-height;
  background-color: yellow;
  transform: skew(-40deg);

  &::before {
    content: "";
    position: absolute;
    top: $thunder-height * 2/3;
    left: $thunder-width;
    width: $thunder-width;
    height: $thunder-height;
    background-color: yellow;
  }

  &::after {
    content: "";
    position: absolute;
    top: $thunder-height * 2/3 + $thunder-height;
    left: $thunder-width;
    border-style: solid;
    border-width: 0 0 $thunder-height/2 $thunder-width;
    border-color: transparent transparent transparent yellow;
  }
}
</style>