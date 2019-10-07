
<template>
  <div class="admin">
    <div class="admin-content-container">
      <h1>USER REQUEST FORMS</h1>

      <ul class="admin-quotes" v-if="quotes" id="quotes">
        <li v-bind:key="quote._id" v-for="quote in quotes">
          <h3>
            {{ quote.name }}
            <button v-on:click="deleteQuote(quote._id)" data-id="quote.id">X</button>
          </h3>
          <p>Phone:{{quote.phone}}</p>
          <p>Rooms:{{quote.rooms}}</p>
          <p>Bathrooms:{{quote.bathrooms}}</p>
          <p>frequency:{{quote.frequency}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner.vue";
import API_URL from "../../config";

export default {
  name: "Admin",
  components: {},
  data() {
    return {
      quotes: []
    };
  },
  methods: {
    getQuotes() {
      fetch(API_URL)
        .then(response => {
          response.json().then(data => {
            console.log(data);
            this.quotes = data;
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteQuote(quoteId) {
      var confirmation = confirm("Are you sure you want to delete this quote?");
      if (confirmation) {
        fetch(`${API_URL}?id=${quoteId}`, {
          method: "DELETE"
        })
          .then(() => {
            this.getQuotes();
            console.log("removed");
          })
          .catch(err => {
            console.error(err);
          });
      }
    }
  },
  mounted() {
    this.getQuotes();
  }
};
</script>

<style>
.admin {
  height: 100vh;
  width: 100vw;
}

.admin h1 {
  color: black;
}

.admin-content-container {
  margin-left: 155px;
  margin-right: 155px;
}

.admin-quotes h3,
.admin-quotes button,
.admin-quotes p {
  color: black;
}
</style>