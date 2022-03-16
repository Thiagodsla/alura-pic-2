<template>
  <v-app>
    <v-app-bar app color="primary" dark>

      <v-icon>mdi-menu</v-icon>
      <v-spacer>
      </v-spacer>

      <h1>
          .alurapic
        </h1>
      

    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
