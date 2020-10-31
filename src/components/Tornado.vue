<template>
  <div class="tornado">
    <div class="stage one">
      <CreateCylinder
        parentClassName="tornado-parts tornado-parts-1"
        :partsArray="alphabet"
        :numberOfParts="numberParts"
        :radius="radius"
        :divisorRadius="divisorRadius[0]"
      />
      <CreateCylinder
        parentClassName="tornado-parts tornado-parts-2"
        :partsArray="alphabet"
        :numberOfParts="numberParts"
        :radius="radius"
        :divisorRadius="divisorRadius[1]"
      />
    </div>
    <div class="stage two">
      <CreateCylinder
        parentClassName="tornado-parts tornado-parts-3"
        :partsArray="alphabet"
        :numberOfParts="numberParts"
        :radius="radius"
        :divisorRadius="divisorRadius[2]"
      />
      <CreateCylinder
        parentClassName="tornado-parts tornado-parts-4"
        :partsArray="alphabet"
        :numberOfParts="numberParts"
        :radius="radius"
        :divisorRadius="divisorRadius[3]"
      />
    </div>
    <div class="stage three">
      <CreateCylinder
        parentClassName="tornado-parts tornado-parts-5"
        :partsArray="alphabet"
        :numberOfParts="numberParts"
        :radius="radius"
        :divisorRadius="divisorRadius[4]"
      />
      <CreateCylinder
        parentClassName="tornado-parts tornado-parts-6"
        :partsArray="alphabet"
        :numberOfParts="numberParts"
        :radius="radius"
        :divisorRadius="divisorRadius[5]"
      />
    </div>
  </div>
</template>

<script>
import CreateCylinder from "./CreateCylinder.vue";

export default {
  name: "Tornado",
  components: {
    CreateCylinder,
  },
  data() {
    return {
      alphabet: "abcdefghijklmnopqrstuvwxyz".split(""),
      numberParts: 20,
      radius: (20 * 4) / 100,
      divisorRadius: [1, 6 / 5, 3 / 2, 2, 3, 4],
    };
  },
};
</script>

<style lang="scss">
.stage {
  position: absolute;
  top: 20%;
  left: 10%;
  width: 10vw;
  transform-style: preserve-3d;
  transform: rotateX(5deg) rotateY(45deg) translate3d(100vw, 10%, 50px);
}

.one {
  animation: 3s linear alternate infinite stage-one-rotation;
}

.two {
  animation: 1s linear alternate infinite stage-two-rotation;
}

.three {
  animation: 3s linear alternate infinite stage-three-rotation;
}

.tornado {
  position: absolute;
  top: 10%;
  left: 35%;
}

.tornado-parts {
  transform-style: preserve-3d;
  animation: 2s infinite linear tornado-spin;
}

.tornado-parts > div {
  position: absolute;
  height: $tornado-height;
  background: $color-tornado;
  transform-style: preserve-3d;
  overflow: hidden;
}

.tornado-parts-2 > div {
  top: $tornado-height * 1.4;
}

.tornado-parts-3 > div {
  top: $tornado-height * 1.4 * 2;
}

.tornado-parts-4 > div {
  top: $tornado-height * 1.4 * 3;
}

.tornado-parts-5 > div {
  top: $tornado-height * 1.4 * 4;
}

.tornado-parts-6 > div {
  top: $tornado-height * 1.4 * 5;
}

.tornado-eye {
  position: absolute;
  top: ($tornado-height - $tornado-parts-width/1.25)/2;
  height: $tornado-parts-width/1.25;
  width: $tornado-parts-width/1.25;
  background-color: black;
  border-radius: $tornado-parts-width/1.25;

  &-1 {
    left: 0;
  }

  &-2 {
    left: 0;
  }
}

.tornado-mouth {
  position: absolute;
  top: ($tornado-height - $tornado-parts-width/1.5)/2;
  height: $tornado-height/2;
  width: $tornado-parts-width * 5/1.5;
  border-radius: 50% / 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: black;

  &-2 {
    left: -$tornado-parts-width/1.5;
  }

  &-3 {
    left: -$tornado-parts-width * 2/1.5;
  }

  &-4 {
    left: -$tornado-parts-width * 3/1.5;
  }

  &-5 {
    left: -$tornado-parts-width * 4/1.5;
  }
}
</style>