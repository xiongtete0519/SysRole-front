import request from '@/utils/request'
//常量
const api_name='/admin/system/sysRole'
export default {
  //角色列表
  getPageList(page,limit,searchObj){
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params:searchObj
    })
  },
  //角色删除
  removeId(id){
    return request({
      url:`${api_name}/remove/${id}`,
      method:'delete'
    })
  },
  //添加角色
  saveRole(role){
    return request({
      url:`${api_name}/save`,
      method:'post',
      data:role //传递json格式
    })
  },
  //根据id查询
  getRoleId(id){
    return request({
      url:`${api_name}/findRoleById/${id}`,
      method:'post'
    })
  },
  //修改
  update(role){
    return request({
      url:`${api_name}/update`,
      method:'post',
      data:role
    })
  },
  //批量删除
  batchRemove(idList){
    return request({
      url:`${api_name}/batchRemove`,
      method:'delete',
      data:idList //json形式传递
    })
  }
}

