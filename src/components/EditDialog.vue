<template>
    <i-modal v-model="visible">
        <template slot="header">Modal Header</template>
            This is the modal body. Useful information goes here.
        <template slot="footer">Modal Footer</template>
    </i-modal>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    };
  }
}
</script>