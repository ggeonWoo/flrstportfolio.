

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
