import { reactive } from 'vue'

//Functions for Booking Appointment
//Data aus allen Komponenten zwischenspeichern

export const store = reactive({
    booking: {
        treatment: "",
        doctor: "",
        timeslot: "",
        patient: {
            fName: "",
            lName: "",
            email: "",
            birthdate: "",
            gender: "",
        },
    },
    setTreatment(treatment) {
        this.booking.treatment = treatment;
        console.log("treatment", treatment);
    },
    setDoctor(doctor) {
        this.booking.doctor= doctor;
        console.log("doctor", doctor);
    },
    setTimeslot(timeslot) {
        this.booking.timeslot= timeslot;
        console.log("timeslot", timeslot);
    },
    setPatientsData({ lName, fName, email, birthdate, gender }) {
        this.booking.patient = {
            lName,
            fName,
            email,
            birthdate,
            gender
        };
    },
    resetAndPrintForm(){
        console.log(this.booking);
        this.lName="";
        this.fName="";
        this.email="";
        this.birthdate="";
        this.gender="";
    },
})