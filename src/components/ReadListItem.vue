<template>
  <li>
    <header>
        <h3>{{ list.title }}</h3>
    </header>
    <div class="list-item">
        <p class="list-desc">{{ list.description }}</p>
        <nav>
            <a :href="list.link">View Resource</a>
        </nav>
    </div>
    <div class="del-button">
        <button @click="deleteList(list.id)">Delete</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    deleteList(id){
        this.$emit('del-list', id);
    },
  }
};
</script>

<style scoped>
li {
    margin: 10px 0;
    border-radius: 12px;
    padding: 10px;
    border: 4px solid #8b8686;
}

li h3 {
    margin: 8px 0;
    font-size: 20px;
}
li .list-item {
    display: inline-block;
}
li .list-desc {
    margin: 8px 0;
}
li .del-button {
    float: right;
}
a {
    color: #fff;
    padding: 10px;
    background-color: #444;
    display: inline-block;
}

a:hover,
a:active {
    background-color: #0a688d;
}
</style>