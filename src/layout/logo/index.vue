<template>
  <div class="logo">
    <img src="@/assets/images/logo.png" alt="" />
    <p>码路中后台</p>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: $dark-fontColor;
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: #ddd 1px solid;
  img {
    width: 30px;
    height: 30px;
  }
  p {
    font-size: $base-logo-title-fontSize;
    margin-left: 10px;
  }
}
</style>
