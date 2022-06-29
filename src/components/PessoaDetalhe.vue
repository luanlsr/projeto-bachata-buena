<template>
    <div class="usuario-detalhe">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
            <b-col md="6">
                <b-card-img :src="pessoa.foto"></b-card-img>
            </b-col>
            <b-col md="6">
                <h2>{{pessoa.nome}} {{pessoa.sobrenome}}</h2>
                <b-card-text>
                    <h5>Quarto: {{pessoa.quarto}}</h5>
                </b-card-text>
                    <div class="logos">
                        <a target="__blank" :href="`https://api.whatsapp.com/send/?phone=55${pessoa.telefone}&app_absent=0&text=Ol%C3%A1%2C%20${pessoa.nome}%2C%20tudo%20bem%3F&lang=pt-br`">
                        <img class="zap" src="../assets/WhatsApp.svg.webp" alt="whatsapp-logo"></a>
                        <a target="__blank" :href="pessoa.instagram"><img class="insta" src="../assets/Instagram_icon.png.webp" alt="instagram-logo"></a>
                    </div>
            </b-col>
            </b-row>
            <br>
            <hr>
             <b-button @click="voltar" variant="primary">Voltar</b-button>
        </b-card>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        computed: {
            pessoa(){
                const id = this.$route.params.id
                const pessoas = this.$store.state.pessoas.filter(p => p.id == id)
                const first = pessoas[0]
                return first
            }
        },
        methods: {
            voltar() {
                this.$router.go(-1)
            }
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

        .zap {
            width: 50px;
        }

        .insta {
            width: 40px;
            margin-left: 16px;
        }
    }
</style>
