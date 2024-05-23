const app = Vue.createApp({
  data: function () {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },
  },
  methods: {
    selectBox(value) {
      if (value === "A") {
        this.boxASelected = !this.boxASelected;
      } else if (value === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else if (value === "C") {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});

app.mount("#styling");
