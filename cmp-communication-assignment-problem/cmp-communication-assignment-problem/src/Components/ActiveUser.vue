<template>
  <section>
    <h2> Name is {{name}} </h2>
    <h3> Age is {{age}} </h3>
  </section>
</template>

<script>
  export default {
    props: {
      id:{
        required: true,
        type: String,
      },
      name: {
        required: true,
        type: String,
      },
      age: {
        required: true,
        type: Number
      }
    }
  };
</script>
