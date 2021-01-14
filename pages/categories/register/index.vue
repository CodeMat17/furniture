<template>
  <div class="w-full">
    <div
      v-if="$nuxt.isOffline"
      class="w-full bg-red-300 text-red-700 text-center font-semibold tracking-wide p-4"
    >
      You are offline. Check your internet connection.
    </div>
    <div class="w-full mx-auto px-4 py-6 flex">
      <div class="w-full sm:max-w-xl mx-auto rounded-xl border shadow-xl p-4">
        <div
          class="text-pink-500 font-bold uppercase text-2xl py-1 tracking-widest"
        >
          Register
        </div>
        <form @submit.prevent="register">
          <div>
            <label class="text-gray-700"
              >Username<span class="text-red-500">*</span></label
            >
            <input
              type="text"
              id="username"
              name="username"
              v-model.trim="$v.username.$model"
              placeholder="Enter Username"
              autocomplete="given-name"
              aria-describedby="username"
              class="rounded block w-full p-2 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner shadow"
            />
            <span
              v-if="!$v.username.required && $v.username.$dirty"
              class="text-red-500"
              >Name cannot be empty</span
            >
            <span
              v-if="!$v.username.minLength && $v.username.$dirty"
              class="text-red-500"
              >Name cannot be less than 3 characters</span
            >
            <br />

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
              class="rounded block w-full p-2 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner shadow"
            />
            <span
              v-if="!$v.email.required && $v.email.$dirty"
              class="text-red-500"
              >Email is required</span
            >
            <span v-if="!$v.email.email && $v.email.$dirty" class="text-red-500"
              >Enter a valid email</span
            >
            <br />
            <label class="text-gray-700"
              >Phone No.<span class="text-red-500">*</span></label
            >
            <input
              type="number"
              id="phoneNo"
              name="phoneNo"
              v-model.trim="$v.phoneNo.$model"
              placeholder="Enter your phone No. here"
              aria-describedby="phoneNo"
              class="rounded block w-full p-2 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner shadow"
            />
            <span
              v-if="!$v.phoneNo.required && $v.phoneNo.$dirty"
              class="text-red-500"
              >Phone No is required</span
            >
            <span
              v-if="!$v.phoneNo.maxLength && $v.phoneNo.$dirty"
              class="text-red-500"
              >Phone No cannot be more than 11 digits</span
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
              class="rounded block w-full p-2 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner shadow"
            />
            <span
              v-if="!$v.password.required && $v.password.$dirty"
              class="text-red-500"
              >Password is required</span
            >
            <span
              v-if="!$v.password.minLength && $v.password.$dirty"
              class="text-red-500"
              >Password cannot be less than
              {{ $v.password.$params.minLength.min }} characters</span
            >
            <span
              v-if="!$v.password.maxLength && $v.password.$dirty"
              class="text-red-500"
              >Password cannot be more than
              {{ $v.password.$params.maxLength.max }} characters</span
            >
            <br />

            <label class="text-gray-700"
              >Confirm password<span class="text-red-500">*</span></label
            >
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              v-model.trim="$v.confirmPassword.$model"
              placeholder="Confirm your password here"
              autocomplete="given-name"
              aria-describedby="confirmPassword"
              class="rounded block w-full p-2 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-200 focus:shadow-inner shadow"
            />
            <span
              v-if="!$v.confirmPassword.required && $v.confirmPassword.$dirty"
              class="text-red-500"
              >Confirm password is required</span
            >
            <span
              v-if="!$v.confirmPassword.sameAs && $v.confirmPassword.$dirty"
              class="text-red-500"
              >Your passwords does not match</span
            >
            <br />

            <button
              type="button"
              @click="openModal"
              class="uppercase text-gray-300 text-xl bg-pink-500 mt-2 font-bold tracking-widest py-4 rounded block w-full focus:outline-none hover:bg-pink-700 hover:text-gray-300"
            >
              {{ loading ? "Please wait..." : "register" }}
            </button>

            <p class="text-gray-700 text-sm mt-4">
              Already registered?
              <n-link to="/categories/login"
                ><span class="text-blue-500 font-semibold"
                  >login here.</span
                ></n-link
              >
            </p>
          </div>
          <div
            v-if="toggleModal"
            class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
          >
            <div class="relative w-auto mx-4 max-w-2xl">
              <div
                class="pt-4 rounded-lg overflow-hidden bg-white w-full shadow-2xl flex flex-col border border-pink-600"
              >
                <div class="text-2xl text-gray-700 font-bold text-center px-4">
                  Please confirm your information
                </div>
                <p class="tracking-widest px-4 mt-4">Name: {{ username }}</p>
                <p class="tracking-widest px-4">Phone No: {{ phoneNo }}</p>
                <p class="tracking-widest px-4 mb-4">Email: {{ email }}</p>
                <div
                  class="w-full py-4 block flex justify-between items-center px-4 bg-pink-600"
                >
                  <button
                    type="button"
                    @click="closeModal"
                    class="text-white font-bold tracking-widest text-lg hover:text-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="text-white font-bold tracking-widest text-lg hover:text-gray-500 focus:outline-none"
                  >
                    Yes, I confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="toggleModal"
            class="absolute inset-0 z-40 opacity-25 bg-black"
          ></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
} from "vuelidate/lib/validators";

export default {
  middleware: "guest",
  data() {
    return {
      phoneNo: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      loading: false,
      toggleModal: false,
      confirmModal: false,
    };
  },
  validations: {
    phoneNo: {
      required,
      maxLength: maxLength(11),
    },
    username: {
      required,
      minLength: minLength(3),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      maxLength: maxLength(12),
      minLength: minLength(6),
    },
    confirmPassword: {
      required,
      sameAs: sameAs("password"),
    },
  },
  methods: {
    openModal() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.toggleModal = true;
      } else {
        this.$toast.error("All fields are *REQUIRED*. Fill them please.");
      }
    },
    async register() {
      this.loading = true;
      this.toggleModal = false;
      try {
        this.$axios.setToken(false);
        await this.$axios.post("auth/local/register", {
          username: this.username,
          phoneNo: this.phoneNo,
          email: this.email,
          password: this.password,
        });
        this.$toast.success("Registration successful. You can login now.");
        this.loading = false;
        this.$router.push("/categories/login");
        this.phoneNo = "";
        this.username = "";
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
      } catch (e) {
        this.loading = false;
        this.$toast.error(
          e.response.data.message[0].messages[0].message ||
            "An error has occured."
        );
      }
    },
    closeModal() {
      this.toggleModal = false;
    },
  },
};
</script>