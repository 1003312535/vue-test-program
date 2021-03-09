<template>
  <div>
    <otheeRow>
          <cell label="现居住地" :col="true" style="width: 200px"></cell>
          <cell label="现居住地" :col="true" style="width: 500px"></cell>
          <cell label="现居住地" :col="true" ></cell>
    </otheeRow>
    <otheeRow>
          <cell  style="width: 200px">1</cell>
          <cell  style="width: 500px">2</cell>
          <cell >3</cell>
    </otheeRow>
  </div>
</template>

<script>
import Othee from "components/othee/othee.vue";
import otheeRow from "components/othee/otheeRow";
import Cell from "components/othee/cell.vue";
import otheeRowTitle from "components/othee/otheeRowTitle.vue";
export default {
  components: { Othee, otheeRow, Cell, otheeRowTitle },
};
</script>

<style>
</style>