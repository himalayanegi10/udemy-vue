const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullName: "",
    };
  },
  watch: {
    // name(value) {
    //   if (value === "" && this.lastName === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "" && this.name === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = this.name + " " + value;
    //   }
    // },
  },

  computed: {
    fullName() {
      console.log("Running fullName");
      if (this.name === "" && this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },

  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
      this.lastName = "";
    },
    // outputFullName() {
    //   console.log("Running outputFullName()");
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Ibrahimovich";
    // },
    // Above code is not optimized for performance, Vuejs doesn't know if the method
    // changes any data property hence it needs to re-run the method to keep DOM updated.
    // Use computed property for performance optimization
  },
});

app.mount("#events");
