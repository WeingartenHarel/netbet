import HttpService from './HttpService'

export default {
  loadList,
}

function loadList(page) {
  return HttpService.get(`list?page=${page}`)
}
