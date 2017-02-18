<template>
  <div>
    <navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from './Navigation';

export default {
  components: {
    Navigation
  }
}
</script>
