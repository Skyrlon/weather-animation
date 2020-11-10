<template>
  <div
    id="celestial_trajectory"
    :style="`transform: rotate(${posOfCelestialBody(
      hour,
      rise,
      timeBetweenRiseAndSet
    )}deg);`"
  >
    <div id="celestial_body">
      <div
        :class="celestialBody"
        :style="`transform: rotate(-${posOfCelestialBody(
          hour,
          rise,
          timeBetweenRiseAndSet
        )}deg);`"
      >
        <div class="face">
          <div class="eye eye-left"></div>
          <div class="eye eye-right"></div>
          <div class="mouth"></div>
        </div>
        <div class="moon_crater1" v-if="celestialBody === 'moon'"></div>
        <div class="moon_crater2" v-if="celestialBody === 'moon'"></div>
        <div class="moon_crater3" v-if="celestialBody === 'moon'"></div>
        
  <div class="moon_hider waning_crescent" v-if="celestialBody === 'moon'"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CelestialBodies",
  props: {
    celestialBody: String,
    hour: Number,
    rise: Number,
    timeBetweenRiseAndSet: Number,
  },
  methods: {
    posOfCelestialBody(time, riseTime, riseToSet) {
      let timeAfterSunrise = time - riseTime;
      let degree = (timeAfterSunrise * 110) / riseToSet + 40;
      return degree;
    },
  },
};
</script>

<style lang="scss">
#celestial_trajectory {
  position: absolute;
  top: 0%;
  left: ($screen-width - $screen-width * 1.25)/2;
  width: $screen-width * 1.25;
  height: $screen-width * 1.25;
  border-radius: $screen-width;
}

#celestial_body {
  position: absolute;
  top: ($screen-width * 1.25)/2;
  left: 0;
  & .face {
    & .eye {
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

    & .mouth {
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
}

.sun {
  position: absolute;
  width: $celestial-size;
  height: $celestial-size;
  background-color: $color-sun;
  border-radius: $celestial-size;
}

.moon {
  position: absolute;
  width: $celestial-size;
  height: $celestial-size;
  background-color: $color-moon;
  border-radius: $celestial-size;

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

.moon_hider {
  &.new_moon {
    position: absolute;
    width: $celestial-size;
    height: $celestial-size;
    background-color: black;
  }
  &.waxing_crescent {
    position: absolute;
    width: $celestial-size/2;
    height: $celestial-size;
    border-radius: 0;
    background-color: black;

    &::after {
      content: '';
      position: absolute;
      width: $celestial-size;
      height: $celestial-size;
      border-radius: $celestial-size;
      background-color: black;
      transform: rotateY(45deg);
    }
  }
  &.first_quarter {
    position: absolute;
    width: $celestial-size/2;
    height: $celestial-size;
    border-radius: 0;
    background-color: black;
  }
  &.waxing_gibbous {
    position: absolute;
    left: $celestial-size/8;
    width: $celestial-size;
    height: $celestial-size;
    border-radius: 50%;
    box-shadow: -$celestial-size/8 0 0 0 black;
  }
  &.full_moon {
    position: absolute;
    width: 0;
    height: 0;
  }
  &.waning_gibbous {
    position: absolute;
    right: $celestial-size/8;
    width: $celestial-size;
    height: $celestial-size;
    border-radius: 50%;
    box-shadow: $celestial-size/8 0 0 0 black;
  }
  &.last_quarter {
    position: absolute;
    right: 0;
    width: $celestial-size/2;
    height: $celestial-size;
    border-radius: 0;
    background-color: black;
  }
  &.waning_crescent {    
    position: absolute;
    right: 0;
    width: $celestial-size/2;
    height: $celestial-size;
    border-radius: 0;
    background-color: black;

    &::after {
      content: '';
      position: absolute;
      left: -$celestial-size/2;
      width: $celestial-size;
      height: $celestial-size;
      border-radius: $celestial-size;
      background-color: black;
      transform: rotateY(45deg);
    }
  }
}
</style>