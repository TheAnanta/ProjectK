// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";
import { VDateInput } from "vuetify/labs/VDateInput";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components: {
      VDateInput,
    },
    // blueprint: md3,
  });
  app.vueApp.use(vuetify);
});
