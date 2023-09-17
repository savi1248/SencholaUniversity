// import React from 'react'
// import './senchola.css'
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
// import im2 from './Images/im2.png'
// import im3 from './Images/im3.png'
// import im6 from './Images/im6.png'
// import im7 from './Images/im7.png'
// import im8 from './Images/im8.png'
// import im9 from './Images/im9.png'
// import im10 from './Images/im10.png'
// import im11 from './Images/im11.png'
// import { RiTeamFill } from 'react-icons/ri';

// import { FaHandshakeAngle } from 'react-icons/fa6';






// const Senchola = () => {
//     return (
//         <section>
                 
//             <div className='container'>
//             <i class='bx bx-book-open bx-rotate-90' style={{ color: '#337e33', fontSize: "17px",
        
//              marginLeft:"15%" }} ></i>
//                 <div className='mg-5  '>
//                     <h2 >Best Learning
//                         <br /> Education platform
//                         <br /> in Senchola</h2>
//                     <p >Lorem Ipsum is simply dummy text of the printing
//                         <br /> and typesetting industry.Lorem Ipsum has been the
//                         <br />  industry's standard dummy text ever since the 1500s,
//                         <br />  when an unknown
//                     </p>
//                     <div className='buttons' >
//                         <button className="play">
//                             <span>Learn more</span></button>
//                         <button className="watch">
                           
//                             <i class='bx bx-play-circle bx-flip-vertical' style={{ color: 'white', fontSize: "15px" }}  ></i>

//                             <span>watch video</span></button>
//                     </div>
//                     <i class='bx bx-book-open bx-rotate-90' style={{ color: '#337e33', fontSize: "17px",
        
//              marginLeft:"40%" }} ></i>
//                     <div className='circle2'>
//              </div>
//     <div className='body'>
//      <div className='w7-white'> 
                
//                 <i class='bx bx-check' style={{color:'#302e2e', fontSize:"22px",  fontWeight:"800", alignItems:"center"}} ></i>
//                     <span style={{ fontSize:"14px",  fontWeight:"700", }}>Build Remote teams faster in senchola</span>
//                     <br />
//                     <i class='bx bx-check' style={{color:'#302e2e', fontSize:"22px",  fontWeight:"800", }} ></i>
//                     <span style={{ fontSize:"14px",  fontWeight:"700", textlign:"start"}}>Expert Trainee</span>
                    
//                     </div> 
               
//      </div>
                 

//                     <img src={im3} alt="" className='im3' />

//                 </div>
//                 <div className='circle3'>
//              </div>
            
//             </div>
//             {/* ========================================================================================= */}
//             <div className='circle1'>
//              </div>
//             <div className='mg-5'>
                 
//                 <h2 style={{fontWeight:"700"}}>Why Senchola
//                     <br /> University ?</h2>

//                 <div className='check-para'>

//                     <i class='bx bx-check-double check-icon'></i>
//                     <span>What We teach is much more relevant for real <br />
//                         software careers.</span>
//                     <br />
//                     <i class='bx bx-check-double check-icon'></i>
//                     <span>At Senchola, We look for skillsets and abilities more <br />
//                         than for paper credentials</span>
//                     <br />
//                     <i class='bx bx-check-double check-icon'></i>
//                     <span>We do not change our students any fees.</span>
//                     <br />
//                     <i class='bx bx-check-double check-icon'></i>
//                     <span>Alter the successful completion of the internship. you <br />
//                         are automatically included as a employee into </span>

//                 </div>

//                 <i class='bx bx-book-open bx-rotate-90' style={{ color: '#337e33', fontSize: "17px",
        
//         marginLeft:"-1%" }} ></i>
//                 <div className='vertical-line'>

//                 </div>
//                 <div className='lorium-para'>
//                 <i class='bx bx-book-open bx-rotate-90' style={{ color: '#337e33', fontSize: "17px",
        
//         marginLeft:"10%" }} ></i>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing el,
//                         <br /> sed do eiusmod tempor incididunt ut labore eters
//                         <br /> dolore magna aliqua.Ut enim ade .
//                     </p>
                    

//                     <p>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                         <br /> sed do eiusmod tempor incididunt ut labore et dolored
//                         <br /> aliqua. Ut enim ad minim veniam, quis nostrud exercise
//                         <br /> laboris nisi ut aliquip ex ea commodo consequat. Duist
//                         <br />are in reprehenderit

//                     </p>
//                     <i class='bx bx-book-open bx-rotate-90' style={{ color: '#337e33', fontSize: "17px",
        
//         marginLeft:"90%" }} ></i>
//                 </div>

//             </div> <br /> <br /> <br /> <br />
//             {/* ========================================================================================================
//                        */}


//             <div className='featured '>

//                 <div className="w3-container mg-5">
               

//                     <div className="w3-white" >
//                         <div className="w3-container w3-center">
//                         <i class='bx bxs-file-blank' style={{ color: '#ee3737', fontSize: "30px", margin: "2rem",
//                          backgroundColor:"#FA8072", borderRadius:"8px"}}  ></i>
//                             <h4 className='head'>Breadth and Depth for immediate scale</h4>
//                             <div className='card-para'>
//                                 <p >Lorem Ipsum is simply dummy text of the printing and type
//                                     setting industry. Lorem Ipsum has been the industry's standard
//                                     dummy text ever since the year 1500s, when an unknown printer took a
//                                     galley of type  scrambled it to make a type specimen book of the end.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className='col2'>
//                         <div className="w3-white" >
//                             <div className="w3-container w3-center">

//                                 <i class='bx bx-git-repo-forked' style={{ color: '#2538e3', fontSize: "30px", margin: "2rem",
//                             backgroundColor:"	#B0E0E6", borderRadius:"8px" }}  ></i>
//                                 <h4 className='head'>Scaleable Managed Outsourcing</h4>
//                                 <div className='card-para'>
//                                     <p >Lorem Ipsum is simply dummy text of the printing and type
//                                         setting industry. Lorem Ipsum has been the industry's standard
//                                         dummy text ever since the year 1500s, when an unknown printer took a
//                                         galley of type  scrambled it to make a type specimen book of the end.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='col3'>

//                         <div className="w3-white" >

//                             <div className="w3-container w3-center">
//                             <i class='bx bx-message-detail msg-icon ' style={{ color: '#f17a4b', fontSize: "30px", margin: "2rem",
//                         backgroundColor:"#FFE4B5", borderRadius:"8px" }}  ></i>
//                                 <h4 className='head'>Elastic Freelauncer Model</h4>
//                                 <div className='card-para'>
//                                     <p >Lorem Ipsum is simply dummy text of the printing and type
//                                         setting industry. Lorem Ipsum has been the industry's standard
//                                         dummy text ever since the year 1500s, when an unknown printer took a
//                                         galley of type  scrambled it to make a type specimen book of the end.
//                                     </p>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className=" w3-white mg-5" >
//                       <div className='col-6'>
//                     <div className="w3-container w3-center">

//                     <FaHandshakeAngle style={{ color: 'green', fontSize: "30px", margin: "2rem" ,
//                 backgroundColor:"#90EE90", borderRadius:"8px"}} />
                        
//                         <h4 className='head'>Global Pricing Model</h4>
//                         <div className='card-para'>
//                             <p >Lorem Ipsum is simply dummy text of the printing and type
//                                 setting industry. Lorem Ipsum has been the industry's standard
//                                 dummy text ever since the year 1500s, when an unknown printer took a
//                                 galley of type  scrambled it to make a type specimen book of the end.
//                             </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='col4'>
//                         <div className="w3-white" >
//                             <div className="w3-container w3-center">
//                             < RiTeamFill style={{ color: '#BA55D3', fontSize: "30px", margin: "2rem", 
//                         backgroundColor:"	#E6E6FA", borderRadius:'8px'}} />
//                                 <h4 className='head'>Jumpstart Your Business</h4>
//                                 <div className='card-para'>
//                                     <p >Lorem Ipsum is simply dummy text of the printing and type
//                                         setting industry. Lorem Ipsum has been the industry's standard
//                                         dummy text ever since the year 1500s, when an unknown printer took a
//                                         galley of type  scrambled it to make a type specimen book of the end.
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className='col5'>
//                                 <div className="w3-white" >
                                    
//                                     <div className="w3-container w3-center">
//                                         <i class='bx bx-desktop' style={{ color: ' #e38d25', fontSize: "30px", margin: "2rem",
//                                     backgroundColor:"#F0E68C", borderRadius:"8px" }}  ></i>
//                                         <h4 className='head'>Exclusive Professional Marketplace</h4>
//                                         <div className='card-para'>
//                                             <p >Lorem Ipsum is simply dummy text of the printing and type
//                                                 setting industry. Lorem Ipsum has been the industry's standard
//                                                 dummy text ever since the year 1500s, when an unknown printer took a
//                                                 galley of type  scrambled it to make a type specimen book of the end.
//                                             </p>
                                        
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>



//                 </div>



//             </div>
// {/* =====================================================================================================================   */}
//           <div className='mg-5'>
//           <div className='circle5'>
//              </div>
//             <div className='content'>
//             <div className='circle4'>
//              </div>
//              <i class='bx bx-book-open bx-rotate-90' style={{ color: '#337e33', fontSize: "17px",
        
//         marginLeft:"105%" }} ></i>
//                 <div className='w4-white'> 
                  
//                 <i class='bx bx-check' style={{color:'#302e2e', fontSize:"22px",  fontWeight:"800", alignItems:"center"}} ></i>
//                     <span style={{ fontSize:"14px",  fontWeight:"700", }}>Build Remote teams faster in senchola</span>
//                     <br />
//                     <i class='bx bx-check' style={{color:'#302e2e', fontSize:"22px",  fontWeight:"800", }} ></i>
//                     <span style={{ fontSize:"14px",  fontWeight:"700", textlign:"start"}}>Expert Trainee</span>
                    
//                     </div> 
//              </div>
             
//              <div className='build'>
                
//                         <p>Lorem interger dapibus
//                             <br /> rhoncus fusce nisi augue
//                             <br />fringilla.</p> 
                            
//                 </div>
                
//                 <div className='build-para'>
//                     <p>
//                     Lorem Ipsum is simply dummy text of the printing
//                       <br /> and typesetting industry. Lorem Ipsum has been the
//                      <br />  industry's standard dummy text ever since the 1500s,
//                       <br />  when an unknown printer took a galley of type and
//                      <br />   scrambled it to make a type specimen book. It has 
//                        <br /> survived not only five centuries, but also the leap 
//                    <br />  electronic typesetting, remaining essentially unchanged.
//                     </p>
//                     <i class='bx bx-book-open bx-rotate-90' style={{ color: '#337e33', fontSize: "17px",
        
//              marginLeft:"90%" }} ></i>

//                 </div>
       
       
       
//             </div>

// {/* ========================================================================================================================== */}


//             <div className='mg-5'>
//             <div className='circle6'>
//              </div>
//                 <div className='top '>
//                 <h2>RECRUITING TOP TALENTS</h2>
//                 <div className='top-para'>
//                 <p2>Recruiting Top Talent</p2>
//                 </div>
                
//                 </div>
                
//                 <div>
//                 <img src={im6} alt=""  className='im6' style={{width:'600px', height:"200px"}}/>
//                 </div>
            
//                <div>
//                 <img src={im7} alt=""  className='im7' style={{width:'160px', height:"365px"}}/>
//                 </div>
                
               
//                 <img src={im8} alt=""  className='im8' style={{width:'200px', height:"345px"}}/>
                
//                 <img src={im9} alt=""  className='im9' style={{width:'390px', height:"165px"}}/>
//                 <img src={im10} alt=""  className='im10' style={{width:'290px', height:"170px"}}/>
//                 <img src={im11} alt=""  className='im11' style={{width:'270px', height:"170px"}}/>
                
               
//             </div>
//             <div className='circle7'>
//              </div>

//         </section>

//     )
// }

// export default Senchola