<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ThoughtBubble/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import ThoughtBubble from '@/components/ThoughtBubble.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ThoughtBubble
  }
}
</script>
