//? CEVAP KONTROL 


const correctAnswers=['E','E','E','E'];
const form=document.querySelector('.question-form'); //! formun yanına eklemiştik özelliği yok sadece isim gibi 

const result=document.querySelector('.result');


form.addEventListener('submit' , e=>{
    e.preventDefault(); // sayfa yenilenmemesi için bunu ekleriz ki cevaplar kaydedilebilsin

    let score=0;
    const userAnsers=[form.q1.value, form.q2.value, form.q3.value, form.q4.value];   // formun namesine q1-q2 dedik o yüzden bunu kullanırız

    userAnsers.forEach((answer,index) =>{
        if(answer === correctAnswers[index])
        {
            score +=25; // cevap doğru ise 25 puan ekler
        }
    })

    // console.log(score);
    result.classList.remove('d-none');
    let puan=0;
    const bastir = setInterval(()=>{
        result.querySelector('span').textContent = `${puan}%`;  //! tekrar .span yazmayız çünkü zaten üstte .result ile içine girdik resultun içinde işlem yaptığımız için direkt span yazarız
        if(puan == score)
        {
            clearInterval(bastir);
        }
        else{
            puan++;
        }
    }, 10);

    
})

// setTimeout(()=>{
//     console.log('Sena');
// },2000);  //! 2000 = 2 sn

// setInterval(()=>{
//     console.log('Sena');
// }, 1000);

// let i=0;
// const bastir=setInterval(()=>{
//     console.log('sena');
//     i++;
//     if(i == 4)
//     {
//         clearInterval(bastir);
//     }
// },1000);