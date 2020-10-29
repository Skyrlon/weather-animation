<template>
  <div class="tv_stand">
    <div class="tv_stand__plank tv_stand__plank--up"></div>
    <div class="tv_stand__plank tv_stand__plank--middle"></div>
    <div class="tv_stand__plank tv_stand__plank--down"></div>
    <div class="drawer drawer__left"></div>
    <div class="drawer drawer__right"></div>
    <CreateCuboid
      parentClassName="shelf shelf_1"
      childrenClassName="shelf__face shelf__face--"
      :faceArray="faces"
    />
    <CreateCuboid
      class="shelf shelf_2"
      childrenClassName="shelf__face shelf__face--"
      :faceArray="faces"
    />
  </div>
</template>

<script>
import CreateCuboid from "./CreateCuboid.vue";

export default {
  name: "TvStand",
  components: {
    CreateCuboid,
  },
  data() {
    return {
      faces: ["front", "back", "right", "left", "top", "bottom"],
    };
  },
};
</script>

<style lang="scss">
.tv_stand {
  position: absolute;
  bottom: 0;
  left: 35%;
  width: $tv-stand-width;
  height: $tv-stand-height;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
  perspective: $wall-depth * 100;
  transform: rotateX(-0deg) rotateY(-0deg)
    translateZ(-$wall-depth/2 + $tv-stand-depth);

  &::before {
    content: "";
    position: absolute;
    width: $tv-stand-width;
    height: $tv-stand-depth;
    background-color: $color-tv-stand;
    border-radius: 0.5vw;
    transform: rotateX(90deg) translateZ($tv-stand-depth/2);
  }

  &__plank {
    position: absolute;
    width: $tv-stand-width;
    height: $tv-stand-height/10;
    background-color: $color-tv-stand;
    box-sizing: border-box;
    border-radius: 0.5vw;
    border: 1px solid;
    perspective-origin: 50% 50%;
    transform-style: preserve-3d;
    perspective: $tv-stand-width * 100;
    transform: translateZ($tv-stand-depth/2);

    &--up {
      top: 0;
    }

    &--middle {
      top: ($tv-stand-height - $tv-stand-height/10)/2;
      left: ($tv-stand-width - $shelf-width)/2;
      width: $shelf-width;
      border-radius: 0;
    }

    &--down {
      bottom: 0;
    }
  }
}

.drawer {
  position: absolute;
  width: $drawer-width;
  height: $drawer-height;
  background-color: $color-tv-stand;
  box-sizing: border-box;
  border: 1px solid;
  transform: translateZ($tv-stand-depth/2);

  &::before {
    content: "";
    position: absolute;
    top: $drawer-height/3;
    right: $drawer-width/10;
    width: $drawer-width/20;
    height: $drawer-height/3;
    background-color: black;
  }

  &__left {
    top: $tv-stand-height/10;
    left: $tv-stand-width/100;
  }

  &__right {
    top: $tv-stand-height/10;
    right: $tv-stand-width/100;

    &::before {
      left: $drawer-width/10;
    }
  }
}

.shelf {
  position: absolute;
  left: $tv-stand-width/100 + $drawer-width;
  width: $shelf-width;
  height: $shelf-height;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
  perspective: $tv-stand-width * 100;

  &_1 {
    top: $tv-stand-height/10;
  }

  &_2 {
    bottom: $tv-stand-height/10;
  }

  &__face {
    position: absolute;
    width: $shelf-width;
    height: $shelf-height;
    box-sizing: border-box;
    border: 1px solid;
    background-color: $color-tv-stand;

    &--front {
      opacity: 0;
      transform: translateZ($tv-stand-depth/2);
    }

    &--back {
      background-color: darken($color-tv-stand, 35%);
      transform: rotateY(180deg) translateZ($tv-stand-depth/2);
    }

    &--left {
      background: linear-gradient(
        to left,
        $color-tv-stand,
        darken($color-tv-stand, 35%)
      );
      width: $tv-stand-depth;
      transform: rotateY(-90deg) translateZ($tv-stand-depth/2);
    }

    &--right {
      background: linear-gradient(
        to right,
        $color-tv-stand,
        darken($color-tv-stand, 35%)
      );
      width: $tv-stand-depth;
      transform: rotateY(90deg) translateZ($shelf-width - $tv-stand-depth/2);
    }

    &--top {
      height: $tv-stand-depth;
      transform: rotateX(90deg) translateZ($tv-stand-depth/2);
    }

    &--bottom {
      background: linear-gradient(
        $color-tv-stand,
        darken($color-tv-stand, 35%)
      );
      height: $tv-stand-depth;
      transform: rotateX(-90deg) translateZ($shelf-height - $tv-stand-depth/2);
    }
  }
}
</style>