import { useIntersectionObserver } from "@vueuse/core";

export const lazyPlugin = {
  install(app) {
    app.directive("lazy-img", {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.src = binding.value;
            stop();
          }
        });
      },
    });
  },
};
