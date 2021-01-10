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
        <h1 class="font-semibold text-2xl">Executive Table Sets</h1>
        <div @click="$router.go(-1)">
          <img
            src="@/assets/svg/arrow-left.svg"
            class="p-3 rounded-full shadow-lg"
          />
        </div>
      </div>
      <div class="sm:grid sm:grid-cols-2 md:grid-cols-3">
        <div v-for="(execset, i) in execsets" :key="i" class="px-4 py-3">
          <n-link to="#">
            <div
              class="relative w-full rounded-xl overflow-hidden shadow-lg border-2 border-purple-200"
            >
              <div class="relative">
                <img
                  :src="'http://localhost:1337' + execset.image.url"
                  alt="exec chair"
                  class="h-64 w-64 md:w-72 mx-auto"
                />
                <div
                  v-if="execset.instock"
                  class="absolute right-0 bottom-0 m-2 text-sm bg-green-200 text-green-700 px-2 py-1 rounded-md"
                >
                  In stock
                </div>
              </div>
              <div class="bg-purple-200 py-4">
                <div
                  v-html="$md.render(execset.title || 'Title is loading....')"
                  class="text-xl font-bold py-2 px-4 text-gray-700 truncate break-normal break-words"
                ></div>
                <div
                  v-html="$md.render(execset.intro || 'Intro is loading....')"
                  class="text-md py-2 px-4 text-gray-700 break-normal break-words"
                ></div>
                <div
                  class="mt-2 text-xl font-bold py-2 px-4 text-gray-900 truncate"
                >
                  N{{ execset.price }}
                </div>
              </div>
              <div
                v-if="execset.new"
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
import execsetsQuery from "~/apollo/queries/execset/execsets";
export default {
  data() {
    return {
      execsets: [],
      query: "",
    };
  },
  apollo: {
    execsets: {
      prefectch: true,
      query: execsetsQuery,
    },
  },
};
</script>