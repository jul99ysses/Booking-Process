<template>
  <div className="home">
    <HomeInfo msg="Best care for doctors and patients"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeInfo from '@/components/HomeInfo.vue'

export default {
  name: 'HomeView',
  components: {
    HomeInfo
  },
  data() {
    return {
      title: "Best care for doctors and patients"
    }
  }
}
</script>
