const app = Vue.createApp({
  data() {
    return {
      name: "kaveen",
      age: 23,
      imgUrl:
        "https://pixabay.com/photos/sunset-tree-water-silhouette-1373171/",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateNumber() {
      return Math.floor(Math.random() * 9999);
    },
  },
});

app.mount("#assignment");
