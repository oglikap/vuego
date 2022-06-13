<template>
  <div class="container max small-padding">
    <nav>
        <router-link v-if="store.token == ''" to="/login"><i>login</i></router-link>
        <a href="javascript:void(0);" v-else @click="logout"><i>logout</i></a>

        <button class="border">Schrijvers</button>

        <router-link to="/"><i>home</i></router-link>
        <ul style="display: flex; list-style:none">
          <li class="small-margin">
            <router-link to="/producties">Producties</router-link>
            </li>
          <li class="small-margin"><a href="#">Schrijver</a></li>
        </ul>

        <span class="navbar-text">
          {{ store.user.first_name ?? '' }}
        </span>
        <i class="aboslute right">menu</i>
    </nav>
  </div>
</template>

<script>
import { store } from "./store";
import router from "@/router";

export default {
  data() {
    return {
      store
    }
  },
    methods: {
    logout() {
      const payload = {
        token: store.token,
      }

      const requestOptions = {
        method: "POST",
        body: JSON.stringify(payload),
      }

      fetch("http://localhost:8081/users/logout", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          console.log(response.message);
        } else {
          store.token = "";
          store.user = {};

          document.cookie = '_site_data=; Path=/; ' +
          'SameSite=Strict; Secure; ' +
          'Expires=Thu, 01 Jan 1970 00:00:01 GMT;'

          router.push("/login");
        }
      })
      
    }
  }

}
</script>