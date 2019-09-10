<template>
  <div id="numberslider">
    <p class="numberslider__title">{{title}}</p>
    <p class="numberslider__value">{{value}}</p>
    <input type="range" v-model="value" min="1" max="7" class="numberslider" />
  </div>
</template>

<script>
export default {
  name: "Numberslider",
  props: ["title"],
  data() {
    return {
      value: 1
    };
  }
};
</script>

<style>
.numberslider {
  width: 25%;
  min-height: 25px;
}
</style>