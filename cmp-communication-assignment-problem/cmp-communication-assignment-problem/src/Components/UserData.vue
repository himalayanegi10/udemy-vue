<template>
  <form @submit.prevent="$emit('add-user', name, age)">
    <div>
      <input type="text" placeholder="user name" v-model="name"/>
    </div>
    <div>
      <input type="number" placeholder="age" v-model="age"/>
    </div>
    <button type="submit"> Add User </button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        name: "",
        age: null
      };
    },
    emits: [
        'add-user'
    ]
  };
</script>