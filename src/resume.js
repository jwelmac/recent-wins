import fs from 'fs';
import {categories, titles} from '../data/categories';

// Set base folders
const DATA_INFO = 'data/info/';

class Resume {
  static category(name){
    const category = {};
    category.name = name;
    category.title = titles[name];
    category.info = fs.readFileSync(`${DATA_INFO}${name}.md`, 'utf8');
    return category;
  }

  static allCategories(){
    const result = {};
    for (let category of categories) {
      result[category] = Resume.category(category);
    }
    return result;
  }
}

export default Resume;
