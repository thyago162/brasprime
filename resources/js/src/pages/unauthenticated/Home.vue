<template>
  <b-container fluid>
    <b-row>
      <b-col
        class="home"
        :style="{
          backgroundImage:
            'url(' +
            require('../../assets/images/banner_home_1.png').default +
            ')',
        }"
      >
        <div class="home_title">
          <h2>Conte com serviços de alta qualidade para o seu carro</h2>
          <p>Lorem ipsun dikir sut amet,consectetur adipsicing elit,</p>
          <b-button>AGENDAR VISTORIA</b-button>
        </div>
      </b-col>
    </b-row>
    <b-row
      :style="{
        backgroundImage:
          'url(' +
          require('../../assets/images/BANNER_BRANCO.png').default +
          ')',
      }"
    >
      <b-col class="d-flex justify-content-center">
        <div class="home_servicos">
          <h4>Serviços oferecidos</h4>
          <p>
            Lorem ipsum ad potenti risus etiam, pretium nulla lobortis ad
            aliquet, pharetra convallis vulputate senectus. phasellus ante
            curabitur inceptos aliquam sagittis arcu luctus
          </p>
          <div class="servicos_icones">
            <div class="d-flex flex-column bloco_icone">
              <div class="icone">
                <b-img-lazy :src="suspensao"></b-img-lazy>
              </div>
              <h6 class="mt-1">Suspenção</h6>
              <span class="ml-3"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
              >
            </div>
            <div class="d-flex flex-column bloco_icone">
              <div class="icone">
                <b-img-lazy :src="oleo"></b-img-lazy>
              </div>
              <h6 class="mt-1">Troca de Óleo</h6>
              <span class="ml-3"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
              >
            </div>
            <div class="d-flex flex-column bloco_icone">
              <div class="icone">
                <b-img-lazy :src="motor"></b-img-lazy>
              </div>
              <h6 class="mt-1">Motor</h6>
              <span class="ml-3"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
              >
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12 d-flex justify-content-center">
        <div class="mt-5 home_info">
          <h5>Vistoria Técnica totalmente <span>GRÁTIS</span></h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div>
            <b-button>VER SERVIÇOS</b-button>
            <b-button :style="{ backgroundColor: '#ffd42e' }"
              >AGENDAR VISTORIA</b-button
            >
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row
      class="home_referencia"
      :style="{
        backgroundImage:
          'url(' +
          require('../../assets/images/banner_home_2.png').default +
          ')',
      }"
    >
      <b-col offset="0" offset-lg="2">
        <h4>Referência automotiva</h4>
        <p>
          Lorem ipsum phasellus tempor in quisque tempus vulputate class, sem
          eleifend per maecenas class condimentum etiam elit justo, vivamus
          dictum euismod elementum nisi litora per. vitae fames cras etiam
          malesuada vitae sapien sollicitudin congue semper accumsan,
          consectetur mollis dictum hac viverra lacus justo suscipit cubilia
          auctor aliquam,
        </p>
        <div class="home_referencia_caracteristicas">
          <h6>
            <span>
              <b-icon icon="check-circle"></b-icon>
            </span>
            Experiência
          </h6>
          <h6>
            <span>
              <b-icon icon="check-circle"></b-icon>
            </span>
            Ótimo espaço
          </h6>
          <h6>
            <span>
              <b-icon icon="check-circle"></b-icon>
            </span>
            Tecnologia de ponta
          </h6>
          <h6>
            <span>
              <b-icon icon="check-circle"></b-icon>
            </span>
            Avaliações positívas
          </h6>
        </div>
      </b-col>
      <b-col> </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      suspensao: require("../../assets/images/suspension.svg").default,
      motor: require("../../assets/images/motor.svg").default,
      oleo: require("../../assets/images/car-oil.svg").default,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 500px;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &_title {
    padding: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
    align-content: flex-end;
    h2 {
      color: #ffffff;
      text-align: justify;
    }

    p {
      color: #ffffff;
    }
    @media screen and (min-width: 760px) {
      width: calc(100% / 2);
      height: 250px;
      margin-top: 150px;
      margin-right: 100px;
    }

    button {
      background-color: #ffd42e;
      font-weight: bold;
      border: none;
      width: 300px;
    }
  }

  &_servicos {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    width: calc(100% / 2);
    p {
      font-size: 12px;
    }

    h4 {
      margin-top: 50px;
    }
    p {
      margin-top: 10px;
    }

    .servicos_icones {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
      margin-top: 30px;
      margin-bottom: 30px;

      .bloco_icone {
        max-width: 150px;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .icone {
      width: 50px;
      height: 50px;
      border: 5px solid #ffd42e;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  &_info {
    width: calc(100% / 2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;

    p {
      font-size: 12px;
    }

    span {
      color: #ffd42e;
      font-weight: bold;
    }

    button {
      margin-top: 20px;
      border: none;
      margin-bottom: 30px;
    }
  }

  &_referencia {
      padding: 30px;
    h4 {
      color: #ffd42e;
      margin-top: 50px;
    }
    p {
      color: #ffffff;
      margin-top: 30px;
    }

    &_caracteristicas {
        margin-top: 30px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;

      h6 {
        color: #ffffff;
      }

      span {
        color: #ffd42e;
        margin-left: 10px;
      }
    }
  }
}
</style>
