<template>


  <form @submit.prevent>
    <div class="container">
      <div class="header">
        <h2>Please select a practitioner, date and time:</h2>
      </div>
      <!--FORM STARTS HERE-->
      <!--DoctorPicker-->
        <div class="doctor">
          <input type="radio" id="doctorOne" value="doctorOne" v-model="doctorPicked">
          <label for="doctorOne" class="doctorBtn">Doctor 1</label>
       </div>
          <br>
      <div class="doctor">
          <input type="radio" id="doctorTwo" value="doctorTwo" v-model="doctorPicked"/>
          <label for="doctorTwo" class="doctorBtn">Doctor 2</label>
        </div>

      <div class="date-time">
        <!--DatePicker-->
        <p>Please choose a preferred date for your appointment:</p>
          <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              min="2022-11-16"
              v-model="appointmentDate"
          >
        </div>
        <!--TimePicker-->
    <p>Please choose a preferred time for your appointment:</p>
        <div class="date-time">
          <select v-model="timePicked">
            <option disabled value="">Please select a time</option>
            <option>12:00</option>
            <option>12:15</option>
            <option>12:30</option>
          </select>
        </div>

      <div class="footer">
        <button @click="$emit('previous-step')" class="backBtn">
          Back
        </button>
        <button
            type="submit"
            @click="submit(doctorPicked, timePicked, appointmentDate)"
            class="continueBtn">
          Continue
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { store } from "@/store";

export default {
  emits: ['next-step', 'previous-step'],
  name: "Available-Doctors",
  data() {
    return {
      errors: [],
      doctorPicked: "doctorOne",
      timePicked: "12:00",
      appointmentDate: "2022-11-16"
    };
  },
  methods: {
    submit(doctor, timeslot) {
      store.setDoctor(doctor);
      store.setTimeslot(timeslot);
      this.$emit("next-step");
      //this.$router.push("/patients-form-view")
    }
  },
}
</script>

<style scoped>

.container {
  justify-content: center;
}

.header, .doctor, .date-time, .footer {
  padding: 20px;
  margin: 20px;
}
.doctor {

}

.date-time {

}

.footer {

}

input[type=radio] {
  display: none;
}

input[type=radio] + label.doctorBtn {
  padding: 30px 150px;
  border-radius: 6px;
  transition-duration: 0.4s;
  border: 2px solid #2c3e50;
}

input[type=radio]:hover + label.doctorBtn {
  background-color: #2c3e50;
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
input[type=radio]:checked + label.doctorBtn {
  background-color: #2c3e50;
  color: white;
}

select {
  appearance: none;
  background-color: transparent;
  padding: 30px 110px;
  font-size: 15px;
  border-color: #2c3e50;
  text-align: center;
}

input[type=date] {
  border-color: #2c3e50;
  border-radius: 6px;
  padding: 30px 140px;
  font-size: 15px;
  background-color: transparent;
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