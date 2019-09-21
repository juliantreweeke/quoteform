<template>
  <div class="header">
    <div class="heading-container">
      <img class="heading-logo" :src="logoImage" alt="logo" />
      <h2 class="heading">Green Clean Sydney</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      logoImage: require("../assets/logo.png")
    };
  }
};
</script>

<style>
.header {
  max-height: 73px;
  width: 100%;
  background-color: var(--primary-color);
  display: flex;
  position: relative;
  top: 0;
}

.heading-container {
  margin-left: 155px;
  margin-right: 155px;
  display: flex;

  align-items: center;
}

.heading {
  font-size: 36px;
  text-align: left;
}
.heading-logo {
  width: 42px;
  height: 60px;
  margin-right: 40px;
}
</style>