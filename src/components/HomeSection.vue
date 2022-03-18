<template>
  <section id="hero">
    <div class="background-i">
      <div class="content">
        <h1 class="display-3 font-weight-bold mb-5">Lock Seguridad
        </h1>
        <h1 style="font-size: 20px;">
          Porque sabemos que la seguridad es indispensable hoy en dia, te presentamos
          LOCK una innovadora herramienta de gestión y control integral de seguridad que es 
          <span class="typed-text">{{ typeValue }}</span>
          <span class="cursor" :class="{'typing': typeStatus }">&nbsp;</span>
        </h1>
        <div>
          <v-btn
            rounded
            outlined
            large
            dark
            @click="$vuetify.goTo('#features')"
            class="mt-7 mr-5"
          >
            Ver más...
            <v-icon class="ml-2">mdi-arrow-down</v-icon>
          </v-btn>

          <v-btn
            rounded
            outlined
            large
            dark
            @click.stop="dialog = true"
            class="mt-7 ml-5 playBut"
          >
            Ver Video
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
              x="0px"
              y="0px"
              width="60px"
              height="40px"
              viewBox="0 0 213.7 213.7"
              enable-background="new 0 0 213.7 213.7"
              xml:space="preserve"
            >
              <polygon
                class="triangle"
                id="XMLID_18_"
                fill="none"
                stroke-width="7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                points="73.5,62.5 148.5,105.8 73.5,149.1 "
              />
            </svg>
          </v-btn>
        </div>
      </div>
      <div>
        <img src="../assets/img/mockups-04.png" alt="" width="100%" />
      </div>

      <div class="custom-shape-divider-bottom-1647534989">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>

    <!-- ********************************************************************************* -->

    <v-container fluid id="features" class="mt-2">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col cols="12" class="text-center">
              <h1 class="font-weight-light display-2">
                Apoya el trabajo del personal de seguridad
              </h1>
              <!-- <h1 class="font-weight-light" align="left">
                Lock es una innovadora herramienta los sistemas de rondas,
                controles de acceso, seguridad en comunidades, condominios,
              </h1> -->
            </v-col>
            <v-col
              cols="12"
              sm="4"
              class="text-center"
              v-for="(feature, i) in features"
              :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="feature.img"
                    max-width="100px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular">{{ feature.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" max-width="500px">
      <iframe
        src="http://player.vimeo.com/video/525764495"
        width="500"
        height="281"
        frameborder=""
      ></iframe>
    </v-dialog>
    <div class="svg-border-waves">
      <img src="~@/assets/img/wave2.svg" />
    </div>
  </section>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: ['Intuitiva', 'efectiva', 'adaptable'],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,

      dialog: false,
      videoId: "i8IvvHJssWE",
      features: [
        {
          img: require("@/assets/img/icon2.png"),
          title: "Gestiona",
          text: "info info info info info info.",
        },
        {
          img: require("@/assets/img/icon2.png"),
          title: "Controla",
          text: "info info info info info info.",
        },
        {
          img: require("@/assets/img/icon2.png"),
          title: "Organiza",
          text: "info info info info info info.",
        },
      ],
    };
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    },
  },
  methods: {
    ready(event) {
      this.player = event.target;
    },
    playing(event) {},
    change() {
      this.videoId = "another video id";
    },
    stop() {
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    },
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) 
          this.typeStatus = true;

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
        
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) 
          this.typeStatus = true;


        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;

        setTimeout(this.eraseText, this.erasingSpeed);
        
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if(this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  }
};
</script>

<style lang="scss" scoped>
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  transition: all 0.5s ease;

  .triangle {
    transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
span.typed-text {
  color: rgb(255, 187, 0);
  text-transform: uppercase;
}
span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #fff;
  animation: cursorBlink 1s infinite;
}
span.cursor.typing {
  animation: none;
}
@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>

<style>
.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
.background-i {
  background-image: url("../assets/img/img-back.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.content {
  width: 50%;
  margin-left: 150px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.custom-shape-divider-bottom-1647534989 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1647534989 svg {
  position: relative;
  display: block;
  width: calc(200% + 1.3px);
  height: 150px;
}

.custom-shape-divider-bottom-1647534989 .shape-fill {
  fill: #ffffff;
}
</style>
