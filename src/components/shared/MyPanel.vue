<template>
    <div class="painel">
        <h2 class="painel-titulo" @click="hideCardContent" >{{title}}</h2>
        <transition name="painel-fade">
            <div class="painel-corpo" v-show="hideCard">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'MyPanel',

        data() {
            return {
                hideCard: true
            }
        },

        //props: ['title']
        props: {
            title: {
                type: String,
                required: true
            },
        },

        methods: {
            hideCardContent() {
                this.hideCard = !this.hideCard
            }
        },
        
    }
</script>

<style scoped>

.painel {
    padding: 0 auto;
    border: solid 1px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 1px 1px 5px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
}

.painel .painel-titulo {
    text-align: center;
    background: rgb(0, 0, 0);
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
    color: white
}

.painel-fade-enter, .painel-fade-leave-active {
    opacity: 0
}

.painel-fade-enter-active, .painel-fade-leave-active {
    transition: opacity .4s 
}

</style>