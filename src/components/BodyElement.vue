<template>
<div class="flex-container">
<h1>{{ bodyElement }}</h1>
</div>

</template>

<script>
export default {
    props: {
        bodyElement: String,
    },
};
</script>

<style scoped>
.flex-container {
    display: flex;
    justify-content: center;
    padding: 50px;
}
</style>