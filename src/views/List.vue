<template>
  <div>
    <div class="flex flex-row items-center justify-around">
      <SearchBar
        placeholder="Search country"
        @changeString="searchString = $event"
      />
      <SelectInput
        label="Pick a region :"
        name="regionSelection"
        :options="regions"
        @changeSelect="regionSelected = $event"
      />
    </div>
    <CountryList :countries="filteredCountries" />
  </div>
</template>

<script>
import axios from "axios";
import { CountryList, SearchBar, SelectInput } from "@/components";

export default {
  name: "List",
  components: { SelectInput, SearchBar, CountryList },
  data() {
    return {
      countries: [],
      searchString: "",
      regionSelected: "",
      regions: [
        { label: "All", value: "" },
        { label: "Africa", value: "Africa" },
        { label: "Americas", value: "Americas" },
        {
          label: "Asia",
          value: "Asia"
        },
        { label: "Europe", value: "Europe" },
        { label: "Oceania", value: "Oceania" }
      ]
    };
  },
  computed: {
    filteredCountries() {
      let filteredRegion;
      if (this.regionSelected === "") {
        console.log("pick all countries");
        filteredRegion = this.countries;
      } else {
        filteredRegion = this.countries.filter(
          country => country.region === this.regionSelected
        );
      }
      if (this.searchString.length === 0) {
        console.log("do not filter");
        return filteredRegion;
      } else {
        return filteredRegion.filter(country =>
          country.name.common
            .toLowerCase()
            .includes(this.searchString.toLowerCase())
        );
      }
    }
  },
  async beforeCreate() {
    await axios.get("https://restcountries.com/v3.1/all").then(res => {
      console.log(res.data);
      this.countries = res.data;
    });
  }
};
</script>

<style scoped></style>
