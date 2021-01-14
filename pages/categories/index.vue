<template>
  <div>
    <navbar class="fixed z-50" />
    <div
      v-if="$nuxt.isOffline"
      class="absolute w-full bg-red-300 text-red-700 text-center font-semibold tracking-wide p-4"
    >
      You are offline. Check your internet connection.
    </div>
    <div
      v-if="categories.length == 0"
      class="absolute w-full font-bold text-center tracking-widest pt-20 text-xl md:text-2xl text-gray-600"
    >
      Please wait ...
    </div>
    <div class="max-w-5xl mx-auto sm:pt-6 md:pt-24">
      <div class="w-full flex items-center justify-between px-4 pt-24 pb-16">
        <h1 class="font-semibold text-2xl">Categories</h1>
        <div @click="$router.go(-1)">
          <img
            src="@/assets/svg/arrow-left.svg"
            class="p-3 rounded-full shadow-lg border border-pink-100"
          />
        </div>
      </div>
      <div class="sm:grid sm:grid-cols-2 md:grid-cols-3">
        <div v-for="(category, i) in categories" :key="i" class="px-4 py-3">
          <n-link
            :to="{ name: 'categories-id', params: { id: category.id } }"
            tag="a"
          >
            <div
              class="w-full rounded-xl overflow-hidden shadow-xl border-2 border-pink-500"
            >
              <img
                :src="'http://localhost:1337' + category.image.url"
                alt="table categories"
                class="h-32 w-32 mx-auto"
              />

              <div
                v-html="$md.render(category.title || 'Category is loading....')"
                class="text-lg font-semibold text-center bg-pink-500 py-2 px-4 text-gray-100 tracking-wide truncate"
              ></div>
            </div>
          </n-link>
        </div>
      </div>
    </div>

    <div
      v-if="error"
      class="w-full h-screen flex justify-center items-center font-bold text-xl md:text-3xl tracking-widest"
    >
      {{ error }}
    </div>
    <div
      v-if="$apollo.queries.categories.loading"
      class="w-full h-screen flex justify-center items-center font-bold text-xl md:text-3xl tracking-widest"
    >
      Please wait ...
    </div>

    <br />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import categoriesQuery from "~/apollo/queries/category/categories";
export default {
  data() {
    return {
      categories: [],
      query: "",
      error: null,
    };
  },
  apollo: {
    categories: {
      prefectch: true,
      query: categoriesQuery,
      error(error) {
        this.error = JSON.stringify(error.message);
      },
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
};
</script>