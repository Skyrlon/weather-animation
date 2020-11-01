<template>
  <div id="cold-coat">
    <div id="ushanka">
      <div class="flap flap-left"></div>
      <div class="flap flap-right"></div>
    </div>
    <div class="cold-sleeve cold-sleeve-left">
        <div class="cold-sleeve cold-sleeve-left-inferior"></div>
    </div>
    <div class="cold-sleeve cold-sleeve-right"></div>
    <div id="scarf"></div>
    <div class="cold-pants-leg cold-pants-leg-left"></div>
    <div class="cold-pants-leg cold-pants-leg-right"></div>
  </div>
</template>

<script>
export default {
  name: "ColdClothes",
};
</script>

<style lang="scss">
#ushanka {
  position: absolute;
  z-index: 100;
  top: -$size * 1.5;
  left: 0;
  width: $ushanka-width;
  height: $ushanka-height;
  background-color: $color-ushanka;
  border-radius: $ushanka-height;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: $ushanka-width * 0.1;
    width: $ushanka-width * 0.8;
    height: $ushanka-height * 0.7;
    background-color: grey;
    border-radius: $ushanka-height/1.5;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  & > .flap {
    position: absolute;
    top: $ushanka-height;
    width: $flap-width;
    height: $ushanka-height * 1.25;
    background-color: $color-ushanka;

    &-left {
      border-bottom-left-radius: $flap-width;

      &::after {
        content: "";
        position: absolute;
        left: $flap-width;
        width: $flap-width;
        height: $ushanka-height * 1.25;
        background-color: grey;
        border-bottom-right-radius: $flap-width;
      }
    }

    &-right {
      right: 0;
      border-bottom-right-radius: $flap-width;

      &::after {
        content: "";
        position: absolute;
        left: -$flap-width;
        width: $flap-width;
        height: $ushanka-height * 1.25;
        background-color: grey;
        border-bottom-left-radius: $flap-width;
      }
    }
  }
}

#cold-coat {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: $size;
  height: $size * 3;
  border-radius: $size $size 0px 0px;
  background-color: $color-coat;

  &::before {
    content: "";
    z-index: 100;
    position: absolute;
    top: 0;
    left: ($coat-width - $zip-width)/2;
    width: $zip-width;
    height: $size * 3;
    background-color: black;
  }

  & #scarf {
    content: "";
    z-index: 101;
    position: absolute;
    top: 0;
    left: $coat-width * 0.2/2;
    width: $coat-width * 0.8;
    height: $coat-height/10;
    background-color: red;

    &::after {
      content: "";
      position: absolute;
      top: $coat-height/10;
      left: $coat-width * 0.8 * 0.65;
      z-index: 5;
      width: $coat-width * 0.8/4;
      height: $coat-height/3;
      background-color: red;
    }
  }

  & .cold-sleeve {
    position: absolute;
    top: $size/5;
    width: $sleeve-width;
    height: $arm-height;
    border-radius: $sleeve-width;
    background-color: $color-coat;

    &-left {
      width: $upper-arm-width;
      @include left-upper-arm-pos;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;

      &-inferior {
        position: absolute;
        background-color: $color-coat;
        @include left-lower-arm-pos;
        border-top-left-radius: 0;
      border-bottom-left-radius: 0;
        &::before {
            content: '';
            position: absolute;
            left: -$arm-width*0.2;
            width: $arm-width*0.2;
            height: $arm-height;
            border-top-left-radius: $arm-height;
            border-bottom-left-radius: $arm-height;
            background-color: red;
        }
      }
    }

    &-right {
      width: $arm-width * 0.8;
      @include right-arm-pos;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      &::before {
            content: '';
            position: absolute;
            right: -$arm-width*0.2;
            width: $arm-width*0.2;
            height: $arm-height;
            border-top-right-radius: $arm-height;
            border-bottom-right-radius: $arm-height;
            background-color: red;
        }
    }
  }

  & .cold-pants-leg {
    position: absolute;
    bottom: -$leg-height;
    width: $size * 0.45;
    height: $leg-height;
    background-color: blue;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: $leg-width;
      height: $leg-height/10;
      background-color: black;
      border-top-left-radius: $leg-width;
      border-top-right-radius: $leg-width;
    }

    &-right {
      right: 0;
    }
  }
}
</style>