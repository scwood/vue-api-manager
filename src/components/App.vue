<template>
  <router-view></router-view>
</template>

<style>
.login-form {
  width: 300px;
  margin: 50px auto;
}

.custom-paginate {
  margin: 5px 0;
}

.nav, .pagination, .carousel, .panel-title a {
  cursor: pointer;
}

.content-panel {
  padding-bottom: 0;
}

@media only screen and (min-width: 992px) {
  .left-column {
    margin-right: -6px;
  }

  .right-column {
    margin-left: -6px;
  }
}

.truncate-text {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.query-param {
  margin-bottom: 9px;
}

.no-border-right {
  border-right: 0px;
}
</style>
