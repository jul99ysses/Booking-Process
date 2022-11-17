<template>
  <div class="container">
  <div class="header">
  <h1>Welcome to MediCenter</h1>
  </div>
  <div class="content">
  <p>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </p>
  <div class=bookingButton>
    <button @click="goToBooking">
      Book an Appointment
    </button>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HomeInfo',
  methods: {
    goToBooking() {
      this.$router.push("/book-appointment")
    }
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>

button {
  background-color: mediumaquamarine;
  color: #2c3e50;
  padding: 20px 60px;
  border-radius: 8px;
  font-size: 16px;

}

div {
  padding: 40px;
}
</style>
