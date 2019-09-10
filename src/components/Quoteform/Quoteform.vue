<template>
  <div id="quoteform">
    <div id="quoteform__text-container">
      <input type="text" name="first name" placeholder="First name" />
      <input type="text" name="email" placeholder="Email" />
      <input type="text" name="phone" placeholder="Phone" />
    </div>
    <Numberslider title="bedrooms" />
    <Numberslider title="bathrooms" />
    <Buttongroup :options="buttonOptions" />
    <Submitbutton />
  </div>
</template>

<script>
import Numberslider from "./Numberslider.vue";
import Buttongroup from "./Buttongroup.vue";
import Submitbutton from "./Submitbutton.vue";

export default {
  name: "Quoteform",
  components: {
    Numberslider,
    Buttongroup,
    Submitbutton
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
      ]
    };
  }
};
</script>

<style>
#quoteform {
  min-height: 25px;
}
</style>