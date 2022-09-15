const lecturers = [
  {
    id: '0',
    name: 'Joe Praise',
    position: 'chief technical director',
    description: 'a world class professor of computer science',
    image: 'assets/images/lecturer1.jpg',
  },
  {
    id: '1',
    name: 'Smith John ',
    position: 'react tutor',
    description: 'with over 20yrs experience in coding, and worked at microsoft',
    image: './assets/images/lecturer2.jpg',
  },
  {
    id: '2',
    name: 'Grace Craig',
    position: 'javascript tutor',
    image: './assets/images/lecturer1.jpg',
    description: 'with over 20yrs experience in coding, and worked at microsoft',
  },
  {
    id: '3',
    name: 'Aron Sher',
    position: 'node js tutor',
    description: 'a world class professor of computer science',
    image: './assets/images/lecturer3.jpg',
  },
  {
    id: '4',
    name: 'Martha Ray',
    position: 'angular tutor',
    description: 'with over 20yrs experience in coding, and worked at microsoft',
    image: './assets/images/lecturer2.jpg',

  },
  {
    id: '5',
    name: 'Fred Ann',
    position: 'tutor',
    description: 'a world class professor of computer science',
    image: 'assets/images/lecturer1.jpg',

  },
  {
    id: '6',
    name: 'Glory Yuu',
    position: 'tutor',
    description: 'a world class professor of computer science',
    image: 'assets/images/lecturer3.jpg',

  },
  {
    id: '7',
    name: 'May Cloe',
    position: 'tutor',
    description: 'a world class professor of computer science',
    image: 'assets/images/lecturer2.jpg',
  },
  {
    id: '8',
    name: 'Love Cloe',
    position: 'tutor',
    description: 'a world class professor of computer science',
    image: 'assets/images/lecturer2.jpg',
  },
];

window.addEventListener('load', () => {
  const nodeList = document.querySelectorAll('.lecturers');
  let found = {};
  nodeList.forEach((element) => {
  found = lecturers.find((lecturer) => lecturer.id == element.id);
  if (found) {
    element.children[0].attributes[0].value   = found.image;
    element.children[1].children[0].innerHTML = found.name;
    element.children[1].children[1].innerHTML = found.position;
    element.children[1].children[2].innerHTML = found.description;
  }
  });
});
