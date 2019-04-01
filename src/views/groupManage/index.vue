<template>
  <avue-crud :data="data" :option="option" >
    <template slot-scope="props" slot="expand">
      <el-tag>当前行的{{props}}</el-tag>
    </template>
  </avue-crud>

</template>

<script>
  import data from '@/const/aueStudy/data.js'
  export default {
    data() {
      return data;
    },
    methods: {
      expandChange(row, expendList) {
        this.$message.success('展开回调')
      }
    }
  }
</script>

