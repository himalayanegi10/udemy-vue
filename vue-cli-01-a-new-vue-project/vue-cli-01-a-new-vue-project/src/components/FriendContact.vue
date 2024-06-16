<template>
  <li>
    <h2> {{ friend.name }} </h2>
    <button @click="toggleDetailVisible"> {{ isDetailVisible ? 'Show' : 'Hide'}} Details </button>
    <ul v-if="isDetailVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
  export default {
    data() {
      return {
        isDetailVisible: false,
        friend: {
          id: "Himalaya",
          name: "Himalaya",
          phone: "1234 567 899",
          email: "himalaya@gmail.com",
        }
      };
    },
    methods: {
      toggleDetailVisible(){
        this.isDetailVisible = !this.isDetailVisible;
      }
    }
  };
</script>