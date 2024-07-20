import React from "react";
import { Link } from "react-router-dom";

let ViewContact=() =>{
  return(
    <>
    <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning fw-bold">View Contact</p>
              <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi architecto corporis et neque nesciunt rerum nulla quae id eveniet atque, molestiae quidem accusamus blanditiis ducimus impedit temporibus in est?</p>
            </div>
          </div>
        </div>
    </section>
    <section className="view-contact mt-3">
       <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
           <img src="https://tse1.mm.bing.net/th?id=OIP.rVDfmJwnrS6PtliBeJvB4wHaHa&pid=Api&P=0&h=220" alt="" className="contact-img" />
          </div>
          <div className="col-md-8">
            
            <ul className="list-group">
                      <li className="list-group-item list-group-item-action">
                        Name : <span className="fw-bold">Sonali</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Mobile : <span className="fw-bold">7507676840</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Email : <span className="fw-bold">sonalijakapure@gmail.com</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Company : <span className="fw-bold">sonalijakapure@gmail.com</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Title : <span className="fw-bold">sonalijakapure@gmail.com</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Group : <span className="fw-bold">sonalijakapure@gmail.com</span>
                      </li>
                    </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
           <Link to={'/contacts/list'} className="btn btn-warning">Back</Link> 
          </div>
        </div>
       </div>
    </section>
    </>
  )  
}

export default ViewContact;
