<template>
  <div class="w-full">
    <header
      class="bg-transparent sm:flex sm:justify-between sm:items-start sm:px-4 sm:py-3"
    >
      <div class="flex items-center justify-between text-gray-200 px-4 sm:p-0">
        <div>
          <div class="mt-3 flex items-center justify-center text-3xl font-bold">
            <p
              class="text-transparent bg-gradient-to-r bg-clip-text from-yellow-400 via-red-500 to-pink-500"
            >
              <img src="@/assets/images/logo.png" />
            </p>
          </div>
        </div>
        <div class="sm:hidden mt-4">
          <button
            @click="showMenu = !showMenu"
            type="button"
            class="text-pink-500 hover:text-yellow-500 focus:outline-none"
          >
            <svg
              class="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-show="showMenu"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
              <path
                v-show="!showMenu"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        :class="showMenu ? 'block' : 'hidden'"
        class="pb-2 uppercase font-semibold tracking-wider text-gray-400 sm:flex sm:items-center"
        @click="showMenu = !showMenu"
      >
        <n-link
          to="#home"
          class="block px-4 py-4 hover:bg-gray-500 hover:text-gray-700 rounded sm:tracking-widest"
          >Home</n-link
        >
        <n-link
          to="#download"
          class="block px-4 py-4 hover:bg-gray-500 hover:text-gray-700 rounded sm:mt-0 sm:ml-3 sm:tracking-widest"
          >Downloads</n-link
        >
        <div class="mx-4 pb-4 mt-2 pt-2">
          <button
            type="button"
            @click="logout"
            class="w-full block bg-yellow-600 rounded px-4 py-3 hover:bg-yellow-500 text-gray-200 hover:text-gray-700 rounded sm:mt-0 sm:ml-3 tracking-widest font-bold uppercase"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$toast.show("You are logged out.");
    },
  },
};
</script>