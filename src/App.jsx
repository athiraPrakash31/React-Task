import './App.css'
import fortnite from './assets/fortnite.jpg'
import figure from './assets/Mask group.jpg'
import figure2 from './assets/Mask group2.jpg'
import figure3 from './assets/Mask group3.jpg'
import { MdOutlineClose } from "react-icons/md";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import Footer from './Footer'
function App() {

  return (
    <>
      <div className="row">
        <div className="col-12 text-end mt-4">
          <MdOutlineClose size={'30px'} />
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div className="col-2"></div>
          <div className="col-8">
            <p className='text-center fs-4 mt-5'>
              Epic Games :  An American Video Game And Software Developer And Publisher Based In Cary, North Carolina.
            </p>
          </div>
          <div className="col-2"></div>
        </div>
      </div>


      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <img src={fortnite} alt="" width={'100%'} />
          <div className="text-center">
            <p className=' mt-4'>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
            <MDBBtn className='btn btn-light  '>Vite Website</MDBBtn>
          </div>
        </div>
      </div>

      <div className="mt-5">

        <MDBContainer className='text-center'>
          <MDBRow >
            <MDBCol size='md'>
              <img height={'300px'} src={figure} alt="" />
              <p className='text-center mt-4' >
                Explore large, destructible environments where no two games are ever the same.
              </p>
            </MDBCol>
            <MDBCol size='md'>
              <img height={'300px'} src={figure2} alt="" />
              <p className='text-center mt-4'>
                Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale.
              </p>
            </MDBCol>
            <MDBCol size='md'>
              <img height={'300px'} src={figure3} alt="" />
              <p className='text-center mt-4'>
                Discover even more ways to play across thousands of creator-made game genres.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div className="row text-center mt-5 ">
        <div className="col-2"></div>
        <div className="col-8">

          <p className='mt-5 fs-3'>Our Contribution</p>
          <p className='px-5'>
            Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
          </p>
        </div>
      </div>


      <div className="row mt-5">
        <div className="col-2"></div>
        <div className="col-8">
          <MDBContainer className='text-center'>
            <MDBRow >
              <MDBCol size='md'>
                <h3>5M</h3>
                <span className='text-center'>Daily User</span>
                <p className='text-center'>Engagements</p>
              </MDBCol>
              <MDBCol size='md'>
                <h3>$500K</h3>
                <span className='text-center'>Revenue Surge for an</span>
                <p className="text-center"> Platform</p>
              </MDBCol>
              <MDBCol size='md'>
                <h3>10X</h3>
                <span>ROAS on all our</span>
                <p className='text-center'>
                  marketing campaigns
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>

      <div className="row text-center mt-5 ">
        <div className="col-2"></div>
        <div className="col-8 mt-5">
          <h3>Interested In Delving Deeper Into The Project?</h3>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-3"></div>
        <div className="col-6">
          <p className='text-center '>
            If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at <span className='fw-bold'>hello@abc.com</span>  or give us a call at <span className='fw-bold'>+91 480 20802730</span>.
          </p>

         
        </div>
      </div>

      <MDBRow className=' text-center d-flex justify-content-evenly mt-4 '>
      <MDBCol></MDBCol>
            <MDBCol md='2' className='mb-3'>
              <MDBBtn className=' btn btn-outline-light'>Ring as on Skype</MDBBtn>
            </MDBCol>
            <MDBCol  md='2'>
              <MDBBtn className='btn btn-light'>Contact Us</MDBBtn>
            </MDBCol>
             <MDBCol></MDBCol>
          </MDBRow>
      <Footer />
    </>
  )
}

export default App
