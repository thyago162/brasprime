<template>
    <b-container fluid>
        <b-row>
            <b-col :style="{backgroundImage: 'url('+require('../../assets/images/BANNER.png').default+')'}" class="contato">
                <div class="contato_title">
                    <h2>Contato</h2>
                    <p>Lorem ipsum primis purus congue ad cursus ante nulla, adipiscing varius suscipit faucibus justo a ultrices, ullamcorper augue viverra nisi pellentesque ultrices pulvinar.</p>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="contato_subtitle">
               <h6>Manda uma mensagem para nós</h6>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col offset="0" offset-lg="1">
                <b-form class="contato_form">
                    <b-form-group>
                        <b-form-input placeholder="Digite seu nome"></b-form-input>
                    </b-form-group>

                    <b-form-group>
                        <b-form-input placeholder="Digite o e-mail"></b-form-input>
                    </b-form-group>

                    <b-form-group>
                        <b-form-input placeholder="Digite o assunto da mensagem"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-textarea placeholder="Digite sua mensagem"></b-form-textarea>
                    </b-form-group>
                    <b-button>Enviar</b-button>
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
    </b-container>
</template>

<script>
export default {
    name: 'contato',
    data() {
        return {
            
        }
    }
}
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
        @media screen and (min-width: 760px){
            width: calc(100%/3);
            margin-top: 150px;
            margin-bottom: 150px;
        }
    }
    &_subtitle {
        text-align: center;
        margin-top: 50px;
    }
    &_form {
        margin-top: 30px;
        button {
            background-color: #FFD42E;
            color: #ffffff;
            font-weight: bold;
            border: none;
            width: 250px;
        }
    }
    &_info {
        margin-bottom: 20px;
        p {
            font-size: 12px;
            color: #707070;
            text-indent: 10px;
        }
    }
}
</style>