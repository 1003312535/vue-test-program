<template>
  <div>
    <otheeRow>
      <cell label="现居住地" :col="true" style="width: 200px"></cell>
      <cell label="现居住地" :col="true" style="width: 500px"></cell>
      <cell label="现居住地" :col="true"></cell>
    </otheeRow>
    <otheeRow>
      <cell style="width: 200px">1</cell>
      <cell style="width: 500px">2</cell>
      <cell>3</cell>
    </otheeRow>
  </div>
</template>

<script>
import Othee from './othee.vue'
import otheeRow from './otheeRow'
import Cell from './cell.vue'
import otheeRowTitle from './otheeRowTitle.vue'
export default {
  components: { Othee, otheeRow, Cell, otheeRowTitle },
}
</script>

<style>
</style>