<template>

<!-- -------------------------- -->
  <div>

    <nav class="navbar">
      <img :src="require('@/assets/logo.png')" alt="Logo" class="logo" />

      <div class="navbar-links">
        <router-link to="/" class="navbar-link">Dashboard</router-link> |
        <router-link to="/project" class="navbar-link">Project</router-link> |
        <router-link to="/user" class="navbar-link">User</router-link> |
        <router-link to="/post" class="navbar-link">Post</router-link>
      </div>
    </nav>

    <div class="content">
      <router-view />
    </div>
    
  </div>
</template>

<style>
.navbar {
  background-color: #f1f1f1;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.logo {
  height: 40px;
  margin-right: 10px;
}

.navbar-links {
  flex-grow: 1;
  text-align: right;
}

.navbar-link {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-left: 10px;
}

.navbar-link:hover {
  color: #42b983;
}

.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
