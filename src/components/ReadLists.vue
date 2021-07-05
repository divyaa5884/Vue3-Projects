<template>
  <ul>
    <read-list-item
      v-for="list in lists"
      :key="list.id"
      :list="list"
      @del-list="removeList">
    </read-list-item>
<i-button @click="visible = true">Edit List</i-button>

  </ul>
</template>

<script>
import ReadListItem from './ReadListItem.vue';
import lists from './../utils/list';

export default {
  components: {
    ReadListItem,
  },
  data(){
    return {
        lists: lists,
    }
  },
  methods: {
    removeList(id) {
        const newList = this.lists.filter(list => list.id !== id);
        this.lists = newList;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>