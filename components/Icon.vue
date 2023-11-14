<template>
  <span>
    <Icon :icon="props.name" />
  </span>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
interface ComponentProps {
  name: string;
}

const props = defineProps<ComponentProps>();
</script>