<template>
<div>
    <b-card 
            border-variant="primary"
            header-bg-variant="primary"
            header-text-variant="white"
            align="center">
            <h1>{{quarto.nome}}</h1>
        </b-card>
    <div class="usuario-detalhe">

        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <!-- <b-button @click="voltarQuarto" variant="danger">Quarto anterior</b-button> -->
            <b-row no-gutters>
                <b-col md="12" row>
                    <img class="fotoQuartoDetalhe" :src="quarto.fotoQuarto" alt="fotoQuarto">
                </b-col>
                <!-- <b-row cols-md="3" class="center">
                    
                </b-row> -->
        <b-button @click="passarQuarto" variant="success">Próximo quarto <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg></b-button>
            </b-row>
            <br>
            <hr>
                <b-list-group>
                    <h3>Hóspedes</h3>
                    <hr>
                    <b-list-group-item v-for="pessoa in quarto.pessoas" :key="pessoa">{{pessoa}}</b-list-group-item>
                </b-list-group>
                <hr>
            <b-button @click="voltar" variant="primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
</svg> Voltar</b-button>
        </b-card>
    </div>
</div>
</template>

<script>
    export default {
        props: ['id'],
        computed: {
            quarto(){
                const id = this.$route.params.id
                const quarto = this.$store.state.quartos.filter(p => p.id == id)
                console.log(id);
                
                const first = quarto[0]
                return first
            }
        },
        methods: {
            voltar() {
                this.$router.push('/quartos')
            },
            passarQuarto() {
                const id = this.$route.params.id
                this.$router.push(`/quartos/${id < 7 ? Number(id) + 1: 1}`)
            },
            voltarQuarto() {
                const id = this.$route.params.id
                this.$router.push(`/quartos/${id > 1 ? Number(id) - 1: 7}`)
            },

        },
    }
</script>

<style>
    @media screen and (min-width:781px) {
        .usuario-detalhe {
            display: flex;
            margin: 30px;
            align-items: center;
            justify-content: center;
            border: 5px solid rgb(207, 7, 7);
            padding: 50px;
            box-sizing: border-box;
        }

        .fotoQuartoDetalhe {
            height: 550px;
            width: 550px;
        }

        .zap {
            width: 50px;
        }

        .insta {
            width: 40px;
            margin-left: 16px;
        }
    }

    @media screen and (min-width:551px) and (max-width:780px) {
        .usuario-detalhe {
            display: flex;
            margin: 30px;
            align-items: center;
            justify-content: center;
            border: 5px solid rgb(207, 7, 7);
            padding: 50px;
            box-sizing: border-box;
        }
        
        .fotoQuartoDetalhe {
            height: 350px;
            width: 350px;
        }

        .zap {
            width: 50px;
        }

        .insta {
            width: 40px;
            margin-left: 16px;
        }
    }

    @media screen and (max-width:550px) {
        .usuario-detalhe {
            display: flex;
            flex-direction: column;
            justify-content: left;
        }
        
        .fotoQuartoDetalhe {
            height: 250px;
            width: 250px;
        }

        .zap {
            width: 50px;
        }

        .insta {
            width: 40px;
            margin-left: 16px;
        }
    }
</style>
