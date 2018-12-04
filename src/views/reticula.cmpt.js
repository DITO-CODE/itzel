import React,{Component} from 'react';
import {Section,Card} from '../components';


class Reticula extends Component{


    render(){
        return(
            <div>
                <Section estilo="mt-5 wow fadeIn">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="h3 mb-3 text-center">
                                   Retículas
                                </h3>

                            <hr className="my-5" />
                        </div>

                        
                        <div className="col-md-4">
                            <Card title="INGENIERÍA EN GESTION EMPRESARIAL" 
                            action="http://www.itnl.edu.mx/contenido/reticula/2016-2017/ige2017_MC.pdf" 
                            textButton="Descargar"
                            imagen="libros.jpg"
                             >
                                <p>
                                RETÍCULA DE LA CARRERA DE INGENIERÍA EN GESTION EMPRESARIAL CLAVE: IGEM-2009-201
                                </p>
                                <p>
                                ESPECIALIDAD: MANUFACTURA Y CALIDAD PARA LA INDUSTRIA AUTOMOTRIZ CLAVE: IINE-MCA-2017-02
                                </p>
                            </Card>
                        </div>


                        <div className="col-md-4">
                            <Card title="INGENIERÍA EN GESTION EMPRESARIAL" 
                            action="http://www.itnl.edu.mx/contenido/reticula/2016-2017/ige2017_GLI.pdf" 
                            textButton="Descargar" 
                            imagen="libros2.jpg"
                            >
                                <p>
                                RETÍCULA DE LA CARRERA DE INGENIERÍA EN GESTION EMPRESARIAL CLAVE: IGEM-2009-201
                                </p>
                                <p>
                                ESPECIALIDAD: GESTIÓN LOGISTICA INTEGRAL CLAVE: IINE-GLI-2017-01
                                </p>
                            </Card>
                        </div>

                        <div className="col-md-4">
                            <Card title="INGENIERÍA EN GESTION EMPRESARIAL" 
                            action="http://www.itnl.edu.mx/contenido/reticula/2016-2017/ige2017_GNI.pdf" 
                            textButton="Descargar" 
                            imagen="libros3.jpg"
                            >
                                <p>
                                RETÍCULA DE LA CARRERA DE INGENIERÍA EN GESTION EMPRESARIAL CLAVE: IGEM-2009-201
                                </p>
                                <p>
                                ESPECIALIDAD: GESTIÓN DE NEGOCIOS INTERNACIONALES CLAVE: IGEE-GNI-2017-01
                                </p>
                            </Card>
                        </div>
                    </div>
                </Section>
            </div>
        )
    }

}


export default Reticula;

