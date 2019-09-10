
<template>
  <div id="main">
    <Banner />
    <Quoteform />
  </div>
</template>


<script>
import Banner from "./Banner.vue";
import Quoteform from "./Quoteform/Quoteform.vue";

export default {
  name: "Main",
  components: {
    Banner,
    Quoteform
  }
};
</script>

<style>
#main {
  background-color: grey;
  height: 100vh;
  width: 100vw;
}
</style>