<template>
  <h2>{{ userName }}</h2>
  <h2>{{ userAge }}</h2>
</template>

<script>
export default {
  props: ['userName', 'userAge'],
};
</script>
