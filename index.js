task1();
function task1() {
    const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know'];
const uniqueArr = [...new Set(arr)];
// const uniqueArr = Array.from (arr);
console.log(uniqueArr);
}

task2();
function task2(){
    const word = 'Довод';
        const cleanedWord = word.toLowerCase().replace(/s+/g, '');
        const reversedWord = cleanedWord.split('').reverse().join('');
            if (cleanedWord === reversedWord) {
                console.log('Слово '+word+' является полиндромом')
            }
            else {
                console.log('Слово '+word+' неявляется полиндромом')
            }
}


task3(5);
function task3() {
    const amount = prompt('number');
    const array = [amount];
    for (let i = 0; i<=amount;i++) {
        array[i] =i;
    }
    console.log(array)
}



task4();
function task4() {
    let str = "";
        const n = 3;
        for (let i = 0; i < n; i++)
        {
            for(let j = 0; j < n; j++)
            {
                if (i == j || i == n - 1 - j)
                    str += " X ";
                else
                    str += " 0 ";
            }
            str += "\n";
        }
        console.log(str);
}



task5();
function task5() {
    const obj = { 
        some: 'some', 
        dom: 'text', 
        arr: [1, 2, 3, 4, 5], 
        tom: 'there' 
    }; 
    
    const arrValues = [];
    
    for (const key in obj) {
        if (Array.isArray(obj[key])) {
            arrValues.push(...obj[key]);
        } else {
            arrValues.push(obj[key]);
        }
    }
    
    console.log(arrValues);
}

function User(name, age){
     
    this.name = name;
    this.age = age;
    this.displayInfo = function(){
         
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
}
User.prototype.sayHi = function() {
    console.log(`Привет, меня зовут ${this.name}`);//Это что??
};
 
module.exports = User; 
 







