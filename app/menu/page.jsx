export const metadata = {
    title: 'Menu',
};

const menuItems = [
    {
        category: 'Appetizers',
        items: [
            { name: 'Caesar Salad', description: 'Fresh romaine lettuce with parmesan cheese and croutons', price: '$12' },
            { name: 'Bruschetta', description: 'Toasted bread with fresh tomatoes and basil', price: '$10' },
            { name: 'Calamari Rings', description: 'Golden fried squid rings with marinara sauce', price: '$14' }
        ]
    },
    {
        category: 'Main Courses',
        items: [
            { name: 'Grilled Salmon', description: 'Fresh Atlantic salmon with lemon herb seasoning', price: '$24' },
            { name: 'Ribeye Steak', description: '12oz ribeye with garlic butter and seasonal vegetables', price: '$32' },
            { name: 'Pasta Carbonara', description: 'Creamy pasta with bacon, eggs, and parmesan', price: '$18' },
            { name: 'Chicken Parmesan', description: 'Breaded chicken breast with marinara and mozzarella', price: '$20' }
        ]
    },
    {
        category: 'Desserts',
        items: [
            { name: 'Tiramisu', description: 'Classic Italian dessert with coffee and mascarpone', price: '$8' },
            { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with vanilla ice cream', price: '$9' },
            { name: 'Cheesecake', description: 'New York style cheesecake with berry compote', price: '$7' }
        ]
    }
];

export default function MenuPage() {
    return (
        <div className="flex flex-col gap-8">
            <section className="text-center">
                <h1 className="mb-4 text-4xl font-bold">Our Menu</h1>
                <p className="text-xl text-gray-200">
                    Discover our carefully crafted dishes made with the finest ingredients
                </p>
            </section>

            {menuItems.map((category, categoryIndex) => (
                <section key={categoryIndex} className="mb-8">
                    <h2 className="mb-6 text-2xl font-semibold text-center border-b border-white/20 pb-2">
                        {category.category}
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        {category.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="bg-white/10 rounded-lg p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-semibold">{item.name}</h3>
                                    <span className="text-lg font-bold text-blue-300">{item.price}</span>
                                </div>
                                <p className="text-gray-200">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}