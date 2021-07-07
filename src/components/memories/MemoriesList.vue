<template>
  <ion-list>
    <memory-listitem
      v-for="memory in memories"
      :key="memory.id"
      :memory="memory"
    ></memory-listitem>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import MemoryListitem from "./MemoryListItem.vue";
export default {
  props: ["memories"],
  components: {
    IonList,
    MemoryListitem,
  },
};
</script>

<style>
</style>