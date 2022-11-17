<template>
  <h1>Choose the treatment you need:</h1>
  <form @submit.prevent>
    <div class="treatmentSection">
      <input type="radio" id="treatmentOne" value="treatmentOne" v-model="treatmentPicked" v-bind="$attrs"/>
      <label for="treatmentOne" class="treatmentBtn">
        Treatment 1:
        Includes: Health check,
        Duration: 30 minutes

      </label>
    </div>
    <div class="treatmentSection">
      <input type="radio" id="treatmentTwo" value="treatmentTwo" v-model="treatmentPicked" v-bind="$attrs"/>
      <label for="treatmentTwo" class="treatmentBtn">
        Treatment 2:
        Includes: Health check,
        Duration: 30 minutes
      </label>
    </div>

    <div class="treatmentSection">
      <input type="radio" id="treatmentThree" value="treatmentThree" v-model="treatmentPicked" v-bind="$attrs"/>
      <label for="treatmentThree" class="treatmentBtn">
        Treatment 3:
        Includes: Health check,
        Duration: 30 minutes
      </label>
    </div>
    <div class="treatmentSection">
      <input type="radio" id="treatmentFour" value="treatmentFour" v-model="treatmentPicked" v-bind="$attrs"/>
      <label for="treatmentFour" class="treatmentBtn">
        Treatment 4:
        Includes: Health check,
        Duration: 30 minutes
      </label>
    </div>
    <br>
    <div class="submitField">

      <button type="submit" @click="submit(treatmentPicked)" class="continueBtn">
        Continue
      </button>
    </div>
  </form>
</template>

<script>
import {store} from "@/store";

export default {
  name: "Available-Treatments",
  emits: ['next-step'],
  data() {
    return {
      errors: [],
      store,
      treatmentPicked: "treatmentOne"
    };
  },
  methods: {
    submit(treatmentPicked) {
        store.setTreatment(treatmentPicked);
        this.$emit("next-step");
      }
    },
}
</script>

<style scoped>
input[type=radio] {
  display:none;
}

input[type=radio] + label.treatmentBtn {
  padding: 30px 150px;
  transition-duration: 0.4s;
  border: 2px solid #2c3e50;
}

input[type=radio]:hover + label.treatmentBtn {
  background-color: #2c3e50;
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
input[type=radio]:checked + label.treatmentBtn {
  background-color: #2c3e50;
  color: white;
}


.treatmentSection {
  padding: 40px 150px;
}

.submitField {
  padding: 50px 50px;
}

.continueBtn {
  background-color: mediumaquamarine;
  color: #2c3e50;
  padding: 20px 60px;
  border-radius: 8px;
  font-size: 16px;
}


</style>