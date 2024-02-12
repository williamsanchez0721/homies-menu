// Recipe.tsx
export interface RecipeData {
    name: string;
    image: string,
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
            image: './basic.jpg',
            recipe: '125gr de punta de anca, cheddar, tocineta, cogollos, tomate, cebolla caramelizada, en pan brioche',
            price: 15900,
        },
        {
            name: 'Epic Burger',
            image: './epic.jpg',
            recipe: '150gr de punta de anca, cheddar, tocineta, cogollos, tomate, cebolla caramelizada, en pan brioche',
            price: 18900,
        },
        {
            name: 'Veggie Burger',
            image: './viggie.jpg',
            recipe: '150gr de carne de lentejas, harina de garbanzos en apanado de quinoa, cogollos, tomate, ricotta en pan brioche',
            price: 17000,
        },
        {
            name: 'Double Epic Burger',
            image: './double.jpg',
            recipe: '250gr de punta de anca, 2x cheddar, 2x tocineta, cogollos, tomate, cebolla caramelizada en pan brioche',
            price: 23000,
        },
        {
            name: 'Special Fried Cheese',
            image: './special.jpg',
            recipe: '150gr de punta de anca, fried cheddar cheese, cogollos, tomate, bacon sauce en pan brioche',
            price: 25000,
        },
        {
            name: 'Double Colby Jack B',
            image: './colbyjack.jpg',
            recipe: '250gr de punta de anca, 4x Colby Jack Cheese, tocineta, sriracha en pan brioche',
            price: 29000,
        },
        {
            name: 'Mega Burger',
            image: './mega.jpg',
            recipe: '150gr de punta de anca, 150gr de fried chicken, queso cheddar, tocineta, cogollos, tomate, cebolla caramelizada, salsa especial y pan brioche',
            price: 29000,
        },
        
    ],
    Pollo: [
        {
            name: 'Chicken Pop',
            image: './malteada.jpg',
            recipe: '150gr de fried chicken, Mozzarella, coleslaw en su salsa especial y pan brioche',
            price: 19900,
        },
    ]
}

export const nuggets: Category = {
    nuggetsPop: [
        {
            name: 'Lemon Pepper',
            image: './malteada.jpg',
            recipe: '200 gr de trozos de pechuga de pollo apanada, con dos sabores de especiales a elegir',
            price: 15000,
        },
        {
            name: 'Paprika',
            image: './malteada.jpg',
            recipe: '200 gr de trozos de pechuga de pollo apanada, con dos sabores de especiales a elegir',
            price: 15000,
        },
    ]
}

export const acompañamientos: Category = {
    acompañamientos: [
        {
            name: 'Papas fritas',
            image: './malteada.jpg',
            recipe: 'Con salsa de ajo y sriracha',
            price: 5000,
        },
        {
            name: 'Aros De Cebolla',
            image: './malteada.jpg',
            recipe: 'Con salsa de ajo y sriracha',
            price: 5000,
        },
    ]
}


export const niños: Category = {
    'Homies Kids': [
        {
            name: 'Homies kids con sorpresa',
            image: './malteada.jpg',
            recipe: '',
            price: 21900,
        },
        {
            name: 'Homies kids sin sorpresa',
            image: './malteada.jpg',
            recipe: '',
            price: 16900,
        },
    ],
    'Nuggets Pop': [
        {
            name: 'Lemon Pepper',
            image: './malteada.jpg',
            recipe: '200 gr de trozos de pechuga de pollo apanada, con dos sabores de especiales a elegir',
            price: 15000,
        },
        {
            name: 'Paprika',
            image: './malteada.jpg',
            recipe: '200 gr de trozos de pechuga de pollo apanada, con dos sabores de especiales a elegir',
            price: 15000,
        },
    ]
}

export const bebidas: Category = {
    'Malteadas': [
        {
            name: 'Fresa 12 Oz',
            image: './malteada.jpg',
            recipe: '',
            price: 12900,
        },
        {
            name: 'Oreo 12 Oz',
            image: './malteada.jpg',
            recipe: '',
            price: 12900,
        },
    ],
    'Cervezas': [
        {
            name: 'Corona',
            image: './malteada.jpg',
            recipe: '',
            price: 8000
        },
        {
            name: 'Stella',
            image: './malteada.jpg',
            recipe: '',
            price: 8000
        },
        {
            name: 'Club colombia dorada',
            image: './malteada.jpg',
            recipe: '',
            price: 5000
        },
    ],
    'Bebidas': [
        {
            name: 'Cocacola',
            image: './malteada.jpg',
            recipe: '',
            price: 5000
        },
        {
            name: 'Cocacola zero',
            image: './malteada.jpg',
            recipe: '',
            price: 5000
        },
        {
            name: 'Té de limón',
            image: './malteada.jpg',
            recipe: '',
            price: 5000
        },
        {
            name: 'Agua con gas',
            image: './malteada.jpg',
            recipe: '',
            price: 5000
        },
        {
            name: 'Agua sin gas',
            image: './malteada.jpg',
            recipe: '',
            price: 5000
        },
        {
            name: 'Soda',
            image: './malteada.jpg',
            recipe: '',
            price: 5000
        },
    ],
    'Bebidas sodificadas': [
        {
            name: 'Frutos rojos',
            image: './malteada.jpg',
            recipe: '',
            price: 5000
        },
    ],
};

export const malteadas: Category = {
    'Malteadas': [
        {
            name: 'Fresa 12 Oz',
            image: './malteada.jpg',
            recipe: '',
            price: 12900,
        },
        {
            name: 'Oreo 12 Oz',
            image: './malteada.jpg',
            recipe: '',
            price: 12900,
        },
    ],
}

export const adicionales: Category = {
    'Adicionales': [
        {
            name: 'SALSA DE AJO',
            image: './malteada.jpg',
            recipe: '',
            price: 500,
        },
        {
            name: 'CARNE 125 GR',
            image: './malteada.jpg',
            recipe: '',
            price: 4000,
        },
        {
            name: 'CARNE 150 GR',
            image: './malteada.jpg',
            recipe: '',
            price: 6000,
        },
        {
            name: 'TOCINETA',
            image: './malteada.jpg',
            recipe: '',
            price: 2000,
        },
        {
            name: 'QUESO',
            image: './malteada.jpg',
            recipe: '',
            price: 2500,
        },
        {
            name: 'QUESO APANADO',
            image: './malteada.jpg',
            recipe: '',
            price: 3500,
        },
        {
            name: 'VEGETALES',
            image: './malteada.jpg',
            recipe: '',
            price: 2000
        },
        {
            name: 'POLLO',
            image: './malteada.jpg',
            recipe: '',
            price: 5000
        },
    ]
}