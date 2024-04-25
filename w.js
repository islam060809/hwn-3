
const usors=[
    {name:'Kalysbek', level:'senior', age:18, salary:100000, img:""},
    {name:'Alym', level:'middle', age:17, salary:500000},
    {name:'Nurali', level:'middle', age:17, salary:5000000},
    {name:'Bakhtiyar', level:'middle', age:16, salary:2000000},
    {name:'Esentur', level:'middle', age:16, salary:2000000},
    {name:'Emir', level:'middle', age:18, salary:10000000},
    {name:'Islam', level:'junior', age:14, salary:1000000000000},
]
const btns = document.querySelectorAll("button")
const list = document.getElementById("box")

function procts(){
list.innerHTML = ''
    for (const el of usors) {
        list.innerHTML += `<div class="case">
<h5 class="name">name: ${el.name}</h5>
<h5 class="level">level: ${el.level}</h5>
<h5 class="age">age: ${el.age}</h5>
<h5 class="salary">salary: ${el.salary}</h5>
<img src="${el.img}" class="img">
</div>`
}
}
procts()


function show(arr){
    list.innerHTML = ''
        for (const el of arr) {
            list.innerHTML += `<div class="case">
    <h5 class="name">name: ${el.name}</h5>
    <h5 class="level">level: ${el.level}</h5>
    <h5 class="age">age: ${el.age}</h5>
    <h5 class="salary">salary: ${el.salary}</h5>
    <img src="${el.img}" class="img">
    </div>`
    }
    }

btns[0].onclick = () => {
    const all = usors
    show(all)
}
btns[1].onclick = () => {
    const middle = usors.filter(el => el.level=="middle")
    show(middle)
}
btns[2].onclick = () => {
    const junior = usors.filter(el => el.level=="junior")
    show(junior)
}
btns[3].onclick = () => {
    const senior = usors.filter(el => el.level=="senior")
    show(senior)
}