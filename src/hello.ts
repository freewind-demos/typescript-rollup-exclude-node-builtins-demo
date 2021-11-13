import fs from 'fs';

export function hello() {
  const content = fs.readFileSync(__dirname + '/../package.json', 'utf-8');
  console.log(content);
}
