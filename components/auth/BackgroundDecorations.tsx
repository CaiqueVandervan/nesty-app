import Image from "next/image";

export default function BackgroundDecorations() {
    return (
        <div className="absolute inset-0">

            {/* Círculo superior esquerdo */}
            <div className="absolute -top-85 -left-85 h-160 w-160 rounded-full bg-[#8EA390] z-1" />

            <div className="absolute -top-95 -left-35 h-160 w-160 rounded-full bg-[#DCDDCE]" />

            {/* Círculo inferior direito */}
            <div className="absolute -bottom-70 -right-62 h-120 w-120 rounded-full bg-[#A7B49D]" />

            {/* Círculo inferior esquerdo */}
            <div className="absolute -bottom-280 -left-52 h-320 w-320 rounded-full bg-[#8EA390] z-1" />

            <div className="absolute -bottom-110 -left-72 h-180 w-180 rounded-full bg-[#DCDDCE]" />

            <Image className="pointer-events-none absolute bottom-6 left-120 z-2 hidden w-120 -translate-x-1/2 md:block"
                src="/shopping_cart.png"
                alt="Carrinho de compras do Nesty"
                width={800}
                height={800}
            />

            <div className="pointer-events-none absolute bottom-8 left-120 z-2 hidden h-8 w-80 -translate-x-1/2 rounded-[50%] bg-black/25 blur-md md:block" />

            <Image className="pointer-events-none absolute bottom-1 -right-40 z-2 hidden w-80 -translate-x-1/2 md:block"
                src="/shopping_bag.png"
                alt="Carrinho de compras do Nesty"
                width={800}
                height={800}
            />

            <div className="pointer-events-none absolute bottom-10 -right-15 z-2 hidden h-8 w-40 -translate-x-1/2 rounded-[50%] bg-black/25 blur-md md:block" />

        </div >
    )
}
