<template>
  <div>
    <div
      v-if="$nuxt.isOffline"
      class="w-full bg-red-300 text-red-700 text-center font-semibold tracking-wide p-4"
    >
      You are offline. Check your internet connection.
    </div>
    <div
      v-for="(category, i) in categories"
      :key="i"
      class="max-w-5xl mx-auto md:mt-24"
    >
      <div class="w-full flex items-center justify-between px-4 py-6">
        <h1 class="font-semibold text-2xl">Categories</h1>
        <div @click="$router.go(-1)">
          <img
            src="@/assets/svg/arrow-left.svg"
            class="p-3 rounded-full shadow-lg"
          />
        </div>
      </div>
      <div class="sm:grid sm:grid-cols-2 md:grid-cols-3">
        <div class="px-4 py-3">
          <n-link to="/categories/executive-tables">
            <div
              class="w-full rounded-xl overflow-hidden shadow-xl border-2 border-pink-500"
            >
              <img
                :src="'http://localhost:1337' + category.tableImg.url"
                alt="table categories"
                class="h-32 w-32 mx-auto"
              />
              <!-- <p v-else>Please wait ...</p> -->
              <div
                v-html="$md.render(category.table || 'Category is loading....')"
                class="text-lg font-semibold text-center bg-pink-500 py-2 px-4 text-gray-100 tracking-wide truncate"
              ></div>
            </div>
          </n-link>
        </div>

        <div class="px-4 py-3">
          <n-link to="/categories/executive-chairs">
            <div
              class="w-full rounded-xl overflow-hidden shadow-xl border-2 border-pink-500"
            >
              <img
                :src="'http://localhost:1337' + category.chairImg.url"
                alt="table categories"
                class="h-32 w-32 mx-auto"
              />
              <!-- <p v-else>Please wait ...</p> -->
              <div
                v-html="$md.render(category.chair || 'Category is loading....')"
                class="text-lg font-semibold text-center bg-pink-500 py-2 px-4 text-gray-100 tracking-wide truncate"
              ></div>
            </div>
          </n-link>
        </div>

        <div class="px-4 py-3">
          <n-link to="/categories/executive-table-sets">
            <div
              class="w-full rounded-xl overflow-hidden shadow-xl border-2 border-pink-500"
            >
              <img
                :src="'http://localhost:1337' + category.setImg.url"
                alt="table categories"
                class="h-32 w-32 mx-auto"
              />
              <!-- <p v-else>Please wait ...</p> -->
              <div
                v-html="$md.render(category.set || 'Category is loading....')"
                class="text-lg font-semibold text-center bg-pink-500 py-2 px-4 text-gray-100 tracking-wide truncate"
              ></div>
            </div>
          </n-link>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import categoriesQuery from "~/apollo/queries/category/categories";
export default {
  data() {
    return {
      categories: [],
      query: "",
    };
  },
  apollo: {
    categories: {
      prefectch: true,
      query: categoriesQuery,
    },
  },
};
</script>