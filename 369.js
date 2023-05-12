

// function 삼육구(n){
//     if(n%9==0){
//         console.log('박수*2');
//     }else if(n%3==0){
//         console.log('박수');
//     }else{
//         console.log('통과');
//     }
//     }
//     삼육구(1);
    

function 합격인가(n,m) {
    if(n+m<120){
        console.log('불합격입니다');
    }else if(n&&m<=40){
        console.log('불합격입니다.');
    }
    else{
        console.log('통과입니다.');
    }
}
let count=0;
document.querySelector('#send-answer').addEventListener('click',function(){
    count+=1;
    let 유저답안=document.querySelector('#answer').Value;
    if(유저답안=='1335'){
        alert('성공');
    }else if(count>=3&& 유저답안 !='1335'){
        alert('멍청아');
    }
})