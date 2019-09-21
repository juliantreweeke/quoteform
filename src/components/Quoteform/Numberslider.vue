<template>
  <div class="numberslider">
    <p class="numberslider__title">{{title}}:</p>
    <p class="numberslider__value">{{value}}</p>
    <input type="range" v-model="value" min="1" max="7" class="numberslider__input" />
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
  },
  watch: {
    value: function(value) {
      this.$emit("childToParent", this.value, this.title);
    }
  }
};
</script>

<style>
.numberslider {
  width: 40%;
  min-height: 25px;
  display: flex;
  margin-right: 20px;
}

.numberslider__input {
  margin-left: 20px;
  width: 250px;
}

.numberslider__title {
  margin-right: 5px;
}

.numberslider__title,
.numberslider__value {
  font-size: var(--h2-font-size);
}

/* TODO refactor these */
.numberslider__input::-webkit-slider-runnable-track {
  height: 35%;
  background: var(--input-bg-secondary);
  border-radius: 12px;
  box-sizing: border-box;
  border: none;
  width: 100%;
}
.numberslider__input::-moz-range-track {
  height: 35%;
  background: var(--input-bg-secondary);
  border-radius: 12px;
  box-sizing: border-box;
  border: none;
  width: 100%;
}
.numberslider__input::-ms-track {
  height: 35%;
  background: var(--input-bg-secondary);
  border-radius: 12px;
  box-sizing: border-box;
  border: none;
  width: 100%;
}

.numberslider__input::-webkit-slider-thumb {
  transform: scale(2.8);
  cursor: pointer;
  margin-top: 2px;
  border-radius: 5px;
}

.numberslider__input::-moz-range-thumb {
  transform: scale(2.8);
  cursor: pointer;
  margin-top: 2px;
  border-radius: 5px;
}

.numberslider__input::-ms-thumb {
  transform: scale(2.8);
  cursor: pointer;
  margin-top: 2px;
  border-radius: 5px;
}
</style>