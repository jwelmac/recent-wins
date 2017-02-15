import fs from 'fs';

// Set base folders
const DATA_JSON = '../data/json/';
const DATA_MD = 'data/md/';

class Category {
  constructor(name){
    this.name = name;
    this.json = require(`${DATA_JSON}${name}.json`);
    this.md = fs.readFileSync(`${DATA_MD}${name}.md`, 'utf8');
  }

  getDetails(){
    return this;
  }
}

export default Category;
