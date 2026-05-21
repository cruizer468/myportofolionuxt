import Vue from 'vue';
import Particles from "@tsparticles/vue2";
import { loadSlim } from "@tsparticles/slim";

Vue.use(Particles, {
  init: async (engine) => {
    await loadSlim(engine);
  }
});
