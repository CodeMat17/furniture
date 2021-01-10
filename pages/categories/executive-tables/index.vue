<template>
  <div>
    <div
      v-if="$nuxt.isOffline"
      class="w-full bg-red-300 text-red-700 text-center font-semibold tracking-wide p-4"
    >
      You are offline. Check your internet connection.
    </div>
    <div class="max-w-5xl mx-auto md:mt-24">
      <div class="w-full flex items-center justify-between px-4 py-6">
        <h1 class="font-semibold text-2xl">Executive Tables</h1>
        <div @click="$router.go(-1)">
          <img
            src="@/assets/svg/arrow-left.svg"
            class="p-3 rounded-full shadow-lg"
          />
        </div>
      </div>
      <div class="w-full block mx-auto px-4 flex justify-center">
        <form>
          <input 
          placeholder="Search ..."
          v-model="query"
          class="w-full block border-2 rounded-lg py-1 px-2"
          />
        </form>
      </div>

      <div class="sm:grid sm:grid-cols-2 md:grid-cols-3">
        <div v-for="(exectable, i) in exectables" :key="i" class="px-4 py-3">
          <n-link to="#">
            <div
              class="relative w-full rounded-xl overflow-hidden shadow-lg border-2 border-pink-200"
            >
              <div class="relative">
                <img
                  :src="'http://localhost:1337' + exectable.image.url"
                  alt="table categories"
                  class="h-64 w-64 md:w-72 mx-auto"
                />
                <div
                  v-if="exectable.instock"
                  class="absolute right-0 bottom-0 m-2 text-sm bg-green-200 text-green-700 px-2 py-1 rounded-md"
                >
                  In stock
                </div>
              </div>
              <div class="bg-pink-100 py-4">
                <div
                  v-html="$md.render(exectable.title || 'Title is loading....')"
                  class="text-xl font-bold py-2 px-4 text-gray-700 truncate break-normal break-words"
                ></div>
                <div
                  v-html="$md.render(exectable.intro || 'Intro is loading....')"
                  class="text-md py-2 px-4 text-gray-700 line-3"
                ></div>
                <div
                  class="mt-2 text-xl font-bold py-2 px-4 text-gray-900 truncate break-normal break-words"
                >
                  N{{ exectable.price }}
                </div>
              </div>
              <div
                v-if="exectable.new"
                class="absolute top-0 bg-pink-200 font-semibold text-pink-600 tracking-wider text-md px-2 py-1 m-2 rounded-lg"
              >
                New
              </div>
            </div>
          </n-link>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import exectablesQuery from "~/apollo/queries/exectable/exectables";
export default {
  data() {
    return {
      exectables: [],
      query: "",
    };
  },
  apollo: {
    exectables: {
      prefectch: true,
      query: exectablesQuery,
    },
  },
};
</script>