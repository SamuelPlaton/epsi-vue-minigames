<template>
  <div>
    <input
      class="border border-gray-light m-4 px-2 py-1 rounded-lg"
      v-model="searchString"
      id="site-search"
      name="q"
      placeholder="Search country"
    />
    <table class="mx-auto w-3/4">
      <tr>
        <th class="border border-gray-light">Country</th>
        <th class="border border-gray-light">Region</th>
        <th class="border border-gray-light">Population</th>
        <th class="border border-gray-light">Language</th>
      </tr>
      <tr
        class="border border-gray-light text-left"
        v-for="country in filteredCountries"
        v-bind:key="country.name"
      >
        <td class="border border-gray-light pl-2 w-1/5">{{ country.name }}</td>
        <td class="border border-gray-light pl-2 w-2/5">
          {{ country.region }}, {{ country.subregion }}
        </td>
        <td class="border border-gray-light pl-2 w-1/5">
          {{
            country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
        </td>
        <td class="border border-gray-light pl-2 w-1/5">
          {{ country.languages[0].name }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";

// todo: filter by region

export default {
  name: "List",
  data() {
    return {
      countries: [],
      searchString: ""
    };
  },
  computed: {
    filteredCountries() {
      if (this.searchString.length === 0) {
        return this.countries;
      } else {
        return this.countries.filter(country =>
          country.name.toLowerCase().includes(this.searchString.toLowerCase())
        );
      }
    }
  },
  async beforeCreate() {
    await axios.get("https://restcountries.eu/rest/v2/all").then(res => {
      this.countries = res.data;
    });
  }
};
</script>

<style scoped></style>
