<template lang="html">
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div class="navbar-brand">
          <i class="fa fa-code" aria-hidden="true"></i>
          API Proxy Manager
        </div>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li ui-sref-active="active">
            <router-link to="/proxies/new">
              <i class="fa fa-fw fa-plus"></i> New Proxy
            </router-link>
          </li>
          <li ui-sref-active="active">
            <router-link to="/proxies"><i class="fa fa-fw fa-database"></i>
              Proxies
            </router-link>
          </li>
          <li>
            <a v-on:click="logout"><i class="fa fa-fw fa-sign-out"></i> Sign out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
function logout() {
  this.$router.replace('/login')
}

export default {
  methods: {
    logout
  }
}
</script>
