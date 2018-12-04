import React,{Component} from 'react';
import {Section} from '../components';


class Nosotros extends Component{


    render(){
        return(
            <div>
            <Section estilo="mt-5 wow fadeIn">
                 <div className="row">
                    <div className="col-12">
                        <h3 className="h3 mb-3 text-center">Objetivo de la Carrera</h3>
                        <p>
                            Formar integralmente profesionales que contribuyan a la gestión de empresas e innovación de procesos; así como al diseño, implementación y desarrollo de sistemas estratégicos de negocios, optimizando recursos en un entorno global, con ética y responsabilidad social.
                        </p>
                        <hr className="my-5" />
                    </div>
                 </div>

                  <div className="row">
                    <div className="col-12">
                        <h3 className="h3 mb-3 text-center">Perfil de Ingreso</h3>
                        <hr />
                    </div>
                    <div className="col-md-6">
                            <p>
                                <img src="../estudiantes.jpg" className="rounded mx-auto img-fluid" alt="..." />
                            </p>
                    </div>
                    <div className="col-md-6">
                        <p>
                            El aspirante a ingresar al programa educativo de Ingeniería en Gestión Empresarial debe contar con las competencias genéricas que emite la Secretaría de Educación Pública en el documento “Las competencias genéricas en el estudiante del bachillerato general” (SEP, 2008).
                        </p>
                    </div>
                    <div className="col-12">
                        <hr />
                    </div>
                    <div className="col-12">
                        <p>
                            Así mismo para poder cursar la carrera de manera satisfactoria debe poseer algunas cualidades y gustos como:
                        </p>
                        <ul class="grey-text">
                                        <li>
                                            Gusto por las habilidades directivas y de liderazgo.
                                        </li>
                                        <li>
                                            Interés por los diversos Procesos de calidad.
                                        </li>
                                        <li>
                                            Disposición para la mejor toma de decisiones.
                                        </li>
                                        <li>
                                            Interés por gestionar, diseñar, innovar y emprender.
                                        </li>
                                        <li>
                                            Saber investigar, analizar e interpretar información.
                                        </li>
                                        <li>
                                            Tener las bases para utilizar las nuevas tecnologías.
                                        </li>
                                        <li>
                                            Tener conocimientos básicos de matemáticas, así como conocimientos generales de física y química.
                                        </li>
                                    </ul>
                                    <hr />
                    </div>
                  </div>




                   <div className="row">
                    <div className="col-12">
                        <h3 className="h3 mb-3 text-center">Perfil de Egreso</h3>
                        <hr />
                    </div>
                   
                    <div className="col-md-6">
                        <p>
                        Desarrollar y aplicar habilidades directivas y la ingeniería en el diseño, creación, gestión, desarrollo, fortalecimiento e innovación de las organizaciones, con una orientación sistémica y sustentable para la toma de decisiones en forma efectiva.
                        </p>
                    </div>
                    <div className="col-md-6">
                            <p>
                                <img src="../egresados.jpg" className="rounded mx-auto img-fluid" alt="..." />
                            </p>
                    </div>
                    <div className="col-12">
                        <hr />
                    </div>
                    <div className="col-12">
                        <p>
                            Así mismo para poder aplicar los conocimientos adquiridos para:
                        </p>
                        <ul class="grey-text">
                                        <li>
                                            Diseñar e innovar estructuras administrativas y procesos, con base en las necesidades de las organizaciones para competir eficientemente en mercados globales.
                                        </li>
                                        <li>
                                            Gestionar eficientemente los recursos de la organización con visión compartida, con el fin de suministrar bienes y servicios de calidad.
                                        </li>
                                        <li>
                                            Aplicar métodos cuantitativos y cualitativos para el análisis e interpretación de datos y modelado de sistemas, en los procesos organizacionales para la mejora continua, estándares de calidad mundial.
                                        </li>
                                        <li>
                                            Diseñar, evaluar y emprender nuevos negocios y proyectos empresariales, que promuevan el desarrollo sustentable y la responsabilidad social, en un mercado competitivo.
                                        </li>
                                        <li>
                                            Diseñar e implementar estrategias de mercadotecnia basadas en información recopilada de fuentes primarias y secundarias del consumidor o usuario de algún producto, de acuerdo del mercado.
                                        </li>
                                        <li>
                                            Establecer programas para el fortalecimiento de la seguridad e higiene en las organizaciones.
                                        </li>
                                        <li>
                                            Gestionar sistemas integrales de calidad, ejerciendo un liderazgo efectivo y un compromiso ético, aplicando las herramientas básicas de la ingeniería.
                                        </li>
                                    </ul>
                                    <hr />
                    </div>
                  </div>

                   <div className="row">
                        <div className="col-12">
                            <h3 className="h3 mb-3 text-center">Campo de Trabajo</h3>
                            <hr />
                        </div>

                        <div className="col-md-6">
                            <p>
                                <img src="../Profesiona.jpg" className="rounded mx-auto img-fluid" alt="..." />
                            </p>
                        </div>

                         <div className="col-md-6">
                            <p>
                            Nuestros egresados en Ingeniería en Gestión Empresarial se podrán desempeñar profesionalmente en:
                            </p>
                            <ul class="grey-text">
                                <li>
                                    Empresas Industriales.
                                </li>
                                <li>
                                    Comerciales y de Servicios, tanto de Iniciativa Privada como Públicas.
                                </li>
                                <li>
                                    Organizaciones no Gubernamentales.
                                </li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <hr />
                        </div>
                    </div>

            </Section>
            </div>
        )
    }

}


export default Nosotros;

