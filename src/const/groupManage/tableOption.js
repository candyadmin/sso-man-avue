import {
  DIC
} from '@/const/dic'
export default {
  maxHeight: 400,
  index: true,
  border: true,
  expand: true,
  stripe: false,
  selection: true,
  // customClass: '',自定义弹出框样式
  menuBtn: true,
  menuWidth: 290,
  menuAlign: 'center',
  align: 'center',
  searchSize: 'small',
  // defaultSort: {
  //   prop: 'name',
  //   order: 'descending'
  // },
  dicData: DIC,
  column: [{
    label: "集团id",
    prop: "id",
    tip: '这是集团id提示',
    width: 120,
    placeholder: '自定义输入placeholder',
    editDisabled: true,
    type: 'number',
    rules: [{
      required: true,
      message: "请输入集团id",
      trigger: "blur"
    }]
  },
    {
      label: "集团名称",
      prop: "name",
      sortable: true,
      addDisabled: false,
      formsolt: true,
    },
    {
      label: "集团编码",
      prop: "code",
      sortable: true,
      addDisabled: false,
      formsolt: true,
    },
    {
      label: "创建人",
      prop: "userName",
      sortable: true,
      addDisabled: false,
      formsolt: true,
    },
    {
      label: "启用状态",
      prop: "status",
      sortable: true,
      valueDefault: 1,
      addVisdiplay: false,
      editDisabled: true,
      type: 'number',
      hide: true,
    },
    {
      label: "创建时间",
      prop: "gmtCreate",
      type: "datetime",
      valueFormat: "yyyy-MM-dd'T'hh:mm:ss",
      hide: true,
      format: "yyyy-MM-dd'T'hh:mm:ss",

    },
    {
      label: "修改时间",
      prop: "gmtModified",
      type: "datetime",
      valueFormat: "yyyy-MM-dd'T'hh:mm:ss",
      hide: true,
      format: "yyyy-MM-dd'T'hh:mm:ss",
    }
  ]
};
