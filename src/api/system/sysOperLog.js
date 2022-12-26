import request from '@/utils/request'
//常量
const api_name='/admin/system/sysOperLog'
export default {
  getPageList(page,limit,searchObj){
    return request({
      url:`${api_name}/${page}/${limit}`,
      method:'get',
      params:searchObj
    })
  }
}
