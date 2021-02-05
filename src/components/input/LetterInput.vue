<template>
  <div class="flex flex-col items-center mx-auto w-1/2 lg:w-1/4">
    <input
      class="w-full border border-gray-light m-4 px-2 py-1 rounded-lg"
      v-model="inputLetter"
      v-model.lazy="inputLetter"
      id="site-search"
      name="q"
      placeholder="_"
      autocomplete="off"
    />
    <div class="flex flex-col items-start text-left w-full">
      <p class="text-green-500">Right Letters : {{ lettersRight.join(" ") }}</p>
      <p class="text-red-500">Wrong Letters : {{ lettersWrong.join(" ") }}</p>
      <p class="text-red-500" v-if="warningMsg">
        This letter has already been proposed ...
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LetterInput",
  props: {
    lettersRight: Array,
    lettersWrong: Array
  },
  data() {
    return {
      inputLetter: "",
      warningMsg: false
    };
  },
  watch: {
    inputLetter() {
      const letter = this.inputLetter.toLowerCase();
      console.log("ouch");
      this.inputLetter = "";
      if (letter === " " || letter.length === 0) {
        return;
      }
      console.log(this.lettersRight);
      console.log(this.lettersWrong);

      if (
        this.lettersRight.includes(letter) ||
        this.lettersWrong.includes(letter)
      ) {
        this.warningMsg = true;
        return;
      }

      this.warningMsg = false;
      this.$emit("inputLetter", letter);
    }
  }
};
</script>

<style scoped></style>
