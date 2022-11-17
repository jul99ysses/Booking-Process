<template>
  <h1>Fill in Data</h1>
  <form @submit.prevent>
    <div class="field">
      <label class="label">First Name</label>
      <div class="control">
        <input name="fName" class="input" type="text" placeholder="First name" v-model="fName" />
      </div>
    </div>
    <div class="field">
      <label class="label">Last Name</label>
      <div class="control">
        <input name="lName" class="input" type="text" placeholder="Last Name" v-model="lName" />
      </div>
    </div>
    <div class="field">
      <label class="label">E-Mail</label>
      <div class="control">
        <input name="email" class="input" type="text" placeholder="email" v-model="email">
      </div>
    </div>

    <div class="field">
      <p>Gender</p>
      <input type="radio" id="female" value="female" v-model="gender" />
      <label for="female">Female</label>
      <input type="radio" id="male" value="male" v-model="gender" />
      <label for="male">Male</label>
      <input type="radio" id="diverse" value="diverse" v-model="gender" />
      <label for="diverse">Diverse</label>
    </div>

    <div class="field">
      <p>Birthday</p>
      <input
          type="date"
          id="birthdate"
          name="birthdate"
          min="1900-01-01"
          v-model="birthdate"
      >
    </div>
    <ErrorList :errors="errors" />
    <div class="field is-grouped">
      <div class="control">
        <button type="previous" @click="$emit('previous-step')" class="backBtn">
          Back
        </button>
        <button
            type="submit"
            @click="submit({ lName, fName, email, birthdate, gender })"
            class="continueBtn"
        >
          Book Appointment
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { store } from "@/store";
import ErrorList from "./ErrorList.vue";

export default {
  name: "Patients-Form",
  emits: ['next-step', 'previous-step'],
  data() {
    return {
      errors: [],
      datePicked: "",
      fName: "",
      lName: "",
      email: "",
      gender: "",
      birthdate: "",
    };
  },
  methods: {
    submit(patient) {
      this.errors = this.validate();
      if (this.errors.length == 0) {
        store.setPatientsData(patient);
        this.$emit("next-step");
        console.log(patient);
        store.resetAndPrintForm();
      }
    },
    validate() {
      const errors = [];
      if (!this.fName) {
        errors.push("First Name is required");
      }
      if (!this.lName) {
        errors.push("Last Name is required");
      }
      if (!this.email) {
        errors.push("Email is required");
      }
      if (!this.gender) {
        errors.push("Gender is required");
      }
      if (!this.birthdate) {
        errors.push("Birthdate is required");
      }
      return errors;
    }
  },
  components: { ErrorList }
}
</script>

<style scoped>
input[type=text], select, textarea {
  width: 50%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

.field {
  padding: 10px 10px;
}

.continueBtn {
  background-color: mediumaquamarine;
  color: #2c3e50;
  padding: 20px 60px;
  border-radius: 8px;
  font-size: 16px;
}

.backBtn {
  background-color: transparent;
  color: #2c3e50;
  padding: 20px 60px;
  border-radius: 8px;
  font-size: 16px;
}
</style>