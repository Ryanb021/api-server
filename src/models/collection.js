'use strict';

class collection {
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    try {
      const record = await this.model.create(json);
      return record;
    } catch (err) {
      console.log('Create Error');
      return err;
    }
  }

  async read(id = null) {
    try {
      if (!id) {
        const records = await this.model.findAll();
        return records;
      } else {
        const record = await this.model.findByPk(id);
        return record;
      }
    } catch (err) {
      console.log('Read Error');
      return err;
    }
  }

  async update(json, id) {
    try {
      const record = await this.model.update(json, { where: { id: id} });
      return record;
    } catch (err) {
      console.log('Update Error');
      return err;
    }
  }

  async delete(id) {
    try {
      await this.model.destroy({ where: { id: id } });
    } catch (err) {
      console.log ('Delete Error');
    }
  }
}

module.exports =  collection;
