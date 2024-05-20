const app = Vue.createApp({
  data: function () {
    return {
      inputValue1: "",
      outputValue1: "",
      inputValue2: "",
      outputValue2: "",
    };
  },
  methods: {
    showAlert() {
      alert("Alex Pereira is G.O.A.T");
    },
    updateOutput(event, isFirst) {
      if (isFirst) {
        this.outputValue1 = this.inputValue1;
      } else {
        this.outputValue2 = this.inputValue2;
      }
    },
    setInput(event, isFirst) {
      if (isFirst) {
        this.inputValue1 = event.target.value;
      } else {
        this.inputValue2 = event.target.value;
      }
    },
  },
});

app.mount("#assignment");
