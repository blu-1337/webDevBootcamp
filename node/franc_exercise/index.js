import {franc, francAll} from 'franc'
import langs from 'langs';
import colors from 'colors';

const phrase = process.argv.slice(2).toString()
const languageThreeLetter = franc(phrase).toString();
if (languageThreeLetter === 'und'){
  console.log('error, could not figure out language'.red);
}else{
  const result = langs.where('3', languageThreeLetter)['name'];
  console.log(result.green);
}



