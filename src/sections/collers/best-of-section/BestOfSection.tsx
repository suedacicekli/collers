import {BestProductCard} from "../../../components";
import {products} from "../../../constants/collers.ts";

function BestOfSection() {
    const handleBuyNow = (title: string) => {
        alert("Buy now clicked : " + title);
    };
    return (
        <div className="bg-case-dark-blue p-4 lg:p-20">
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <p className="text-2xl lg:text-5xl py-8 font-extrabold text-white">
                    The best of the best
                </p>
                <a className="btn btn-base-100 btn-outline text-base-100">Sign Up Now</a>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                {products.map((product) => (
                    <BestProductCard
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        imageUrl={product.imageUrl}
                        onBuyNow={() => handleBuyNow(product.title)}
                    />
                ))}
            </div>
        </div>
    );
}

export default BestOfSection;
