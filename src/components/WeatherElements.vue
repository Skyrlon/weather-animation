<template>
  <div id="weather_elements">
    <div class="sky">
      <div class="cloud">
        <div class="cloud_eye cloud_eye-left"></div>
        <div class="cloud_eye cloud_eye-right"></div>
        <div class="cloud_mouth"></div>
        <div class="thunder"></div>
      </div>
      <Tornado />
      <div class="volcano">
        <div class="volcano-tube">
          <div class="lava">
            <div class="lava-flow-1"></div>
            <div class="lava-flow-2"></div>
          </div>
        </div>
        <div class="volcano_eye volcano_eye-left"></div>
        <div class="volcano_eye volcano_eye-right"></div>
        <div class="volcano_mouth"></div>
      </div>
    </div>

    <div class="ground">
      <div class="grass"></div>
      <div class="road">
        <div class="road-status"></div>
      </div>
    </div>
    <rain-fall :rainIntensity="precipitationIntensity" v-if="isRaining" />
    <snow-fall :snowIntensity="precipitationIntensity" v-if="isSnowing" />
    <celestial-bodies :celestialBody="celestialBodyName" />
  </div>
</template>

<script>
import Tornado from "./Tornado.vue";
import RainFall from "./RainFall.vue";
import SnowFall from "./SnowFall.vue";
import CelestialBodies from "./CelestialBodies.vue";

export default {
  name: "WeatherElements",
  components: {
    Tornado,
    RainFall,
    SnowFall,
    CelestialBodies,
  },
  data() {
    return {
      precipitationIntensity: 'light',
      isRaining: false,
      isSnowing: true,
      celestialBodyName: "moon",
    };
  },
};
</script>

<style lang="scss">
.sky {
  background: #00bfff;
  position: absolute;
  width: 100%;
  height: 50%;
  top: 0;
  left: 0;
}

.ground {
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  left: 0;

  & > .grass {
    width: 100%;
    height: 100%;
    background: $color-ground;
  }

  & > .road {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    & > .road-status {
      position: absolute;
      left: 45%;
      background-color: brown;
    }
  }
}

.cloud {
  position: absolute;
  top: 20%;
  left: 20%;
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

  &_eye {
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

  &_mouth {
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

.volcano {
  position: absolute;
  bottom: 0;
  left: 55%;
  width: $volcano-width;
  height: $volcano-height;
  overflow: hidden;

  &_eye {
    position: absolute;
    top: $volcano-height/2;
    width: $celestial-eye-size;
    height: $celestial-eye-size;
    border-radius: $celestial-eye-size;
    background-color: black;

    &-left {
      left: ($volcano-width - $volcano-tube-width)/2;
    }

    &-right {
      right: ($volcano-width - $volcano-tube-width)/2;
    }
  }

  &_mouth {
    position: absolute;
    top: $celestial-size * 2/3;
    left: ($volcano-width - $volcano-tube-width)/2;
    width: $celestial-mouth-width;
    height: $celestial-mouth-width/2.5;
    border-radius: 50% / 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background-color: black;
  }
}

.volcano-tube {
  position: absolute;
  left: ($volcano-width - $volcano-tube-width)/2;
  width: $volcano-tube-width;
  height: $volcano-height;
  background-color: $color-volcano;

  &::before {
    content: "";
    position: absolute;
    top: -$volcano-width;
    left: -$volcano-side-width;
    width: $volcano-side-width;
    height: $volcano-side-height;
    background-color: transparent;
    border-bottom-right-radius: $volcano-height;
    box-shadow: 0 $volcano-height 0 0 $color-volcano;
  }

  &::after {
    content: "";
    position: absolute;
    top: -$volcano-width;
    left: $volcano-tube-width;
    width: $volcano-side-width;
    height: $volcano-side-height;
    background-color: transparent;
    border-bottom-left-radius: $volcano-height;
    box-shadow: 0 $volcano-height 0 0 $color-volcano;
  }
}

.lava {
  position: absolute;
  width: $volcano-tube-width;
  height: $volcano-height/8;
  background-color: red;
  border-radius: 50%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  &-flow-1 {
    position: absolute;
    left: $volcano-tube-width/4;
    background-color: red;
    width: $volcano-tube-width/5;
    height: $volcano-height/2;
    border-radius: $volcano-height/2;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    &::before {
      content: "";
      position: absolute;
      background-color: transparent;
      top: $volcano-height/8 * 0.85;
      right: $volcano-tube-width/5;
      height: $volcano-height/2;
      width: $volcano-tube-width/5/2;
      border-top-right-radius: 25px;
      box-shadow: 0 (-$volcano-height/4) 0 0 red;
    }

    &::after {
      content: "";
      position: absolute;
      background-color: transparent;
      top: $volcano-height/8;
      left: $volcano-tube-width/5;
      height: $volcano-height/2;
      width: $volcano-tube-width/5/2;
      border-top-left-radius: 25px;
      box-shadow: 0 (-$volcano-height/4) 0 0 red;
    }
  }

  &-flow-2 {
    position: absolute;
    left: $volcano-tube-width * 2/3;
    background-color: red;
    width: $volcano-tube-width/5;
    height: $volcano-height/3;
    border-radius: $volcano-height/2;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    &::before {
      content: "";
      position: absolute;
      background-color: transparent;
      top: $volcano-height/8;
      right: $volcano-tube-width/5;
      height: $volcano-height/2;
      width: $volcano-tube-width/5/2;
      border-top-right-radius: 25px;
      box-shadow: 0 (-$volcano-height/4) 0 0 red;
    }

    &::after {
      content: "";
      position: absolute;
      background-color: transparent;
      top: $volcano-height/8 * 0.7;
      left: $volcano-tube-width/5;
      height: $volcano-height/2;
      width: $volcano-tube-width/5/2;
      border-top-left-radius: 25px;
      box-shadow: 0 (-$volcano-height/4) 0 0 red;
    }
  }
}
</style>