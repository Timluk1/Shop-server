export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    currency: string;
    discount: {
        type: string;
        value: number;
        oldPrice: number;
    };
}

export const products = [
    {
        id: 1,
        name: "Sahsd",
        description: "Stylish cafe chair",
        imageUrl: "http://localhost:4000/api/images/image.png",
        price: 1488,
        currency: "RUB",
        discount: {
            type: "percentage",
            value: 10,
            oldPrice: 1488,
        },
    },
    {
        id: 2,
        name: "Syltherine",
        description: "Styliasdasdsh cafe chair",
        imageUrl: "http://localhost:4000/api/images/image.png",
        price: 100000,
        currency: "RUB",
        discount: {
            type: "percentage",
            value: 10,
            oldPrice: 111111,
        },
    },
    {
        id: 3,
        name: "Syltherine",
        description: "Stylish cafe chair",
        imageUrl: "http://localhost:4000/api/images/image.png",
        price: 100000,
        currency: "RUB",
        discount: {
            type: "percentage",
            value: 10,
            oldPrice: 111111,
        },
    },
    {
        id: 4,
        name: "Syltherine",
        description: "Stylish cafe chair",
        imageUrl: "http://localhost:4000/api/images/image.png",
        price: 100000,
        currency: "RUB",
        discount: {
            type: "percentage",
            value: 10,
            oldPrice: 111111,
        },
    },
    {
        id: 5,
        name: "Syltherine",
        description: "Stylish cafe chair",
        imageUrl: "http://localhost:4000/api/images/image.png",
        price: 100000,
        currency: "RUB",
        discount: {
            type: "percentage",
            value: 10,
            oldPrice: 111111,
        },
    },
    {
        id: 6,
        name: "Syltherine",
        description: "Stylish cafe chair",
        imageUrl: "http://localhost:4000/api/images/image.png",
        price: 100000,
        currency: "RUB",
        discount: {
            type: "percentage",
            value: 10,
            oldPrice: 111111,
        },
    },
    {
        id: 7,
        name: "Syltherine",
        description: "Stylish cafe chair",
        imageUrl: "http://localhost:4000/api/images/image.png",
        price: 100000,
        currency: "RUB",
        discount: {
            type: "percentage",
            value: 10,
            oldPrice: 111111,
        },
    },
    {
        id: 8,
        name: "Syltherine",
        description: "Stylish cafe chair",
        imageUrl: "http://localhost:4000/api/images/image.png",
        price: 100000,
        currency: "RUB",
        discount: {
            type: "percentage",
            value: 10,
            oldPrice: 111111,
        },
    },
    {
        id: 9,
        name: "Syltherine",
        description: "Stylish cafe chair",
        imageUrl: "http://localhost:4000/api/images/image.png",
        price: 100000,
        currency: "RUB",
        discount: {
            type: "percentage",
            value: 10,
            oldPrice: 111111,
        },
    },
    {
        id: 10,
        name: "Syltherine",
        description: "Stylish cafe chair",
        imageUrl: "http://localhost:4000/api/images/image.png",
        price: 100000,
        currency: "RUB",
        discount: {
            type: "percentage",
            value: 10,
            oldPrice: 111111,
        },
    },
];
