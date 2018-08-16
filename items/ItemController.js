const itemService = require('./ItemService');

class ItemController {
  /**
   * @param {itemService} itemService
   */
  constructor(itemService) {
    this.itemService = itemService;
  }

  async getItems(req, res) {
    try {
      const items = await this.itemService.getAll();

      return res.send(items);
    } catch (error) {
      this.handleErrors(error, req, res);
    }
  }

  handleErrors(error, req, res) {
    console.error({ message: 'Item controller', error, request: req });
    res.sendStatus(500);
  }
}

module.exports = new ItemController(itemService);
