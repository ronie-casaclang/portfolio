//Skills and image path
const skills = [
    //1-5
    { name: 'Java', image: 'images/skills/java.png'},
    { name: 'C#', image: 'images/skills/cs.png'},
    { name: 'Python', image: 'images/skills/python.png'},
    { name: 'Android Studio', image: 'images/skills/as.png'},
    { name: 'HTML', image: 'images/skills/html.png'},
    //6-10
    { name: 'CSS', image: 'images/skills/css.png'},
    { name: 'Javascript', image: 'images/skills/js.png'},
    { name: 'MySQL', image: 'images/skills/mysql.png'},
    { name: 'SQLite', image: 'images/skills/sqlite.jpg'},
    { name: 'WPF/Windows Forms', image: 'images/skills/wpf.png'},
    //11-15
    { name: 'C++', image: 'images/skills/cpp.png'},
    { name: 'PHP', image: 'images/skills/php.png'},
    { name: 'Firebase', image: 'images/skills/firebase.png'},
    { name: 'Figma', image: 'images/skills/figma.png'},
    { name: 'Photoshop', image: 'images/skills/photoshop.png'}
];

//Create New Skill UI
function displaySkill(){

    let container = document.querySelector('#skills-container');
    for (let i=0; i<skills.length; i++){

        let img = document.createElement('img');
        img.src = skills[i].image;
        img.title = skills[i].name;
        console.log(skills[i].name);

        let box = document.createElement('nav');
        box.appendChild(img);
        container.appendChild(box);
    }
}
displaySkill();