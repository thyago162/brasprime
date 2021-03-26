<template>
  <footer>
    <b-container fluid>
      <b-row
        class="footer"
        :style="{
          backgroundImage:
            'url(' + require('../../assets/images/RODAPE.png').default + ')',
        }"
      >
        <b-col>
          <b-row class="mt-5">
            <b-col cols="12" lg="4" class="d-flex flex-row-reverse">
              <b-img-lazy :src="logo"></b-img-lazy>
            </b-col>
            <b-col cols="12" lg="2">
              <h6>Brasprime</h6>
              <ul>
                <li>
                  <b-link href="/">Início</b-link>
                </li>
                <li>
                  <b-link href="/quem-somos">Quem somos</b-link>
                </li>
                <li>
                  <b-link href="/servicos">Serviços</b-link>
                </li>
                <li>
                  <b-link href="/agendamentos">Agendamentos</b-link>
                </li>
                <li>
                  <b-link href="/contato">Contato</b-link>
                </li>
              </ul>
            </b-col>
            <b-col cols="12" lg="2">
              <p>Redes Sociais</p>
              <ul>
                <li>
                  <b-link>
                    <b-icon icon="facebook"></b-icon>
                    /brasprime
                  </b-link>
                </li>
                <li>
                  <b-link>
                    <b-icon icon="instagram"></b-icon>
                    /brasprime
                  </b-link>
                </li>
              </ul>
            </b-col>
            <b-col cols="12" lg="2">
              <p>Contato</p>
              <ul>
                <li>contato@brasprime.com.br</li>
                <li>(83) 99931-0936</li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="d-flex justify-center second_footer">
          <span>Brasprime - Todos os direitos reservados</span>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {
      logo: require("../../assets/images/logo_3.png").default,
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin-top: 25px;

  li {
    margin-top: 5px;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }
  a:hover {
    color: #ffd42e;
  }
}

.footer {
  padding: 50px 0;
  text-align: center;
  @media(min-width: 1024px) {
    padding: 0;
    text-align: justify;
  }
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;
  min-height: 280px;

  img {
    height: 150px;
    margin: 0 auto 20px auto;
    @media(min-width: 1024px) {
      margin: 0;
    }
  }
}
.second_footer {
  background-color: #707070;
  color: #ffffff;
}
</style>