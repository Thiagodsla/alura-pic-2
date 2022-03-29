<!-- alurapic/src/components/cadastro/Cadastro.vue -->

<template>

    <div class="card">

    <h1 v-if="id" class="centralizado">Alterando</h1>
    <h1 v-else class="centralizado">Cadastro</h1>

    
    
    <h2 class="centralizado"><span v-show="err">{{err}}</span></h2>

    <form @submit.prevent>
        <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input data-vv-as="title" name="titulo" v-validate data-vv-rules="required|min:3|max:30" id="titulo" autocomplete="off" @input="photo.titulo = $event.target.value" :value="photo.titulo">
        <span v-show="errors.has('titulo')">{{errors.first('titulo')}}</span>
        </div>

        <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" v-model.lazy="photo.url">
        <image-responsive :url="photo.url"/>
        </div>

        <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" autocomplete="off" v-model="photo.descricao"></textarea>
        </div>

        <div class="centralizado">
        <button-component btn_name="GRAVAR" btn_type="submit" @click.native="savePhoto"/>
        <router-link :to="{name: 'Home'}"><button-component btn_name="VOLTAR" btn_type="button"/></router-link>
        </div>

    </form>
    </div>
</template>

<script>

import ImageResponsive from '../components/shared/ImageResponsive.vue'
import ButtonComponent from '../components/shared/ButtonComponent.vue';
import Api from '../api/index'

export default {
    name: 'RegisterPhoto',

    components: {
        ImageResponsive, 
        ButtonComponent,
    },

    data() {
        return {
            photo: {
                titulo: '',
                url: '',
                descricao: ''
            },
            id: this.$route.params.id, 
            err: ''
        }
    },
    methods: {
        savePhoto() {

            this.$validator
            .validateAll()
            .then(success => {

                if(success){

                    if(this.id){
                        Api.Photos.update(this.photo).then(() => this.$router.push({name: 'Home'}), err => {console.log(err), this.err = 'Erro ao salvar a foto.'}) // esperar o resultado do update se foi feito a alteraçao ou nao
                        
                    }else{
                        Api.Photos.create(this.photo).then(() => 
                            this.photo = {
                                titulo: '',
                                url: '',
                                descricao: ''
                            },
                            err => {
                                console.log(err), this.err = 'Erro ao salvar a foto.'
                                alert('Erro ao salvar a foto.')
                            }
                        ) // esperar o resultado do update se foi feito a criacao
        
                    }

                }

            })
        }
    },

    mounted() {
        if (this.id){
            console.log(this.id)
            Api.Photos.show(this.id).then(r => r.data).then(r => this.photo = r)
        }
    }
}

</script>
<style scoped>

    .card {
        margin: 0 auto;
        width: 60%;
    }

    .centralizado {
        text-align: center;
    }
    .controle {
        font-size: 1.2em;
        margin-bottom: 20px;

    }
    .controle label {
        display: block;
        font-weight: bold;
    }

    input, textarea {
        border-style: solid;
        border-width: 2px;
        padding: 5px;
    }

    .controle label + input, .controle textarea {
        width: 100%;
        font-size: inherit;
        border-radius: 5px
    }

    .centralizado {
        text-align: center;
    }

</style>