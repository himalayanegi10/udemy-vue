<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)': ''}}</h2>
    <button @click="toggleFavorite">{{ isFavorite ? 'Unmake' : 'Make' }} Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: [
  //     'name',
  //     'phoneNumber',
  //     'emailAddress',
  //     'isFavorite'
  // ],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite:{
      type: Boolean,
      required: false,
      default: false,
      // validator: function (value) {
      //   return value === '0' || value === '1';
      // }
    }
  },
  // Most basic form of emits . Used to help other devs know what component are emitted in below code
  emits: [
      'toggle-favorite'
  ],
  // Below code snippet is for detailed emits

  // emits:{
  //   'toggle-favorite': function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("no id")
  //       return false;
  //     }
  //   }
  // },
  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite: this.isFavorite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // this.friendIsFavorite = !this.friendIsFavorite;
      // move toggle logic to parent component
      this.$emit('toggle-favorite', this.id);
      // this.$emit('toggle-favorite');
    }

  }
};
</script>