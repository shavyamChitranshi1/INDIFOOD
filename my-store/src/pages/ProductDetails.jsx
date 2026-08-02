import "../styles/ProductDetails.css";
import Slider from "../components/Slider"
import ProductHero from "../components/ProductHero";
import CommunityStats from "../components/CommunityStats";
import TasteProfile from "../components/TasteProfile";
import Ingredients from "../components/Ingredients";
import Origins from "../components/Origins";
import SimilarFoods from "../components/SimilarFoods";
import Reviews from "../components/Reviews";
import Gallery from "../components/Gallery"


export default function ProductDetails() {

    return(

        <main className="product-page">
            
            <div className="Product-Info">
            <Gallery />
            <ProductHero />
            </div>
            <div className="page-row">


                <Slider />
                <Ingredients />

            </div>

            <div className="SimilarFood">

                <SimilarFoods />

            </div>

            <div className="full-width">
                <CommunityStats />

                <Origins />

            </div>

            <div className="full-width">

                <Reviews />

            </div>

        </main>

    );

}