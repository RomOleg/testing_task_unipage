// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

const filterPrice = (courses, requiredRange) => {

    const [first, last] = requiredRange;

    courses = courses.filter(cours => {
        const one = cours.prices[0] === null
            ? true
            : cours.prices[0] >= first && (last ? cours.prices[0] <= last : true)

        const two = cours.prices.at(-1) === null 
            ? true
            : cours.prices.at(-1) <= last

        if (one && two) return cours;
    }); 

    return courses;
}

const sorterPrice = (courses) => {
    courses = courses
        .sort( (a, b) => Math.max(...a.prices) - Math.max(...b.prices) )

    return courses;
}

console.log( filterPrice(courses, requiredRange1) );
console.log( filterPrice(courses, requiredRange2) );
console.log( filterPrice(courses, requiredRange3) );

console.log( sorterPrice(courses) );