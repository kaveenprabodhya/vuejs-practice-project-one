const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      // fullName: "",
      lastName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 5) {
        this.counter = 0;
      }
    },
    // name(value) {
    //   if (value === "") return (this.fullName = "");
    //   this.fullName = value + " " + this.lastName;
    // },
    // lastName(value) {
    //   if (value === "") return (this.fullName = "");
    //   this.fullName = this.name + " " + value;
    // },
  },
  computed: {
    fullName() {
      if (this.name === "" || this.lastName === "") return "";
      return this.name + " " + this.lastName;
      // return this.name + " " + "Prabodhya";
    },
  },
  methods: {
    increment() {
      this.counter = this.counter + 1;
    },
    decrement() {
      this.counter = this.counter > 0 ? this.counter - 1 : (this.counter = 0);
    },
    setName(event) {
      this.name = event.target.value;
    },
    resetInput() {
      this.name = "";
      this.lastName = "";
    },
  },
});

app.mount("#events");
