<template>
  <div>
    <table class="mx-auto">
      <tr>
        <th class="border border-gray-light">Country</th>
        <th class="border border-gray-light">Region</th>
        <th class="border border-gray-light">Population</th>
        <th class="border border-gray-light">Language</th>
      </tr>
      <tr
        class="border border-gray-light"
        v-for="country in countries"
        v-bind:key="country.name"
      >
        <td class="border border-gray-light">{{ country.name }}</td>
        <td class="border border-gray-light">{{ country.subregion }}</td>
        <td class="border border-gray-light">{{ country.population }}</td>
        <td class="border border-gray-light">
          {{ country.languages[0].name }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "List",
  data() {
    return {
      countries: Array,
      test: String
    };
  },
  beforeCreate() {
    axios.get("https://restcountries.eu/rest/v2/all").then(res => {
      console.log(res.data);
      this.countries = res.data;
      this.test = "Salut";
    });
  }
};
</script>

<style scoped></style>
