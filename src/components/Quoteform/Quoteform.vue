<template>
  <form @submit.prevent="submit" id="quoteform">
    <div class="quoteform__text-container">
      <div class="quoteform__text-input">
        <input
          v-bind:class="submitted && $v.formResponses.name.$error ? 'input-error' : ''"
          v-model.lazy="$v.formResponses.name.$model"
          type="text"
          name="full name"
          placeholder="Full name"
        />
        <span
          class="invalid-feedback"
          v-if="submitted && $v.formResponses.name.$error"
        >Full name is required.</span>
      </div>

      <div class="quoteform__text-input">
        <input
          v-bind:class="submitted && $v.formResponses.email.$error ? 'input-error' : ''"
          v-model.lazy="$v.formResponses.email.$model"
          type="text"
          name="email"
          placeholder="Email"
        />

        <div class="invalid-feedback" v-if="submitted && $v.formResponses.email.$error">
          <span v-if="!$v.formResponses.email.required">Email is required</span>
          <span v-if="!$v.formResponses.email.email">Email is invalid</span>
        </div>
      </div>

      <div class="quoteform__text-input">
        <input
          v-bind:class="submitted && $v.formResponses.phone.$error ? 'input-error' : ''"
          v-model.lazy="$v.formResponses.phone.$model"
          type="text"
          name="phone"
          placeholder="Phone"
        />
        <div class="invalid-feedback" v-if="submitted && $v.formResponses.phone.$error">
          <span v-if="!$v.formResponses.phone.required">Email is required</span>
          <span
            v-if="!$v.formResponses.phone.minLength && $v.formResponses.phone.numeric"
          >Number must have at least 10 digits.</span>
          <span v-if="!$v.formResponses.phone.numeric">Number is invalid</span>
        </div>
      </div>
    </div>

    <Numberslider v-on:childToParent="onChildClick" title="bedrooms" />
    <Numberslider v-on:childToParent="onChildClick" title="bathrooms" />
    <Buttongroup
      @submit.prevent="submit"
      v-on:childToParent="onChildClick"
      title="frequency"
      :options="buttonOptions"
    />

    <button class="button" type="submit">Submit!</button>
  </form>
</template>

<script>
import { numeric, email, required, minLength } from "vuelidate/lib/validators";
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
      formResponses: {
        frequency: null,
        bedrooms: 1,
        bathrooms: 1,
        name: null,
        email: null,
        phone: null
      },
      submitted: false
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
        email
      },
      phone: {
        required,
        minLength: minLength(10),
        numeric
      }
    }
  },
  methods: {
    submit() {
      debugger;
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.formResponses));
    },
    onChildClick(value, title) {
      this._data.formResponses[title] = parseInt(value);
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
  justify-content: center;
}

.quoteform__text-input {
  display: flex;
  flex-direction: column;
  min-height: 100px;
}

.quoteform__text-input .input-error {
  border: 1px solid red;
}

.invalid-feedback {
  color: red;
  font-size: 12px;
  text-transform: uppercase;
}
</style>