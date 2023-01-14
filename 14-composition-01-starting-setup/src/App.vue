<template>
  <section class="container">
    <!-- <h2>{{ user.userName }}</h2>
    <h2>{{ user.userAge }}</h2> -->

    <!-- <h2>{{ userName }}</h2>
    <h2>{{ userAge }}</h2> -->

    <user-data :userAge="user.userAge" :userName="user.userName"></user-data>

    <button @click="setNewAge">Change age</button>
    <!-- <input type="text" placeholder="First Name" @input="setFirstName" /> -->
    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" @input="setLastName" />
    {{ fullName }}
  </section>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: { UserData },
  setup() {
    // const userName = ref('Kaveen');
    // const userAge = ref(23);
    // const user = ref({
    //   userName: 'Kaveen',
    //   userAge: 23,
    // });
    const user = reactive({
      userName: 'Kaveen',
      userAge: 23,
    });

    const setNewAge = () => {
      user.userAge = 32;
    };

    const firstName = ref('');
    const lastName = ref('');

    function setFirstName(event) {
      firstName.value = event.target.value;
    }

    function setLastName(event) {
      lastName.value = event.target.value;
    }

    const fullName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    // setTimeout(() => {
    //   user.value.userName = 'John';
    //   user.value.userAge = 22;
    // }, 2000);

    // setTimeout(() => {
    //   user.userName = 'John';
    //   user.userAge = 22;
    // }, 2000);

    // const userRefs = toRefs(user);

    // return { userName: user.value.userName, userAge: user.value.userAge, user };
    return {
      user,
      setNewAge,
      setFirstName,
      setLastName,
      firstName,
      lastName,
      fullName,
    };
    // return { user, userName: userRefs.userName, userAge: userRefs.userAge };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
