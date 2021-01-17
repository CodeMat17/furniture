<template>
  <div class="w-full h-screen">
    <div
      v-if="$nuxt.isOffline"
      class="w-full bg-red-300 text-red-700 text-center font-semibold tracking-wide p-4"
    >
      You are offline. Check your internet connection.
    </div>

    <div class="w-full mx-auto px-4 pt-16 flex">
      <div class="w-full sm:max-w-xl mx-auto rounded-xl border shadow-xl p-4">
        <div class="py-4">
          <h3
            class="text-pink-500 font-bold uppercase text-2xl tracking-widest"
          >
            Login
          </h3>
        </div>

        <form @submit.prevent="login">
          <div>
            <label class="text-gray-700"
              >Email<span class="text-red-500">*</span></label
            >
            <input
              type="email"
              id="email"
              name="email"
              v-model.trim="$v.email.$model"
              placeholder="Enter your email here"
              autocomplete="given-name"
              aria-describedby="email"
              class="rounded block w-full p-3 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner shadow"
            />
            <span
              v-if="!$v.email.required && $v.email.$dirty"
              class="text-red-500"
              >Email is required</span
            >
            <br />
            <label class="text-gray-700"
              >Password<span class="text-red-500">*</span></label
            >
            <input
              type="password"
              id="password"
              name="password"
              v-model.trim="$v.password.$model"
              placeholder="Enter your password here"
              autocomplete="given-name"
              aria-describedby="password"
              class="rounded block w-full p-3 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner shadow"
            />
            <span
              v-if="!$v.password.required && $v.password.$dirty"
              class="text-red-500"
              >Password is required</span
            >
            <br />
            <div class="flex items-center justify-between">
               <button
               @click="$router.go(-1)"
                type="button"
                class="uppercase text-red-500 text-lg mt-6 font-bold py-3 px-2 rounded block w-32 border border-red-500 focus:outline-none hover:bg-red-500 hover:text-gray-200"
              >
                cancel
              </button>
              <button
                type="submit"
                class="uppercase text-gray-300 text-lg bg-pink-500 mt-6 font-bold tracking-widest py-3 px-2 rounded block ml-4 w-full focus:outline-none hover:bg-pink-600 hover:text-gray-300"
              >
                {{ loading ? "Please wait..." : "login" }}
              </button>
            </div>
            <p class="text-gray-700 text-sm mt-2">
              Have no account?
              <n-link to="/categories/register"
                ><span class="text-blue-500 font-semibold"
                  >Register here.</span
                ></n-link
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
import { required } from "vuelidate/lib/validators";

export default {
  middleware: "guest",
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  validations: {
    email: {
      required,
    },
    password: {
      required,
    },
  },
  methods: {
    async login() {
      this.loading = true;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        try {
          await this.$auth.loginWith("local", {
            data: {
              identifier: this.email,
              password: this.password,
            },
          });
          this.$toast.success("Login successful");
          this.loading = false;
          this.$router.push("/categories/cart");
          this.email = "";
          this.password = "";
        } catch (e) {
          this.loading = false;
          // put modal here
          this.$toast.error(
            e.response.data.message[0].messages[0].message ||
              "An error has occured."
          );
        }
      } else {
        this.loading = false;
        this.$toast.error("Enter the correct data into the form fields above.");
      }
    },
  },
};
</script>