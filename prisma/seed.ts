import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const categories = ["Dining", "Living", "Bedroom"];
const tags = [
    "cafe-chair",
    "stylish",
    "modern",
    "sofa",
    "luxury",
    "big",
    "outdoor",
    "bar-table",
    "stool",
    "new",
];
const products = [
    {
        name: "Syltherine",
        shortDescription: "Stylish cafe chair",
        fullDescription:
            "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
        images: [
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
        ],
        price: 10_000,
    },
    {
        name: "Syltherine",
        shortDescription: "Stylish cafe chair",
        fullDescription:
            "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
        images: [
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
        ],
        price: 10_000,
    },
    {
        name: "Syltherine",
        shortDescription: "Stylish cafe chair",
        fullDescription:
            "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
        images: [
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
        ],
        price: 10_000,
    },
    {
        name: "Syltherine",
        shortDescription: "Stylish cafe chair",
        fullDescription:
            "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
        images: [
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
        ],
        price: 10_000,
    },
    {
        name: "Syltherine",
        shortDescription: "Stylish cafe chair",
        fullDescription:
            "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
        images: [
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
        ],
        price: 10_000,
    },
    {
        name: "Syltherine",
        shortDescription: "Stylish cafe chair",
        fullDescription:
            "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
        images: [
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
        ],
        price: 10_000,
    },
    {
        name: "Syltherine",
        shortDescription: "Stylish cafe chair",
        fullDescription:
            "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
        images: [
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
        ],
        price: 10_000,
    },
    {
        name: "Syltherine",
        shortDescription: "Stylish cafe chair",
        fullDescription:
            "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
        images: [
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
        ],
        price: 10_000,
    },
    {
        name: "Syltherine",
        shortDescription: "Stylish cafe chair",
        fullDescription:
            "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
        images: [
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
        ],
        price: 10_000,
    },
    {
        name: "Syltherine",
        shortDescription: "Stylish cafe chair",
        fullDescription:
            "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
        images: [
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
        ],
        price: 10_000,
    },
    {
        name: "Sylther  ine",
        shortDescription: "Stylish cafe chair",
        fullDescription:
            "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
        images: [
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
            "http://localhost:4000/api/images/image.png",
        ],
        price: 10_000,
    },
];

async function main() {
    console.log("Seeding database...");
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.tag.deleteMany();
    // Создание категорий
    const categoryIds = await Promise.all(
        categories.map((category) =>
            prisma.category.create({
                data: { name: category },
            }),
        ),
    );

    // Создание тегов
    const tagIds = await Promise.all(
        tags.map((tag) =>
            prisma.tag.create({
                data: { name: tag },
            }),
        ),
    );

    // Создание продуктов
    for (const product of products) {
        const category =
            categoryIds[Math.floor(Math.random() * categoryIds.length)]; // случайно выбираем категорию
        const createdProduct = await prisma.product.create({
            data: {
                name: product.name,
                shortDescription: product.shortDescription,
                fullDescription: product.fullDescription,
                images: product.images,
                price: product.price,
                categoryId: category.id, // связываем с категорией
                tags: {
                    connect: tagIds.map((tag) => ({ id: tag.id })), // связываем с тегами
                },
            },
        });
        console.log(`Created product: ${createdProduct.name}`);
    }

    console.log("Database seeded successfully!");
}

main()
    .catch((e) => {
        console.error("Error seeding database:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
