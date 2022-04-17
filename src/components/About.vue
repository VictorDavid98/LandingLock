<template>
  <section id="about">
    <div class="contenedor" v-for="a in about" :key="a.id">
      <div class="content">
        <div class="centrar" >
          <h1 style="font-size: 35px">
            {{ a.titulo }}
            <v-btn
              icon
              outlined
              style="border: none"
              @click.stop="modificarTitulo = true"
              ><v-icon>mdi-pencil</v-icon></v-btn
            >
          </h1>
          <p class="mt-8 justify">
            {{ a.descripcion }}
            <v-btn
              icon
              outlined
              style="border: none"
              @click.stop="modificarDescripcion = true"
              ><v-icon>mdi-pencil</v-icon></v-btn
            >
          </p>
        </div>
        <div class="centrar-2 mt-6">
          <img
            src="../assets/img/undraw_secure_login_pdn4.svg"
            alt=""
            width="100%"
          />
        </div>
      </div>
      <v-dialog v-model="modificarTitulo" width="600px">
      <input type="text" v-model="titulo" class="input-m" />
      <v-btn color="orange" @click="updateAbout(a.id)">Modificar</v-btn>
    </v-dialog>
    <v-dialog v-model="modificarDescripcion" width="600px">
      <input type="text" v-model="descripcion" class="input-m" />
      <v-btn color="orange" @click="updateAbout(a.id)">Modificar</v-btn>
    </v-dialog>
    </div>
    
  </section>
</template>

<script>
import { db } from "../firebase/db";
export default {
  data() {
    return {
      about: [],
      titulo: "La seguridad que necesitas",
      descripcion: "Perder no es sinónimo de fracasar, perder es aprender y de este aprendizaje nace el Lock, es por esto que al combinar nuestra experiencia con un equipo de soporte y desarrolladores altamente capacitados nos lleva a idear y diseñar un sistema que responde a las necesidades y requerimientos actuales. Una aplicación simple y altamente efectiva que apoya el trabajo del personal de seguridad y su gestión de administración lock es una plataforma flexible programable y adaptable a las necesidades particulares de cada usuario.",
      modificarTitulo: false,
      modificarDescripcion: false,
    };
  },
  methods: {
    updateAbout(id) {
      db.collection("about").doc(id).update({
        titulo: this.titulo,
        descripcion: this.descripcion,
      });
    },
  },
  firestore: {
    about: db.collection("about"),
  },
};
</script>

<style scoped>
#about {
  margin-top: 100px;
  background: rgb(254,254,254);
background: linear-gradient(93deg, rgba(254,254,254,1) 0%, rgba(182,192,195,1) 100%);
}
.input-m {
  color: black;
  background-color: white;
  height: 50px;
}
.justify {
  text-align: justify;
}
.contenedor {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
}
body.dark .contenedor {
  background: rgb(0,130,255);
background: linear-gradient(90deg, rgba(0,130,255,1) 0%, rgba(0,100,255,1) 100%);
}
.content {
  width: 75%;
  margin: 0;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  color: black;
  padding: 30px 30px;
  align-items: center;
}
body.dark .content {
  color: #fff;
}

@media screen and (max-width: 968px) {
  .content {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
}
</style>
