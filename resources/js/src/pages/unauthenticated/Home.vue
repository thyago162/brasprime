<template>
  <b-container fluid>
    <section>
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
            <p>Brasprime, a tecnologia das montadoras ao seu alcance</p>
            <b-button @click="() => {$router.push('/agendamentos')}">AGENDAR SERVIÇOS</b-button>
          </div>
        </b-col>
      </b-row>
    </section>
    <section>
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
            <h2>Serviços oferecidos</h2>
            <p>
              Brasprime, excelência nos mais diversos serviços.
            </p>
            <div class="servicos_icones">
              <div class="d-flex flex-column bloco_icone">
                <div class="icone">
                  <b-img-lazy :src="suspensao"></b-img-lazy>
                </div>
                <h6 class="mt-1">Suspenção</h6>
              </div>
              <div class="d-flex flex-column bloco_icone">
                <div class="icone">
                  <b-img-lazy :src="oleo"></b-img-lazy>
                </div>
                <h6 class="mt-1">Troca de Óleo</h6>
              </div>
              <div class="d-flex flex-column bloco_icone">
                <div class="icone">
                  <b-img-lazy :src="motor"></b-img-lazy>
                </div>
                <h6 class="mt-1">Motor</h6>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </section>
    <section>
      <b-row>
        <b-col cols="12 d-flex justify-content-center">
          <div class="mt-5 home_info">
            <h5>Vistoria Técnica totalmente <span>GRÁTIS</span></h5>
            <p>Agenda agora uma vistória.</p>
            <div>
              <b-button  @click="() => {$router.push('/servicos')}">VER SERVIÇOS</b-button>
              <b-button :style="{ backgroundColor: '#ffd42e' }"  @click="() => {$router.push('/agendamentos')}"
                >AGENDAR SERVIÇOS</b-button
              >
            </div>
          </div>
        </b-col>
      </b-row>
    </section>
    <section>
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
          <b-row>
            <b-col>
              <h2>Referência automotiva</h2>
              <p>
                Lorem ipsum phasellus tempor in quisque tempus vulputate class,
                sem eleifend per maecenas class condimentum etiam elit justo,
                vivamus dictum euismod elementum nisi litora per. vitae fames
                cras etiam malesuada vitae sapien sollicitudin congue semper
                accumsan, consectetur mollis dictum hac viverra lacus justo
                suscipit cubilia auctor aliquam,
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="home_referencia_caracteristicas">
                <b-row class="mt-4">
                  <b-col cols="6">
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
                  </b-col>
                  <b-col>
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
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
          <b-row class="mt-5 ml-1">
            <b-col>
              <b-link to="/quem-somos">Saiba mais sobre <span>Brasprime</span></b-link>
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <b-img-lazy fluid :src="logo"></b-img-lazy>
        </b-col>
      </b-row>
    </section>
    <section>
      <b-row>
        <b-col class="home_depoimentos">
          <b-row>
            <b-col>
              <h2 class="mt-5">O que falam sobre nós</h2>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" lg="10" offset="0" offset-lg="1">
              <carousel
                class="mt-5 mb-5"
                :perPage="1"
                :navigationEnabled="true"
                :paginationEnabled="false"
                :navigationPrevLabel="letftIcon"
                :navigationNextLabel="rightIcon"
              >
                <slide class="d-flex flex-row justify-content-center">
                  <p>"Atendimento de alto nível com preço justo."</p>
                </slide>
                <slide class="d-flex flex-row justify-content-center">
                  <p>
                    "Ambiente agradavél, mecanicos competentes, aqui posso
                    deixar meu carro sem preocupações."
                  </p>
                </slide>
              </carousel>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </section>
    <section>
      <b-row class="home_clientes">
        <b-col :style="{ paddingRight: '0px', paddingLeft: '0px' }">
          <h2>Nossos clientes</h2>
        </b-col>
      </b-row>
    </section>
    <section class="home_duvida">
      <b-row >
        <b-col>
          <h2 class="mt-5">Ficou alguma dúvida?</h2>
          <p class="mt-3">
            Nos envie uma mensgem e te responderemos o mais rápido possível
          </p>
        </b-col>
      </b-row>
      <b-row class="mt-3 mb-5">
        <b-col class="d-flex flex-row justify-content-center">
          <b-button  @click="() => {$router.push('/contato')}">ENVIAR MENSAGEM</b-button>
        </b-col>
      </b-row>
    </section>
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
      logo: require("../../assets/images/logo-2.svg").default,
      letftIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-left-circle-fill" style="color:#ffd42e " viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/></svg>',
      rightIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-circle-fill" style="color:#ffd42e " viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5h2.5z"/></svg>'
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
      padding: 10px 5px;
      font-size: 1.2rem;
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

    h2 {
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
      margin-bottom: 30px;
      font-weight: bold;
      border: none;
      width: 250px;
      padding: 10px 5px;
      font-size: 1.2rem;
    }
  }

  &_referencia {
    padding: 30px;
    h2 {
      color: #ffd42e;
      margin-top: 50px;
    }
    p {
      color: #ffffff;
      margin-top: 30px;
    }

    a {
      color: #dad7d7;

      span {
        color: #ffd42e;
      }
    }

    &_caracteristicas {
      h6 {
        color: #ffffff;
      }

      span {
        color: #ffd42e;
        margin-left: 10px;
      }
    }
  }
  &_depoimentos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
  }

  &_clientes {
    background-color: #303030;
    height: 300px;

    h2 {
      color: #ffd42e;
      text-align: center;
      margin-top: 40px;
    }
  }

  &_duvida {
    padding: 40px;
    h2,
    p {
      text-align: center;
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
}
</style>
