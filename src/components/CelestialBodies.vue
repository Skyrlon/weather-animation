<template>
  <div id="celestial-trajectory">
    <div class="sun">
      <div class="sun_eye sun_eye-left"></div>
      <div class="sun_eye sun_eye-right"></div>
      <div class="sun_mouth"></div>
    </div>
    <div class="moon">
      <div class="moon_eye moon_eye-left"></div>
      <div class="moon_eye moon_eye-right"></div>
      <div class="moon_mouth"></div>
      <div class="moon_crater1"></div>
      <div class="moon_crater2"></div>
      <div class="moon_crater3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CelestialBodies",
};
</script>

<style lang="scss">
#celestial-trajectory {
  position: absolute;
  top: 0%;
  left: ($screen-width - $screen-width * 1.25)/2;
  width: $screen-width * 1.25;
  height: $screen-width * 1.25;
  box-sizing: border-box;
  border-radius: $screen-width;
  border: 5px solid purple;
  transform: rotate(0deg);
}

.sun {
  position: absolute;
  top: 20%;
  left: 9.5%;
  width: $celestial-size;
  height: $celestial-size;
  background-color: $color-sun;
  border-radius: $celestial-size;

  &_eye {
    position: absolute;
    top: $celestial-size/3;
    width: $celestial-eye-size;
    height: $celestial-eye-size;
    border-radius: $celestial-eye-size;
    background-color: black;

    &-left {
      left: $celestial-eye-size;
    }

    &-right {
      right: $celestial-eye-size;
    }
  }

  &_mouth {
    position: absolute;
    top: $celestial-size * 2/3;
    left: $celestial-mouth-width/2;
    width: $celestial-mouth-width;
    height: $celestial-mouth-width/2.5;
    border-radius: 50% / 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background-color: black;
  }
}

.moon {
  position: absolute;
  width: $celestial-size;
  height: $celestial-size;
  background-color: $color-moon;
  border-radius: $celestial-size;

  &_eye {
    position: absolute;
    top: $celestial-size/3;
    width: $celestial-eye-size;
    height: $celestial-eye-size;
    border-radius: $celestial-eye-size;
    background-color: black;

    &-left {
      left: $celestial-eye-size;
    }

    &-right {
      right: $celestial-eye-size;
    }
  }

  &_mouth {
    position: absolute;
    top: $celestial-size * 2/3;
    left: $celestial-mouth-width/2;
    width: $celestial-mouth-width;
    height: $celestial-mouth-width/2.5;
    border-radius: 50% / 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background-color: black;
  }

  &_crater1 {
    position: absolute;
    top: $celestial-size/10;
    left: $celestial-size/5;
    width: $celestial-size/5;
    height: $celestial-size/5;
    border-radius: $celestial-size/5;
    background-color: $color-moon-crater;
    transform: skewY(-15deg);
  }

  &_crater2 {
    position: absolute;
    top: $celestial-size * 0.8;
    left: $celestial-size/5;
    width: $celestial-size/7;
    height: $celestial-size/7;
    border-radius: $celestial-size/7;
    background-color: $color-moon-crater;
    transform: skewX(30deg);
  }

  &_crater3 {
    position: absolute;
    top: $celestial-size/8;
    left: $celestial-size * 0.75;
    width: $celestial-size/7;
    height: $celestial-size/7;
    border-radius: $celestial-size/5;
    background-color: $color-moon-crater;
    transform: skew(10deg, 10deg) rotate(0.75turn);
  }
}
</style>