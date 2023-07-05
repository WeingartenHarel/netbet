import HttpService from './HttpService'

export default {
  loadUsers,
}

function loadUsers() {
  return HttpService.get(`list`)
}
