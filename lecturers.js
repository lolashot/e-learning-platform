const lecturers = [
  {
    id: '0',
    name: 'Joe Praise',
    position: 'chief technical director',
    description: 'Professor of computer science',
    image: 'assets/images/lecturer1.jpg',
  },
  {
    id: '1',
    name: 'Smith John ',
    position: 'Former ICT director at Microsoft',
    description: 'Microsoft senior analyst',
    image: './assets/images/lecturer2.jpg',
  },
  {
    id: '2',
    name: 'Grace Craig',
    position: 'Former Mentor director at Microverse',
    image: './assets/images/lecturer1.jpg',
    description: 'with over 20yrs experience in coding, and worked at microsoft',
  },
  {
    id: '3',
    name: 'Aron Sher',
    position: 'node js code affiliator',
    description: 'a world class professor of computer science',
    image: './assets/images/lecturer3.jpg',
  },
  {
    id: '4',
    name: 'Martha Ray',
    position: 'angular tutor, partner and contributor',
    description: 'with over 20yrs experience in coding, and worked at microsoft',
    image: './assets/images/lecturer2.jpg',

  },
  {
    id: '5',
    name: 'Fred Ann',
    position: 'Former Venture Capitalist director at LinkedIn',
    description: 'a world class professor of computer science',
    image: 'assets/images/lecturer1.jpg',

  },
  {
    id: '6',
    name: 'Glory Yuu',
    position: 'Former Senior Html Tutor at MSI',
    description: 'a world class professor of computer science',
    image: 'assets/images/lecturer3.jpg',

  },
  {
    id: '7',
    name: 'May Cloe',
    position: 'Facebook Senior Research Fellow',
    description: 'a world class professor of reseach and development',
    image: 'assets/images/lecturer2.jpg',
  },
];

window.addEventListener('load', () => {
  const nodeList = document.querySelectorAll('.lecturers');

  let found = {};
  nodeList.forEach((name) => {
    found = lecturers.find((lecturer) => lecturer.id === name.id);
    if (found) {
      name.children[0].attributes[0].value = found.image;
      name.children[1].children[0].innerHTML = found.name;
      name.children[1].children[1].innerHTML = found.position;
      name.children[1].children[3].innerHTML = found.description;
    }
  });
});