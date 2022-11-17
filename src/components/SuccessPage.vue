<template>
  <div class="container">
    <div class="header">
      <h1>Thank you for booking!</h1>
      <p> Your appointment:
        {{store.booking}}</p>
    </div>
  </div>
</template>

<script>
import {store} from "@/store";

export default {
  name: "Success-Page",
  data() {
    return {
      store,
    }
  }
}
</script>

<style scoped>

div {
  padding: 40px;
}

</style>