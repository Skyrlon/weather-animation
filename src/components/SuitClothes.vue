<template>
  <div class="suit">
    <div class="suit-sleeve suit-sleeve_left"></div>
    <div class="suit-sleeve suit-sleeve_right"></div>
    <canvas class="suit-shirt" width="100" height="100"></canvas>
    <div class="tie">
      <canvas class="tie-bottom" width="100" height="100"></canvas>
    </div>
    <div class="suit-pants-leg suit-pants-leg-left">
      <div class="suit-shoe"></div>
    </div>
    <div class="suit-pants-leg suit-pants-leg-right">
      <div class="suit-shoe"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuitClothes",
};
</script>

<style lang="scss">
.suit {
  position: absolute;
  top: 0;
  left: 0;
  width: $size;
  height: $size * 3;
  border-radius: $size $size 0px 0px;
  background-color: $color-suit;
}

.suit-shirt {
  position: absolute;
  background-color: $color-suit;
  width: $size;
  height: $size;
  border-top-left-radius: $size;
  border-top-right-radius: $size;
}

.tie {
  position: absolute;
  top: $knot-size;
  left: ($size - $tie-width)/2;
  width: $tie-width;
  height: $tie-height;
  background-color: $color-tie;

  &::before {
    content: "";
    position: absolute;
    top: -$knot-size;
    left: -$knot-size/4;
    width: $knot-size;
    height: $knot-size;
    background-color: $color-tie;
    border-radius: $knot-size;
  }

  &-bottom {
    position: absolute;
    top: $tie-height;
    width: $tie-width;
    height: $size - $tie-height;
  }
}

.suit-sleeve {
  position: absolute;
  top: $size/5;
  height: $arm-height;
  background-color: $color-suit;
  border-radius: $arm-width;

  &_left {
    width: $upper-arm-width;
    @include left-upper-arm-pos;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &::after {
      content: "";
      position: absolute;
      background-color: $color-suit;
      @include left-lower-arm-pos;
    }
  }

  &_right {
    width: $arm-width * 0.8;
    @include right-arm-pos;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
}

.suit-pants-leg {
  position: absolute;
  top: $body-height;
  width: $size * 0.45;
  height: $leg-height;
  background-color: $color-suit;

  &-right {
    right: 0;
  }

  & > .suit-shoe {
    position: absolute;
    bottom: 0;
    width: $leg-width;
    height: $leg-height/10;
    background-color: $color-suit-shoe;
    border-top-left-radius: $leg-width;
    border-top-right-radius: $leg-width;
  }
}
</style>