const heading = document.createElement('h2');
const list = document.createElement('ul');
const listItem = document.createElement('li');

findFriday13 = (year) => {
  let counter = 0;

  for(let i = 1; i <= 12; i++) {
    let date = new Date(year + ', ' + i + ', ' + 13);

    console.log(date);

    if(date.getDay() === 5) {
      counter++;
      heading.textContent = `Das Jahr ${year} hat ${counter} Unglückstage.`;
      document.body.appendChild(heading);
      document.body.appendChild(list);
      listItem.textContent = date;
      list.appendChild(listItem);
    }
  }
}

findFriday13(2020);
findFriday13(2016);
findFriday13(2015);
