const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      inputTask: "",
      showList: false,
    };
  },
  computed: {
    buttonText() {
      return this.showList ? "Hide" : "Show";
    },
  },
  methods: {
    addATask() {
      this.tasks.push(this.inputTask);
    },
    toggleShowList() {
      this.showList = !this.showList;
    },
  },
});

app.mount("#assignment");
