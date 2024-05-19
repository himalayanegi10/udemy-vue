const app = Vue.createApp({
  data: () => {
    return {
      name: 'Alex "Poatan" Pereira',
      age: 36,
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/ff/Alex_Pereira.png",
      initialText: "Poatan",
    };
  },
  methods: {
    ageIn5yrs() {
      return 5 + this.age;
    },
    favoriteNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
