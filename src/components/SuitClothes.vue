<template>
  <div class="suit">
    <div class="suit-sleeve suit-sleeve_left"></div>
    <div class="suit-sleeve suit-sleeve_right"></div>
    <div class="suit-shirt"></div>
    <div class="tie">
      <div class="tie-bottom"></div>
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
  left: ($size - $size * 0.6)/2;
  border-radius: $size/4;
  box-sizing: border-box;
  border-color: lightblue transparent transparent transparent;
  border-width: ($size) ($size * 0.3) 0vw ($size * 0.3);
  border-style: solid;
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
    box-sizing: border-box;
    border-color: $color-tie transparent transparent transparent;
    border-width: ($size - $tie-height - $knot-size) (($size - $tie-height - $knot-size) * 0.3) 0vw (($size - $tie-height - $knot-size) * 0.3);
    border-style: solid;
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
  bottom: -$leg-height;
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