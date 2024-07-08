<template>
  <section>
    <user-data
      @add-user="addUser"
    />
    <ul>
      <li v-for="user in users"
          :key="user.id"
      >
        <active-user
            :id="user.id"
            :age="user.age"
            :name="user.name"
        />
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        users: []
      };
    },
    methods: {
      addUser(inputName, inputAge){
        this.users.push({
          id: inputName + inputAge,
          name: inputName,
          age: +inputAge
        });
      }
    }
  };
</script>
