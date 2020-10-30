<template>
  <div id="weather_elements">
    <div class="sky">
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
  </div>
</template>

<script>
import Tornado from "./Tornado.vue";

export default {
  name: "WeatherElements",
  components: {
    Tornado,
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

.sun {
  position: absolute;
  width: $celestial-size;
  height: $celestial-size;
  background-color: $color-sun;
  border-radius: $celestial-size;
  top: 0;
  right: 0;

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

.rain {
  position: absolute;
  &-drop {
    position: absolute;
    width: $rain-drop-width;
    height: $rain-drop-width;
    background-color: lightblue;
    border-radius: 0 50% 50% 50%;
    transform: rotate(45deg);
  }
}

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