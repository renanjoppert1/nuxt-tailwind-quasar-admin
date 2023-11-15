<template>
  <div class="tw-bg-white tw-rounded-lg tw-p-6 tw-box-border tw-shadow-lg">
    <q-drawer side="left" v-model="menuDrawer" overlay>
      <q-btn
        class="tw-absolute tw-right-2 tw-top-2 tw-z-20"
        flat
        round
        dense
        icon="close"
        @click="hideMenu()"
      />
      <q-scroll-area class="fit">
        <div class="logo-wrapper tw-w-full tw-p-4">
          <NuxtLink to="/">
            <img
              src="~/assets/img/logo.svg"
              class="tw-h-[30px] tw-object-contain"
            />
          </NuxtLink>
        </div>

        <nav class="tw-p-4 tw-flex tw-flex-col">
          <Menu />
        </nav>
      </q-scroll-area>
    </q-drawer>

    <q-btn
      flat
      icon="menu"
      label="MENU"
      @click="toggeMenu()"
      class="tw-inline-block md:tw-hidden"
    />
  </div>
</template>

<script lang="ts" setup>
const menuDrawer = ref(false);

function showMenu() {
  menuDrawer.value = true;
}

function toggeMenu() {
  menuDrawer.value = !menuDrawer.value;
}

function hideMenu() {
  menuDrawer.value = false;
}

function clickOutOfMenu() {
  hideMenu();
}
</script>

<style>
</style>

