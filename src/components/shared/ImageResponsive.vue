<template>
    
        <img class="imagem-responsiva" :src="url" :alt="title">
    
</template>

<script>
    export default {
        name: "ImageResponsive",

        props: {
            url: {
                type: String,
            },
            title:{
                type: String,
            }
        },
    }

</script>

<style scoped>

.imagem-responsiva {
    width: 100%;
}

</style>