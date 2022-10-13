<script>
import Card from "../components/Card.vue";
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";
export default {
  methods: {
    ...mapActions(useIndexStore, ["fetchBook"]),
  },

  computed: {
    ...mapState(useIndexStore, ["books"]),
  },

  async created() {
    await this.fetchBook();
  },
  components: { Card },
};
</script>

<template>
  <!-- <ChatButton /> -->
  <div class="flex flex-col mx-auto cont min-w-max">
    <section id="home-section" class="flex justify-center mb-20 mt-14">
      <section class="text-right">
        <div class="justify-end mb-4 btn-group"></div>
        <!-- grid -->
        <div class="grid grid-cols-3 grid-rows-3 gap-6 mb-6">
          <Card
            :book="book"
            :key="`book-${i}`"
            v-for="(book, i) in books.items"
          />
          <div class="grid grid-cols-2 btn-group">
            <button
              @click="
                this.fetchBook(
                  `?start=${
                    books.currentPage > 1
                      ? books.currentPage - 1
                      : (books.currentPage = 1)
                  }`
                )
              "
              class="btn btn-xs btn-outline"
            >
              previous
            </button>
            <button
              @click="
                this.fetchBook(
                  `?start=${
                    books.currentPage < Math.ceil(books.totalItems / 6)
                      ? books.currentPage + 1
                      : (books.currentPage = 1)
                  }`
                )
              "
              class="btn btn-xs btn-outline"
            >
              next
            </button>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
<style></style>
