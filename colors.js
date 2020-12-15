const colors = ["yellow", "blue", "red", "orange"];
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}


for (i = 0; i < colors.length; i++) {
    console.log(colors[i])
}

colors.forEach(Element => console.log(Element));

//1. 3 en 5
//2. 1
//3. hoeft geen variabele te bepalen(i)
//   eenvoudiger te lezen
//4. ja

const object = {
    name1: 'Jan',
    name2: 'Klaas',
    name3: 'Piet',
    name4: 'Koos',
    name5: 'Gerrit',
};

for (i in object) {
    console.log(object[i])
}