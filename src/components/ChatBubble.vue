<script>
import { mapActions, mapState } from "pinia";

export default {};
</script>

<template>
  <!-- gray-message -->
  <div class="chat-message">
    <div class="flex items-end">
      <div
        class="flex flex-col items-start order-2 max-w-xs mx-2 space-y-2 text-xs"
      >
        <div>
          <span
            class="inline-block px-4 py-2 text-gray-600 bg-gray-300 rounded-lg rounded-bl-none"
          ></span>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
        alt="My profile"
        class="order-1 w-6 h-6 rounded-full"
      />
    </div>
  </div>
</template>
<style></style>
