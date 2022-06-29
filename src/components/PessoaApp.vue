<template>
    <div>
        <ul class="card-container">
                <router-link class="cards" v-for="pessoa in pessoas" :key="pessoa.id" tag="li" :to="`/pessoas/${pessoa.id}`">
                    <!-- <img class="foto" :src="pessoa.foto" alt="pessoa.nome">
                    <h2>{{pessoa.nome}}</h2> -->
                    <b-card
                        :title="pessoa.nome"
                        :img-src="pessoa.foto"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                    </b-card>
                </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        computed: {
            pessoas(){
                const a = this.$store.state.pessoas.sort((a, b) => (a.nome > b.nome) ? 1 : -1)
                console.log(a.nome);
                return a
            }
        }
    }
</script>

<style>
    .card-container {
        display: flex;
        /* flex-direction: column; */
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .cards {
        cursor: pointer;
        list-style: none;
        margin: 20px;
    }

    .foto {
        width: 150px;
        border-radius: 50%;
    }
</style>
