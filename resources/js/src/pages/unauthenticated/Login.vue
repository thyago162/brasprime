<template>
  <div class="login">
    <b-row class="login-form">
      <b-col cols="12" lg="7">
        <form>
          <div class="d-flex flex-row justify-content-center mt-5">
            <h2>Login</h2>
          </div>
          <b-form-group class="mt-4">
            <label for="">E-mail</label>
            <b-form-input placeholder="Digite seu e-mail" type="email" v-model="login.username"></b-form-input>
          </b-form-group>
          <b-form-group>
            <label for="">Senha</label>
            <b-form-input placeholder="Informe sua senha" type="password" v-model="login.password"></b-form-input>
          </b-form-group>
          <div>
            <b-button @click="auth()">ENTRAR</b-button>
          </div>
        </form>
      </b-col>
      <b-col class="image" cols="5">
        <b-img-lazy fluid :src="banner_login"></b-img-lazy>
        <b-link href="/"><b-icon icon="x" class="close-icon"></b-icon></b-link>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banner_login: require("../../assets/images/banner-login.png").default,
      login: {
        username: "",
        password: "",
        grant_type: "password",
        client_id: "2",
        client_secret: process.env.OAUTH_KEY
      },
    };
  },
  methods: {
    auth() {
      this.$http.post('http://localhost:8000/oauth/token', this.login)
      .then(() => {
        this.$router.push('/auth/agendamentos')
      })
      .catch(error => {
        alert('epaaaa')
      })

    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  height: 100vh;
  background-image: url("../../assets/images/BG-Login.png");
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  @media (min-width: 1024px) {
    padding: 0;
  }

  .login-form {
    @media (min-width: 992px) {
      padding: 0;
    }
    background-color: #ffffff;
    border-radius: 5px;
    padding: 20px;

    form {
      label {
        position: absolute;
        margin-top: -12px;
        margin-left: 10px;
        background-color: #ffffff;
      }
      input {
        border-color: #303030;
      }

      button {
        background-color: #ffd42e;
        font-weight: bold;
        border: none;
        width: 100%;
        padding: 10px 5px;
        font-size: 1.2rem;
        margin: 20px auto 0 auto;
        max-width: 400px;
      }
    }
  }

  .image {
    padding: 0;
    display: none;
    @media (min-width: 992px) {
      display: flex;
    }
    justify-content: flex-end;
    position: relative;
    .close-icon {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 32px;
      color: #ffffff;
    }
  }
}
.close-icon-mobile {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 32px;
  color: black;
  @media (min-width: 992px) {
    display: none;
  }
}
</style>
