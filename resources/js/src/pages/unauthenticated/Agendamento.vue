<template>
  <b-container fluid>
    <b-row>
      <b-col
        :style="{
          backgroundImage:
            'url(' + require('../../assets/images/BANNER.png').default + ')',
        }"
        class="agendamento"
      >
        <div class="agendamento_title">
          <h2>Agendamentos</h2>
          <p>
            Lorem ipsum primis purus congue ad cursus ante nulla, adipiscing
            varius suscipit faucibus justo a ultrices, ullamcorper augue viverra
            nisi pellentesque ultrices pulvinar.
          </p>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col offset="0" offset-lg="1" cols="12" lg="10">
        <h5 class="agendamento_subtitle">
          Para agendar a vistoria, informe os dados abaixo
        </h5>
        <b-form class="agendamento_form">
          <b-row>
            <b-col cols="12" sm="6" md="4" class="mb-3">
              <b-form-group>
                <label for="">Nome</label>
                <b-form-input placeholder="Digite seu nome"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" sm="6" md="4" class="mb-3">
              <b-form-group>
                <label for="">E-mail</label>
                <b-form-input placeholder="Digite seu email"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" sm="6" md="4" class="mb-3">
              <b-form-group>
                <label for="">Telefone</label>
                <b-form-input placeholder="Digite seu telefone"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" sm="6" md="4" class="mb-3">
              <b-form-group>
                <label for="">Placa</label>
                <b-form-input
                  placeholder="Digite a placa do carro"
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="12" sm="6" md="4" class="mb-3">
              <b-form-group>
                <label for="">Data do agendamento</label>
                <b-form-input
                  type="date"
                  placeholder="Data do agendamento"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group >
                  <h5>Serviços</h5>
                <b-form-checkbox-group
                  v-slot="{ ariaDescribedby }"
                  id="checkbox-group-1"
                  v-model="servicosEscolhidos"
                  :options="servicos"
                  :aria-describedby="ariaDescribedby"
                  name="flavour-1"
                ></b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>
          <div class="mt-4" v-if="exibirEndereco">
            <b-row>
              <b-col>
                <h5>
                  Informe o seu endereço para que possamos buscar o veículo.
                </h5>
              </b-col>
            </b-row>
            <b-row class="mt-4">
              <b-col cols="2">
                <b-form-group>
                  <label for="">Cep</label>
                  <b-form-input
                    type="text"
                    placeholder="Cep"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group>
                  <label for="">Endereço</label>
                  <b-form-input
                    type="text"
                    placeholder="Endereço"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="1">
                <b-form-group>
                  <label for="">Número</label>
                  <b-form-input
                    type="text"
                    placeholder="Nº"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group>
                  <label for="">Complemento</label>
                  <b-form-input
                    type="text"
                    placeholder="Complemento"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-form-group>
                  <label for="">Bairro</label>
                  <b-form-input
                    type="text"
                    placeholder="Bairro"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group>
                  <label for="">Cidade</label>
                  <b-form-input
                    type="text"
                    placeholder="Cidade"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
          </div>
          <b-row class="mt-5">
            <b-col>
              <div class="termos_uso">
                <b-form-radio
                  >Li e aceito os <b-link>termos de uso</b-link></b-form-radio
                >
                <b-button class="mt-4">AGENDAR SERVIÇO</b-button>
              </div>
            </b-col>
          </b-row>
        </b-form>
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
        <p>Nos envie uma mensagem e te responderemos o mais rápido possível</p>
        <b-button>ENVIAR MENSAGEM</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "agendamento",
  data() {
    return {
      servicosEscolhidos: [],
      servicos: [
        { text: "Suspensão", value: 1 },
        { text: "Motor", value: 2 },
        { text: "Troca de óleo", value: 3 },
        { text: "Alinhamento/Balanceamento", value: 4 },
        { text: "Freios", value: 5 },
        { text: "Leva e traz", value: 6 },
      ],
    };
  },
  computed: {
      exibirEndereco: function() {
          return this.servicosEscolhidos.find(element => element == 6)
      }
  }
};
</script>

<style lang="scss" scoped>
button {
  background-color: #ffd42e;
  font-weight: bold;
  border: none;
  width: 300px;
  padding: 10px 5px;
  font-size: 1.2rem;
}
.agendamento {
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &_title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    text-align: center;
    @media screen and (min-width: 760px) {
      width: calc(100% / 3);
      margin-top: 150px;
      margin-bottom: 150px;
    }
  }
  &_subtitle {
    text-align: center;
    margin-top: 30px;
  }
  &_form {
    margin-top: 30px;
    padding: 40px;
    label {
      position: absolute;
      margin-top: -12px;
      background-color: #ffffff;
      margin-left: 10px;
    }
    input {
      border-color: #303030;
      height: 45px;
    }
    textarea {
      border-color: #303030;
    }
    select {
      border-color: #303030;
    }
    .termos_uso {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  &_mensagem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(229, 232, 238);
    margin-top: 50px;
    padding: 30px;
    height: 300px;
  }

  .agendamento_div {
    background-size: contain;
    background-repeat: no-repeat;
  }
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
</style>
