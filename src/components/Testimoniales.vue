<template>
  <div class="contenedor-c">
    <v-carousel
      cycle
      :interval="intervalo"
      height="auto"
      hide-delimiters
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(testimonio, i) in testimonios" :key="i">
        <v-sheet :color="colores[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="c-testimonio">
              <div class="parte1">
                <h1>{{ titulo1 }}</h1>
                <h2>{{ titulo2 }}</h2>
                <img
                  src="@/assets/img/comment-dots-regular.svg"
                  width="50px"
                  alt=""
                />
              </div>
              <div class="parte2">
                <div>
                  <img :src="testimonio.iconoEmpresa" width="100px" height="43px" alt="" />
                  <p class="nombre">{{ testimonio.nombre }}</p>
                  <p>
                    {{ testimonio.cargo }} -
                    <span class="span-empresa">{{ testimonio.empresa }}</span>
                  </p>
                  <p class="mensaje">{{ testimonio.mensaje }}</p>
                </div>
              </div>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <svg
      class="wave-empresas"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 220"
    >
      <path
        fill="#f3f3f3"
        fill-opacity="1"
        d="M0,64L48,69.3C96,75,192,85,288,101.3C384,117,480,139,576,160C672,181,768,203,864,181.3C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intervalo: 20000,
      titulo1: "Testimonios",
      titulo2: "¿Que opinan nuestros clientes?",
      colores: ["transparent", "transparent", "transparent"],
      testimonios: [
        {
          id: 1,
          nombre: "victor zamora",
          iconoEmpresa: require("@/assets/img/logo-lock.0508bfe3.webp"),
          cargo: "Desarrollador",
          empresa: "Loginsa",
          mensaje:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et sodales ex. Quisque pretium, neque vitae dapibus mollis, risus metus vestibulum mi, ut gravida odio diam cursus erat. Nulla facilisi. Donec aliquam nibh et nulla suscipit pellentesque. Suspendisse turpis sapien, interdum eget ex non, volutpat mollis erat. Vivamus vestibulum enim sed erat tincidunt, in commodo risus sagittis. Quisque tempor felis sed ornare efficitur.",
        },
        {
          id: 2,
          nombre: "Josefa Campos",
          iconoEmpresa: require("@/assets/img/logo-falabella.png"),
          cargo: "Product Manager",
          empresa: "Falabella",
          mensaje:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et sodales ex. Quisque pretium, neque vitae dapibus mollis, risus metus vestibulum mi, ut gravida odio diam cursus erat. Nulla facilisi. Donec aliquam nibh et nulla suscipit pellentesque. Suspendisse turpis sapien, interdum eget ex non, volutpat mollis erat. Vivamus vestibulum enim sed erat tincidunt, in commodo risus sagittis. Quisque tempor felis sed ornare efficitur.",
        },
        {
          id: 3,
          nombre: "Nicolas Osorio",
          iconoEmpresa: require("@/assets/img/logo-nestle.png"),
          cargo: "Director de Calidad",
          empresa: "Nestle",
          mensaje:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et sodales ex. Quisque pretium, neque vitae dapibus mollis, risus metus vestibulum mi, ut gravida odio diam cursus erat. Nulla facilisi. Donec aliquam nibh et nulla suscipit pellentesque. Suspendisse turpis sapien, interdum eget ex non, volutpat mollis erat. Vivamus vestibulum enim sed erat tincidunt, in commodo risus sagittis. Quisque tempor felis sed ornare efficitur.",
        },
      ],
    };
  },
};
</script>

<style>
.contenedor-c {
  margin-top: 50px;
}
.c-testimonio {
  width: 85%;
  height: auto;
  margin: 35px 0;
  padding: 20px 0;
  background-color: #f3f3f3;
  border-radius: 50px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.5);
  display: flex;
}
body.dark .c-testimonio {
  background-color: #6200ff;
  color: #fff;
}
.parte1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 30%;
}
.parte2 {
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.nombre {
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
}
.span-empresa {
  font-weight: bold;
}
.mensaje {
  text-align: justify;
}
.wave-empresas {
  position: relative;
  left: 0;
  margin-bottom: -10px;
}
body.dark .wave-empresas path {
  fill: #0300c2;
}
@media screen and (max-width: 768px) {
  .c-testimonio {
    flex-direction: column;
    align-items: center;
  }
  .parte1 {
    width: 95%;
  }
  .parte2 {
    text-align: center;
    width: 90%;
    padding-top: 15px;
    justify-content: center;
    margin: 0 auto;
  }
}
</style>
