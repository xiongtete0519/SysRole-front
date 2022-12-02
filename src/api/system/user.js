import request from '@/utils/request'

const api_name = '/admin/system/sysUser'
export default {
  //列表
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj // url查询字符串或表单键值对
    })
  },
  //添加
  save(user){
    return request({
      url:`${api_name}/save`,
      method:'post',
      data:user
    })
  },
  //根据id查询
  getUserId(id) {
    return request({
      url: `${api_name}/getUser/${id}`,
      method: 'get'
    })
  },
  //修改
  update(user) {
    return request({
      url: `${api_name}/update`,
      method: 'post',
      data: user
    })
  },
  //删除
  removeById(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: 'delete'
    })
  }
}
