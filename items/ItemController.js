const mongoose = require('mongoose');

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

  async addItem(req, res) {
    try {
      const { name } = req.body;
      if (!name || typeof name !== 'string') {
        return res.sendStatus(400);
      }

      const item = await this.itemService.add(name);

      return res.send(item);
    } catch (error) {
      this.handleErrors(error, req, res);
    }
  }

  async updateItem(req, res) {
    try {
      const { name } = req.body;
      const { id } = req.params;
      if (!name || !id || typeof name !== 'string') {
        return res.sendStatus(400);
      }

      const item = await this.itemService.updateName(id, name);

      return res.send(item);
    } catch (error) {
      this.handleErrors(error, req, res);
    }
  }

  async voteUp(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.sendStatus(400);
      }

      const item = await this.itemService.incrementRating(id);

      return res.send(items);
    } catch (error) {
      this.handleErrors(error, req, res);
    }
  }

  async voteDown(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.sendStatus(400);
      }

      const item = await this.itemService.decrementRating(id);

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
