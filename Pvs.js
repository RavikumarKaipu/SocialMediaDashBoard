import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './Pvs.css';
import { Avatar } from '@mui/material';
export default function PersonalProfile(props) {  
  return (
    <div className='container'>
        <div className='row'>
            <div>
           
    <section className="vh-100" style={{ backgroundColor: 'gray' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <Avatar src="" className="my-5" style={{ width: '180px',height:'180px' }} fluid />
                  <MDBTypography tag="h5">{localStorage.getItem("fullName")}<hr/></MDBTypography>
                  <MDBCardText>FULL STACK DEEVELOPER</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{localStorage.getItem("input1")}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">{localStorage.getItem("phone")}</MDBCardText>
                      </MDBCol>
                    

                    <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Address</MDBTypography>
                        <MDBCardText className="text-muted">{localStorage.getItem("Street")} , {localStorage.getItem("state")}</MDBCardText>
                      </MDBCol>

                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Pincode</MDBTypography>
                        <MDBCardText className="text-muted">{localStorage.getItem("pincode")}</MDBCardText>
                      </MDBCol>

                      </MDBRow>



                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
         
    </div>
        </div>
    </div>
  );
}