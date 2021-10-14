<template>
  <div>
    <table v-if="countries.length > 0" class="mx-auto w-3/4">
      <tr>
        <th class="border border-gray-light">Country</th>
        <th class="border border-gray-light">Region</th>
        <th class="border border-gray-light">Population</th>
        <th class="border border-gray-light">Languages</th>
        <th class="border border-gray-light">Detail</th>
      </tr>
      <tr
        class="border border-gray-light text-left"
        v-for="country in countries"
        v-bind:key="country.name.common"
      >
        <td class="border border-gray-light pl-2 w-1/5">
          {{ country.name.common }}
        </td>
        <td class="border border-gray-light pl-2 w-2/5">
          {{ country.region }}, {{ country.subregion }}
        </td>
        <td class="border border-gray-light pl-2 w-1/5">
          {{
            country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
        </td>
        <td class="border border-gray-light pl-2 w-1/5">
          {{
            country.languages &&
              Object.keys(country.languages)
                .map(key => country.languages[key])
                .join(" - ")
          }}
        </td>
        <td class="border border-gray-light text-center">
          <router-link
            :to="'/detail/' + country.name.common"
            class="text-center hover:text-blue-500 transition-200"
          >
            <i class="bi-eye" style="font-size: 1.5rem;"></i>
          </router-link>
        </td>
      </tr>
    </table>

    <p class="text-lg font-semibold m-8" v-if="countries.length === 0">
      No country found
    </p>
  </div>
</template>

<script>
export default {
  name: "CountryList",
  props: {
    countries: Array
  }
};
</script>

<style scoped></style>
