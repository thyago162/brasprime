<template>
    <b-container fluid>
        <b-row>
            <b-col>
                <ejs-schedule ></ejs-schedule>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import {  Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
export default {
    name: 'schedule',
    provide: {
        schedule:  [Day, Week, WorkWeek, Month, Agenda]
    }
}
</script>

<style scoped>

</style>
