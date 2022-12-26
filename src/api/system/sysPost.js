import request from '@/utils/request'
//常量
const api_name='/admin/system/sysPost'
export default {
  //获取岗位分页列表
  getPageList(page,limit,searchObj){
    return request({
      url:`${api_name}/${page}/${limit}`,
      method:'get',
      params:searchObj
    })
  },
  removeById(id){
    return request({
      url:`${api_name}/remove/${id}`,
      method:'delete'
    })
  },
  //新增岗位
  save(post){
    return request({
      url:`${api_name}/save`,
      method:'post',
      data:post
    })
  },
  //根据id查询
  getById(id){
    return request({
      url:`${api_name}/get/${id}`,
      method:'get'
    })
  },
  //更新
  updateById(post){
    return request({
      url:`${api_name}/update`,
      method:'put',
      data:post
    })
  },
  //批量删除
  batchRemove(idList){
    return request({
      url:`${api_name}/batchRemove`,
      method:'delete',
      data:idList
    })
  },
  //更新用户状态
  updateStatus(id,status){
    return request({
      url:`${api_name}/updateStatus/${id}/${status}`,
      method:'get'
    })
  },
  //获取所有数据下拉选项
  getList(){
    return request({
      url:`${api_name}/findAll`,
      method:'get'
    })
  }
}
