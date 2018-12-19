import React, { Component } from 'react';
import SidebarAdmin from '../sidebar';
import'../style.css';


class Staff extends Component{
    constructor(props){
        super(props)
        this.state={
          nom:'',
          date:'',
          duration:'',
          details:'',
          seats:'',
          value:'',
          courses :
           [{ nom:'Science',
          date:'28-06-2017',
          duration:' 4 year',
          details:'',
          seats:'70 SEATS',
          value:'$450'},
          { nom:'Math',
          date:'28-06-2019',
          duration:' 3 year',
          details:'',
          seats:'80 SEATS',
          value:'$230'},
          { nom:'Math',
          date:'28-06-2019',
          duration:' 3 year',
          details:'',
          seats:'80 SEATS',
          value:'$230'},
          { nom:'Math',
          date:'28-06-2019',
          duration:' 3 year',
          details:'',
          seats:'80 SEATS',
          value:'$230'}],
          currentPage: 1,
          todosPerPage: 2,
          disabled:true,
      coursesscience :
      [{ nom:'Science',
     date:'28-06-2017',
     duration:' 4 year',
     details:'',
     seats:'70 SEATS',
     value:'$450'}],
    
    
    }
    
      
    }
    render(){
        return(
        <div>
            <div >
            <div class="row mb-5 mt-5">
						<div class="col-md-12 col-sm-10 mb-5">
							<div class="card  card-box">
								<div class="card-head">
									<header>Course List</header>
								</div>
								<div class="card-body ">
									<div class="table-wrap table-striped">
										<div class="table-responsive">
											<table class="table display product-overview mb-30" id="support_table">
												<thead>
													<tr>
														<th>No</th>
														<th>Name</th>
														<th>Date</th>
														<th>Duration</th>
														<th>Details</th>
														<th>Seats</th>
                                                        <th>Value </th>
                                                        <th>Action</th>
													</tr>
												</thead>
												<tbody>
													
                                                    {this.state.courses.map((el,index)=>
                                                        <tr>
                                                    <td>{index}</td>
                                                    <td>{el.nom}</td>
                                                    <td>{el.date}</td>
                                                    <td>{el.duration}</td>
                                                    <td>{el.details}</td>
                                                    <td>{el.seats}</td>
                                                    <td>{el.value}</td>
                                                    <td><a href="javascript:void(0)" class="" data-toggle="tooltip" title="Edit"><i class="fa fa-check"></i></a>
															<a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="fa fa-trash"></i></a></td>
                                                    </tr>
                                                     )}
													
													
													
												</tbody>
											</table>
										</div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  
                            </div>    </div>     
          
        )
    }

}
export default Staff;