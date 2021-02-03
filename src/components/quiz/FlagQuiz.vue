<template>
  <div class="flex flex-col items-center">
    <div class="w-full flex flex-row justify-around">
      <p class="m-1 font-semibold">Score : {{ score }}</p>
      <p class="m-1 font-semibold">Best : {{ bestScore }}</p>
    </div>
    <img
      class="w-48 h-32 object-contain border border-black"
      :src="answer.flag"
      alt="flag"
    />
    <div class="flex flex-row flex-wrap justify-between items-center">
      <button
        class="flex flex-wrap m-4 p-1 border bg-gray-200 hover:bg-green-200 rounded-lg"
        v-for="handledCountry in handledCountries"
        v-bind:key="handledCountry.name"
        @click="handleClick(handledCountry)"
      >
        {{ handledCountry.name }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FlagQuiz",
  data() {
    return {
      countries: [],
      score: 0,
      bestScore: 0,
      handledCountries: [],
      answer: ""
    };
  },
  methods: {
    pickCountries() {
      // Reset handled countries
      this.handledCountries = [];
      // Random index of the right answer
      let answerIndex = Math.floor(Math.random() * 4);
      // Fullfill our array with 4 countries
      for (let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random() * this.countries.length);
        // If country is already picked, we restart
        while (this.handledCountries.includes(this.countries[index])) {
          index = Math.floor(Math.random() * this.countries.length);
        }
        // Define our answer
        if (i === answerIndex) {
          this.answer = this.countries[index];
        }
        // Add our country
        this.handledCountries.push(this.countries[index]);
      }
      console.log(this.answer.name);
    },
    handleClick(handledCountry) {
      // Handle anwser
      // If correct answer, increment score
      if (handledCountry.name === this.answer.name) {
        this.score += 1;
      } else {
        // If wrong answer, reset score to 0 and change bestScore if needed
        if (this.score > (localStorage.pbFlag ?? this.bestScore)) {
          this.bestScore = this.score;
          localStorage.pbFlag = this.score;
        }
        this.score = 0;
      }
      // Redo a round
      this.pickCountries();
    }
  },
  async beforeCreate() {
    await axios
      .get("https://restcountries.eu/rest/v2/all?fields=name;flag")
      .then(res => {
        this.countries = res.data;
      });
    // Retrieve bestStore from the store
    if (localStorage.pbFlag) {
      this.bestScore = localStorage.pbFlag;
    }
    this.pickCountries();
  }
};
</script>

<style scoped></style>
