<template>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <!-- <input id="title" name="title" type="text" ref="titleInput" /> -->
        <!-- can have as ref too -->
        <input id="title" name="title" type="text" v-model="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" name="description" rows="3" v-model="descInput"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" v-model="linkInput" />
      </div>
      <div class="form-control">
        <button type="submit">Add To List</button>
      </div>
    </form>
</template>

<script>
import lists from './../utils/list';

export default {
  data() {
    return {
      inputIsInvalid: false,
      titleInput: '',
      descInput: '',
      linkInput: '',
      lists: lists,
    };
  },
  methods: {
    submitData() {
      // const title = this.$refs.titleInput.value;
      const title = this.titleInput;
      const desc = this.descInput;
      const url = this.linkInput;
      if (title.trim() === '' || desc.trim() === '' || url.trim() === '') {
        this.inputIsInvalid = true;
        return;
      } else{
        const listObj = {
            title: title,
            desc: desc,
            url: url,
        }
        this.addToList(listObj);
        this.titleInput = '';
        this.descInput = '';
        this.linkInput = '';
      }
    },
    addToList(listObj){
        console.log('List', this.lists);
        this.lists.push(listObj);
    },
    confirmError() {
      this.inputIsInvalid = false;
    }
  },
};
</script>

<style scoped>
form {
  width: 95%;
}
label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  display: block;
  width: 100%;
  padding: 8px;
  border: 1px solid #444;
  font-size: 16px;
}

input:focus,
textarea:focus {
  border-color: #000;
}

.form-control {
  margin: 20px 10px;
}
</style>