export const metadata = {
    title: 'Menu - Mawa&apos;s Cuisine',
};

const menuItems = [
    {
        category: 'Appetizers',
        subtitle: 'Priced Each',
        items: [
            { name: 'Fried Wonton (Shrimp or Chicken)', price: '$2' },
            { name: 'Samosa (Meat or Veg)', price: '$2' },
            { name: 'Shingara (Veg)', price: '$2' },
            { name: 'Roll (Meat or Veg)', price: '$2' },
            { name: 'Peyaju / Beguni / Alooni', price: '$0.50' },
            { name: 'Vegetable Pakora', price: '$0.50' },
            { name: 'Paratha: Plain', price: '$1' },
            { name: 'Paratha: Aloo or Egg Mughlai', price: '$2' },
            { name: 'Paratha: Keema', price: '$2.50' },
            { name: 'Khola Jali Pitha', price: '$0.50' }
        ]
    },
    {
        category: 'Appetizer Trays',
        subtitle: 'Half/Full',
        items: [
            { name: 'Chola Bhuna', price: '$40/80' },
            { name: 'Chotpoti', price: '$40/80' },
            { name: 'Haleem (Beef/Mutton)', price: '$60/120' },
            { name: 'Haleem (Chicken)', price: '$50/100' },
            { name: 'Vegetable Manchurian (Fried)', price: '$45/90' },
            { name: 'Chicken Chow Mein', price: '$50/100' }
        ]
    },
    {
        category: 'Rice Dishes',
        subtitle: 'Main Course (Half/Full)',
        items: [
            { name: 'Rice: Plain', price: '$25/50' },
            { name: 'Rice: Pulao', price: '$35/70' },
            { name: 'Fried Rice w/ Egg & Shrimp', price: '$45/90' },
            { name: 'Bhuna Khichuri', price: '$45/90' },
            { name: 'Biryani (Chicken)', price: '$65/130' },
            { name: 'Biryani (Goat)', price: '$80/150' },
            { name: 'Tehari (Beef)', price: '$70/140' }
        ]
    },
    {
        category: 'Meat',
        subtitle: 'Half/Full',
        items: [
            { name: 'Chicken Roast', price: '$70/130', description: '20pc/40pc' },
            { name: 'Chicken Korma', price: '$70/130' },
            { name: 'Chicken 65', price: '$70/130' },
            { name: 'Chicken Manchurian (Fried)', price: '$70/130' },
            { name: 'Butter Chicken (Gravy)', price: '$70/130' },
            { name: 'Goat Korma (Creamy Curry)', price: '$80/150' },
            { name: 'Goat Rezala (Spicy Curry)', price: '$80/150' },
            { name: 'Beef Bhuna', price: '$80/150' },
            { name: 'Chicken Sweet and Sour (w/ Capsicum)', price: '$70/130' },
            { name: 'Chicken Chow Mein', price: '$50/100' }
        ]
    },
    {
        category: 'Seafood',
        subtitle: 'Half/Full',
        items: [
            { name: 'Shrimp Sweet and Sour (w/ Capsicum)', price: '$70/140' },
            { name: 'Fried Tilapia', price: '$50/100', description: '10pc/20pc' },
            { name: 'Fried Ruhi', price: '$60/120', description: '10pc/20pc' },
            { name: 'Fried Salmon', price: '$70/140' }
        ]
    },
    {
        category: 'Vegetables',
        subtitle: 'Half/Full',
        items: [
            { name: 'Daal (w/ Meat/Bones)', price: '$55/110' },
            { name: 'Mix Vegetable', price: '$40/80' },
            { name: 'Chinese Mix Vegetable', price: '$40/80' },
            { name: 'Shabji Korma (Creamy Mix Veg)', price: '$40/80' },
            { name: 'Egg Korma', price: '$60/120', description: '25pc/50pc' },
            { name: 'Aloo Dum/ Aloo Matr', price: '$40/70' },
            { name: 'Achari Begun', price: '$35/70' },
            { name: 'Mixed Salad', price: '$30/50' }
        ]
    },
    {
        category: 'Bhorta',
        subtitle: 'Half Trays Only',
        items: [
            { name: 'Bhorta: Potato, Eggplant, Tomato, Beans, Sweet Potato, Pumpkin', price: '$35' }
        ]
    },
    {
        category: 'Dessert',
        subtitle: 'Priced Each',
        items: [
            { name: 'Kalojam', price: '$2' },
            { name: 'Gulab Jamun', price: '$2' },
            { name: 'Kacha Golla', price: '$2' },
            { name: 'Balushai', price: '$2' },
            { name: 'Narkel Puli', price: '$2' },
            { name: 'Patishapta', price: '$2' },
            { name: 'Khaja', price: '$2' }
        ]
    },
    {
        category: 'Dessert Trays',
        subtitle: 'Half/Full',
        items: [
            { name: 'Zarda', price: '$45/80' },
            { name: 'Phirni', price: '$45/80' },
            { name: 'Dimer Pitha', price: '$55/100' },
            { name: 'Roshmalai', price: '$60', description: 'Quarter Tray' },
            { name: 'Roshmalai', price: '$120', description: 'Half Tray' }
        ]
    }
];

export default function MenuPage() {
    return (
        <div className="flex flex-col gap-8">
            <section className="text-center">
                <h1 className="mb-4 text-4xl font-bold text-neutral">What&apos;s on the Menu?</h1>
                <p className="text-xl text-neutral/80">
                    Authentic Bangladeshi cuisine made with love and the freshest ingredients
                </p>
            </section>

            {menuItems.map((category, categoryIndex) => (
                <section key={categoryIndex} className="mb-8">
                    <h2 className="mb-2 text-2xl font-semibold text-center text-accent">
                        {category.category}
                    </h2>
                    {category.subtitle && (
                        <p className="text-center text-neutral/70 mb-6 italic">
                            {category.subtitle}
                        </p>
                    )}
                    <div className="grid gap-4 md:grid-cols-2">
                        {category.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="bg-secondary/20 rounded-lg p-6 border border-secondary/30">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-semibold text-neutral">{item.name}</h3>
                                    <span className="text-lg font-bold text-accent">{item.price}</span>
                                </div>
                                {item.description && (
                                    <p className="text-neutral/70 text-sm">{item.description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            ))}

            <section className="text-center mt-12 p-8 bg-primary/20 rounded-lg border border-primary/30">
                <h2 className="text-xl font-semibold mb-4 text-neutral">Additional Information</h2>
                <div className="space-y-3 text-neutral/80">
                    <p>🍽️ For custom orders and specialized menus, please contact us in advance to discuss your requirements.</p>
                    <p>🥜 Please inform us of any dietary restrictions or allergies when placing your order so we can take the necessary precautions.</p>
                    <p>🚚 Delivery available upon request, fees vary by location.</p>
                    <p className="text-lg font-semibold mt-6 text-accent">Interested in catering? Contact us</p>
                </div>
            </section>
        </div>
    );
}