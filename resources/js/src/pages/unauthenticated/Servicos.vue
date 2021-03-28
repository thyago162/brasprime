<template>
  <b-container fluid>
    <b-row>
      <b-col
        class="servicos"
        :style="{
          backgroundImage:
            'url(' + require('../../assets/images/BANNER.png').default + ')',
        }"
      >
        <div class="servicos_title">
          <h1>Serviços</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
            ornare elit. Donec at condimentum dolor, sit amet tempus odio. Nulla
            non massa
          </p>
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
      <b-col class="servicos_oferecidos">
        <b-col cols="12">
          <h2>Serviços oferecidos</h2>
          <p class='section-desc'>
            Nossos serviços são de alta qualidade e profissionalismo, abaixo
            temos alguns dos principais serviços que oferecemos para nossos clientes
          </p>
        </b-col>
        <b-row class="container mx-auto mt-5">
          <b-col>
            <b-row>
              <b-col class="mb-5" cols='6' md="4" v-for="(servico, index) in servicos_oferecidos" :key="index">
                <b-img-lazy :src="servico.icon"></b-img-lazy>
                <h4 class="pt-3">{{ servico.title }}</h4>
                <p>
                  {{ servico.description }}
                </p>
              </b-col>
            </b-row>            
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="container mx-auto">
      <b-col>
        <carousel
          :paginationEnabled="false"
          :navigationEnabled="true"
          :navigationPrevLabel="letftIcon"
          :navigationNextLabel="rightIcon"
          :perPage="1"
          class="servicos_carousel"
        >
          <slide
            style="padding: 10px 20px"
            v-for="(slide, index) in servicos_carousel"
            :key="index"
          >
            <b-row>
              <b-col cols="12" md="6">
                <h2>{{ slide.title }}</h2>
                <p>{{ slide.description }}</p>
                <ul class="custom-list">
                  <li v-for="(servico, index) in slide.services" :key="index">
                    <span><b-icon icon="check-circle"></b-icon></span
                    >{{ servico }}
                  </li>
                </ul>
              </b-col>
              <b-col class="d-none d-md-block" cols="12" md="6" style="border: 1px solid black">
                <b-img-lazy :src="slide.image"></b-img-lazy>
              </b-col>
            </b-row>
          </slide>
        </carousel>
      </b-col>
    </b-row>
    <b-row
      :style="{
        backgroundImage:
          'url(' +
          require('../../assets/images/banner-fale-conosco.png').default +
          ')',
      }"
    >
      <b-col class="fale_conosco">
        <h2>Ficou com alguma dúvida?</h2>
        <p>
          Nos envie uma mensagem e te responderemos
          o mais rápido possível
        </p>
        <b-button class="mt-4">ENVIAR MENSAGEM</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "servicos",
  data() {
    return {
      letftIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-left-circle-fill" style="color:#ffd42e " viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/></svg>',
      rightIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-circle-fill" style="color:#ffd42e " viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/></svg>',
      logo: require("../../assets/images/logo_3.png").default,
      bloco: require("../../assets/images/borda_amarela.svg").default,
      servicos_oferecidos: [
        {
          icon: require("../../assets/images/suspension.svg").default,
          title: "Suspensão",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit.",
        },
        {
          icon: require("../../assets/images/car-oil.svg").default,
          title: "Troca de Óleo",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit.",
        },
        {
          icon: require("../../assets/images/motor.svg").default,
          title: "Motor",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit.",
        },
        {
          icon: require("../../assets/images/taxi.svg").default,
          title: "Serviço leva e traz",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit.",
        },
        {
          icon: require("../../assets/images/pneu.svg").default,
          title: "Alinhamento",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit.",
        },
        {
          icon: require("../../assets/images/freios.svg").default,
          title: "Freios",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit.",
        },
      ],
      servicos_carousel: [
        {
          title: "Suspensão",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit.",
          services: ["Experiência", "Recurso 2", "Recurso 3"],
          image: "",
        },
        {
          title: "Troca de Óleo",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit.",
          services: ["Experiência", "Recurso 2", "Recurso 3"],
          image: "",
        },
        {
          title: "Motor",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit.",
          services: ["Experiência", "Recurso 2", "Recurso 3"],
          image: "",
        },
        {
          title: "Serviço leva e traz",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit.",
          services: ["Experiência", "Recurso 2", "Recurso 3"],
          image: "",
        },
        {
          title: "Alinhamento",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit.",
          services: ["Experiência", "Recurso 2", "Recurso 3"],
          image: "",
        },
        {
          title: "Freios",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ornare elit.",
          services: ["Experiência", "Recurso 2", "Recurso 3"],
          image: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.servicos {
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
.servicos_oferecidos {
  text-align: center;
  padding: 80px 0;
  h2 {
    margin-bottom: 20px;
  }
  p {
    max-width: 640px;
    margin: 0 auto;
  }
  img {
    height: 72px;
    width: 72px;
    border: 5px solid #ffd42e;
    border-radius: 10px;
    padding: 10px;
  }
}
.servicos_carousel{
  padding: 80px 0; 
}
.fale_conosco {
  text-align: center;
  padding: 80px 0;
  p {
   
    padding: 12px;
    max-width: 400px;
    margin: 0 auto;
  }
  button {
    background-color: #ffd42e;
    font-weight: bold;
    border: none;
    width: 300px;
    padding: 10px 5px;
    font-size: 1.2rem;
  }
}
.custom-list {
  list-style: none;
  padding-left: 0;
  span {
    color: #ffd42e;
    margin-right: 10px;
  }
  li {
    padding: 5px 0;
    font-weight: 600;
  }
}
</style>
