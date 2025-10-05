import Image from 'next/image';

export const metadata = {
    title: 'Gallery',
};

const galleryImages = [
    {
        src: '/images/corgi.jpg',
        alt: 'Restaurant interior',
        title: 'Elegant Dining Space'
    },
    {
        src: '/images/corgi.jpg',
        alt: 'Signature dish',
        title: 'Grilled Salmon Special'
    },
    {
        src: '/images/corgi.jpg',
        alt: 'Kitchen view',
        title: 'Our Professional Kitchen'
    },
    {
        src: '/images/corgi.jpg',
        alt: 'Dessert presentation',
        title: 'Artisanal Desserts'
    },
    {
        src: '/images/corgi.jpg',
        alt: 'Wine selection',
        title: 'Curated Wine Collection'
    },
    {
        src: '/images/corgi.jpg',
        alt: 'Outdoor seating',
        title: 'Patio Dining Experience'
    }
];

export default function GalleryPage() {
    return (
        <div className="flex flex-col gap-8">
            <section className="text-center">
                <h1 className="mb-4 text-4xl font-bold">Gallery</h1>
                <p className="text-xl text-gray-200">
                    Take a visual journey through our space and culinary creations
                </p>
            </section>

            <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {galleryImages.map((image, index) => (
                    <div key={index} className="bg-white/10 rounded-lg overflow-hidden hover:bg-white/15 transition-colors">
                        <div className="relative h-48 sm:h-56">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{image.title}</h3>
                        </div>
                    </div>
                ))}
            </section>

            <section className="text-center bg-white/10 rounded-lg p-8">
                <h2 className="mb-4 text-2xl font-semibold">Visit Us</h2>
                <p className="text-gray-200 mb-4">
                    Experience our atmosphere and cuisine in person. We look forward to welcoming you!
                </p>
                <div className="text-lg">
                    <p className="mb-2">📍 123 Restaurant Street, City, State 12345</p>
                    <p className="mb-2">📞 (555) 123-4567</p>
                    <p>🕒 Mon-Sun: 11:00 AM - 10:00 PM</p>
                </div>
            </section>
        </div>
    );
}