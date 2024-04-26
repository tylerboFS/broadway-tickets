import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductions, setProductions} from "../redux/productions/productionSlice";

const ProductionsList = () => {
  const dispatch = useDispatch();
  const productions = useSelector((state) => state.production.productionList);

  useEffect(() => {
    const fetchProds = async () => {
      const result = await fetch("/api/productions");
      const list = await result.json();
      dispatch(setProductions(list))
    };
    fetchProds();
  }, []);

  return (
    <>
      <h3>Productions</h3>
      {productions.map((prod) => {
        return <p key={prod.id}>{prod.title}</p>;
      })}
    </>
  );
};

export default ProductionsList;
