const skillsList = [
    {skill:'HTML', score:10},
    {skill:'CSS', score: 10},
    {skill:'Sass', score: 10},
    {skill:'Bootstrap', score: 10},
    {skill:'JavaScript', score: 8},
    {skill:'jQuery', score: 8},
    {skill:'React', score: 7},
    {skill:'Git/GitHub', score: 8},
    {skill:'Figma', score: 10},
    {skill:'Photoshop', score: 10},
    {skill:'Illustrator', score: 9},
    {skill:'InDesign', score: 7},
    {skill:'Web Design Responsivo', score: 9},
    {skill:'UX/UI', score: 8},
    {skill:'Metodologias Ágeis', score: 8},
]

const skillsListDOM = document.getElementById('skills-list')
let skillsListHTML = ''

function createSkill(skill, score) {
let skillHTML = 
`<div class="skill">
    <span class="skill-name">${skill}</span>
    <div class="points"\n>`
for (let i=1; i<=score;i++){
    skillHTML+=`<div class="point has-point"></div>\n`
}
for (let i=1; i<=10-score;i++){
    skillHTML+=`<div class="point"></div>\n`
}
skillHTML+=
    `</div>
</div>`
return skillHTML
}
skillsList.forEach((item)=>{
skillsListHTML+=createSkill(item.skill,item.score)
})

skillsListDOM.innerHTML = `<h2>No que me destaco</h2>\n ${skillsListHTML}`
