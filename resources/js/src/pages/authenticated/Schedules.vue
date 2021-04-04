<template>
  <b-container fluid>
    <b-row>
      <b-col class="image">
        <b-img :src="background"></b-img>
      </b-col>
    </b-row>
    <b-row class="agendamentos">
      <b-col cols="2">
        <b-sidebar visible="true" shadow no-close-on-backdrop no-header small>
          <div class="my_sidebar">
            <b-img class="logo" :src="logo"></b-img>
            <b-list-group class="menu">
              <b-list-group-item>
                <b-icon icon="calendar"></b-icon>
                <span>Agendamentos</span>
              </b-list-group-item>
            </b-list-group>
            <b-button class="mt-5">SAIR</b-button>
          </div>
        </b-sidebar>
      </b-col>
      <b-col>
        <div class="ml-5">
          <h3 class="mt-5" :style="{ color: '#ffffff' }">Agendamentos</h3>
          <ejs-schedule class="mt-3"></ejs-schedule>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-vue-schedule";
export default {
  name: "schedule",
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Agenda],
  },
  data() {
    return {
      background: require("../../assets/images/BANNER.png").default,
      logo: require("../../assets/images/logo-2.svg").default,
    };
  },
};
</script>

<style  lang="scss" scoped>
@import "/node_modules/@syncfusion/ej2-base/styles/material.css";
@import "/node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "/node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "/node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "/node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "/node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "/node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "/node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";
.image {
  position: absolute;
  object-fit: contain;
  object-position: center;
  height: 200px;
}

.my_sidebar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  button {
    bottom: 0px;
  }

  .menu {
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

     h3 {
    color: #ffffff;
  }

  button {
    width: 250px;
  }
  }
}

.logo {
  width: 250px;
}
.agendamentos {
  background-position: contain;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
