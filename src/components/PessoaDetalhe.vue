<template>
<div>
    <b-card 
            border-variant="primary"
            header-bg-variant="primary"
            header-text-variant="white"
            align="center">
            <h1>{{pessoa.nome}} {{pessoa.sobrenome}}</h1>
        </b-card>
    <div class="usuario-detalhe">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
            <b-col md="6">
                <b-card-img :src="pessoa.foto"></b-card-img>
            </b-col>
            <b-col md="6">
                <br>
                <b-card-text>
                    <h5>Quarto: {{pessoa.quarto}}</h5>
                </b-card-text>
                    <div class="logos">
                        <a target="__blank" :href="`https://api.whatsapp.com/send/?phone=55${pessoa.telefone}&app_absent=0&text=Ol%C3%A1%2C%20${pessoa.nome}%2C%20tudo%20bem%3F&lang=pt-br`">
                        <img class="zap" src="../assets/WhatsApp.svg.webp" alt="whatsapp-logo"></a>
                        <a target="__blank" :href="pessoa.instagram"><img class="insta" src="../assets/Instagram_icon.png.webp" alt="instagram-logo"></a>
                    </div>
            </b-col>
            <b-button @click="passarPessoa" variant="success">Próximo Bachatero  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg></b-button>
            </b-row>
            <br>
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
            pessoa(){
                const id = this.$route.params.id
                const pessoas = this.$store.state.pessoas.filter(p => p.id == id)
                const first = pessoas[0]
                return first
            }
        },
        methods: {
            voltar() {
                this.$router.push('/pessoas')
            },
            passarPessoa() {
                const id = this.$route.params.id
                this.$router.push(`/pessoas/${id < 15 ? Number(id) + 1: 1}`)
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
