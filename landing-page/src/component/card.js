import React from 'react';

function Card(props){
   
      return( 
          <>
             
                 <div className="card mt-4" >
                    <img className="card-top" src={props.url} alt="Card cap"/>
                     <div className="card-body">
                        <h2 className="card-title">{props.name}</h2>
                        <p className="card-text">{props.description}</p>
                        <hr/>
                     <div className="text-center">
                        <button type="button" className="btn btn-primary ">{props.boton}</button>
                     </div>
                    </div> 
                </div>
                
                
            </>
    
     )
}

export default Card