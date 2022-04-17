<template>
  <section id="plus">
    <v-container fluid>
      <v-row align="center" justify="center" v-for="p in plus" :key="p.id">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" class="hidden-xs-only">
              <v-img
                src="@/assets/img/logo-lock.0508bfe3.webp"
                class="d-block ml-auto mr-auto mb-16"
                max-width="300px"
              />
            </v-col>
            <v-col cols="12" sm="8" class="white--text text-left">
              <h1 class="font-weight-bold mt-8">
                {{ p.texto1
                }}<v-btn
                  icon
                  outlined
                  dark
                  style="border: none"
                  @click.stop="modificarTexto1 = true"
                  ><v-icon>mdi-pencil</v-icon></v-btn
                >
                <br />
                {{ p.texto2
                }}<v-btn
                  icon
                  outlined
                  dark
                  style="border: none"
                  @click.stop="modificarTexto2 = true"
                  ><v-icon>mdi-pencil</v-icon></v-btn
                >
              </h1>
              <v-btn
                rounded
                outlined
                href="https://www.lockseguridad.cl/lock/"
                target="_blank"
                large
                color="white"
                class="mt-4"
              >
                <v-icon class="mr-2"> mdi-web </v-icon>
                {{ p.boton }}
              </v-btn>
              <v-btn
                icon
                outlined
                dark
                style="border: none"
                @click.stop="modificarBtn = true"
                ><v-icon>mdi-pencil</v-icon></v-btn
              >
            </v-col>
          </v-row>
        </v-col>
        <v-dialog v-model="modificarTexto1" width="600px">
          <input type="text" v-model="texto1" class="input-m" />
          <v-btn color="orange" @click="updateTexto1(p.id)">Modificar</v-btn>
        </v-dialog>
        <v-dialog v-model="modificarTexto2" width="600px">
          <input type="text" v-model="texto2" class="input-m" />
          <v-btn color="orange" @click="updateTexto2(p.id)">Modificar</v-btn>
        </v-dialog>
        <v-dialog v-model="modificarBtn" width="600px">
          <input type="text" v-model="boton" class="input-m" />
          <v-btn color="orange" @click="updateBoton(p.id)">Modificar</v-btn>
        </v-dialog>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { db } from "../firebase/db";
export default {
  data() {
    return {
      plus: [],
      texto1: "Solución y Tranquilidad en tus manos.",
      texto2: "Te invitamos a registrarte...",
      boton: "Visitanos",
      modificarTexto1: false,
      modificarTexto2: false,
      modificarBtn: false,
    };
  },
  methods: {
    updateTexto1(id) {
      db.collection("plus").doc(id).update({
        texto1: this.texto1,
      });
    },
    updateTexto2(id) {
      db.collection("plus").doc(id).update({
        texto2: this.texto2,
      });
    },
    updateBoton(id) {
      db.collection("plus").doc(id).update({
        boton: this.boton,
      });
    },
  },
  firestore: {
    plus: db.collection("plus"),
  },
};
</script>

<style scoped>
#plus {
  background-image: url("~@/assets/img/flex-point-security-i35mOsE0z2U-unsplash.b2c6a17e.webp");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 400px;
}
.input-m {
  color: black;
  background-color: white;
  height: 50px;
}
#plus .container,
#plus .row {
  height: 100%;
}
</style>
