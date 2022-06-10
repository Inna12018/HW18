// Задание
// Реализовать функцию полного клонирования объекта. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

// Технические требования:

// Написать функцию для рекурсивного полного клонирования объекта (без единой передачи по ссылке, внутренняя вложенность свойств объекта может быть достаточно большой).
// Функция должна успешно копировать свойства в виде объектов и массивов на любом уровне вложенности.
// В коде нельзя использовать встроенные механизмы клонирования, такие как функция Object.assign() или спред-оператор.


const student = {
    name: "Inna",
    lastName: "Drabchuk",
    age: 35,
    hobie: "music",
    sayHi: function(){
        alert("Hello, this.name");
    },
    tabel: {
        physics: "10",
        history: "8",
        math: "9",
        english: {
            listening: "10",
            reading: "9",
            writing: "10",
        }
    },
    electives: ["accounting", "marketing", "business"],
};

function cloneObject(value) {
    const newObject = {};
    if(typeof value !=="object" ||value ===null) {
        return value;
    }
    if(Array.isArray(value)){
        return value.map(item => cloneObject(item));
    }
    for( let key in value) {
        newObject[key] = cloneObject(value[key]);
    }
    return newObject;
}

 console.log(student);
 const newStudent = cloneObject(student);
 console.log(newStudent);