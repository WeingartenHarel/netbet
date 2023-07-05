const listService = require('./list.service')
const logger = require('../../services/logger.service')


  
async function getLists(req, res) {
    const lists = await listService.query(req.query)
    logger.debug(lists);
    res.send(lists)
}

module.exports = {
    getLists,
}