import React,{Component} from 'react';
import {Section} from '../components';


class Inicio extends Component{


    render(){
        return(
            <div>
            <Section estilo="mt-5 wow fadeIn">
                 <div className="row">
                    <div className="col-12">
                        <h3 className="h3 mb-3 text-center">Instituto Tecnológico de Nuevo León</h3>
                        <p>
                            <img src="../logoTec.png" className="rounded mx-auto d-block" alt="..." />
                        </p>
                        <p>
                            Como parte del Sistema Nacional de Educación Superior Tecnológica, 
                            dependiente de la Secretaria de Educación Pública, el día 1 de Octubre de 1976 fue fundado el Instituto Tecnológico de Ingenieria de Gestiòn Empresarial 
                            con el objetivo de difundir en el país los beneficios de la Educación Tecnológica y crear polos de desarrollo de acuerdo a las necesidades regionales 
                            convirtiéndose en la primera Institución Federal de Educación Superior en el Estado de Nuevo León y 
                            la número 48 del Sistema Nacional de Institutos Tecnológicos.
                        </p>
                        <hr className="my-5" />
                        <p>
                            En sus orígenes ocupó como sede otras instituciones federales y finalmente el 10 de Septiembre de 1979 
                            pasó a ocupar su sede definitiva en Cd. Guadalupe N.L. en un terreno adquirido a instancias de su primer Director, 
                            el Ing. Ignacio Carrillo González. Actualmente el Director del Instituto es el Dr. Mario Alberto Martínez Hernández.
                        </p>
                        <hr className="my-5" />
                        <p>
                        Contamos con una planta docente altamente capacitada con estudios de Maestría y Doctorado en áreas afines a las carreras que ofrecemos, lo que los acredita como profesores e investigadores conscientes de la responsabilidad que tienen hacia los sectores sociales en la formación de recursos humanos con una visión integral de calidad, confiabilidad y de cuidado del medio ambiente.
                        </p>
                    </div>
                 </div>

            </Section>
            </div>
        )
    }

}


export default Inicio;

