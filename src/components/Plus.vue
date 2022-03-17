<template>
  <section id="plus">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" class="hidden-xs-only">
              <v-img
                src="@/assets/img/logo-lock.png"
                class="d-block ml-auto mr-auto"
                max-width="350px"
              />
            </v-col>
            <v-col cols="12" sm="8" class="white--text text-left">
              <h1 class="font-weight-light display-2 mb-2">Lock Seguridad</h1>
              <h1 class="font-weight-light">
                Hoy mas que nunca la seguridad se ha transformado en una
                necesidad para todos.
                <br />
                <br />
                te invitamos a registrarte...
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
                Visitanos
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#plus {
  background-image: url("~@/assets/img/bgDownload.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#plus .container,
#plus .row {
  height: 100%;
}
</style>