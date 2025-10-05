import Link from 'next/link';

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section className="text-center">
                <h1 className="mb-6 text-4xl font-bold">Welcome to Our Website</h1>
                <p className="mb-8 text-xl text-gray-200">
                    Discover our delicious menu and beautiful gallery
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link href="/menu" className="btn btn-lg sm:min-w-64">
                        View Menu
                    </Link>
                    <Link href="/gallery" className="btn btn-lg sm:min-w-64">
                        View Gallery
                    </Link>
                </div>
            </section>
            
            <section className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Our Menu</h2>
                    <p className="text-gray-200 mb-4">
                        Explore our carefully crafted selection of dishes made with the finest ingredients.
                    </p>
                    <Link href="/menu" className="text-blue-300 hover:text-blue-200">
                        Browse Menu →
                    </Link>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
                    <p className="text-gray-200 mb-4">
                        Take a visual journey through our space and culinary creations.
                    </p>
                    <Link href="/gallery" className="text-blue-300 hover:text-blue-200">
                        View Gallery →
                    </Link>
                </div>
            </section>
        </div>
    );
}
