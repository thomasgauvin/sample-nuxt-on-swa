<script setup>

const { data } = await useFetch('/api/hello', {
    server: false
})

</script>

<template>
    <div>
        <NuxtLink to="/">Home</NuxtLink>
    </div>
    <div>
        test static
    </div>
    <div v-if="!!data">
        {{ data.message }}
    </div>
</template>