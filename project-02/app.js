let data = [
    {
        name: 'Mariam',
        age: '23'
    },
    {
        name: 'Qeti',
        age: '22'
    },
    {
        name: 'Joe',
        age: '20'
    },
    {
        name: 'Tim',
        age: '30'
    },
    {
        name: 'Sam',
        age: '29'
    },
    {
        name: 'Joey',
        age: '34'
    },
];

const info = document.querySelector('#info')

let details = data.map( function(item) {
    return '<div>' + item.name + ' ' + ' is '  + item.age + ' years old' +  '</div>' ;
})

info.innerHTML =  details.join('\n');