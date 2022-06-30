<template>
  <div>
    <b-card 
        border-variant="primary"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center">
        <h1>Grade de Aulas</h1>
    </b-card>
    <br><br>
    <b-card>
        <b-content>
            <h2>Sexta-Feira</h2>
            <b-table striped outlined  hover :items="aulasSexta"></b-table>
            <br>
            <h2>Sábado</h2>
            <b-table striped outlined  hover :items="aulasSabado"></b-table>
            <br>
            <br>
            <h2>Domingo</h2>
            <b-table striped outlined  hover :items="aulasDomingo"></b-table>
        </b-content>
    </b-card>
  </div>
</template>

<script>
export default {
    computed: {
        aulasSexta(){
            return this.$store.state.aulasSexta
        },
        aulasSabado(){
            return this.$store.state.aulasSabado
        },
        aulasDomingo(){
            return this.$store.state.aulasDomingo
        },
    }
}
</script>
<style>
    .grade {

    }
</style>
