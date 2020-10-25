<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ThoughtBubble/>
    <CreateCuboid
      parentClassName="foo-"
      childrenClassName="bar-"
      :faceArray="faces"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import ThoughtBubble from '@/components/ThoughtBubble.vue';
import CreateCuboid from '@/components/CreateCuboid.vue';


export default {
  name: 'Home',
   data() {
        return {
        faces : ['front', 'back', 'right', 'left', 'top', 'bottom'],
        }
    },
  components: {
    HelloWorld,
    ThoughtBubble,
    CreateCuboid
  }
}
</script>
