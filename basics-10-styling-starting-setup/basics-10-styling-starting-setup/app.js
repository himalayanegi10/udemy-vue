const app = Vue.createApp({
  data: function () {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    selectBox(value) {
      if (value === "A") {
        this.boxASelected = true;
      } else if (value === "B") {
        this.boxBSelected = true;
      } else if (value === "C") {
        this.boxCSelected = true;
      }
    },
  },
});

app.mount("#styling");
