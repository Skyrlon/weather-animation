<template>
  <div id="container-forearm" :class="{ move: startMoving }">
    <RemoteControl @change-city="startAnimations" />

    <CreateCuboid
      parentClassName="forearm"
      childrenClassName="forearm__face forearm__face--"
      :faceArray="faces"
    >
      <CreateCuboid
        parentClassName="palm"
        childrenClassName="palm__face palm__face--"
        :faceArray="faces"
      >
        <div class="thumb">
          <CreateCuboid
            parentClassName="phalanx phalanx_inferior"
            childrenClassName="phalanx__face phalanx__face--"
            :faceArray="faces"
            id="thumb_phalanx_inferior"
          >
            <CreateCuboid
              parentClassName="phalanx phalanx_middle"
              childrenClassName="phalanx__face phalanx__face--"
              :faceArray="faces"
              id="thumb_phalanx_middle"
            />
          </CreateCuboid>
        </div>
        <div
          :key="fingerName"
          :class="'finger' + ' ' + fingerName"
          v-for="fingerName in fingers"
        >
          <CreateCuboid
            parentClassName="phalanx phalanx_inferior"
            childrenClassName="phalanx__face phalanx__face--"
            :faceArray="faces"
          >
            <CreateCuboid
              parentClassName="phalanx phalanx_middle"
              childrenClassName="phalanx__face phalanx__face--"
              :faceArray="faces"
            >
              <CreateCuboid
                parentClassName="phalanx phalanx_superior"
                childrenClassName="phalanx__face phalanx__face--"
                :faceArray="faces"
              />
            </CreateCuboid>
          </CreateCuboid>
        </div>
      </CreateCuboid>
    </CreateCuboid>
  </div>
</template>

<script>
import RemoteControl from "./RemoteControl.vue";
import CreateCuboid from "./CreateCuboid.vue";

export default {
  components: {
    RemoteControl,
    CreateCuboid,
  },
  name: "Forearm",
  data() {
    return {
      startMoving: false,
      fingers: ["index", "middle", "ring", "little"],
      faces: ["front", "back", "right", "left", "top", "bottom"],
    };
  },
  methods: {
    startAnimations() {
      this.startMoving = true;
    },
  },
};
</script>

<style lang="scss">
#container-forearm {
  z-index: 1;
  position: absolute;
  bottom: 55%;
  right: 10%;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
  perspective: $palm-width * 100;
  transform: rotateX(0deg) rotateY(-0deg);
  &.move {
    animation: hand-swing 1s forwards;
    & .phalanx_inferior {
      animation: phalanx-inferior-loosen 1s linear forwards;
    }
    & .phalanx_middle {
      animation: phalanx-middle-loosen 1s linear forwards;
    }
    & .phalanx_superior {
      animation: phalanx-superior-loosen 1s linear forwards;
    }
    & .remote-control {
      animation: remote-inclination 1s linear forwards;
    }
    & .remote-button {
      animation: button-pressed 0.25s 0.75s linear forwards;
    }
    & #thumb_phalanx_inferior{
      animation: thumb-inferior-click 1s forwards;
    }
    & #thumb_phalanx_middle {
      animation: thumb-middle-click 1s forwards;
    }
  }
}

.forearm {
  position: absolute;
  width: $forearm-width;
  height: $forearm-height;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
  perspective: $palm-width * 100;
  transform: rotate(-50deg) rotateY(180deg) rotateX(-0deg);

  &__face {
    position: absolute;
    width: $forearm-width;
    height: $forearm-height;

    &--front {
      background-color: blue;
      transform: translateZ($forearm-depth/2);
    }

    &--back {
      transform: rotateY(180deg) translateZ($forearm-depth/2);
      background-color: grey;
    }

    &--right {
      width: $forearm-depth;
      transform: rotateY(90deg) translateZ($forearm-width - $forearm-depth/2);
      background-color: orange;
    }

    &--left {
      width: $forearm-depth;
      transform: rotateY(-90deg) translateZ($forearm-depth/2);
      background-color: purple;
    }

    &--top {
      height: $forearm-depth;
      transform: rotateX(90deg) translateZ($forearm-depth/2);
      background-color: red;
    }

    &--bottom {
      height: $forearm-depth;
      transform: rotateX(-90deg) translateZ($forearm-height - $forearm-depth/2);
      background-color: green;
    }
  }
}

.palm {
  position: absolute;
  top: -$palm-height;
  left: ($forearm-width - $palm-width)/2;
  width: $palm-width;
  height: $palm-height;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
  perspective: $palm-width * 100;
  transform-origin: left bottom;
  transform: rotate(40deg) rotateY(0deg);

  &__face {
    position: absolute;
    width: $palm-width;
    height: $palm-height;

    &--front {
      background-color: blue;
      transform: translateZ($palm-depth/2);
    }

    &--back {
      transform: rotateY(180deg) translateZ($palm-depth/2);
      background-color: grey;
    }

    &--right {
      width: $palm-depth;
      transform: rotateY(90deg) translateZ($palm-width - $palm-depth/2);
      background-color: orange;
    }

    &--left {
      width: $palm-depth;
      transform: rotateY(-90deg) translateZ($palm-depth/2);
      background-color: purple;
    }

    &--top {
      height: $palm-depth;
      transform: rotateX(90deg) translateZ($palm-depth/2);
      background-color: red;
    }

    &--bottom {
      height: $palm-depth;
      transform: rotateX(-90deg) translateZ($palm-height - $palm-depth/2);
      background-color: green;
    }
  }
}

.thumb {
  position: absolute;
  bottom: $phalanx-width/2;
  left: 0;
  width: $phalanx-width;
  height: $thumb-height * 2;
  transform-origin: bottom;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
  perspective: $palm-width * 100;

  & .phalanx {
    position: absolute;
    width: $phalanx-width;
    height: $thumb-height;
    perspective-origin: 50% 50%;
    transform-style: preserve-3d;
    perspective: $phalanx-height * 100;
    transform-origin: bottom;

    &_inferior {
      position: absolute;
      bottom: 0;
      width: $phalanx-width;
      height: $thumb-height;
      perspective-origin: 50% 50%;
      transform-style: preserve-3d;
      perspective: $phalanx-height * 100;
      transform-origin: bottom;
      transform: rotate(180deg) rotateX(90deg) rotateY(0deg);
    }

    &_middle {
      position: absolute;
      top: -$thumb-height;
      width: $phalanx-width;
      height: $thumb-height;
      perspective-origin: 50% 50%;
      transform-style: preserve-3d;
      perspective: $phalanx-height * 100;
      transform-origin: bottom;
      transform: rotateX(90deg) rotateY(0deg);
    }

    &__face {
      position: absolute;
      width: $phalanx-width;
      height: $thumb-height;

      &--front {
        background-color: blue;
        transform: translateZ($phalanx-depth/2);
      }

      &--back {
        transform: rotateY(180deg) translateZ($phalanx-depth/2);
        background-color: grey;
      }

      &--right {
        width: $phalanx-depth;
        transform: rotateY(90deg) translateZ($phalanx-width - $phalanx-depth/2);
        background-color: orange;
      }

      &--left {
        width: $phalanx-depth;
        transform: rotateY(-90deg) translateZ($phalanx-depth/2);
        background-color: purple;
      }

      &--top {
        height: $phalanx-depth;
        transform: rotateX(90deg) translateZ($phalanx-depth/2);
        background-color: red;
      }

      &--bottom {
        height: $phalanx-depth;
        transform: rotateX(-90deg)
          translateZ($phalanx-height - $phalanx-depth/2);
        background-color: green;
      }
    }
  }
}

.finger {
  position: absolute;
  top: -$phalanx-height * 3;
  width: $phalanx-width;
  height: $phalanx-height * 3;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
  perspective: $palm-width * 100;
  transform-origin: bottom;
  transform: rotateX(0deg) rotateY(0deg);
}

.index {
  left: 0;
}

.middle {
  left: $phalanx-width * 1.5;
}

.ring {
  left: $phalanx-width * 3;
}

.little {
  left: $phalanx-width * 4.5;
}

.phalanx {
  position: absolute;
  width: $phalanx-width;
  height: $phalanx-height;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
  perspective: $phalanx-height * 100;
  transform-origin: bottom;

  &_inferior {
    position: absolute;
    bottom: 0;
    width: $phalanx-width;
    height: $phalanx-height;
    perspective-origin: 50% 50%;
    transform-style: preserve-3d;
    perspective: $phalanx-height * 100;
    transform-origin: bottom;
    transform: rotateX(0deg) rotateY(0deg);
  }

  &_middle {
    position: absolute;
    top: -$phalanx-height;
    width: $phalanx-width;
    height: $phalanx-height;
    perspective-origin: 50% 50%;
    transform-style: preserve-3d;
    perspective: $phalanx-height * 100;
    transform-origin: bottom;
    transform: rotateX(90deg) rotateY(0deg);
  }

  &_superior {
    position: absolute;
    top: -$phalanx-height;
    width: $phalanx-width;
    height: $phalanx-height;
    transform: rotateX(90deg) rotateY(0deg);
  }

  &__face {
    position: absolute;
    width: $phalanx-width;
    height: $phalanx-height;

    &--front {
      background-color: blue;
      transform: translateZ($phalanx-depth/2);
    }

    &--back {
      transform: rotateY(180deg) translateZ($phalanx-depth/2);
      background-color: grey;
    }

    &--right {
      width: $phalanx-depth;
      transform: rotateY(90deg) translateZ($phalanx-width - $phalanx-depth/2);
      background-color: orange;
    }

    &--left {
      width: $phalanx-depth;
      transform: rotateY(-90deg) translateZ($phalanx-depth/2);
      background-color: purple;
    }

    &--top {
      height: $phalanx-depth;
      transform: rotateX(90deg) translateZ($phalanx-depth/2);
      background-color: red;
    }

    &--bottom {
      height: $phalanx-depth;
      transform: rotateX(-90deg) translateZ($phalanx-height - $phalanx-depth/2);
      background-color: green;
    }
  }
}

.nail {
  position: absolute;
  top: 0;
  left: $phalanx-width * 0.1;
  width: $phalanx-width * 0.8;
  height: $phalanx-width * 0.8;
  border-radius: 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: pink;
}
</style>