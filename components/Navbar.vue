<template>
  <div class="w-full">
    <header
      class="bg-gray-900 sm:flex sm:justify-between sm:items-start sm:px-4 sm:py-0"
    >
      <div
        class="flex items-center justify-between text-gray-200 px-2 py-2 sm:py-4"
      >
        <div class="flex items-center justify-center">
          <img src="@/assets/images/logo.png" />
          <h1 class="pl-2 font-semibold sm:text-xl">
            Welcome!
            <span v-if="isAuthenticated">{{ loggedInUser.username }}</span>
          </h1>
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
        class="pb-2 uppercase font-semibold tracking-wider py-2 text-pink-500 sm:flex sm:items-center"
        @click="showMenu = !showMenu"
      >
        <n-link
          to="/"
          class="block px-4 py-5 hover:bg-pink-100 hover:text-gray-700 rounded sm:tracking-widest"
          >Home</n-link
        >
        <n-link
          to="/categories"
          class="block px-4 py-3 hover:bg-pink-100 hover:text-gray-700 rounded sm:mt-0 sm:ml-3 sm:tracking-widest"
          >Categories</n-link
        >
        <n-link
          to="/categories/login"
          class="animate-pulse block px-4 pt-3 pb-4 hover:bg-pink-100 hover:text-gray-700 rounded sm:mt-0 sm:ml-3 sm:tracking-widest"
          >Cart</n-link
        >
        <div v-if="isAuthenticated" class="mx-4 pb-4 mt-2 pt-2">
          <button
            type="button"
            @click="logout"
            class="w-full block bg-pink-500 rounded px-4 py-3 hover:bg-pink-100 text-gray-200 hover:text-gray-700 rounded sm:mt-0 sm:ml-3 tracking-widest font-bold uppercase"
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
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$toast.show("You are logged out.");
    },
  },
};
</script>