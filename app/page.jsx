import Link from 'next/link';

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section className="text-center">
                <h1 className="mb-6 text-4xl font-bold text-neutral">Welcome to Mawa&apos;s Cuisine</h1>
                <p className="mb-8 text-xl text-neutral/80 max-w-4xl mx-auto leading-relaxed">
                    Taste the true flavors of Bangladesh with Mawa&apos;s Cuisine. We deliver authentic, home-cooked deshi dishes with love and the freshest ingredients. From flavorful curries to irresistible sweets, let us cater your next event and share the taste of tradition.
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
                <div className="bg-secondary/20 rounded-lg p-6 border border-secondary/30">
                    <h2 className="text-2xl font-semibold mb-4 text-neutral">Our Menu</h2>
                    <p className="text-neutral/80 mb-4">
                        From traditional biryanis and curries to authentic Bengali sweets, explore our carefully crafted selection of dishes that bring the authentic taste of Bangladesh to your table.
                    </p>
                    <Link href="/menu" className="text-accent hover:text-accent/80 font-semibold">
                        Browse Menu →
                    </Link>
                </div>
                
                <div className="bg-secondary/20 rounded-lg p-6 border border-secondary/30">
                    <h2 className="text-2xl font-semibold mb-4 text-neutral">Gallery</h2>
                    <p className="text-neutral/80 mb-4">
                        Take a visual journey through our delicious creations and see the care that goes into every dish we prepare.
                    </p>
                    <Link href="/gallery" className="text-accent hover:text-accent/80 font-semibold">
                        View Gallery →
                    </Link>
                </div>
            </section>
        </div>
    );
}
