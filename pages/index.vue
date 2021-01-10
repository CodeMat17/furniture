<template>
  <div>
    <div
      v-if="$nuxt.isOffline"
      class="w-full bg-red-300 text-red-700 text-center font-semibold tracking-wide p-4"
    >
      You are offline. Check your internet connection.
    </div>

    <div
      class="relative w-full h-screen"
      :style="{
        'background-image': `url(${require('@/assets/svg/home-bg.svg')})`,
      }"
    >
      <div class="pt-32 max-w-3xl mx-auto h-screen sm:flex sm:items-center">
        <img
          src="@/assets/images/home-image.png"
          alt="home-image"
          class="sm:order-last w-64 2xl:w-full mx-auto"
        />
        <div class="mt-6 sm:-mt-16 text-center sm:text-left text-gray-300 px-4">
          <div class="">
            <h3 class="text-xl sm:text-2xl font-semibold">
              Welcome to our world of <span class="text-transparent bg-gradient-to-r bg-clip-text from-red-300 to-pink-500">quality</span> furnitures
            </h3>
            <h1
              class="animate-pulse font-bold text-3xl md:text-5xl text-transparent bg-gradient-to-r bg-clip-text from-yellow-400 via-red-500 to-pink-500"
            >
              Hummer Holdings
            </h1>
          </div>
          <br />
          <div class="flex justify-center sm:justify-start">
            <button
              @click="$router.push('/categories')"
              class="transform hover:scale-110 motion-reduce:transform-none absolute z-50 border-2 align-middle border-pink-500 text-2xl text-pink-500 font-semibold tracking-widest py-3 px-8 rounded-lg hover:text-yellow-500 hover:border-yellow-500"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
      <navbar class="absolute inset-0 z-40" />
    </div>
  </div>
</template>