<template>
    <div>
        <div
      v-if="$nuxt.isOffline"
      class="w-full bg-red-300 text-red-700 text-center font-semibold tracking-wide p-4"
    >
      You are offline. Check your internet connection.
    </div>
    <navbar class="fixed z-50"/>
    <div class="py-20">Cart</div>
    </div>
</template>