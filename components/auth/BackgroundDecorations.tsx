import Image from "next/image";

export default function BackgroundDecorations() {
    return (
        <div className="absolute inset-0">

            {/* Círculo superior esquerdo */}
            <div className="absolute -top-28 -left-28 h-56 w-56 rounded-full bg-[#8EA390] z-1 md:-top-52 md:-left-52 md:h-96 md:w-96 2xl:-top-85 2xl:-left-85 2xl:h-160 2xl:w-160" />

            <div className="absolute -top-36 -left-8 h-56 w-56 rounded-full bg-[#DCDDCE] md:-top-56 md:-left-20 md:h-96 md:w-96 2xl:-top-95 2xl:-left-35 2xl:h-160 2xl:w-160" />

            {/* Círculo inferior direito */}
            <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-[#A7B49D] md:-bottom-44 md:-right-36 md:h-72 md:w-72 2xl:-bottom-70 2xl:-right-62 2xl:h-120 2xl:w-120" />

            {/* Círculo inferior esquerdo */}
            <div className="absolute -bottom-56 -left-20 h-72 w-72 rounded-full bg-[#8EA390] z-1 md:-bottom-168 md:-left-32 md:h-192 md:w-192 2xl:-bottom-280 2xl:-left-52 2xl:h-320 2xl:w-320" />

            <div className="absolute -bottom-36 -left-32 h-72 w-72 rounded-full bg-[#DCDDCE] md:-bottom-66 md:-left-44 md:h-108 md:w-108 2xl:-bottom-110 2xl:-left-72 2xl:h-180 2xl:w-180" />

            <Image className="pointer-events-none absolute bottom-4 left-1/4 z-2 hidden w-72 -translate-x-1/2 md:block 2xl:bottom-6 2xl:left-120 2xl:w-120"
                src="/shopping_cart.png"
                alt="Carrinho de compras do Nesty"
                width={800}
                height={800}
            />

            <div className="pointer-events-none absolute bottom-5 left-1/4 z-2 hidden h-6 w-48 -translate-x-1/2 rounded-[50%] bg-black/25 blur-md md:block 2xl:bottom-8 2xl:left-120 2xl:h-8 2xl:w-80" />

            <Image className="pointer-events-none absolute bottom-1 -right-24 z-2 hidden w-48 -translate-x-1/2 md:block 2xl:-right-40 2xl:w-80"
                src="/shopping_bag.png"
                alt="Carrinho de compras do Nesty"
                width={800}
                height={800}
            />

            <div className="pointer-events-none absolute bottom-6 -right-9 z-2 hidden h-6 w-24 -translate-x-1/2 rounded-[50%] bg-black/25 blur-md md:block 2xl:bottom-10 2xl:-right-15 2xl:h-8 2xl:w-40" />

        </div >
    )
}
