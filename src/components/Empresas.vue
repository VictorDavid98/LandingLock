<template>
  <div class="contenedor-empresas">
    
    <div>
      <h1 class="text-center">Empresas con la que trabajamos</h1>
    </div>
    <div class="logos-empresas">
        <img class="img-logo" src="@/assets/img/empresas-logos/logo-falabella.png" alt="">
        <img class="img-logo" src="@/assets/img/empresas-logos/logo-adidas.png" alt="">
        <img class="img-logo" src="@/assets/img/empresas-logos/logo-apple.png" alt="">
        <img class="img-logo" src="@/assets/img/empresas-logos/logo-hites.png" alt="">
        <img class="img-logo" src="@/assets/img/empresas-logos/logo-lg.png" alt="">
        <img class="img-logo" src="@/assets/img/empresas-logos/logo-nestle.png" alt="">
    </div>
   
  </div>
  
</template>

<script>
export default {
  data() {
    return {};
  },
  setup() {},
};
</script>
<style scoped>
.contenedor-empresas {
  width: 100%;
  height: auto;
  padding-top: 15px;
  background-color: #f3f3f3;
  position: relative;
}
body.dark .contenedor-empresas {
  background-color: #0300c2;
}
.logos-empresas{
    width: 85%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto;
    align-items: center;
    justify-content: center;

}
.img-logo{
    width: 60%;
    margin: 0 auto;
}

</style>
