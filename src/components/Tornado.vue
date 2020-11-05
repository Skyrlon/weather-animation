<template>
  <div id="tornado">
    <div
      :key="stage"
      v-for="stage in alphabet.slice(0, 20)"
      :class="stage"
    ></div>
    <div id="face">
      <div class="container-eye">
        <div class="eye eye_left"></div>
        <div class="eye eye_right"></div>
      </div>
      <div class="container-eye">
        <div class="eye eye_left"></div>
        <div class="eye eye_right"></div>
      </div>
      <div class="container-mouth">
        <div class="mouth"></div>
      </div>
      <div class="container-mouth">
        <div class="mouth"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tornado",
  data() {
    return {
      alphabet: "abcdefghijklmnopqrstuvwxyz".split(""),
    };
  },
};
</script>

<style lang="scss">
#tornado {
  position: absolute;
  bottom: 0;
  left: 10%;
  width: $tornado-width;
  height: $tornado-height;
}

@for $i from 1 through 20 {
  #tornado > div:nth-child(#{$i}) {
    position: absolute;
    top: #{$tornado-height/20 * ($i - 1)};
    left: #{($tornado-width - ($tornado-width - $tornado-width * ($i - 1)/25)) /
      2};
    width: #{$tornado-width - $tornado-width * ($i - 1)/25};
    height: $tornado-height/20;
    background-color: grey;
  }
}

@for $j from 1 through 2 {
  #tornado #face .container-eye:nth-child(#{$j}) {
    position: absolute;
    top: #{$tornado-height/20 * ($j + 3)};
    left: #{($tornado-width - ($tornado-width - $tornado-width * ($j + 3)/25)) /
      2};
    width: #{$tornado-width - $tornado-width * ($j + 3)/25};
    height: $tornado-height/20;
    overflow: hidden;
  }
}

@for $j from 1 through 2 {
  #tornado #face div:nth-child(#{$j + 2}) {
    position: absolute;
    top: #{$tornado-height/20 * ($j + 6)};
    left: #{($tornado-width - ($tornado-width - $tornado-width * ($j + 6)/25)) /
      2};
    width: #{$tornado-width - $tornado-width * ($j + 6)/25};
    height: $tornado-height/20;
    overflow: hidden;
  }
}

#tornado .eye {
  position: absolute;
  height: $tornado-height/10;
  width: $tornado-height/10;
  background-color: black;
  border-radius: $tornado-height/10;
  animation: face-move 2s infinite linear;
  &_left {
    top: 0;
  }
  &_right {
    top: 0;
    left: $tornado-width/3;
  }
}

#tornado .container-eye:nth-child(2) {
  & .eye {
    top: -$tornado-height/20;
    left: (($tornado-width - $tornado-width * (5)/25)/2) -
      (($tornado-width - $tornado-width * (4)/25)/2);
  }
  & .eye_right {
    left: (($tornado-width - $tornado-width * (5)/25)/2) -
      (($tornado-width - $tornado-width * (4)/25)/2) + $tornado-width/3;
  }
}

#tornado .mouth {
  position: absolute;
  top: 0;
  left: 0;
  width: $tornado-width/2;
  height: $tornado-height/10;
  border-radius: 50% / 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: black;
  animation: face-move 2s infinite linear;
}

#face div:nth-child(4) .mouth {
  top: -$tornado-height/20;
  left: (($tornado-width - $tornado-width * (9)/25)/2) -
    (($tornado-width - $tornado-width * (8)/25)/2);
}

@keyframes face-move {
  from {
    transform: translateX(-$tornado-width);
  }
  to {
    transform: translateX($tornado-width);
  }
}
</style>