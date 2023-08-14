import axios from "axios";
import { useEffect, useState } from "react";

const Card = () => {
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const z = await axios.get("https://dummyjson.com/products");
      console.log(z.data.products);
      setData(z.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="container-fluid ">
      <div className="row " >
        {data &&
          data.map((ele) => (
            <div className="col col-xs-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center align-items-center mb-3" key={ele.id}>
            <div className="card" style={{ width: "18rem" }} >
              <img src={ele.images[0]} className="card-img-top" alt="..." height={200}/>
              <div className="card-body">
                <h5 className="card-title">{ele.brand}</h5>
                <p className="card-text">
                  {ele.description}
                </p>
                <a href="#" className="btn btn-primary">
                  Read more <i className="fa fa-long-arrow-right" aria-hidden="true"></i>

                </a>
              </div>
            </div>
            </div>
          ))}
           </div>
      </div>
    </div>
  );
};

export default Card;
