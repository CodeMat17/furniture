<template>
  <div>
    <div
      v-if="$nuxt.isOffline"
      class="w-full bg-red-300 text-red-700 text-center font-semibold tracking-wide p-4"
    >
      You are offline. Check your internet connection.
    </div>
    <div class="max-w-5xl mx-auto">
      <div class="w-full flex items-center justify-between px-4 py-6">
        <h1 class="font-semibold text-2xl">Executive Tables</h1>
        <div @click="$router.go(-1)">
          <img
            src="@/assets/svg/arrow-left.svg"
            class="p-3 rounded-full shadow-lg"
          />
        </div>
      </div>
      
      <client-only>
        <div class="sm:grid sm:grid-cols-2 md:grid-cols-3">
          <div
            v-for="(furniture, i) in category.furnitures"
            :key="i"
            class="px-4 py-3"
          >
            <n-link
              to="{title: 'exectables-id', params:{id: exectable.id}}"
              tag="a"
            >
              <div
                class="relative w-full rounded-xl overflow-hidden shadow-lg border-2 border-pink-200"
              >
                <div class="relative">
                  <img
                    :src="'http://localhost:1337' + furniture.image.url"
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
                    v-html="
                      $md.render(furniture.title || 'Title is loading....')
                    "
                    class="text-xl font-bold py-2 px-4 text-gray-700 truncate break-normal break-words"
                  ></div>
                  <div>{{ furniture.description }}</div>
                  <div
                    class="mt-2 text-xl font-bold py-2 px-4 text-gray-900 truncate break-normal break-words"
                  >
                    N{{ furniture.price }}
                  </div>
                </div>
                <div
                  v-if="furniture.new"
                  class="absolute top-0 bg-pink-200 font-semibold text-pink-600 tracking-wider text-md px-2 py-1 m-2 rounded-lg"
                >
                  New
                </div>
              </div>
            </n-link>
          </div>
        </div>
        <div
         v-if="category == null"
          class="w-full h-screen flex justify-center items-center font-bold text-xl md:text-3xl tracking-widest"
        >
          Please wait ...
        </div>
        <button>Add to cart</button>
      </client-only>
    </div>
    <br />
  </div>
</template>

<script>
import categoryQuery from "~/apollo/queries/category/category";
export default {
  data() {
    return {
      category: Object,
    }
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
    },
  },
};
</script>