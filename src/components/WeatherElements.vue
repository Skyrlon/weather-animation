<template>
  <div id="weather_elements">
    <div :class="'sky ' + dayOrNight()">
      <clouds-and-thunder
        :numberOfClouds="numberOfClouds(cloudsAmount)"
        :thunder="hasThunder"
      />
      <Tornado v-if="hasTornado" />
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
    <celestial-bodies
      :celestialBody="celestialBodyName()"
      :hour="unixToSeconds(hourOfTheDay + timeZone)"
      :rise="unixToSeconds(riseHour() + timeZone)"
      :timeBetweenRiseAndSet="unixToSeconds(durationBetweenRiseAndSet())"
    />
  </div>
</template>

<script>
import Tornado from "./Tornado.vue";
import RainFall from "./RainFall.vue";
import SnowFall from "./SnowFall.vue";
import CelestialBodies from "./CelestialBodies.vue";
import CloudsAndThunder from "./CloudsAndThunder.vue";

export default {
  name: "WeatherElements",
  components: {
    Tornado,
    RainFall,
    SnowFall,
    CelestialBodies,
    CloudsAndThunder,
  },
  data() {
    return {
      precipitationIntensity: "moderate",
      isRaining: false,
      isSnowing: false,
      hasTornado: false,
      hasThunder: false,
      cloudsAmount: "few", //none, few, scattered, broken, or overcast
      hourOfTheDay: 1604977200, //unix, UTC
      sunrise: 1604991139, //unix, UTC
      sunset: 1605025014, //unix, UTC
      moonrise: 1604966760, //unix, UTC
      moonset: 1605018600, //unix, UTC
      timeZone: 3600, //in seconds
    };
  },
  methods: {
    numberOfClouds(amount) {
      let number;
      switch (amount) {
        case "none":
          number = 0;
          break;
        case "few":
          number = 1;
          break;
        case "scattered":
          number = 3;
          break;
        case "broken":
          number = 6;
          break;
        case "overcast":
          number = 9;
          break;
      }
      return number;
    },
    dayOrNight() {
      if (this.hourOfTheDay > this.sunrise && this.hourOfTheDay < this.sunset) {
        return "day";
      } else if (
        this.hourOfTheDay < this.sunrise ||
        this.hourOfTheDay > this.sunset
      ) {
        return "night";
      }
    },
    celestialBodyName() {
      if (this.dayOrNight() == "day") {
        return "sun";
      } else if (this.dayOrNight() == "night") {
        return "moon";
      }
    },
    durationBetweenRiseAndSet() {
      if (this.dayOrNight() == "day") {
        return this.sunset - this.sunrise;
      } else if (this.dayOrNight() == "night") {
        return this.moonset - this.moonrise;
      }
    },
    riseHour() {
      if (this.dayOrNight() == "day") {
        return this.sunrise;
      } else if (this.dayOrNight() == "night") {
        return this.moonrise;
      }
    },
    unixToSeconds(time) {
      let timeInSeconds = new Date(time * 1000);
      let hours = timeInSeconds.getUTCHours();
      let minutes = timeInSeconds.getUTCMinutes();
      let seconds = timeInSeconds.getUTCSeconds();
      return hours * 3600 + minutes * 60 + seconds;
    },
  },
};
</script>

<style lang="scss">
.sky {
  position: absolute;
  width: 100%;
  height: 50%;
  top: 0;
  left: 0;
  &.day {
    background: #00bfff;
  }
  &.night {
    background: blue;
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