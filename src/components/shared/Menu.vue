<template>
    <div>
        <v-app-bar app color="black" dark>
            <div class="ml-2" v-for="route in routes" :key="route.path">
                <router-link style="text-decoration: none; color: inherit;" :to="route.path ? route.path : '/' ">
                    <h4 v-text="route.name" v-if="route.menu == true"></h4>
                </router-link>
            </div>

            <v-spacer>
            </v-spacer>

            <h1>
                <img style="margin-top: 20px" src="../../assets/logo.jpg"/>
            </h1>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "MyMenu",
        props: {
            routes: {
                type: Array,
                required: true // validaçao para garantir que o valor recebido esta correto.
            },
        },
    }
</script>

<style lang="scss" scoped>


</style>