<template>
  <button @click="addOne">Add 2</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      //   this.$store.state.count++;
      //   this.$store.commit('increment');
      this.$store.dispatch('numbers/increment');
    },
  },
};
</script>
