<template>
  <div>
    <p class="tw-text-lg tw-font-semibold tw-mb-3">Welcome to Vuexy! 👋🏻</p>
    <p>Please sign-in to your account and start the adventure</p>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-lg">
      <q-input v-model="email" label="E-mail" />

      <q-input
        v-model="password"
        :type="isPwd ? 'password' : 'text'"
        label="Senha"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-btn label="Entrar" type="submit" color="primary" class="tw-w-full" />
    </q-form>
    <a href="#" class="tw-mt-4 tw-block tw-text-brand-primary tw-font-medium"
      >Esqueceu sua senha?</a
    >
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "auth",
});

const router = useRouter();

const email = ref("");
const password = ref("");
const isPwd = ref(true);

function onSubmit() {
  router.push("/dashboard");
}
</script>

<style>
</style>

