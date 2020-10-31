<template>
  <div class="body">
    <div class="head">
      <div class="eyes">
        <div class="eye eye-left">
          <div class="eyelid"></div>
        </div>
        <div class="eye eye-right">
          <div class="eyelid"></div>
        </div>
      </div>
      <div class="mouth">
        <div class="lip"></div>
      </div>
    </div>
    <div class="arm arm_left">
      <div class="arm arm_left-inferior"></div>
    </div>
    <div class="arm arm_right"></div>
    <div class="leg leg_left"></div>
    <div class="leg leg_right"></div>
  </div>
</template>

<script>
export default {
  name: "WeatherGuy",
};
</script>

<style lang="scss">
.body,
.head,
.arm,
.leg {
  position: absolute;
  background-color: $color-body;
}

.eye,
.mouth {
  position: absolute;
  background-color: white;
}

.body {
  top: 55%;
  left: 50%;
  width: $size;
  height: $size * 3;
  border-radius: $size $size 0px 0px;
}

.head {
  top: -$size;
  width: $size;
  height: $size;
  border-radius: $size;
}

.eye {
  position: absolute;
  top: $size/4;
  width: $eye-width;
  height: $eye-width;
  border-radius: $eye-width;

  &-left {
    left: $eye-width;
  }

  &-right {
    right: $eye-width;
  }
}

.mouth {
  background-color: white;
  top: $size * 2/3;
  left: $mouth-width/2;
  width: $mouth-width;
  height: $mouth-width/3;
  border-radius: 50% / 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.arm {
  top: $size/5;
  height: $arm-height;
  border-radius: $size;

  &_left {
    width: $upper-arm-width;
    right: $arm-height;
    transform-origin: ($upper-arm-width - $arm-height/2) 50%;
    transform: rotate(0deg);

    &-inferior {
      top: 0;
      right: $upper-arm-width - $arm-height;
      width: $inferior-arm-width;
      height: $arm-height;
      transform-origin: ($inferior-arm-width - $arm-height/2) 50%;
      transform: rotate(90deg);
    }
  }

  &_right {
    width: $arm-width;
    @include right-arm-pos;
  }
}

.leg {
  top: $size * 3;
  width: $leg-width;
  height: $leg-height;

  &_right {
    right: 0;
  }
}
</style>