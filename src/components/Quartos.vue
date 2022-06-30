<template>
    <div>
        <b-card 
            border-variant="primary"
            header-bg-variant="primary"
            header-text-variant="white"
            align="center">
            <h1>Quartos</h1>
        </b-card>
        <div>
            <ul class="card-container">
                    <router-link class="cards" v-for="quarto in quartos" :key="quarto.id" tag="li" :to="`/quartos/${quarto.id}`">
                        <!-- <img class="foto" :src="pessoa.foto" alt="pessoa.nome">
                        <h2>{{pessoa.nome}}</h2> -->
                        <b-card
                            :title="quarto.nome"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2 card"
                        >
                        <img class="fotoQuarto" :src="quarto.fotoQuarto" alt="fotoQuarto">
                        </b-card>
                    </router-link>
            </ul>

        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            quartos(){
                return this.$store.state.quartos
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

    .fotoQuarto {
        height: 250px;
        width: 250px;
    }
</style>
