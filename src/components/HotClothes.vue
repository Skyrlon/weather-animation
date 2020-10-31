<template>
  <div id="shirt">
    <div id="sunglasses"></div>
    <div id="apperture"></div>
    <div class="sleeve sleeve-left"></div>
    <div class="sleeve sleeve-right"></div>
    <div id="short"></div>
    <div class="sandal sandal-left"></div>
    <div class="sandal sandal-right"></div>
  </div>
</template>

<script>
export default {
  name: "HotClothes",
};
</script>

<style lang="scss">
#shirt {
  position: absolute;
  top: 0;
  left: 0;
  width: $size;
  height: $body-height;
  background-color: $color-shirt;
  border-radius: $size;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  &::before {
    content: "";
    z-index: 101;
    position: absolute;
    left: ($size/2 - $size/5)/2;
    width: $size/5;
    box-sizing: content-box;
    border-width: $size/2 $size/4 0;
    border-style: solid;
    border-color: $color-body transparent;
    border-radius: $size;
  }

  & > #apperture {
    position: absolute;
    top: 0;
    z-index: 101;
    left: ($size - $size/4)/2;
    width: $size/4;
    height: $body-height * 0.8;
    background-color: $color-body;

    &::after {
      content: "";
      position: absolute;
      top: $body-height * 0.8;
      width: $size/4;
      height: $body-height * 0.21;
      background-color: blue;
    }
  }

  & > .sleeve {
    position: absolute;
    top: $size/5;
    height: $arm-height;
    border-radius: $sleeve-width;
    background-color: $color-shirt;

    &-left {
      width: $arm-width * 0.3;
      @include left-upper-arm-pos;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    &-right {
      width: $arm-width * 0.3;
      @include right-arm-pos;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}

#short {
  position: absolute;
  top: $body-height;
  width: $size;
  height: $body-height/5;
  background-color: blue;

  &::before {
    content: "";
    position: absolute;
    top: $size/5;
    width: $leg-width;
    height: $body-height/5;
    background-color: blue;
  }

  &::after {
    content: "";
    position: absolute;
    top: $size/5;
    right: 0;
    width: $leg-width;
    height: $body-height/5;
    background-color: blue;
  }
}

#sunglasses {
  position: absolute;
  top: -$size + $size/4;
  left: 0;
  width: $sunglasses-width;
  height: $sunglasses-height;
  background-color: black;

  &::before {
    content: "";
    position: absolute;
    left: $sunglasses-width * 0.03;
    background-color: black;
    width: $glasses-width;
    height: $glasses-height;
    border-radius: $glasses-width/5;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  &::after {
    content: "";
    position: absolute;
    left: $sunglasses-width * 0.97 - $glasses-width;
    background-color: black;
    width: $glasses-width;
    height: $glasses-height;
    border-radius: $glasses-width/5;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}

.sandal {
  position: absolute;
  bottom: -$leg-height;
  width: $leg-width;
  height: $leg-height/10;
  box-sizing: border-box;
  border-top-left-radius: $leg-width;
  border-top-right-radius: $leg-width;
  border: $leg-width/10 solid #4e3329;
  &-right {
      right: 0;
  }

}
</style>