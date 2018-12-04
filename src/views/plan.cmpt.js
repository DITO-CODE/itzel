import React,{Component} from 'react';
import {Section} from '../components';


class Plan extends Component{


    render(){
        return(
            <div>
                <Section estilo="mt-5 wow fadeIn">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="h3 mb-3 text-center">
                                    Plan de Estudios
                                </h3>

                            <hr className="my-5" />
                        </div>
                        <div className="col-md-6">
                            <p>
                                Duración: 9 semestres, durante los cuales el estudiante desarrollara entre otras, las siguientes competencias:
                            </p>

                            <ul class="grey-text">
                                        <li>
                                        Se comunica en un segundo idioma (Inglés).
                                        </li>
                                        <li>
                                        Emplea nuevas tecnologías de información y comunicación.
                                        </li>
                                        <li>
                                        Toma decisiones en forma efectiva.
                                        </li>
                                        <li>
                                        Ejerce liderazgo.
                                        </li>
                                        <li>
                                        Trabaja en equipo.
                                        </li>
                                        <li>
                                        Desarrolla espíritu emprendedor.
                                        </li>
                                        <li>
                                        Ejerce su profesión con ética.
                                        </li>
                                    </ul>

                        </div>

                        <div className="col-md-6">
                            <p>
                                <img src="../estudiando.jpg" className="rounded mx-auto img-fluid" alt="..." />
                            </p>
                        </div>

                         <div className="col-md-12 text-center">
                         <hr/>

                          <p>
                                <img src="../reticula.png" className="rounded mx-auto img-fluid" alt="..." />
                            </p>
                            <hr/>
                         </div>


                    </div>
                </Section>
            </div>
        )
    }

}


export default Plan;

