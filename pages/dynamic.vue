<script setup>

const { data } = await useFetch('/api/hello')

</script>

<template>
    <div>
        <NuxtLink to="/">Home</NuxtLink>
    </div>
    <div>
        test dynamic
    </div>
    {{ data.message }}
</template>