import React,{Component} from 'react';
import {Section} from '../components';


class Admision extends Component{


    render(){
        return(
            <div>
            <Section estilo="mt-5 wow fadeIn">
                 <div className="row">
                    <div className="col-12">
                        <h3 className="h3 mb-3 text-center">Inscripción y Requisitos</h3>
                      <hr/>
                    </div>
                    <div className="col-md-6">
                    <p>
                            <img src="../logoTec.png" className="rounded mx-auto d-block" alt="..." />
                        </p>
                    </div>

                    <div className="col-md-6">
                        <p>
                        Los estudiantes egresados y por egresar de Instituciones de Educación Media Superior son candidatos a ingresar e inscribirse en el Instituto Tecnológico de Nuevo León, ya sea en el Ciclo Enero - Junio ó Agosto - Diciembre, en el Turno Matutino o Vespertino, en alguno de los siguientes programas educativos:
                        </p>
                        <ul class="grey-text">
                            <li>
                            <a href="http://www.itnl.edu.mx/contenido/deptos/se/agendas/agenda_nuevo_ingreso.pdf" target="_blank">Ingeniería En Gestión Empresarial.</a>
                            </li>
                        </ul>
                    </div>
                 </div>

            </Section>
            </div>
        )
    }

}


export default Admision;

