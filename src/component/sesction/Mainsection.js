import React from "react";
import "./Mainsection.css";
import data from "../../Json/data";

const Mainsection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 titel">
          <h4>Recommended properties in Egypt</h4>
        </div>
        {data.map((data) => {
          return (
            <div className="col-lg-4 col-sm-12 allview">
              <div class="card" style={{ width: "18rem;" }} key={data.id}>
                <img src={data.img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text description">{data.description}</p>
                  <p className="typepart">
                    {" "}
                    {data.type}
                    <span className="pric"> {data.price}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mainsection;
