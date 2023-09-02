"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const amenityCategories = [
    { categoryName: 'outdoor' },
    { categoryName: 'indoor' },
    { categoryName: 'security' },
];
const prisma = new client_1.PrismaClient();
async function main() {
    for (const category of amenityCategories) {
        await prisma.amenityCategories.create({
            data: category,
        });
    }
}
main()
    .catch(() => {
    process.exit(1);
})
    .finally(() => {
    prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map