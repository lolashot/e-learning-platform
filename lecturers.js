const lecturers = [
  {
    id: '1',
    name: 'Joe Praise',
    position: 'chief technical director',
    description: 'a world class professor of computer science',
    image: './assets/images/lecturer1.jpg'
  },
  {
    id: '2',
    name: 'Smith John ',
    position: 'react tutor',
    description: 'with over 20yrs experience in coding, and worked at microsoft',
    image: './assets/images/lecturer2.jpg'
  },
  {
    id: '3',
    name: '',
    position: 'javascript tutor',
    image: './assets/images/lecturer1.jpg',
    description: 'with over 20yrs experience in coding, and worked at microsoft',
  },
  {
    id: '4',
    name: '',
    position: 'node js tutor',
    description: 'a world class professor of computer science',
    images: './assets/images/lecturer3.jpg'
  },
  {
    id: '5',
    name: '',
    position: 'angular tutor',
    description: 'with over 20yrs experience in coding, and worked at microsoft',
    image: './assets/images/lecturer2.jpg'

  },
  {
    id: '6',
    name: '',
    position: 'tutor',
    description: 'a world class professor of computer science',
    image: './assets/images/lecturer1.jpg'

  },
  {
    id: '7',
    name: '',
    position: 'tutor',
    description: 'a world class professor of computer science',
    image: './assets/images/lecturer3.jpg'

  },
  {
    id: '8',
    name: '',
    position: 'tutor',
    description: 'a world class professor of computer science',
    image: './assets/images/lecturer2.jpg'

  }                               
]


document.addEventListener('load', (event) => {
    const nodeList = document.querySelectorAll('.lecturers');
    nodeList.forEach((element) => {
        console.log('jjj', element.id);
      const found = lecturers.find((lecturer) => lecturer.id === element.id,
      console.log('jjj', lecturer.id));
      document.getElementById('name').innerHTML = found.name;
      document.getElementById('position').innerHTML = found.position;
      document.getElementById('description').innerHTML = found.description;
    
    });
  });
