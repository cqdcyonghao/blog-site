<!--
 * @Descripttion: 
 * @Author: Cheng
 * @Date: 2021-06-27 11:43:35
 * @LastEditors: Cheng
 * @LastEditTime: 2021-06-29 17:38:39
-->
<template>
  <div
    class="theme-container"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar @toggle-sidebar="toggleSidebar" />
    <div class="container"></div>
  </div>
</template>

<script>
import Navbar from "@theme/components/Navbar.vue";

export default {
  name: "Layout",

  components: {
    Navbar,
  },

  data() {
    return {
      isSidebarOpen: false,
    };
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
      this.$emit("toggle-sidebar", this.isSidebarOpen);
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  background: #f1f1f1;
}
</style>