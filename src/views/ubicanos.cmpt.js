import React,{Component} from 'react';
import {Section} from '../components';


class Ubicanos extends Component{


    render(){
        return(
            <div>
                <Section estilo="mt-5 wow fadeIn">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="h3 mb-3 text-center">
                                Rutas Transporte Público
                            </h3>
                            <hr className="my-5" />
                            <div className="row">
                                <div className="col-1 mr-3">
                                    <i className="fa fa-bus fa-2x indigo-text"></i>
                                </div>
                                <div className="col-10">
                                    <h5 className="feature-title">Pablo Livas</h5>
                                    <ul class="grey-text">
                                        <li>
                                            Ruta 83
                                        </li>
                                        <li>
                                            Ruta 93
                                        </li>
                                        <li>
                                            Ruta 214
                                        </li>
                                        <li>
                                            Ruta 223
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div style={{height:"30px"}}></div>
                            <div className="row">
                                <div className="col-1 mr-3">
                                    <i className="fa fa-bus fa-2x blue-text"></i>
                                </div>
                                <div className="col-10">
                                    <h5 className="feature-title">Eloy Cavazos</h5>
                                    <ul class="grey-text">
                                        <li>
                                            Ruta 14
                                        </li>
                                        <li>
                                            Ruta 70
                                        </li>
                                        <li>
                                            Ruta 81
                                        </li>
                                        <li>
                                            Ruta 224
                                        </li>
                                        <li>
                                            Ruta 420
                                        </li>
                                        <li>
                                            Ruta 85
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-6">
                            <h3 className="h3 mb-3 text-center">
                                <a href="https://www.google.com/maps/place/Instituto+Tecnol%C3%B3gico+de+Nuevo+Le%C3%B3n/@25.6623807,-100.2457385,15.77z/data=!4m5!3m4!1s0x8662c038d1481d33:0xb3b13be0b9c7c6f2!8m2!3d25.6646376!4d-100.2444697"
                                target="_blank" style={{color:"black"}}>Ubicación </a>
                            </h3>
                            <hr className="my-5" />
                            <p>
                                <img src="../mapa_.png" className="rounded mx-auto img-fluid" alt="..." />
                            </p>
                        </div>

                         <div className="col-md-12">
                         <hr className="my-5" />
                         </div>
                    </div>
                </Section>
            </div>
        )
    }

}


export default Ubicanos;

