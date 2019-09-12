<template>
  <div class="buttongroup">
    <div v-bind:key="index" class="buttonContainer" v-for="(option,index) in options">
      <button
        type="button"
        v-bind:class="[option.id == selected ? 'active' : '', 'button']"
        v-on:click="selectButton(option.id)"
      >{{ option.name }}</button>
      {{option.deal}}
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

<style scope>
.buttongroup {
  width: 100%;
}
.button {
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  height: 50px;
  background: grey;
}
.buttonContainer {
  display: inline-flex;
  flex-direction: column;
}
.active {
  background: green;
}
</style>