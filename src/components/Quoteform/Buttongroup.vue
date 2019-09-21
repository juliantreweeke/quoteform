<template>
  <div class="buttongroup">
    <div v-bind:key="index" class="buttonContainer" v-for="(option,index) in options">
      <button
        type="button"
        v-bind:class="[option.id == selected ? 'active' : '', 'button']"
        v-on:click="selectButton(option.id)"
      >{{ option.name }}</button>
      <span class="extra-info">
        <p>{{option.deal}}</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buttongroup",
  props: ["options", "title"],
  data: function() {
    return {
      selected: 1
    };
  },
  methods: {
    selectButton: function(id) {
      this.selected = id;
    }
  },
  watch: {
    selected: function() {
      this.$emit("childToParent", this.selected, this.title);
    }
  }
};
</script>

<style scoped>
.buttongroup {
  width: 100%;
}
.button {
  min-width: 135px;
  height: 45px;
  margin-right: 35px;
  height: 50px;
  background: var(--secondary-color);
  border: none;
  opacity: 0.9;
}
.buttonContainer {
  display: inline-flex;
  flex-direction: column;
}
.active {
  background: var(--primary-color);
}
.extra-info {
  margin-left: 4px;
}
</style>