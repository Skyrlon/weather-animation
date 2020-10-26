<template>
  <div class="home">
    <ThoughtBubble/>
    <Forearm/>
  </div>
</template>

<script>
// @ is an alias to /src
import ThoughtBubble from '@/components/ThoughtBubble.vue';
import Forearm from '@/components/Forearm.vue';


export default {
  name: 'Home',
   data() {
        return {
        }
    },
  components: {
    ThoughtBubble,
    Forearm
  }
}
</script>
