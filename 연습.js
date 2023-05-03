// function add(){
// document.getElementById('title').innerHTML='아이디입력';
// document.getElementById('alert').style.display='block';
// }
// function dda(){
//     document.getElementById('title').innerHTML='비번입력';
//     document.getElementById('alert').style.display='block';
//     }

    document.getElementById('open').addEventListener('click',function(){
        document.getElementById('alert').style.display='block';
    })

    document.getElementById('close').addEventListener('click',function(){
        document.getElementById('alert').style.display='none';
    })