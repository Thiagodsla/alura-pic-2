<template>
        <button :class="btnStyle" :type="btn_type" @click="emitAction()">{{btn_name}}</button>
</template>

<script>
    export default {
        name: 'ButtonComponent',

        props: {
            btn_type: {
                type: String,
                required: true,
            },
            btn_name: {
                type: String,
                required: true,
            },

            confirm: Boolean,

            btn_style: String,
        },

        methods: {
            emitAction(){

                //console.log(typeof(this.confirm))

                if(this.confirm){
                    if(confirm("Confirma operação ?")){
                        this.$emit('btnActivated')
                        
                    } 
                    return
                }
                
                this.$emit('btnActivated')
                
            }
        },
        
        computed: {
            btnStyle() {
                if (this.btn_style == 'perigo') return 'botao botao-perigo';
                return 'botao botao-padrao'
            }
        },
    }
</script>

<style scoped lang="scss">

    $botao_vermelho: firebrick;
    $botao_azul: darkcyan;

    .botao {
        display: inline-block;
        padding: 6px;
        border-radius: 4px;
        margin: 6px;
        font-size: 0.8em;
    }

    .botao-perigo {
        background: $botao_vermelho;
        color: white;
    }

    .botao-padrao {
        background: $botao_azul;
        color: white;
    }
</style>