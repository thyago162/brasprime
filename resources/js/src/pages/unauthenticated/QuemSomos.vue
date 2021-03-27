<template>
  <b-container fluid>
    <b-row>
      <b-col
        class="quem_somos"
        :style="{
          backgroundImage:
            'url(' + require('../../assets/images/BANNER.png').default + ')',
        }"
      >
        <div class="quem_somos_title">
          <h1>Quem somos</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
            ornare elit. Donec at condimentum dolor, sit amet tempus odio. Nulla
            non massa
          </p>
        </div>
      </b-col>
    </b-row>
    <b-row
      class="referencia"
      :style="{
        backgroundImage:
          'url(' +
          require('../../assets/images/BANNER_BRANCO.png').default +
          ')',
      }"
    >
      <b-row class="flex align-items-center container mx-auto">
        <b-col cols="12" lg="7" class="referencia_content">
          <h1>Referência Automotiva</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
            ornare elit. Donec at condimentum dolor, sit amet tempus odio. Nulla
            non massa sit amet eros bibendum sollicitudin sit amet vitae magna.
            Sed pellentesque ligula sed tincidunt vehicula. Aenean porta nibh
            sit amet augue egestas interdum.
          </p>
          <b-row class="referencia_caracteristicas">
            <b-col cols="6" class="item">
              <span>
                <b-icon icon="check-circle"></b-icon>
              </span>
              Experiência
            </b-col>
            <b-col cols="6" class="item">
              <span>
                <b-icon icon="check-circle"></b-icon>
              </span>
              Alta tecnologia
            </b-col>
            <b-col cols="6" class="item">
              <span>
                <b-icon icon="check-circle"></b-icon>
              </span>
              Ótimo espaço
            </b-col>
            <b-col cols="6" class="item">
              <span>
                <b-icon icon="check-circle"></b-icon>
              </span>
              Avaliações positívas
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" lg="5" class="referencia_image">
          <b-img-lazy fluid :src="logo"></b-img-lazy>
        </b-col>
      </b-row>
    </b-row>
    <b-row
      class="valores"
      :style="{
        backgroundImage:
          'url(' +
          require('../../assets/images/banner_home_1.png').default +
          ')',
      }"
    >
      <b-row class="flex align-items-center container mx-auto">
        <b-col cols="12" sm="4" class="valores_items">
          <h1>Missão</h1>
          <div id="bloco">
            <h3><b-img-lazy class="bloco" fluid :src="bloco"></b-img-lazy></h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
            ornare elit. Donec at condimentum dolor, sit amet tempus odio.
          </p>
        </b-col>
        <b-col cols="12" sm="4" class="valores_items">
          <h1>Visão</h1>
          <div id="bloco">
            <h3><b-img-lazy class="bloco" fluid :src="bloco"></b-img-lazy></h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
            ornare elit. Donec at condimentum dolor, sit amet tempus odio.
          </p>
        </b-col>
        <b-col cols="12" sm="4" class="valores_items">
          <h1>Valores</h1>
          <div id="bloco">
            <h3><b-img-lazy class="bloco" fluid :src="bloco"></b-img-lazy></h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
            ornare elit. Donec at condimentum dolor, sit amet tempus odio.
          </p>
        </b-col>
      </b-row>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "quem_somos",
  data() {
    return {
      logo: require("../../assets/images/logo-2.svg").default,
      bloco: require("../../assets/images/borda_amarela.svg").default,
    };
  },
};
</script>

<style lang="scss" scoped>
.quem_somos {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &_title {
    padding: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    max-width: 540px;
    h1 {
      color: #ffffff;
      text-align: center;
      font-size: 48px;
      margin-bottom: 20px;
    }

    p {
      color: #ffffff;
      text-align: center;
    }
    margin-top: 24px;
    margin-bottom: 24px;
    @media screen and (min-width: 760px) {
      width: calc(100% / 2);
      height: 250px;
      margin-top: 100px;
      margin-bottom: 80px;
    }
  }
}
.referencia {
  display: flex;
  align-items: center;
  .referencia_content {
      padding: 24px;
  }
  @media (min-width: 1024px) {
    .referencia_content {
      padding: 100px 0;
      h1 {
        margin-bottom: 24px;
      }
    }    
  }
  .referencia_caracteristicas {
      font-weight: 600;
      .item {
        padding: 10px 0;
        span {
          color: #ffd42e;
          margin-right: 10px;
        }
      }
    }
}
.valores {
  background-repeat: no-repeat;
  background-size: cover;
  .valores_items {
      padding: 24px;
  }
  @media (min-width: 1024px) {
    .valores_items {
      padding: 100px 80px;
    }
  }
  .valores_items {
    text-align: center;
    h1 {
      color: #ffd42e;
    }
    p {
      color: #ffffff;
    }
  }
  #bloco {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
  }
  #bloco::before,
  #bloco::after {
    content: "";
    flex: 1 1 auto;
    border-bottom: solid 5px #ffd42e;
    border-radius: 5px;
  }

  h3 {
    flex: 0 1 auto;
    padding: 0 15px 0 15px;
    color: #fff;
    img {
      height: 40px;
      width: auto;
    }
  }
}
</style>
