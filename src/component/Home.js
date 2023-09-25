import './Style.css';

 

export default function Home(){

    return(
      <>
        <div class="banner-section layout_padding">
        <div class="container-fluid ">
           <div class="row">
              <div class="col-md-6">
                 <div class="main mb-1 " >
                 <h1 id="main-h1">Building digital<br/>
                                products & brands.</h1>
                 <p className='banner-p'>This free and open-source landing page template was built using the utility<br/> classes from Tailwind CSS and based on the components from the Flowbite<br/> Library and the Blocks System.</p>
                 <button type="button"  class="btn btn-light" className='git'><i class="fa-brands fa-github"></i>View on GitHub</button>
   <button type="button" class="btn btn-light"className='figma' ><img  className="ma"src="https://images.saasworthy.com/figma_4012_logo_1579501766_cvyxw.png"/>Get Figma File</button>
   
   
              </div>
              </div>
        
                <div class="col-lg-6  " >
                   
                        <img  src="https://demo.themesberg.com/landwind/images/hero.png "alt="LandWind" className='img'/>
                    </div>
                    
            
            </div>
        </div>
        </div>

        {/* <div className='container text-center'>
      <div className='row justify-content-evenly 'id='text'>
         <div className='col-sm-6 col-lg-2 col-xs-12 p-3'>
            <p>airnap</p>
         </div>
         <div className='col-sm-6 col-lg-2 col-xs-12 p-3'>
            <p>airnap</p>
         </div>
         <div className='col-sm-6 col-lg-2 col-xs-12 p-3'>
            <p>airnap</p>
         </div>
         <div className='col-sm-6 col-lg-2 col-xs-12 p-3'>
            <p>airnap</p>
         </div>
         <div className='col-sm-6 col-lg-2 col-xs-12 p-3'>
            <p>airnap</p>
         </div>
         <div className='col-sm-6 col-lg-2  col-xs-12 p-3'>
            <p>airnap</p>
         </div>
      </div>

        </div>


        </>
    );
} */}
<div className='container-fluid'>
<div className='row justify-content-evenly'>
  <div  id='air' className='col-sm-6 col-lg-2'>

<i class="fa-brands fa-airbnb"></i>airbnb
 </div>

 <div  id='air' className='col-sm-6 col-lg-2'>
Google
</div>

<div   id='air'className='col-sm-6 col-lg-2'>
<i class="fa-brands fa-microsoft"></i>Microsoft
</div>

<div  id='air' className='col-sm-6 col-lg-2'>
<i class="fa-brands fa-spotify"></i>Spotify
</div>

<div  id='air' className='col-sm-6 col-lg-2'>
<i class="fa-brands fa-mailchimp"></i>mailchimp
</div>
<div  id='air' className='col-sm-6 col-lg-2'>
Mashable
</div>
</div>
</div>

</>
    )
}      
