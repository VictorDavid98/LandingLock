<template>
  <div class="c-presentacion">
    <div v-for="p in presentacion" :key="p.id">
      <section class="c-contenido" id="informacion">
        <div class="texto-content" data-aos="fade-up" data-aos-duration="3000">
          <h1 class="mt-10 mb-10">
            {{ p.titulo1 }}
            <v-btn
              icon
              outlined
              style="border: none"
              @click.stop="modificarTitulo1 = true"
              ><v-icon>mdi-pencil</v-icon></v-btn
            >
          </h1>
          <p>
            {{ p.descripcion1 }}
            <v-btn
              icon
              outlined
              style="border: none"
              @click.stop="modificarDescripcion1 = true"
              ><v-icon>mdi-pencil</v-icon></v-btn
            >
          </p>
          <v-btn
            rounded
            outlined
            href="https://www.lockseguridad.cl/lock/"
            target="_blank"
            large
            color="orange"
            class="mt-4"
          >
            <v-icon class="mr-2"> mdi-web </v-icon>
            {{ p.boton1 }} </v-btn
          ><v-btn
            icon
            outlined
            style="border: none"
            @click.stop="modificarBoton1 = true"
            ><v-icon>mdi-pencil</v-icon></v-btn
          >
        </div>
        <div class="img-p">
          <img src="@/assets/img/mockups-6.webp" width="100%" alt="" />
        </div>
      </section>

      <!-- ******************************************************** -->

      <section class="c-contenido2">
        <div class="img-p">
          <img src="@/assets/img/mockups-2.webp" width="50%" alt="" />
        </div>
        <div class="texto-content" data-aos="fade-up" data-aos-duration="3000">
          <h1 class="mt-10 mb-10">
            {{ p.titulo2 }}
            <v-btn
              icon
              outlined
              style="border: none"
              @click.stop="modificarTitulo2 = true"
              ><v-icon>mdi-pencil</v-icon></v-btn
            >
          </h1>
          <p>
            {{ p.descripcion2 }}
            <v-btn
              icon
              outlined
              style="border: none"
              @click.stop="modificarDescripcion2 = true"
              ><v-icon>mdi-pencil</v-icon></v-btn
            >
          </p>
          <v-btn
            rounded
            outlined
            href="https://www.lockseguridad.cl/lock/"
            target="_blank"
            large
            color="orange"
            class="mt-4"
          >
            <v-icon class="mr-2"> mdi-web </v-icon>
            {{ p.boton2 }} </v-btn
          ><v-btn
            icon
            outlined
            style="border: none"
            @click.stop="modificarBoton2 = true"
            ><v-icon>mdi-pencil</v-icon></v-btn
          >
        </div>
      </section>

      <!-- ********************************************************** -->
      <section class="c-contenido">
        <div class="texto-content" data-aos="fade-up" data-aos-duration="3000">
          <h1 class="mt-10 mb-10">
            {{ p.titulo3 }}
            <v-btn
              icon
              outlined
              style="border: none"
              @click.stop="modificarTitulo3 = true"
              ><v-icon>mdi-pencil</v-icon></v-btn
            >
          </h1>
          <p>
            {{ p.descripcion3 }}
            <v-btn
              icon
              outlined
              style="border: none"
              @click.stop="modificarDescripcion3 = true"
              ><v-icon>mdi-pencil</v-icon></v-btn
            >
          </p>
          <v-btn
            rounded
            outlined
            href="https://www.lockseguridad.cl/lock/"
            target="_blank"
            large
            color="orange"
            class="mt-4"
          >
            <v-icon class="mr-2"> mdi-web </v-icon>
            {{ p.boton3 }}
          </v-btn>
          <v-btn
            icon
            outlined
            style="border: none"
            @click.stop="modificarBoton3 = true"
            ><v-icon>mdi-pencil</v-icon></v-btn
          >
        </div>
        <div class="img-p">
          <img src="@/assets/img/mockups-7.webp" width="100%" alt="" />
        </div>
      </section>
      <svg
        class="wave-p2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f3f3f3"
          fill-opacity="1"
          d="M0,64L24,74.7C48,85,96,107,144,144C192,181,240,235,288,224C336,213,384,139,432,117.3C480,96,528,128,576,165.3C624,203,672,245,720,240C768,235,816,181,864,176C912,171,960,213,1008,213.3C1056,213,1104,171,1152,154.7C1200,139,1248,149,1296,144C1344,139,1392,117,1416,106.7L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
      <!-- ********************************************************** -->
      <v-dialog v-model="modificarTitulo1" width="600px">
        <input type="text" v-model="titulo1" class="input-m" />
        <v-btn color="orange" @click="updateTitulo1(p.id)">Modificar</v-btn>
      </v-dialog>
      <v-dialog v-model="modificarTitulo2" width="600px">
        <input type="text" v-model="titulo2" class="input-m" />
        <v-btn color="orange" @click="updateTitulo2(p.id)">Modificar</v-btn>
      </v-dialog>
      <v-dialog v-model="modificarTitulo3" width="600px">
        <input type="text" v-model="titulo3" class="input-m" />
        <v-btn color="orange" @click="updateTitulo3(p.id)">Modificar</v-btn>
      </v-dialog>
      <!-- ********************************************************** -->
      <v-dialog v-model="modificarDescripcion1" width="600px">
        <input type="text" v-model="descripcion1" class="input-m" />
        <v-btn color="orange" @click="updateDescripcion1(p.id)"
          >Modificar</v-btn
        >
      </v-dialog>
      <v-dialog v-model="modificarDescripcion2" width="600px">
        <input type="text" v-model="descripcion2" class="input-m" />
        <v-btn color="orange" @click="updateDescripcion2(p.id)"
          >Modificar</v-btn
        >
      </v-dialog>
      <v-dialog v-model="modificarDescripcion3" width="600px">
        <input type="text" v-model="descripcion3" class="input-m" />
        <v-btn color="orange" @click="updateDescripcion3(p.id)"
          >Modificar</v-btn
        >
      </v-dialog>
      <!-- ********************************************************** -->
      <v-dialog v-model="modificarBoton1" width="600px">
        <input type="text" v-model="boton1" class="input-m" />
        <v-btn color="orange" @click="updateBoton1(p.id)">Modificar</v-btn>
      </v-dialog>
      <v-dialog v-model="modificarBoton2" width="600px">
        <input type="text" v-model="boton2" class="input-m" />
        <v-btn color="orange" @click="updateBoton2(p.id)">Modificar</v-btn>
      </v-dialog>
      <v-dialog v-model="modificarBoton3" width="600px">
        <input type="text" v-model="boton3" class="input-m" />
        <v-btn color="orange" @click="updateBoton3(p.id)">Modificar</v-btn>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/db";
export default {
  data() {
    return {
      presentacion: [],
      titulo1: "Titulo1",
      titulo2: "Titulo2",
      titulo3: "Titulo3",
      descripcion1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente ex sunt voluptatem est pariatur aspernatur doloremque accusantium quia, praesentium nisi earum debitis corporis tempora distinctio, quas natus. Ipsa, quas?",
      descripcion2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente ex sunt voluptatem est pariatur aspernatur doloremque accusantium quia, praesentium nisi earum debitis corporis tempora distinctio, quas natus. Ipsa, quas?",
      descripcion3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente ex sunt voluptatem est pariatur aspernatur doloremque accusantium quia, praesentium nisi earum debitis corporis tempora distinctio, quas natus. Ipsa, quas?",
      boton1: "visitanos",
      boton2: "visitanos",
      boton3: "visitanos",
      modificarTitulo1: false,
      modificarTitulo2: false,
      modificarTitulo3: false,
      modificarDescripcion1: false,
      modificarDescripcion2: false,
      modificarDescripcion3: false,
      modificarBoton1: false,
      modificarBoton2: false,
      modificarBoton3: false,
    };
  },
  methods: {
    updateTitulo1(id) {
      db.collection("presentacion").doc(id).update({
        titulo1: this.titulo1,
      });
    },
    updateTitulo2(id) {
      db.collection("presentacion").doc(id).update({
        titulo2: this.titulo2,
      });
    },
    updateTitulo3(id) {
      db.collection("presentacion").doc(id).update({
        titulo3: this.titulo3,
      });
    },
    //--------------------------------------------
    updateDescripcion1(id) {
      db.collection("presentacion").doc(id).update({
        descripcion1: this.descripcion1,
      });
    },
    updateDescripcion2(id) {
      db.collection("presentacion").doc(id).update({
        descripcion2: this.descripcion2,
      });
    },
    updateDescripcion3(id) {
      db.collection("presentacion").doc(id).update({
        descripcion3: this.descripcion3,
      });
    },
    //--------------------------------------------
    updateBoton1(id) {
      db.collection("presentacion").doc(id).update({
        Boton1: this.Boton1,
      });
    },
    updateBoton2(id) {
      db.collection("presentacion").doc(id).update({
        Boton2: this.Boton2,
      });
    },
    updateBoton3(id) {
      db.collection("presentacion").doc(id).update({
        Boton3: this.Boton3,
      });
    },
  },
  firestore: {
    presentacion: db.collection("presentacion"),
  },
};
</script>
<style scoped>
.c-presentacion {
  width: 100%;
  margin: 0 auto;
  background: rgb(254, 254, 254);
  background: linear-gradient(
    93deg,
    rgba(254, 254, 254, 1) 0%,
    rgba(182, 192, 195, 1) 100%
  );
}
body.dark .c-presentacion {
  background: rgb(0,130,255);
  background: linear-gradient(90deg, rgba(0,130,255,1) 0%, rgba(0,100,255,1) 100%);
  color: #fff;
  font-weight: 600;
  
}
.c-contenido {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  padding: 0 100px;
  position: relative;
}
body.dark .c-contenido{
background: rgb(0,130,255);
  background: linear-gradient(90deg, rgba(0,130,255,1) 0%, rgba(0,100,255,1) 100%);
}
.texto-content {
    width: 100%;
  }
@media screen and (max-width: 768px) {
  .c-contenido {
    text-align: justify;
    flex-direction: column;
    padding: 20px 20px;
  }
}
.c-contenido2 {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  background: rgb(254, 254, 254);
  background: linear-gradient(
    93deg,
    rgba(182, 192, 195, 1) 0%,
    rgba(254, 254, 254, 1) 100%
  );
  padding: 0 100px;
}
body.dark .c-contenido2 {
  background: rgb(0,130,255);
background: linear-gradient(90deg,rgba(0,100,255,1)  0%, rgba(0,130,255,1) 100%);
}
@media screen and (max-width: 768px) {
  .c-contenido2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
    padding: 20px 20px;
  }
  .img-p {
    display: flex;
    justify-content: center;
  }
 
  .texto-content {
    text-align: center;
  }
  .texto-content p {
    text-align: justify;
  }
}
.texto-content p {
  text-align: justify;
}
body.dark .c-contenido {
  background-color: #2e2bff;
}
body.dark .c-contenido2 {
  background-color: #0300c2;
}
.wave-p {
  margin-bottom: -10px;
}
.wave-p2 {
  bottom: 0;
  margin-bottom: -7px;
}

body.dark .wave-p2 path {
  fill: #0400ff;
}
body.dark .wave-p path {
  fill: #0300c2;
}
.input-m {
  color: black;
  background-color: white;
  height: 50px;
}
</style>
