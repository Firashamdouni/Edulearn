import React, { Component } from 'react';


 const Business = (props)=>{
    return (

					<div class="col-lg-4 col-md-6 grid-item filter1 " style={{marginTop:"20px"}}>
		                <div class="course-item">
		                    <div class="course-img">
		                        <img src="images/courses/10.jpg" alt="" />
		                        <span class="course-value"></span>
		                        <div class="course-toolbar">
		                    		<h4 class="course-category"><a href="#"></a></h4>
		                        	<div class="course-date">
		                        		<i class="fa fa-calendar"></i> 
		                        	</div>
		                        	<div class="course-duration">
		                        		<i class="fa fa-clock-o"></i>
		                        	</div>
		                        </div>
		                    </div>
		                    <div class="course-body">
		                    	<div class="course-desc">
		                    		<h4 class="course-title"><a href="courses-details.html">Computer Engineering</a></h4>
		                    		<p>
		                    			Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a
		                    			Nullam augue augue.
		                    		</p>
		                    	</div>
		                    </div>
		                    <div class="course-footer">
		                    	<div class="course-seats">
		                    		<i class="fa fa-users"></i> 70 SEATS
		                    	</div>
		                    	<div class="course-button">
		                    		<a href="#">APPLY NOW</a>
		                    	</div>
		                    </div>
		                </div>						
					</div>
    );

}

export default Business;
