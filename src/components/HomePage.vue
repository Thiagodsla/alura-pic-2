<template>
  <v-container>
    <v-row class="text-center">
      

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{title}}
        </h1>

        <!-- <h1 v-text="title"></h1> // <h1> {{title}} </h1> -->
        

        <p class="subheading font-weight-regular">

          <ul v-for="photo of photos" :key="photo.id">
            <li>
            <img :src="photo.url" alt="">
            <p v-text="photo.titulo"></p>
            <p v-text="photo._id"></p>
            </li>
          </ul>
          
        </p>


      </v-col>

      

      
    </v-row>
  </v-container>
</template>

<script>
  import Api from '../api/index'

  export default {
    name: 'HomePage',

    data: () => ({
      
      title: 'Album de figurinha',
      photos: [
        // {
        //   url: 'https://i.pinimg.com/474x/5a/da/bb/5adabbdf97353fcaa822bb4f641bd873.jpg',
        //   title: "Valderrama",
        //   id: 1
        // },
        // {
        //   url: 'https://i.pinimg.com/736x/f6/ab/26/f6ab26ee5afb598a44a9f8918c78b27e--soccer-cards-panini.jpg',
        //   title: "jaime",
        //   id: 2
        // }
      ]
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
        .then(r => r.data)
        .then(r => {
          this.photos = r,
          console.log(this.photos)
        });
      }


      
    },

    created () {
      //console.log(Api.Photos.index())
      this.getPhotoList();
      
      

    },

    


  }
</script>
