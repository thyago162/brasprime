<template>
  <div class="login">
    <b-row class="login-form">
      <b-col class="left-side" cols="12" lg="7">
        <form>
          <div class="form-head">
            <h2>Login</h2>
            <b-link href="/"><b-icon icon="x" class="close-icon-mobile"></b-icon></b-link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
              ornare elit.
            </p>
          </div>
          <b-row class="input-custom">
            <label for="nome"><span class="input-name">Nome</span></label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              v-model="login_form.nome"
            />
          </b-row>
          <b-row class="input-custom">
            <label for="senha"><span class="input-name">Senha</span></label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              v-model="login_form.senha"
            />
          </b-row>
          <b-row>
            <b-button>ENTRAR</b-button>
          </b-row>
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
      login_form: {
        nome: "",
        senha: "",
      },
    };
  },
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
  @media(min-width: 1024px) {
      padding: 0;
  }
  .login-form {
    position: relative;
    margin: 0;
    max-width: 640px;
    @media (min-width: 992px) {
      min-width: 800px;
      max-width: 1000px;
      padding: 0;
    }
    background-color: #ffffff;
    border-radius: 5px;
    padding: 20px;
    .left-side {
      @media (min-width: 992px) {
        padding: 20px 100px;
        display: flex;
        align-items: center;
      }
      .form-head {
        text-align: center;
        h2 {
          margin-bottom: 30px;
          font-size: 42px;
          font-weight: bold;
        }
        p {
          max-width: 320px;
          margin: 0 auto;
        }
      }
      .input-custom {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        margin: 0 auto 20px auto;
      }
      .input-custom label {
        margin-left: 10px;
        z-index: 2;
      }
      .input-custom label .input-name {
        background: #fff;
        font-weight: 700;
        padding: 0 10px;
        font-size: 24px;
      }
      .input-custom input {
        height: 30px;
        margin-top: -15px;
        padding: 20px 10px;
        border-radius: 5px;
        border: 2px solid #8a8a8a;
      }
      button {
        background-color: #ffd42e;
        font-weight: bold;
        border: none;
        width: 100%;
        padding: 15px 10px;
        font-size: 1.2rem;
        margin: 20px auto 0 auto;
        max-width: 400px;
      }
    }

    .image {
      padding: 0;
      display: none;
      @media(min-width: 992px) {
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
        @media(min-width: 992px) {
            display: none;
        }
      }
}
</style>