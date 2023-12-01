// class Person {
//   constructor(userName, age, isMarried) {
//     this.userName=userName;
//     this.age = age;
//     this.isMarried = isMarried;
//   }

//   sayHi  (name) {
//           console.log(`Privet ${name}! menya zovut ${this.userName}.`);
//  }
// }

// const person1 = new Person('Mark', 30, false);
// const person2 = new Person('Pavel', 31, true);
// console.log(person1);
// console.log(person2);
// person1.sayHi('Sanjar');
// person2.sayHi('Almaz');




// class Fruits{
//     constructor(option){
//         this.title=option.title
//         this.size=option.size
//     }
// }
// class WildFruits extends Fruits {
//     constructor(option){
//         super(option)
//         this.isDanger=option.isDanger
//         this.leaves=option.leaves
//     }
// }

// class HomeFruits extends Fruits{
//     constructor(option){
//         super(option)
//     }
// }

// const malina=new WildFruits({
//     isDanger: false, 
//     leaves:'small', 
//     size:'little', 
//     title:'ik malina'
// })
// console.log(malina);

const input= document.querySelector('input')
const h1=document.querySelector('h1')
const img = document.querySelector('img')
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')



input.onchange=()=>{
    
    //kyrgyzstan
    let code1 = /\+996/ig
    let country1 = 'Kyrgyzstan'
    let capital1='Bishkek'
    //end
    //Turkey
    let code2 = /\+90/ig
    let country2 = 'Turkey'
    let capital2='Ankara'
    //end
    //Kazakhstan
    let code3 = /\+7/ig
    let country3 = 'Kazakhstan'
    let capital3='Astana'
    //end
    let code4 = /\+998/ig
    let country4= 'Uzbekistan'
    let capital4='Tashkent'
    //end
    let code5 = /\+993/ig
    let country5 = 'Turkmenistan'
    let capital5='Ashgabat'

    let del = '';

    

        if (code1.test(input.value)) {
            h1.innerHTML=input.value.replace(code1, 'Kyrgyzstan')
            img.src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1600px-Flag_of_Kyrgyzstan.svg.png'
            img.style.width='300px'
            img.style.height='200px'
            h2.innerText=country1
            h3.innerText=capital1
            //Kyrgyzstan
        } 
          if (code2.test(input.value)) {
            h1.innerHTML=input.value.replace(code2, 'Turkey')
            img.src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1920px-Flag_of_Turkey.svg.png'
            img.style.width='300px'
            img.style.height='200px'
            h2.innerText=country2
            h3.innerText=capital2
            //Turkey
        } 
        if (code3.test(input.value)) {
            h1.innerHTML=input.value.replace(code3, 'Kazakhstan')
            img.src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Kazakhstan_%28President_of_Kazakhstan_website%29.svg/1920px-Flag_of_Kazakhstan_%28President_of_Kazakhstan_website%29.svg.png'
            img.style.width='300px'
            img.style.height='200px'
            h2.innerText=country3
            h3.innerText=capital3
            //Kazakhstan
        }
        if (code4.test(input.value)) {
            h1.innerHTML=input.value.replace(code4, 'Uzbekistan')
            img.src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1600px-Flag_of_Uzbekistan.svg.png'
            img.style.width='300px'
            img.style.height='200px'
            h2.innerText=country4
            h3.innerText=capital4
            //Uzbekistan
        }
        if (code5.test(input.value)) {
            h1.innerHTML=input.value.replace(code5, 'Turmenistan')
            img.src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/1920px-Flag_of_Turkmenistan.svg.png'
            img.style.width='300px'
            img.style.height='200px'
            h2.innerText=country5
            h3.innerText=capital5
            //Turkmenistan
        }
        else {
            h1.innerHTML=input.value
        }     
    }