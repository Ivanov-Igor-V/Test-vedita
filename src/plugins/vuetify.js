import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import ru from 'vuetify/lib/locale/ru';
import colors from 'vuetify/lib/util/colors';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#7B1FA2',
        secondary: '#EEEEEE',
        grey: colors.grey.darken1,
        background: '#F5F5F5',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
  lang: {
    locales: { ru },
    current: 'ru',
  },
  icons: {
    iconfont: 'mdiSvg',
  },
});
