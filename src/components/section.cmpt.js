import React from 'react';



const Section = (props) =>{
    let {children, estilo} = props;
    return(

        <section className={`${estilo?estilo:""}`}>
        {children}
        </section>
    )

}


export {Section}