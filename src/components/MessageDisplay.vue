<template>
  <div>
    <p v-if="error" data-testid="message-error">{{ error }}</p>
    <p v-else data-testid="message">{{ message }}</p>
  </div>
</template>

<script lang="ts">
/// <reference path="../services/axios.d.ts" />
import { getMessage } from "@/services/axios.js";
import { Message } from "@/types/message";

export default {
  data() {
    return {
      message: {} as String,
      error: null as string | null,
    };
  },

  async created() {
    try {
      this.message = await getMessage();
    } catch (err) {
      this.error = "Oops! Something went wrong.";
    }
  },
};
</script>
