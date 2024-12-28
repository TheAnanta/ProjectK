// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";
import { VDateInput } from "vuetify/labs/VDateInput";
import { VTimePicker } from 'vuetify/labs/VTimePicker'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components: {
      VDateInput,
      VTimePicker,
    },
    // blueprint: md3,
  });
  app.vueApp.use(vuetify);
});
