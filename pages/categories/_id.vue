<template>
  <div>
    <div
      v-if="$nuxt.isOffline"
      class="w-full bg-red-300 text-red-700 text-center font-semibold tracking-wide p-4"
    >
      You are offline. Check your internet connection.
    </div>
    <navbar class="fixed z-50" />
    <div class="max-w-5xl mx-auto pt-16 sm:pt-24">
      <div class="w-full flex items-center justify-between px-4 py-6">
        <h1 class="font-semibold text-2xl">Executive Tables</h1>
        <div @click="$router.go(-1)">
          <img
            src="@/assets/svg/arrow-left.svg"
            class="p-3 rounded-full shadow-lg cursor-pointer"
          />
        </div>
      </div>

      <client-only>
        <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(furniture, i) in category.furnitures"
            :key="i"
            class="px-4 py-3"
          >
            <div
              class="relative w-full rounded-xl overflow-hidden shadow-lg border-2 border-pink-200"
            >
              <div class="relative">
                <img
                  :src="furniture.img"
                  alt="furniture image"
                  class="h-64 w-64 md:w-72 mx-auto"
                />
                <div
                  v-if="furniture.stock"
                  class="absolute right-0 bottom-0 m-2 text-sm bg-green-200 text-green-700 px-2 py-1 rounded-md"
                >
                  In stock
                </div>
              </div>
              <div class="bg-pink-100 py-4">
                <div
                  v-html="$md.render(furniture.title || 'Title is loading....')"
                  class="text-xl font-bold py-2 px-4 text-gray-700 truncate break-normal break-words"
                ></div>
                <div class="mt-1 px-4 leading-none tracking-wide">
                  {{ furniture.description }}
                </div>

                <div
                  class="flex items-center justify-between mt-2 py-2 px-4 bg-pink-200"
                >
                  <div class="text-xl font-bold text-gray-900">
                    N{{ furniture.price }}
                  </div>

                  <button
                    @click="addToCart(furniture)"
                    class="font-semibold bg-pink-500 text-gray-200 px-3 py-1 rounded-full shadow-lg hover:bg-pink-400 hover:text-gray-700 focus:outline-none"
                  >
                    <p>Add To Cart</p>
                  </button>
                </div>
              </div>
              <div
                v-if="furniture.new"
                class="absolute top-0 bg-pink-200 font-semibold text-pink-600 tracking-wider text-md px-2 py-1 m-2 rounded-lg"
              >
                New
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="error"
          class="w-full h-32 flex justify-center items-center font-bold md:text-lg tracking-widest px-4"
        >
          {{ error }}
        </div>
        <div
          v-if="!category"
          class="w-full h-32 flex justify-center items-center font-semibold md:text-lg tracking-widest"
        >
          Fetching furnitures ...
        </div>
        <div
          v-if="$apollo.queries.category.loading"
          class="w-full h-32 flex justify-center items-center font-semibold md:text-lg tracking-widest"
        >
          Please wait ...
        </div>
      </client-only>
    </div>
    <br />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import categoryQuery from "~/apollo/queries/category/category";
import Navbar from "~/components/Navbar.vue";
export default {
  components: { Navbar },
  data() {
    return {
      error: null,
      category: Object,
    };
  },
  apollo: {
    category: {
      prefectch: true,
      query: categoryQuery,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
      error(error) {
        this.error = JSON.stringify(error.message);
      },
    },
  },
  methods: {
    ...mapMutations({
      addToCart: "cart/add",
      removeFromCart: "cart/remove",
    }),
  },
};
</script>