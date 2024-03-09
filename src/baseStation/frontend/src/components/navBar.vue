<template>
  <div>
    <update-feed v-model="drawer"></update-feed>
    <v-app-bar color="primary" class="centered" dark app tabs prominent>
      <v-container class="mx-0 px-0" fluid>
        <v-row class="mx-0 px-0">
          <v-col cols="8" xs="8" sm="9" md="10">
            <v-row justify="space-between" class="mx-0 px-0">
              <v-col cols="4" xs="12" sm="12" md="5" lg="5" xl="3">
                <div
                  class="text-xl-h4 text-sm-h3 font-weight-black font-italic pr-2 mr-2 text-no-wrap"
                >
                  Khóa luận 12/2024
                </div>
              </v-col>
              <v-col cols="12" sm="12" md="6" lg="6">
                <div
                  class="text-xl-h4 text-sm-h3 font-weight-black pr-2 mr-2 text-no-wrap"
                >
                  Tên Đề tài đồ án
                </div>
              </v-col>
              <v-spacer />
            </v-row>
          </v-col>
          <v-spacer />
          <v-col cols="4" xs="4" sm="3" md="2">
            <div class="float-right">
              <div>Icon Avatar-Author</div>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-tabs slot="extension" v-model="active" grow>
        <v-tabs-slider color="accent"></v-tabs-slider>

        <v-tab v-for="route in routes" :key="route.name" :to="route.path">
          {{ route.name }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
  </div>
</template>

<script>
// import SocketIO from "socket.io-client";
import UpdateFeed from "./updateFeed.vue";

export default {
  components: {
    UpdateFeed,
  },
  sockets: {
    connect() {
      this.statusColor = "secondary";
      this.statusIcon = "mdi-wifi-strength-4";
    },
    disconnect() {
      this.statusColor = "red";
      this.statusIcon = "mdi-alert-circle";
    },
  },
  data() {
    console.log("this.$router.options.routes", this.$router.options.routes);
    return {
      piUrl: this.$store.state.piUrl,
      piUrlSet: true,
      routes: this.$router.options.routes.map((route) => ({
        name: route.name,
        path: route.path,
      })),
      active: null,
      text: "Live updates received",
      statusIcon: "mdi-alert-circle",
      statusColor: "red",
      drawer: null,
    };
  },
  methods: {
    drawerToggle: function() {
      this.drawer = !this.drawer;
    },
    setUrl() {
      this.piUrlSet = true;
      this.$refs.addressbar.blur();
      const urlObj = new URL(this.piUrl);
      console.log("urlObj", urlObj);
      this.$store.commit("updatePiUrl", this.piUrl);
    },
    editUrl() {
      this.piUrlSet = false;
    },
  },
};
</script>
