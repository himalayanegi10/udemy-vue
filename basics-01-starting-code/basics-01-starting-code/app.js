const app = Vue.createApp({
  data: () => {
    return {
      courseGoal: "Finish this course and learn Vue !",
      courseGoalA: "Finish this course and learn Vue !",
      courseGoalB: "Master Vue and build amazing apps !",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    dynamicContent() {
      const rand = Math.random();
      return rand < 0.5 ? "Vuejs is easy :)" : "Vuejs is hard :/";
    },
    dynamicGoal() {
      const rand = Math.random();
      return rand < 0.5 ? this.courseGoalA : this.courseGoalB;
    },
    myFavoriteDish() {
      const rand = Math.random();
      return "I love " + (rand < 0.5 ? "Biryani" : "Chole");
    },
    renderHtml() {
      return "<h3>This is HTML Heading !!! <h3>";
    },
  },
});

app.mount("#user-goal");
