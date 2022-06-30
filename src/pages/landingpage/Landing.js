import React, { useEffect , useState} from 'react'
import './landing.css'
import FeatureCard from '../../components/FeatureCard';
import Resources from '../../components/Resources';
import Header from '../../components/Header';
import BgVideo from '../../videos/bgvideo.mp4'


function Landing() {


  useEffect(() => {
    document.getElementsByClassName("myclass")[0]?.classList?.add("hide")
  },[])

  return (
    <div>

    <Header></Header>
  
  <section id="hero" className="d-flex flex-column justify-content-center align-items-center">

        <div className="container-fluid">
        <div className="row">
            <div className="col-sm col-left">
                  <div className="text-center text-md-left textbox" data-aos="fade-up" data-aos-duration="1500">
                    <h1>Welcome to <span>MueNot</span></h1>
                    <h2>We are team of talented educators changing the world.</h2>
                    <a href="#services" className="btn-get-started scrollto">Get Started</a>
                  </div>
              </div>
              <div className="col-sm col-right">
                  <video autoPlay={true} muted={true} loop={true} id="myVideo">
                    <source src={BgVideo} type="video/mp4"/>
                  </video>
              </div>  
        </div>
      </div>
       
   
  </section>


  <section id='services' className='section-bgimg'>
  <div className="container our-services">
  <h1>E-Learning Services</h1>
  <div className="row justify-content-md-center flex-row">
    <div className=" col-xl-4 col-md-6 col-lg-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-duration="500">
       <FeatureCard color="#EC9B3B" image="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?t=st=1652960219~exp=1652960819~hmac=1b20716785f2d2655986492fab1b9b98a9f0673bc4b849e43c9292e9d013ec06&w=1800" title="K-12 Services" desc="MueNot is a leading e-learning educational service provider company in India. We offer holistic academic services ranging from content development to video lecture solutions, merging theory with exceptional graphic design to enhance learning."/>
    </div>
    <div className="col-xl-4 col-md-6 col-lg-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-duration="800">
       <FeatureCard color="#2E0249" image="https://img.freepik.com/free-vector/flying-graduation-caps_74855-295.jpg?t=st=1652963053~exp=1652963653~hmac=ebeedd59e95dab9ac97afe66858fac1e574ca57c4e89746e77b24748842269f1&w=1800" title="Higher Education" desc="MueNot offers interactive higher education services . Our experts help them tackle the most demanding educational challenges. We maintain quality standards, learning objectives and adhere to legal compliances and pedagogy patterns."/>
    </div>
    <div className="col-xl-4 col-md-6 col-lg-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-duration="1100">
       <FeatureCard color="#008775" image="https://img.freepik.com/free-vector/exams-concept-illustration_114360-1815.jpg?t=st=1652963458~exp=1652964058~hmac=d8e23cccd0a040dba88cafb98f5ba0d4682e39552e852b593ce4e69029a155d8&w=1800" title="Test Preparation" desc="MueNot provides you the high-quality and customized test prep solutions. MueNot is comprised of certified Subject Matter Experts (SMEs), test prep instructors, academic professionals, and researchers."/>
    </div>
  </div>
  </div>
  </section>


   {/* <!-- ======= Resources Section ======= --> */}
  <section id='resources' className='x'>
    <h1>Our Resources</h1>
     <Resources/>
  </section>


  {/* <!-- ======= Trending Model Services Section ======= --> */}
    <section id="trending-model-services" className="services section-bgimg">
    <h1>Trending Model Services</h1>
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box iconbox-blue">
              <div className="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                </svg>
                <i className="bi bi-translate"></i>
              </div>
              <h4><a href="">Content Localization</a></h4>
              <p>This involves preparing all content to focus on target audiences not familiar with the source language.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box iconbox-orange ">
              <div className="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                </svg>
                <i className="bi bi-headset-vr"></i>
              </div>
              <h4><a href="">AR & VR Services</a></h4>
              <p>Our Goal is to deliver interactive AR and VR e-learning solutions through digital content.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box iconbox-pink">
              <div className="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
                </svg>
                <i className="bi bi-phone"></i>
              </div>
              <h4><a href="">Mobile Learning</a></h4>
              <p>Mobile learning is the delivery of learning, education or learning support on mobile phones, PDAs or tablets.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box iconbox-yellow">
              <div className="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"></path>
                </svg>
                <i className="bx bx-layer"></i>
              </div>
              <h4><a href="">Blended Learning</a></h4>
              <p>Using both online and in-person learning experiences when teaching students.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box iconbox-red">
              <div className="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"></path>
                </svg>
                <i className="bx bx-slideshow"></i>
              </div>
              <h4><a href="">Alt Text</a></h4>
              <p>We provide accurate and clear descriptions of images/illustrations/graphics and mathematical equations.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box iconbox-teal">
              <div className="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
                </svg>
                <i className="bi bi-hourglass"></i>
              </div>
              <h4><a href="">Assessments</a></h4>
              <p>Assesments are undertaken for the purpose of improving student learning and development.</p>
            </div>
          </div>

        </div>

      </div>
    </section>

   
  {/* <!-- ======= Footer ======= --> */}
  <footer id="footer">

      <div className="footer-newsletter" data-aos="fade-right" data-aos-duration="1000">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>Drop your email here and get all the latest updates.</p>
              <form action="" method="post">
                <input type="email" name="email"/><input type="submit" value="Subscribe"/>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top section-bg">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 footer-contact">
              <h3 style={{textAlign:"left"}}>MueNot</h3>
              <p>
             
              <table>
                <tr> <td style={{padding:"0 10px 0 0"}}> <i className="bi bi-telephone-plus-fill"></i></td> <td> <a href='tel:9876543210'>+91 97xxxxxx</a> </td>  </tr>
                <tr> <td style={{verticalAlign:"top",padding:"0 10px 0 0"}}> <i className="bi bi-envelope-fill"></i></td>
                      <td>
                        <a href='mailto:contact@muenot.co.in'>contact@muenot.co.in </a><br/> 
                        <a href='mailto:info@muenot.co.in'>info@muenot.co.in </a><br/>
                        <a href='mailto:support@muenot.co.in'>support@muenot.co.in</a><br/>
                        <a href='mailto:help@muenot.co.in'>help@muenot.co.in</a><br/>
                        <a href='mailto:career@muenot.co.in'>career@muenot.co.in</a>
                      </td>
                  </tr>
              </table>
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4 style={{textAlign:"left"}}>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#services">Services</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Our Clients</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Our Team</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4 style={{textAlign:"left"}}>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">K-12 Services</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Higher Education</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Test Preparation</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Learning Solutions</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Localisation Services</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4 style={{textAlign:"left"}}>Our Social Networks</h4>
              <p>We are always here for you</p>
              <div className='xyz'>
                <a href="#"><i className="bi bi-twitter"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#" ><i className="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/company/muenot/"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="copyright">
          All Rights Reserved by <strong><span>MueNot</span> </strong> | &copy; Copyright 2022<strong></strong>.
        </div>
      </div>
  </footer>
  {/* <!-- End Footer --> */}
  
</div>
  )
}

export default Landing