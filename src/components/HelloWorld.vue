<template>
  <div class="bg-blue-500 text-white">
    <p class="bg-grey-400 text-red">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
