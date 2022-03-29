<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">{{ title }}</h1>
        {{ filter }}
        <input type="search" class="filtro" @input="filter = $event.target.value" placeholder="Filtro por parte do título"/>
        <h2>{{ err }}</h2>
        <ul class="lista-fotos">
          <li class="lista-fotos-item" v-for="photo of photosFiltered" :key="photo._id">
            <my-panel :title="photo.titulo">
              <image-responsive v-my-transform:scale.animate="2" v-show="photo.url" :url="photo.url" :title="photo.titulo"/>
              <p>{{ photo.descricao }}</p>
              <!-- <button-component rotulo="REMOVER" btn_type="button" @click.native="removePhoto(photo)"/> -->
              <button-component btn_style="perigo" btn_name="REMOVER" btn_type="button" :confirm="false" @btnActivated="removePhoto(photo)"/>
              <router-link :to="{ path: `register/${photo._id}` }">
                <button-component btn_style="padrao" btn_name="EDITAR" btn_type="button" :confirm="false"/>
              </router-link>
            </my-panel>
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Api from "../api/index";
import MyPanel from "./shared/MyPanel.vue";
import ImageResponsive from "./shared/ImageResponsive.vue";
import ButtonComponent from "./shared/ButtonComponent.vue";

export default {
  name: "HomePage",

  components: {
    MyPanel,
    ImageResponsive,
    "button-component": ButtonComponent,
  },

  data: () => ({
    title: "Album de figurinha",
    photos: [],
    filter: "",
    err: "",
  }),

  // exemplo:
  // data() {
  //   return {
  //     title: 'Album de fotos',
  //     foto: {
  //       url: '',
  //       alt: ''
  //     }
  //   }
  // },

  methods: {
    getPhotoList() {
      Api.Photos.index()
        .then((r) => r.data) // duvida . o axios configurado ja retorna o json da promisse ?
        .then(
          (r) => (this.photos = r),
          (err) => {
            console.log(err);
            this.err = "Não foi possivel obter as fotos.";
          }
        );
      // padrao rest ( verbos get, put, post, delete ) resource / axios ?
      // this.$http.get().then(function(){}).then
      // this.$http.post(http, this.photo).then(() => this.photo = new photo, err => console.log(err))
      // this.$http
      // .get('http://localhost:3000/v1/fotos', this.foto)
      // .then(() => this.foto = new Foto(), err => console.log(err));
    },

    removePhoto(photo) {
      Api.Photos.delete(photo._id).then(
        () => {
          alert("removido com sucesso");
          let index = this.photos.indexOf(photo);
          this.photos.splice(index, 1);
        },
        (err) => {
          console.log(err);
          this.err = "Erro ao remover.";
        }
      ); // a resposta se deu certo ?
      // para remover outro metodo seria chamar a requisiçao de getPhotoList // mas acontece um bug que nao atualiza
      //this.getPhotoList()
    },
  },

  mounted() {
    this.getPhotoList();
  },

  computed: {
    photosFiltered() {
      if (this.filter) {
        let filteredPhotos = [...this.photos];

        let exp = new RegExp(this.filter.trim(), "i");
        let filtered = filteredPhotos.filter((photo) => exp.test(photo.titulo));

        return filtered;
      } else {
        return this.photos;
      }
    },
  },
};
</script>

<style scoped>
#photo-list {
  list-style: none;
  display: inline-block;
}

.titulo {
  text-align: center;
}

.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  border: solid 1px grey;
  padding: 5px;
  display: block;
  width: 100%;
}
</style>