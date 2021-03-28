<template>
  <b-container fluid>
    <b-row>
      <b-col
        :style="{
          backgroundImage:
            'url(' + require('../../assets/images/BANNER.png').default + ')',
        }"
        class="contato"
      >
        <div class="contato_title">
          <h2>Contato</h2>
          <p>
            Lorem ipsum primis purus congue ad cursus ante nulla, adipiscing
            varius suscipit faucibus justo a ultrices, ullamcorper augue viverra
            nisi pellentesque ultrices pulvinar.
          </p>
        </div>
      </b-col>
    </b-row>
    <b-row> </b-row>
    <b-row class="mt-4">
      <b-col class="contato_div">
        <b-row>
          <b-col class="contato_subtitle">
            <h6>Manda uma mensagem para nós</h6>
          </b-col>
        </b-row>
        <b-row>
          <b-col offset="0" offset-lg="1">
            <b-form class="contato_form">
              <b-row>
                <b-col cols="12" md="6">
                  <b-form-group>
                    <label for="">Nome completo</label>
                    <b-form-input placeholder="Digite seu nome"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" md="6">
                  <b-form-group>
                    <label for="">Email</label>
                    <b-form-input
                      placeholder="Digite o assunto da mensagem"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-form-group>
                <label>Assunto</label>
                <b-form-input placeholder="Digite o e-mail"></b-form-input>
              </b-form-group>

              <b-form-group>
                <label for="">Sua mensagem</label>
                <b-form-textarea
                  placeholder="Digite sua mensagem"
                  rows="6"
                ></b-form-textarea>
              </b-form-group>
              <div class="d-flex flex-row-reverse">
                  <b-button>Enviar</b-button>
              </div>
            </b-form>
          </b-col>
          <b-col>
            <div class="contato_info">
              <h6>Nos encontre através:</h6>
              <h6 class="mt-4">
                <b-icon icon="geo-alt-fill" variant="warning" />
                <span class="mr-5">Endereço</span>
              </h6>
              <p>Rua Francisco Lopes de Almeida, 530</p>
              <h6>
                <b-icon icon="telephone-fill" variant="warning" />
                <span class="mr-5">Telefone</span>
              </h6>
              <p>(83) 99931-0936</p>
              <h6>
                <b-icon icon="envelope-fill" variant="warning" />
                <span class="mr-5">E-mail</span>
              </h6>
              <p>atendimento@brasprime.com.br</p>
              <h6>
                <b-icon icon="clock-fill" variant="warning" />
                <span class="mr-5">Horário de atendimento</span>
              </h6>
              <p>Seg a sábado, 8hrs às 17hrs</p>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col cols="12" :style="{paddingRight: '0px', paddingLeft: '0px'}">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              class="map"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Rua%20Francisco%20Lopes%20de%20Almeida,%20468&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <a href="https://embedgooglemap.net/maps/7"></a>
            <br />
            <a href="https://www.embedgooglemap.net">embed code google maps</a>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "contato",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.contato {
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
    text-align: justify;
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
    label {
      position: absolute;
      margin-top: -12px;
      background-color: #ffffff;
      margin-left: 10px;
    }
    input[type="text"] {
      border-color: #303030;
    }
    textarea {
      border-color: #303030;
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
  &_info {
    margin-top: 30px;
    p {
      font-size: 12px;
      color: #707070;
      text-indent: 10px;
    }
  }
  .contato_div {
    background-size: contain;
    background-repeat: no-repeat;
  }
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 100%;
  margin: 0px;
  padding: 0px;
}
.mapouter {
  position: relative;
  text-align: right;
  height: 500px;
  width: 100%;
}

.map {
  width: 100%;
  height: 500px;
}
</style>