import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <h1>{id}</h1>
    </>
  );
}

export default ProductDetails;