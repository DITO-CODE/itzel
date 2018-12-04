import React from 'react';


const Card = (props) =>{


    let {children,title,action,textButton,imagen} = props;
    return(

        <div className="card">


  <div className="view overlay">
    <img className="card-img-top" src={`../${imagen}`} alt="Card image cap" />
    <a href="#!">
      <div className="mask rgba-white-slight"></div>
    </a>
  </div>

  
  <div className="card-body">

   
    <h4 className="card-title">{title}</h4>
   
    {children}
   
    <a  className="btn btn-primary"
    href={action} target="_blank"
    >{textButton}</a>

  </div>

</div>
    )
}


export {Card};