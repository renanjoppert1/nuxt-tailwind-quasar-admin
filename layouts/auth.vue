<template>
  <div class="wrapper tw-flex">
    <div
      class="image-wrapper tw-hidden md:tw-flex md:tw-w-2/3 tw-flex tw-min-h-screen tw-justify-center tw-items-center tw-p-10"
    >
      <img src="@/assets/img/logo.svg" class="tw-absolute tw-top-5 tw-left-5" />
      <img src="@/assets/img/illustration.svg" />
    </div>
    <div
      class="content-wrapper tw-bg-white tw-grow tw-flex tw-h-screen tw-items-center tw-box-border tw-p-10"
    >
      <div class="tw-w-full">
        <img
          src="@/assets/img/logo.svg"
          class="tw-block md:tw-hidden tw-mb-4"
        />
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style>
</style>

