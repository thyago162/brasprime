<template>
    <b-container fluid>
        <b-row>
            <b-col class="home">
              <div class="home_title">
                <h1>
                    Lorem ipsun dikir sut amet,
                    consectetur adipsicing elit,
                </h1>
                <p >Lorem ipsun dikir sut amet,consectetur adipsicing elit,</p>
                <b-button >AGENDAR VISTORIA</b-button>
              </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col >
                <div class="home_servicos">
                    <h4>Serviços oferecidos</h4>
                    <p>Lorem ipsum ad potenti risus etiam, pretium nulla lobortis ad aliquet, pharetra convallis vulputate senectus. phasellus ante curabitur inceptos aliquam sagittis arcu luctus</p>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home {
    height: 500px;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    background-color: #333333;

    &_title {
        padding: 10px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-end;
        align-content: flex-end;
        h1 {  
            color: #ffffff;
            text-align: justify;
        }

        p {  
            color: #ffffff;
        }
        @media screen and (min-width: 760px) {
            width: calc(100%/2);
            height: 250px;
            margin-top: 150px;
            margin-right: 100px;
        }

        button { 
            background-color: #FFD42E;
            font-weight: bold;
            border: none;
            width: 300px;
        }
    }

    &_servicos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h4 {  
            margin-top: 50px;
        }
    }
}
</style>
