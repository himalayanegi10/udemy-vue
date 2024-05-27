const app = Vue.createApp({
  data() {
    return {
      goals: [],
      showButton: true,
      enteredGoal: "",
    };
  },
  computed: {
    isGoalEmpty() {
      return this.goals.length === 0;
    },
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoal);
    },
    toggleShowButton() {
      this.showButton = !this.showButton;
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
