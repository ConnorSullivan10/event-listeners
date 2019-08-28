console.log('Unique New York');

const pies = [
    {
        name:'Chocolate Pie',
        imageUrl: 'https://www.kingarthurflour.com/sites/default/files/recipe_legacy/4053-3-large.jpg',
        instructor: 'michael',
        iceCream: 'Peanut Butter',
    },
    {
        name:'Cherry Pie',
        imageUrl: 'https://www.thespruceeats.com/thmb/Mg6LdDudts8nCT4rTO8JtBuv48A=/2592x2592/smart/filters:no_upscale()/slice-of-cherry-pie-with-cherry-on-side-on-plate-169960522-67fcb3cdc8024ea48f2f5a8cd3d2fd8c.jpg',
        instructor: 'Greg',
        iceCream: 'Vanilla',
    },
    {
        name:'Banana Cream Pie',
        imageUrl: 'https://i2.wp.com/www.tastesoflizzyt.com/wp-content/uploads/2018/09/banana-cream-pie-recipe-4.jpg?fit=640%2C640&ssl=1',
        instructor: 'Zoeee',
        iceCream: 'Chocolate',
    },
    {
        name:'Shoofly Pie',
        imageUrl: 'https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/DesktopImages/13406.jpg?ext=.jpg',
        instructor: 'michael',
        iceCream: 'Coffee',
    },
    {
        name:'Pecan Pie',
        imageUrl: 'https://images-gmi-pmc.edge-generalmills.com/43d60fb7-4b62-4136-abe3-178663aac1a3.jpg',
        instructor: 'callan',
        iceCream: 'Vanilla',
    },
    {
    name:'Keylime Pie',
    imageUrl: 'https://www.cookingclassy.com/wp-content/uploads/2019/03/key-lime-pie-01.jpg',
    instructor: 'callan',
    iceCream: 'none',
    },
];

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
}

const pieBuilder = (piesArray) => {
    for (let i = 0; i < piesArray.length; i++) {
        const pie = piesArray[i]
        const domString= `
        <div class="card">
            <h2>${pie.name}</h2>
            <img src=${pie.imageUrl} alt='Image of ${pie.name}' />
        </div>
        `
        printToDom(domString, 'pie-zone')
    }
}

document.getElementById('my-button').addEventListener('click', () => {
    console.log('🖱️')
})

pieBuilder(pies)