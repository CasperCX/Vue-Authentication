<template>
  <div>
    <v-app>
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <panel title="login">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
          ></v-text-field>
          <br>
            <div class="danger-alert" v-html="error" />
          <br>
          <v-btn
            dark
            class="cyan"
            @click="login">
            login
          </v-btn>
        </panel>
      </v-flex>
    </v-layout>
    </v-app>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService';

  export default {
    data() {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async login () {
        try {
          const res = await AuthService.login({
            email: this.email,
            password: this.password
          })
        } catch(err) {
          this.error = err;
        }
      }
    }
  }
</script>

 