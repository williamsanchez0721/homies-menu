// Recipe.tsx
export interface RecipeData {
    name: string;
    image: string,
    category: string,
    recipe: string; 
    price: number;
}

export interface Category {
    [key: string]: RecipeData | RecipeData[];
}

export const burgers: Category = {
    Hamburguesas: [
        {
            name: 'Basic Burger',
            image: './BASIC_BURGER.jpg',
            category: 'Hamburguesas',
            recipe: '125gr de punta de anca , cheddar, tocineta, cogollos, tomate, cebolla caramelizada en pan brioche',
            price: 17200,
        },
        {
            name: 'Epic Burger',
            image: './Epic_Burger.png',
            category: 'Hamburguesas',
            recipe: '150gr de punta de anca , cheddar, tocineta, cogollos, tomate, cebolla caramelizada, en pan brioche',
            price: 20500,
        },
        {
            name: 'Veggie Burger',
            image: './Veggie_burger.png',
            category: 'Hamburguesas',
            recipe: '150gr de carne de lentejas, harina de garbanzos en apanado de quinoa, cogollos, tomate, ricotta en pan brioche',
            price: 18400,
        },
        {
            name: 'Colby Jack Burger',
            image: './Colby_Jack.png',
            category: 'Hamburguesas',
            recipe: '150gr de punta de anca , 2x Colby jack cheese, tocineta, sriracha en pan brioche',
            price: 22600,
        },
        {
            name: 'Double Epic Burger',
            image: './Double_Epic_Burger.jpg',
            category: 'Hamburguesas',
            recipe: ' 250gr de punta de anca , 2x cheddar, 2x tocineta, cogollos, tomate, cebolla caramelizada en pan brioche',
            price: 24900,
        },
        {
            name: 'Special Fried Cheese',
            image: './Special_Fried_Cheese.jpg',
            category: 'Hamburguesas',
            recipe: '150gr de punta de anca , fried cheddar cheese, cogollos, tomate, bacon sauce en pan brioche',
            price: 27000,
        },
        {
            name: 'Double Colby Jack',
            image: './Double_Colby_Jack.jpg',
            category: 'Hamburguesas',
            recipe: '250gr de punta de anca , 4x Colby jack cheese, tocineta, sriracha en pan brioche',
            price: 31400,
        },
        {
            name: 'Mega Burger',
            image: './Mega_Burger.png',
            category: 'Hamburguesas',
            recipe: ' 150gr de punta de anca , 150gr de fried chicken, queso cheddar, tocineta, cogollos, tomate, cebolla caramelizada, salsa especial y pan brioche',
            price: 31400,
        },
        {
            name: 'Chicken Pop',
            image: './Chicken_Pop.jpg',
            category: 'Hamburguesas',
            recipe: '150gr de fried chicken , mozzarella, coleslaw en su salsa especial y pan brioche',
            price: 21500,
        },
    ],
}

export const acompañamientos: Category = {
    acompañamientos: [
        {
            name: 'Papas fritas',
            image: './malteada.jpg',
            category: 'Acompañamientos',
            recipe: 'Con salsa de ajo y sriracha',
            price: 5000,
        },
        {
            name: 'Aros De Cebolla',
            image: './malteada.jpg',
            category: 'Acompañamientos',
            recipe: 'Con salsa de ajo y sriracha',
            price: 5000,
        },
    ]
}


export const niños: Category = {
    'Homies Kids': [
        {
            name: 'Homies kids con sorpresa',
            image: './Homies_Kids.jpg',
            category: 'Homies Kids',
            recipe: '',
            price: 23800,
        },
        {
            name: 'Homies kids sin sorpresa',
            image: './Homies_Kids.jpg',
            category: 'Homies Kids',
            recipe: '',
            price: 18400,
        },
    ],
    'Nuggets Pop': [
        {
            name: 'Lemon Pepper',
            image: './Nuggets_Pop.jpg',
            category: 'Nuggets',
            recipe: '200 gr de trozos de pechuga de pollo apanada, con dos sabores de especiales a elegir',
            price: 16200,
        },
        {
            name: 'Paprika',
            image: './paprika.jpg',
            category: 'Nuggets',
            recipe: '200 gr de trozos de pechuga de pollo apanada, con dos sabores de especiales a elegir',
            price: 16200,
        },
    ]
}

export const bebidas: Category = {
    'Malteadas': [
        {
            name: 'Fresa 14 Onz.',
            image: './Malteada_Fresa.jpg',
            category: 'Bebidas',
            recipe: '',
            price: 14000,
        },
        {
            name: 'Oreo 14 Onz.',
            image: './Malteada_Oreo.jpg',
            category: 'Bebidas',
            recipe: '',
            price: 14000,
        },
        {
            name: 'Temporada',
            image: './malteada.jpg',
            category: 'Bebidas',
            recipe: '',
            price: 14000,
        },
    ],
    'Cervezas': [
        {
            name: 'Corona',
            image: './corona.jpg',
            category: 'Bebidas',
            recipe: '',
            price: 8700
        },
        {
            name: 'Club colombia dorada',
            image: './malteada.jpg',
            category: 'Bebidas',
            recipe: '',
            price: 5500
        },
    ],
    'Bebidas': [
        {
            name: 'Cocacola',
            image: './malteada.jpg',
            category: 'Bebidas',
            recipe: '',
            price: 5400
        },
        {
            name: 'Cocacola zero',
            image: './malteada.jpg',
            category: 'Bebidas',
            recipe: '',
            price: 5400
        },
        {
            name: 'Ginger',
            image: './malteada.jpg',
            category: 'Bebidas',
            recipe: '',
            price: 5400
        },
        {
            name: 'Té de limón',
            image: './malteada.jpg',
            category: 'Bebidas',
            recipe: '',
            price: 5400
        },
        {
            name: 'Agua con gas',
            image: './malteada.jpg',
            category: 'Bebidas',
            recipe: '',
            price: 5400
        },
        {
            name: 'Agua sin gas',
            image: './malteada.jpg',
            category: 'Bebidas',
            recipe: '',
            price: 5400
        },
        {
            name: 'Soda',
            image: './malteada.jpg',
            category: 'Bebidas',
            recipe: '',
            price: 5400
        },
    ],
    'Bebidas sodificadas': [
        {
            name: 'Sodificada Frutos rojos',
            image: './Sodificada_Frutos_Rojos.jpg',
            category: 'Bebidas',
            recipe: '',
            price: 10900
        },
        {
            name: 'Sodificada Maracuyá',
            image: './Sodificada_Maracuya.jpg',
            category: 'Bebidas',
            recipe: '',
            price: 10900
        },
    ],
};

export const malteadas: Category = {
    'Malteadas': [
        {
            name: 'Fresa 14 Onz.',
            image: './malteada.jpg',
            category: '',
            recipe: '',
            price: 14000,
        },
        {
            name: 'Oreo 14 Onz.',
            image: './malteada.jpg',
            category: '',
            recipe: '',
            price: 14000,
        },
        {
            name: 'Temporada',
            image: './malteada.jpg',
            category: '',
            recipe: '',
            price: 14000,
        },
    ],
}

export const adicionales: Category = {
    'Adicionales': [
        {
            name: 'SALSA DE AJO',
            image: './Aros_de_cebolla.jpg',
            category: '',
            recipe: '',
            price: 600,
        },
        {
            name: 'SALSA DE SRIRACHA',
            image: './salsas.jpg',
            category: '',
            recipe: '',
            price: 600,
        },
        {
            name: 'CARNE 125 GR',
            image: './carne.jpg',
            category: '',
            recipe: '',
            price: 4400,
        },
        {
            name: 'CARNE 150 GR',
            image: './carne.jpg',
            category: '',
            recipe: '',
            price: 6500,
        },
        {
            name: 'TOCINETA',
            image: './chuletas.jpg',
            category: '',
            recipe: '',
            price: 2200,
        },
        {
            name: 'QUESO',
            image: './queso.jpg',
            category: '',
            recipe: '',
            price: 2800,
        },
        {
            name: 'QUESO APANADO',
            image: './queso_apanado.jpg',
            category: '',
            recipe: '',
            price: 3800,
        },
        {
            name: 'VEGETALES',
            image: './vegetales.jpg',
            category: '',
            recipe: '',
            price: 2200
        },
        {
            name: 'POLLO',
            image: './pollo.jpg',
            category: '',
            recipe: '',
            price: 5500
        },
    ]
}