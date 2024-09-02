<template>
  <div>
    <header
      style="
        height: 60px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.45);
        color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
      "
    >
      Vue2
    </header>
    <nav style="display: flex; flex-direction: row;">
      <router-link to="/page1" class="link">
        <span>PAGE1</span>
      </router-link>
      <router-link to="/page2" class="link">
        <span>PAGE2</span>
      </router-link>
    </nav>
    <RouterView />
  </div>
</template>

<script></script>

<style scoped>
.link {
  color: black;
  margin-right: 10px;
}

.link.router-link-active {
  color: pink;
}
</style>
