<script setup lang="ts">
import type {Blog} from "~/types/blog";

definePageMeta({
  validate(route) {
    const id = route.params.id
    return typeof id === 'string' && /^\d+$/.test(id)
  }
})

const router = useRoute();
const id = router.params.id;


const {data, error, pending} = await useFetch<Blog>(`http://localhost:3000/blog${id}.json`);
console.log(data.value);

</script>

<template>
  <div v-if="data !== undefined">
    <div class="text-3xl font-bold ">
      <h1>{{ data.title }}</h1>
    </div>
    <p class="-mt-4 text-xs text-gray-600">{{ data.author }} - {{data.created_at}}</p>
    <p class="mt-4">{{data.content}}</p>
  </div>


</template>

<style scoped>

</style>