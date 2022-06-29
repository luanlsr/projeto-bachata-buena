<template>
    <div class="bailes">
        <b-card
            title=""
            img-src="../assets/baile-neon.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
        <h3>Baile Neon</h3>
        </b-card>
        <b-card
            title=""
            img-src="../assets/baile-glamour.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
        <h3>Baile Glamour</h3>
        </b-card>
        <b-card
            title=""
            img-src="../assets/baile-santo-domingo.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
        <h3>Baile Santo Domingo</h3>
        </b-card>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .bailes {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px;
        padding: 20px;
    }

    @media screen and (max-width:1030px) {
        .bailes {
            display: flex;
            flex-direction: column;
        }
    }


</style>
