<template>
  <v-footer dark padless>
    <v-card flat tile class="secondary white--text text-center">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt nobis
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
        explicabo iste in tempore id corporis exercitationem enim ad, dolores
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy; {{ new Date().getFullYear() }} - <strong>LockSeguridad</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-instagram",
        link: "",
      },
      {
        text: "mdi-twitter",
        link: "https://twitter.com/loginsachile",
      },
      {
        text: "mdi-web",
        link: "http://www.loginsa.com/",
      },
    ],
  }),
};
</script>

<style>
.v-card {
  width: 100%;
}
</style>