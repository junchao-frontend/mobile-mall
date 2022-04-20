import request from '../http/index'
export const getDetail = (id: number) => {
    return request({
        url: `/goods/detail/${id}`,
        method: 'GET',
    })
}
// export function getDetail(id) {
//     return axios.get(`/goods/detail/${id}`);
//   }
  
//   export function getCategory() {
//     return axios.get('/categories');
//   }
  
//   export function search(params) {
//     return axios.get('/search', { params });
//   }