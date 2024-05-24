const app = Vue.createApp({
  data: function () {
    return {
      inputValue: "",
      isVisible: true,
      bgColor: "",
    };
  },
  computed: {
    getStyle() {
      if (this.inputValue === "user1") {
        return { user1: true };
      } else if (this.inputValue === "user2") {
        return { user2: true };
      }
    },
    visibility() {
      if (this.isVisible) {
        return { visible: true };
      } else {
        return { hidden: true };
      }
    },
    inlineStyle() {
      return { "background-color": this.bgColor };
    },
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");
