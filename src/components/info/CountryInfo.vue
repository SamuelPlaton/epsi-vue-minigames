<template>
  <div>
    <div v-if="country" class="flex flex-row justify-around m-8">
      <div class="flex flex-col justify-between items-center">
        <img class="w-48 object-contain" :src="country.flags.png" alt="flag" />
        <p class="text-2xl font-bold mt-2">{{ country.name.common }}</p>
      </div>
      <div class="flex flex-col justify-between text-left">
        <p>Capital : {{ country.capital[0] }}</p>
        <p>Region : {{ country.region }}</p>
        <p>SubRegion : {{ country.subregion }}</p>
        <p>
          Population :
          {{
            country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          inhabitants
        </p>
        <p>
          Currency :
          {{
            Object.keys(country.currencies)
              .map(
                key =>
                  `${country.currencies[key].name} ${country.currencies[key].symbol}`
              )
              .join(" - ")
          }}
        </p>
      </div>
    </div>

    <div v-if="!country">
      <p class="font-semibold text-red-500">
        Error : no country found for '{{ $route.params.country }}'
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryInfo",
  props: {
    country: Object | undefined
  }
};
</script>

<style scoped></style>
