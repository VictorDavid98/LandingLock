<template>
  <section id="about">
    <div class="contenedor">
      <div class="content">
        <div class="centrar">
          <h1 style="font-size: 35px;">La seguridad que necesitas</h1>
          <p class="mt-8">
            Perder no es sinónimo de fracasar, perder es aprender y de este
            aprendizaje nace el Lock, es por esto que al combinar nuestra
            experiencia con un equipo de soporte y desarrolladores altamente
            capacitados nos lleva a idear y diseñar un sistema que responde a
            las necesidades y requerimientos actuales, Lock te entregará la
            tranquilidad de saber que tus recursos están correctamente
            administrados.
          </p>
          <p>
            Apoya el trabajo del personal de seguridad y su gestión de
            administración, LOCK es una plataforma flexible, programable y
            adaptable a las necesidades particulares de cada usuario hoy más que
            nunca la seguridad se ha transformado en una necesidad y un anhelo
            para todos.
          </p>
        </div>
        <div class="centrar-2 mt-6">
          <img src="../assets/img/undraw_security_on_re_e491.svg" alt="" width="100%"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#about {
  background-color: #f4f7f5;
}
.contenedor {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  
}
.content {
  width: 81%;
  margin: 0;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap:40px;
  color: black;
  padding: 30px 30px;

}
@media screen and (max-width: 968px){
  .content{
    display: flex;
    flex-direction: column;
    padding: 0;
  }
}
</style>
