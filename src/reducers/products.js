let initialState = [
    {
        id: 1,
        name: 'IPhone 7 Plus',
        price: 500,
        status: true
    },
    {
        id: 2,
        name: 'IPhone 8',
        price: 600,
        status: false
    },
    {
        id: 3,
        name: 'IPhone X',
        price: 800,
        status: true
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default products;