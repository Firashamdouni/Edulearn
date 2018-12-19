import React, { Component } from 'react';
import SidebarAdmin from '../sidebar';
import'../style.css';


class Staff extends Component{
    constructor(props){
        super(props)
        this.state={
          events:[
            {name:'Freshers Day reception',
          date:'28 June 2017',
          time:'12.30AM-05.30PM',
          location:'Venue A, Main Campus',
          history:'	There are many variations of passag of Lorem Ipsum available, but the majority have suffered.',
          like:57
      },
      {name:'Bla bla bla Day reception',
      date:'28 June 2019',
      time:'12.30AM-05.30PM',
      location:'Sousse, Main Campus',
      history:'	There are many variations of passag of Lorem Ipsum available, but the majority have suffered.',
      like:250
    }
    ]
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
									<header>Event List</header>
								</div>
								<div class="card-body ">
									<div class="table-wrap table-striped">
										<div class="table-responsive">
											<table class="table display product-overview mb-30" id="support_table">
												<thead>
													<tr>
														<th>No</th>
														<th>Name</th>
														<th>Time</th>
														<th>Date </th>
														<th>Location</th>
														<th>History</th>
                                                        <th>Like</th>
														<th>Edit</th>
													</tr>
												</thead>
												<tbody>
                                                
                                                    {this.state.events.map((el,index)=>
                                                        <tr>
                                                    <td>{index}</td>
                                                    <td>{el.name}</td>
                                                    <td>{el.time}</td>
                                                    <td>{el.date}</td>
                                                    <td>{el.location}</td>
                                                    <td>{el.history}</td>
                                                    <td>{el.like}</td>
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

{/*	<td>1</td>
														<td>Freshers Day reception</td>
														<td>28 June 2017</td>
														<td>12.30AM-05.30PM</td>
														<td>
															<span class="label label-sm label-success">paid</span>
														</td>
														<td>Mechanical</td>
														<td><a href="javascript:void(0)" class="" data-toggle="tooltip" title="Edit"><i class="fa fa-check"></i></a>
															<a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="fa fa-trash"></i></a></td> */}