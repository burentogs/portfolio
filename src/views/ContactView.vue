<template>
  <div class="contact-view">
    <div class="w-full h-full relative flex-col flex p-1">
      <div>
        <p class="pb-1">&nbsp; Contact</p>
      </div>
      <div
        class="bg-cs-dark-green dark-top-border items-end text-end relative mb-2 pl-1 overflow-auto h-full"
      >
        <div class="text-left text-xl hover:cs-yellow">
          <a href="https://www.linkedin.com/in/burentugs/"
            >> <font-awesome-icon icon="fa-brands fa-linkedin" />
            Linkedin
          </a>
        </div>
        <div class="text-left text-xl hover:cs-yellow">
          <a href="https://www.facebook.com/j.burentugs/"
            >> <font-awesome-icon icon="fa-brands fa-facebook" />
            Facebook
          </a>
        </div>
        <div class="text-left text-xl hover:cs-yellow">
          <a href="mailto: contact@burentugs.com"
            >> <font-awesome-icon icon="fa-solid fa-envelope" />
            contact@burentugs.com
          </a>
        </div>
        <div class="text-left text-xl hover:cs-yellow">
          <a href="tel: +97672104540"
            >> <font-awesome-icon icon="fa-solid fa-phone" /> +976 72104540
          </a>
        </div>
        <div v-for="message in messages" :key="message" class="text-left">
          {{ message }}
        </div>
      </div>
      <div class="w-full flex items-end justify-end">
        <input
          type="text"
          class="w-full bg-cs-dark-green dark-top-border h-6"
          v-model="newMessage"
          @keyup.enter="addMessages()"
        />
        <button type="button" class="cs-button" @click="addMessages">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      messages: [],
      newMessage: "",
    };
  },
  methods: {
    addMessages() {
      this.messages.push(this.newMessage);
      this.newMessage = "";
    },
  },
};
</script>
