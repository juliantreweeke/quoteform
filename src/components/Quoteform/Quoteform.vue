<template>
  <form @submit.prevent="submit" id="quoteform">
    <div class="quoteform__text-container">
      <div class="quoteform__text-input">
        <input
          v-bind:class="errors && !$v.formResponses.name.required ? 'input-error' : ''"
          v-model.lazy="$v.formResponses.name.$model"
          type="text"
          name="full name"
          placeholder="Full name"
        />
        <span class="error" v-if="errors && !$v.formResponses.name.required">Full name is required.</span>
      </div>

      <div class="quoteform__text-input">
        <input
          v-model.lazy="$v.formResponses.email.$model"
          type="text"
          name="email"
          placeholder="Email"
        />
        <span class="error" v-if="errors && !$v.formResponses.email.required">Email is required.</span>
      </div>

      <div class="quoteform__text-input">
        <input
          v-model.lazy="$v.formResponses.phone.$model"
          type="text"
          name="phone"
          placeholder="Phone"
        />
        <span
          class="error"
          v-if="errors && !$v.formResponses.phone.required"
        >Phone number is required.</span>
      </div>
    </div>

    <Numberslider v-on:childToParent="onChildClick" title="bedrooms" />
    <Numberslider v-on:childToParent="onChildClick" title="bathrooms" />
    <Buttongroup v-on:childToParent="onChildClick" title="frequency" :options="buttonOptions" />

    <button class="button" type="submit">Submit!</button>

    <p>{{uiState}}</p>
    <p>{{$v.formResponses}}</p>
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
      errors: false,
      empty: true,
      uiState: "submit not clicked",
      formResponses: {
        frequency: null,
        bedrooms: 1,
        bathrooms: 1,
        name: null,
        email: null,
        phone: null
      }
    };
  },
  validations: {
    formResponses: {
      frequency: {
        required
      },
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
      },
      phone: {
        required,
        minLength: minLength(10)
      }
    }
  },
  methods: {
    submit() {
      // this.formTouched = !this.$v.formResponses.$anyDirty;
      this.errors = this.$v.formResponses.$anyError;
      this.uiState = "submit clicked";
      if (this.errors === false && this.formTouched === false) {
        //this is where you send the responses
        this.uiState = "form submitted";
      }
    },
    onChildClick(value, title) {
      this._data.formResponses[title] = parseInt(value);
      console.log(this._data.formResponses[title]);
      debugger;
    }
  }
};
</script>

<style scoped>
#quoteform {
  min-height: 25px;
}

.quoteform__text-container {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center; /*centers items on the line (the x-axis by default)*/
}

.quoteform__text-input {
  display: flex;
  flex-direction: column;
  min-height: 100px;
  /* width: 20%; */
}

.quoteform__text-input .input-error {
  border: 1px solid red;
  /* width: 20%; */
}

.error {
  color: red;
  font-size: 12px;
  /* position: absolute; */
  text-transform: uppercase;
}
</style>