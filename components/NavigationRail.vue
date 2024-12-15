<template>
      <div>
        <v-navigation-drawer
          :width="100"
          style="background-color: #141218; color: #CAC4D0; display: flex; flex-direction: column; justify-content: space-between; align-items: center; gap: 40px;"
        >
          <!-- Menu FAB Section -->
          <div class="menu-fab" style="display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 14px;">
            <v-icon>mdi-menu</v-icon>
            <v-btn fab color="#381E72" style="width: 56px; height: 56px; border-radius: 16px; gap: 10px;">
              <v-icon size="24">mdi-plus</v-icon>
            </v-btn>
          </div>
  
          <!-- Destinations Section -->
          <div class="destinations" style="display: flex; flex-direction: column; gap: 35px;">
            <div
              v-for="(item, index) in navItems"
              :key="index"
              style="display: flex; flex-direction: column; justify-content: center; align-items: center;"
            >
              <v-icon>{{ item.iconName }}</v-icon>
              <p>{{ item.label }}</p>
            </div>
          </div>
        </v-navigation-drawer>
      </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        navItems: [
          { iconName: 'mdi-star-circle-outline', label: 'Label 1' },
          { iconName: 'mdi-star-three-points', label: 'Label 2' },
          { iconName: 'mdi-star-circle-outline', label: 'Label 3' },
          { iconName: 'mdi-star-circle-outline', label: 'Label 4' },
        ],
      };
    },
  };
  </script>
  
<style>
.v-navigation-drawer__content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
</style>