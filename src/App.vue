<template>
  <v-app>
    <Menu :routes="routes"/>
    <v-main>
      <transition name="pagina">
        <router-view/>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import { routes } from './router/index.js'
import Menu from './components/shared/Menu.vue';


export default {
  name: 'App',

  components: {
    Menu,
  },

  data: () => ({
    routes
  }),
};
</script>

<style scoped>

h4{
  color: white;
  text-decoration: none;
}

.pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
  }
  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }

</style>
