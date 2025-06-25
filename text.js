const items = ['setemi', 'timbo', 'ayobamidele']
const list = items.map(set => `<li>${set} </li>`)
console.log(list);
const ulList = `<ul>${list.join('')}</ul>`;
console.log(ulList);
