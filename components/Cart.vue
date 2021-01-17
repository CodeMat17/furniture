<template>
  <div class="px-4 pt-6 pb-6 sm:pt-12 max-w-3xl mx-auto">
    <div>
      <div
        class="text-xl md:text-2xl font-bold text-center uppercase py-6 tracking-widest"
      >
        Shopping Cart
      </div>
      <div v-if="price > 0">
        <div
          v-for="furniture in selectedFurnitures"
          :key="furniture.id"
          class="flex items-center justify-between py-4"
        >
          <div class="flex items-center justify-center">
            <div class="w-24 h-24 bg-black rounded-lg"></div>
            <div class="px-2">
              <h1>Name: {{ furniture.title }}</h1>
              <h1>Price: {{ furniture.price }}</h1>
              <h1>Qty: {{ furniture.quantity }}</h1>
            </div>
          </div>
          <div class="flex flex-col justify-center">
            <button
              class="font-bold text-xl text-gray-700 px-2 -py-1 my-2 border border-pink-200 rounded-lg focus:outline-none shadow-lg"
              @click="addToCart(furniture)"
            >
              +
            </button>
            <button
              class="font-bold text-2xl text-gray-700 px-2 -py-1 my-2 border border-pink-200 rounded-lg focus:outline-none shadow-lg"
              @click="removeFromCart(furniture)"
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div v-else class="text-center py-6 text-lg text-gray-600">
        <h1>Your CART is empty!</h1>
        <h1>Go back to place an order</h1>
      </div>
      <button
        @click="checkoutOrder"
        class="w-full mt-6 block bg-pink-500 text-xl font-semibold text-gray-200 tracking-widest px-4 py-3 rounded-lg focus:outline-none hover:bg-pink-400 hover:text-gray-700"
      >
        Checkout (N{{ price }})
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      addToCart: "cart/add",
      removeFromCart: "cart/remove",
    }),
    checkoutOrder() {
      this.$toast.show("This section is not fully implemented yet.");
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    selectedFurnitures() {
      return this.$store.getters["cart/items"];
    },
    price() {
      return this.$store.getters["cart/price"];
    },
    numberOfItems() {
      return this.$store.getters["cart/numberOfItems"];
    },
  },
};
</script>