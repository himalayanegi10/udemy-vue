<template>
  <section>
    <form @submit.prevent="addFriend">
      <div>
        <input type="text" placeholder="Name" v-model="name" />
      </div>
      <div>
        <input type="email" placeholder="Email" v-model="email" />
      </div>
      <div>
        <input type="tel" placeholder="Phone" v-model="phone" />
      </div>
      <div>
        <button type="submit">Add New Friend</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      phone: null,
      favorite: false
    };
  },
  emits: ['add-friend'],
  computed: {
    id: function () {
      return (this.name + "-" + this.email);
    }
  },
  methods: {
    addFriend(){
      this.$emit("add-friend", {
        id: this.id,
        name: this.name,
        email: this.email,
        phone: this.phone,
        favorite: this.favorite
      });
    }
  }
};
</script>