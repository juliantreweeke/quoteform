<template>
  <form @submit.prevent="submit" id="quoteform">
    <div id="quoteform__text-container">
      <input v-model="name" type="text" name="full name" placeholder="First name" />
      <input v-model="email" type="text" name="email" placeholder="Email" />
      <input v-model="phone" type="text" name="phone" placeholder="Phone" />
    </div>
    <div class="error" v-if="!$v.name.required">Name is required</div>
    <div
      class="error"
      v-if="!$v.name.minLength"
    >Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
    <Numberslider v-on:childToParent="onChildClick" title="bedrooms" />
    <Numberslider v-on:childToParent="onChildClick" title="bathrooms" />
    <Buttongroup :options="buttonOptions" />
    <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>
    <p>{{submitStatus}}</p>
  </form>
</template>

<script>
import { required, minLength, between } from "vuelidate/lib/validators";
import Numberslider from "./Numberslider.vue";
import Buttongroup from "./Buttongroup.vue";
export default {
  name: "Quoteform",
  components: {
    Numberslider,
    Buttongroup
  },
  data() {
    return {
      buttonOptions: [
        { name: "Bi-weekly cleaning", deal: "10% off", id: "1" },
        { name: "Ass cleaning", deal: "100% off", id: "2" },
        {
          name: "Bi-weekly cleaning",
          deal: "10% off",
          id: "assweekly",
          id: "3"
        },
        { name: "Bi-weekly cleaning", deal: "10% off", id: "4" },
        { name: "Bi-weekly cleaning", deal: "10% off", id: "5" }
      ],
      submitStatus: null,
      bedrooms: 1,
      bathrooms: 1,
      name: "",
      email: "",
      phone: ""
    };
  },
  validations: {
    bedrooms: {
      required
    },
    bathrooms: {
      required
    },
    name: {
      required,
      minLength: minLength(2)
    },
    email: {
      required,
      minLength: minLength(2)
    }
  },
  methods: {
    submit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
    onChildClick(value, title) {
      this._data[title] = parseInt(value);
      console.log("bedrooms", this.bedrooms);
      console.log("bathrooms", this.bathrooms);
    }
  }
};
</script>

<style scoped>
#quoteform {
  min-height: 25px;
}
.error {
  color: red;
}
</style>