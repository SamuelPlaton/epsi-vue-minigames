<template>
  <div class="flex flex-col items-center my-8">
    <p class="text-2xl font-bold text-red-500">Game Over !</p>
    <button
      class="m-4 p-1 border bg-gray-200 hover:bg-green-200 rounded-lg"
      @click="$emit('restart')"
    >
      Restart
    </button>
  </div>
</template>

<script>
export default {
  name: "GameOver"
};
</script>

<style scoped></style>
