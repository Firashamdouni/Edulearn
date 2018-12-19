import React, { Component } from 'react';
import SidebarAdmin from '../sidebar';
import'../style.css';


class Staff extends Component{
    render(){
        return(
        <div>
            <div >
            <div class="row mb-5 mt-5">
						<div class="col-md-12 col-sm-10 mb-5">
							<div class="card  card-box">
								<div class="card-head">
									<header>Parent List</header>
								</div>
								<div class="card-body ">
									<div class="table-wrap">
										<div class="table-responsive table-striped">
											<table class="table display product-overview mb-30" id="support_table">
												<thead>
													<tr>
														<th>No</th>
														<th>Name</th>
											
														<th>Date Of Admit</th>
														<th>Fees</th>
														<th>Child</th>
														<th>Edit</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td>Jens Brincker</td>
											
														<td>27/05/2016</td>
														<td>
															<span class="label label-sm label-success">paid</span>
														</td>
														<td>John Deo<br/>Jana</td>
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
                  
                            </div>    </div>     
          
        )
    }

}
export default Staff;