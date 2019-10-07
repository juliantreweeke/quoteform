<template>
  <form @submit.prevent="submit" class="quoteform">
    <div class="quoteform__text-input-group">
      <div class="quoteform__text-input-container">
        <input
          class="quoteform__text-input"
          v-bind:class="submitted && $v.formResponses.name.$error ? 'input-error' : ''"
          v-model.lazy="$v.formResponses.name.$model"
          type="text"
          name="full name"
          placeholder="Full name"
        />
        <div class="invalid-feedback-container">
          <div
            class="invalid-feedback"
            v-if="submitted && $v.formResponses.name.$error"
          >Full name is required.</div>
        </div>
      </div>

      <div class="quoteform__text-input-container">
        <input
          class="quoteform__text-input"
          v-bind:class="submitted && $v.formResponses.email.$error ? 'input-error' : ''"
          v-model.lazy="$v.formResponses.email.$model"
          type="text"
          name="email"
          placeholder="Email"
        />
        <div class="invalid-feedback-container">
          <div class="invalid-feedback" v-if="submitted && $v.formResponses.email.$error">
            <span v-if="!$v.formResponses.email.required">Email is required</span>
            <span v-if="!$v.formResponses.email.email">Email is invalid</span>
          </div>
        </div>
      </div>

      <div class="quoteform__text-input-container">
        <input
          class="quoteform__text-input"
          v-bind:class="submitted && $v.formResponses.phone.$error ? 'input-error' : ''"
          v-model.lazy="$v.formResponses.phone.$model"
          type="text"
          name="phone"
          placeholder="Phone"
        />
        <div class="invalid-feedback-container">
          <div class="invalid-feedback" v-if="submitted && $v.formResponses.phone.$error">
            <span v-if="!$v.formResponses.phone.required">Phone number is required</span>
            <span
              v-if="!$v.formResponses.phone.minLength && $v.formResponses.phone.numeric"
            >Number must have at least 10 digits.</span>
            <span v-if="!$v.formResponses.phone.numeric">Number is invalid</span>
          </div>
        </div>
      </div>
    </div>
    <div class="numberslider-container">
      <Numberslider v-on:childToParent="onChildClick" title="rooms" />
      <Numberslider v-on:childToParent="onChildClick" title="bathrooms" />
    </div>
    <Buttongroup
      @submit.prevent="submit"
      v-on:childToParent="onChildClick"
      title="frequency"
      :options="buttonOptions"
    />

    <button class="submit-button" type="submit">SEE YOUR QUOTE AND BOOK IN 60 SECONDS</button>
  </form>
</template>

<script>
import { numeric, email, required, minLength } from "vuelidate/lib/validators";
import Numberslider from "./Numberslider.vue";
import Buttongroup from "./Buttongroup.vue";
import API_URL from "../../../config";

export default {
  name: "Quoteform",
  components: {
    Numberslider,
    Buttongroup
  },
  data() {
    return {
      buttonOptions: [
        { name: "Bi-weekly clean", deal: "10% off", id: "1" },
        { name: "Ass clean", deal: "100% off", id: "2" },
        {
          name: "Bi-weekly clean",
          deal: "10% off",
          id: "assweekly",
          id: "3"
        },
        { name: "Bi-weekly clean", deal: "10% off", id: "4" },
        { name: "Bi-weekly clean", deal: "10% off", id: "5" }
      ],
      formResponses: {
        frequency: 1,
        rooms: 1,
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
      rooms: {
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
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(this.formResponses),
        headers: {
          "content-type": "application/json"
        }
      })
        .then(response => {
          alert("Thank you!");
          this.formResponses = {
            frequency: 1,
            rooms: 1,
            bathrooms: 1,
            name: null,
            email: null,
            phone: null
          };
        })
        .then(() => {
          console.log("Request successful");
        })
        .catch(error => {
          console.log("Request failed", error);
        });
    },
    onChildClick(value, title) {
      this._data.formResponses[title] = parseInt(value);
    }
  }
};
</script>

<style scoped>
.quoteform {
  min-height: 25px;
}

.quoteform__text-input-group {
  display: flex;
  flex-direction: row;
  text-align: center;
}

.quoteform__text-input-container {
  display: flex;
  flex-direction: column;
}

.quoteform__text-input {
  height: 40px;
  min-width: 260px;
  margin-right: 30px;
  border: 2px solid var(--input-border-color);
  border-radius: var(--border-radius);
  padding-left: 12px;
}

.quoteform__text-input:focus {
  border: 2px solid var(--primary-color);
  box-shadow: 0 0 10px var(--primary-color);
}

.quoteform__text-input-container .input-error {
  border: 1px solid var(--form-error);
  box-shadow: 0 0 5px var(--form-error);
}

.invalid-feedback-container {
  min-height: 20px;
}

.invalid-feedback {
  margin-top: 10px;
  margin-left: 5px;
  color: var(--form-error);
  font-size: 12px;
  text-align: left;
}

.submit-button {
  background-color: var(--call-to-action-color);
  height: 60px;
  min-width: 477px;
  font-size: var(--h2-font-size);
}

.numberslider-container {
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>