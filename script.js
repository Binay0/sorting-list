const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById('check');


const richestPeople = [
    "Jeff Bezos",
    "Bill Gates",
    "Warren Buffet",
    "Bernard Arnault",
    "Carlos Slim Helu",
    "Amancio Ortega",
    "Larry Ellison",
    "Mark Zuckerberg",
    "Larry Page"
];


//store list items 
const listItems = [];



let dragStartIndex;

createList();


//Insert List items into DOM
function createList(){
    [...richestPeople]
    .map(a=>({value: a, sort: Math.random()}))
    .sort((a,b)=> a.sort - b.sort)
    .map(a=>a.value)
    .forEach((person, index) =>{
        const listItem = document.createElement("li");

        

        listItem.setAttribute('data-index', index);


        listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable = "true">
                <p class="person-name">${person}</p>
                <i class="fas fa-grip-lines"></i>
            </div>

        `;

        listItems.push(listItem);
        draggable_list.appendChild(listItem);

    })

    addEventListeners();

    function dragStart(){
        dragStartIndex = this.closest('li').getAttribute('data-index');
        
    }
    function dragEnter(){
        this.classList.add('over')

    }
    function dragLeave(){
        this.classList.remove('')

    }
    function dragOver(){

    }
    function dragDrop(){
        const dragEndIndex = this.getAttribute('data-index');
        swapItems(dragStartIndex, dragEndIndex);

        this.classList.remove('over');
    }

    function swapItems(fromIndex, toIndex){
        const itemOne = listItems[fromIndex].querySelectorAll('.draggable');
        const itemTwo = listItems[toIndex].querySelectorAll('.draggable');

        listItems[fromIndex].appendChild(itemTwo);
        listItems[toIndex].appendChild(itemOne);
        
        

    }

    function addEventListeners(){
        const draggables = document.querySelectorAll('.draggable');
        const dragListItems = document.querySelectorAll('.draggable-list li');

        draggables.forEach(draggable =>{
            draggable.addEventListener('dragstart', dragStart);
        })
        dragListItems.forEach(item =>{
            item.addEventListener('dragover', dragOver);
            item.addEventListener('drop', dragDrop);
            item.addEventListener('dragenter', dragEnter);
            item.addEventListener('dragleave', dragLeave);
        })

    }

}
