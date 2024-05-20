const app = Vue.createApp({
  data() {
    return {
      counter: 8,
      name: "",
      finalName: "",
    };
  },
  methods: {
    add(num) {
      // this.counter++;
      this.counter += num;
    },
    sub(num) {
      // --this.counter;
      this.counter -= num;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm(event) {
      alert("Submitted");
    },
    confirmName() {
      this.finalName = this.name;
    },
  },
});

app.mount("#events");
