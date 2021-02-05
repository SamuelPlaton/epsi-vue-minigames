<template>
  <div>
    <img
      class="w-24 h-24 my-2"
      alt="logo"
      :src="
        require('../assets/hangman/hangman-' +
          this.lettersWrong.length +
          '.png')
      "
    />
    <p>{{ userAnswer.join(" ") }}</p>
    <LetterInput
      v-if="lettersWrong.length < 5"
      :letters-right="lettersRight"
      :letters-wrong="lettersWrong"
      @inputLetter="handleLetter($event)"
    />
    <GameOver v-if="lettersWrong.length === 5" @restart="pickCountry" />
  </div>
</template>

<script>
import axios from "axios";
import LetterInput from "@/components/input/LetterInput";
import GameOver from "@/components/game/game-over/GameOver";

export default {
  name: "Hangman",
  components: { GameOver, LetterInput },
  data() {
    return {
      countries: [],
      selectedCountry: [],
      lettersRight: [],
      lettersWrong: [],
      userAnswer: []
    };
  },
  methods: {
    pickCountry() {
      this.lettersWrong = [];
      this.lettersRight = [];
      this.selectedCountry = this.countries[
        Math.floor(Math.random() * this.countries.length)
      ].name
        .toLowerCase()
        .split("");
      console.log(this.selectedCountry.join(""));
      this.userAnswer = this.selectedCountry.map(item => {
        return item === " " ? " " : "_";
      });
      console.log(this.userAnswer.join(""));
    },
    handleLetter(letter) {
      if (this.selectedCountry.includes(letter)) {
        this.lettersRight.push(letter);
        this.selectedCountry.map((item, index) => {
          if (item === letter) {
            this.userAnswer[index] = item;
          }
        });
      } else {
        console.log("push " + letter);
        this.lettersWrong.push(letter);
      }
    },
    getImgUrl() {
      var images = require.context("../assets/", false, /\.png$/);
      return images(
        "../assets/hangman/hangman-" + this.lettersWrong.length + ".png"
      );
    }
  },
  async beforeCreate() {
    await axios
      .get("https://restcountries.eu/rest/v2/all?fields=name")
      .then(res => {
        this.countries = res.data;
      });
    this.pickCountry();
  }
};
</script>

<style scoped></style>
