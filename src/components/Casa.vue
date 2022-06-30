<template>
  <div>
    <b-card 
            border-variant="primary"
            header-bg-variant="primary"
            header-text-variant="white"
            align="center">
            <h1>Casa</h1>
        </b-card>
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="380"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          v-for="casa in casas"
          :key="casa.numero"
          :img-src="casa.fotoCasa"
        ></b-carousel-slide>
      </b-carousel>

    </div>
  </div>
</template>

<script>
import {casas} from '../store/data'
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        casas,
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
    }
  }
</script>
