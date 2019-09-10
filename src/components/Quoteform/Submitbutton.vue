<template>
  <button v-on:click="action">See price and booking in 60 seconds!</button>
</template>

<script>
export default {
  name: "Submitbutton",
  props: ["action"]
};
</script>

<style scoped>
button {
  width: 80%;
}
</style>