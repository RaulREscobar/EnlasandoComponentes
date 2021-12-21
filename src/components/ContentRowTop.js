import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';
import { useParams } from 'react-router-dom'
import Status from './Status';


function ContentRowTop(){
	const {component} = useParams()

	function getComponent(component) {
		if (component === undefined){
			component = "dashboard"
		}
		switch (component) {
			case "pages":
				return(<ContentRowMovies />)
				
			case "charts":
					return (<ContentRowCenter />)
				
			case "tables":
						return(<Chart />)		
			
			case "dashboard":
				return (
					<>
						<ContentRowMovies />
						<ContentRowCenter />
						<Chart />
					</>
				)
			default : return ( <Status />)

		}
	}

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					{getComponent(component)}
					
					
					
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;