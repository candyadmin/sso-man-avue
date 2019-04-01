import request from '@/router/axios';

// export const getGroupTableData = (page) => request({
//           method:'get',
//           url:'http://localhost:8044/groups'
//         }).then(function(res){
//         page =res;
// });
export const getGroupTableData = (page) => request({
  url:'http://localhost:8044/groups'+'?page='+page.page,
  method: 'get'
});
export const insertGroupData = (ucenterGroup) => request({
  url:'http://localhost:8044/groups',
  method: 'post',
  data: ucenterGroup
});
export const updateGroupData = (ucenterGroup) => request({
  url:'http://localhost:8044/groups'+'/'+ucenterGroup.id,
  method: 'put',
  data: ucenterGroup
});

export const removeGroupData = (ucenterGroup) => request({
  url:'http://localhost:8044/groups'+'/'+ucenterGroup.id,
  method: 'delete'
});
