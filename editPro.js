import React, { useState } from "react";
import "./ep.css";
import { useNavigate } from "react-router-dom";



const handleSave = () => {
    let fn=document.getElementById("fn").value
    let ln=document.getElementById("ln").value
    let clg=document.getElementById("clg").value
    let email=document.getElementById("email").value
    let country=document.getElementById("country").value
    let Address=document.getElementById("Address").value
    let Pincode=document.getElementById("Pincode").value
    let image=document.getElementById("photo").value
    localStorage.setItem("photo",image)
    localStorage.setItem("ln",ln)
    localStorage.setItem("clg",clg)
    localStorage.setItem("email",email)
    localStorage.setItem("country",country)
    localStorage.setItem("Address",Address)
    localStorage.setItem("fn",fn)
    localStorage.setItem("Pincode",Pincode)
    if(image===" " && ln===" "&&fn===" " && email===" " && country===" " && Address===" "&&Pincode===" "){
        let para=document.getElementById("para1")
        para.textContent="Please fill the details";
    }else{
          alert("Data successfully saved")
    }
    
  };

const Ep = () => {

    
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };


  return (
    <div className="body">
      <div className="container bootstrap snippets bootdey">
        <h1 className="text-primary">Register Here</h1>
        <hr />
        <div className="row">
          <div style={{ position: "sticky", top: "0" }} className="col-md-3">
            <div className="text-center">
              <img
                src={selectedImage ? selectedImage : "choose.jpg"}
                className="avatar img-circle img-thumbnail"
                alt="avatar"
              />
              <h6>Upload a different photo...</h6>
              <input
                id="photo"
                type="file"
                className="form-control"
                onChange={handleImageChange}
              />
            </div>
          </div>

          <div className="col-md-9 personal-info">
            <div className="alert alert-info alert-dismissable">
              <a className="panel-close close" data-dismiss="alert">
                ×
              </a>
              <i className="fa fa-coffee"></i>This is an
              <strong>.alert</strong>. Please fill in the details.
            </div>
            <h3>Personal info</h3>

            <form className="form-horizontal" role="form">
              <div className="form-group">
                <label  className="col-lg-3 control-label">First name:</label>
                <div className="col-lg-8">
                  <input id="fn"
                    className="form-control"
                    type="text"
                    placeholder="Enter first name"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label  className="col-lg-3 control-label">Last name:</label>
                <div className="col-lg-8">
                  <input id="ln"
                    className="form-control"
                    type="text"
                    placeholder="Enter Last Name"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">College:</label>
                <div className="col-lg-8">
                  <input id="clg"
                    className="form-control"
                    type="text"
                    placeholder="Enter your college Name"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Email:</label>
                <div className="col-lg-8">
                  <input id="email"
                    className="form-control"
                    type="email"
                    placeholder="Enter your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Country:</label>
                <div className="col-lg-8">
                  <div className="ui-select">
                    <select
                      id="country"
                      className="form-control"
                      required
                    >
                      <option>-none-</option>
                      <option>India</option>
                      <option>USA</option>
                      <option>Australia</option>
                      <option>Sri Lanka</option>
                      <option>Russia</option>
                      <option>China</option>
                      <option>Japan</option>
                      <option>Pakistan</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Address:</label>
                <div className="col-lg-8">
                  <input
                  id="Address"
                    className="form-control"
                    type="text"
                    placeholder="Enter your Address"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Pincode:</label>
                <div className="col-lg-8">
                  <input
                  id="Pincode"
                    className="form-control"
                    type="text"
                    placeholder="Enter your pincode"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="conatainer">
        <div className="row">
<div className="d-flex flex-row justify-content-center">
       
      <button   className="SAVE_BUTTON btn btn-light  col-xl-1 col-md-1 col-sm-1" onClick={handleSave}>Save</button>
      <p id="para1"></p>
      
      </div>
      </div>
      </div>
      <hr />
    </div>
  );
};

export default Ep;
