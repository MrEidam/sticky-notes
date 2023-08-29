let createdaBox = document.getElementsByClassName('createdaBox')[0];
let notes = document.getElementsByClassName('notes')[0];
let input = document.getElementById('userInput');
i = 0;

createdaBox.addEventListener('keydown', content);

document.getElementById('create').addEventListener('click', function(){
    createdaBox.style.display = 'block';
});

function content(e){
    if(e.keyCode == '13'){
        divStyle(input.value);
        input.value = '';
        createdaBox.style.display = 'none';
    };
};

function color(){
    let RColor = ['#c2ff3d','#ff3de8','#3dc2ff','#04e022','#bc83e6','#ebb328'];
    if(i > RColor.length - 1){
        i = 0;
    }
    return RColor[i++]
}

function divStyle(text){
    let div = document.createElement('div');
    div.className = 'note';
    div.innerHTML = "<div class='details'>" + "<h3>" + text + "</h3>" + "</div>"

    // Delete
    div.addEventListener('dblclick', function(){
        div.remove();
    })

    // Colur
    div.setAttribute('style', 'background:' + color() + '');


    notes.appendChild(div);
};