
<template>
  <div class="main">
    <div class="main-background-image">
      <div class="main-background-image-layer">
        <div class="main-content-container">
          <Banner />
          <Quoteform />
        </div>
      </div>
    </div>
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
.main {
  height: 100vh;
  width: 100vw;
}

.main-background-image {
  height: 100%;
  width: 100%;
  background: url("../assets/loungeroom.jpg") no-repeat center center fixed;
  background-size: cover;
}

.main-background-image-layer {
  background-color: rgb(117, 121, 124, 0.7);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content-container {
  margin-left: 155px;
  margin-right: 155px;
}
</style>