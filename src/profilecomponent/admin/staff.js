import React, { Component } from 'react';
import SidebarAdmin from '../sidebar';
import'../style.css';


class Staff extends Component{
    render(){
        return(
            <div>
    
    
         
                
    <div class="row mb-5 mt-5">
						<div class="col-md-12 col-sm-10 mb-5">
							<div class="card  card-box">
								<div class="card-head">
									<header>Staff List</header>
								</div>
								<div class="card-body ">
									<div class="table-wrap table-striped">
										<div class="table-responsive">
											<table class="table display product-overview mb-30" id="support_table">
												<thead>
													<tr>
														<th>No</th>
														<th>Name</th>
														<th>Designation</th>
														<th>Mobile</th>
														<th>Email</th>
														<th>Adress</th>
                                                        <th>Joining Date</th>
                                                        <th>Action</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
                                                        <td>John Deo</td>
														<td>librarian</td>
														<td>46464646</td>
														<td>rajesh@gmail.com</td>
                                                        <td>22,tilak appt. surat</td>
                                                        <td>11/11/1992</td>
														<td><a href="javascript:void(0)" class="" data-toggle="tooltip" title="Edit"><i class="fa fa-check"></i></a>
															<a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="fa fa-trash"></i></a></td>
													</tr>
													
												</tbody>
											</table>
										</div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                      
               
          
        )
    }

}
export default Staff;