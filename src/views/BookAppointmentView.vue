<template>
  <div>
    <keep-alive>
      <component :is="tabs[activeTabIndex]" v-on:next-step="onNextStep" v-on:previous-step="onPreviousStep"></component>
    </keep-alive>
  </div>
</template>

<script>

import AvailableTreatments from "@/components/AvailableTreatments";
import AvailableDoctors from "@/components/AvailableDoctors";
import PatientsForm from "@/components/PatientsForm";
import SuccessPage from "@/components/SuccessPage";

export default {
  name: 'Book-Appointment-View',
  components: {
    AvailableTreatments,
    AvailableDoctors,
    PatientsForm,
    SuccessPage
  },
  data() {
    return {
      activeTabIndex: 0,
      tabs: ["AvailableTreatments", "AvailableDoctors", "PatientsForm",
        "SuccessPage"]
    }
  },
  methods: {
    onNextStep() {
      this.activeTabIndex = this.activeTabIndex + 1;
    },
    onPreviousStep() {
      if (this.activeTabIndex > 0) {
        this.activeTabIndex = this.activeTabIndex - 1;
      }
    }
  }
}
</script>
