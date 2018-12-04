import React, { Component } from 'react';
import { Section } from '../components';
import './estilos.css';


class Blog extends Component {


    render() {
        return (
            <div>
                <Section estilo="mt-5 wow fadeIn">
                    <div className="row">
                        <div className="col-12">
                            <section className="my-5">


                                <h2 className="h1-responsive font-weight-bold text-center my-5">Blog</h2>




                                <div className="row">


                                    <div className="col-lg-5 col-xl-4">


                                        <div className="view overlay rounded z-depth-1-half mb-lg-0 mb-4 initial_height">
                                            <img className="img-fluid" src="../blog1.jpg" alt="Sample image" />
                                            <a>
                                                <div className="mask rgba-white-slight"></div>
                                            </a>
                                        </div>

                                    </div>
                                    <div className="col-lg-7 col-xl-8">


                                        <h3 className="font-weight-bold mb-3"><strong>¿Por qué estudiar la carrera de Gestión empresarial?
</strong></h3>

                                        <p className="dark-grey-text text-justify">La carrera de Gestión Empresarial engloba distintos conceptos que se relacionan con el ámbito organizacional de una entidad que busca obtener beneficios en la gestión que realiza. Los profesionales de la carrera están capacitados para articular de la manera más eficiente los recursos que se poseen en una empresa, así como el manejo de las finanzas y la administración de la misma. Es una carrera que otorga el título de Técnico en Gestión Empresarial y se puede realizar en un total de tres años aproximadamente, a lo largo de los cuales el estudiante puede realizar diversas prácticas y así comenzar a absorber todo aquello que esté relacionado con la dirección de una empresa, específicamente cuales son las bases que debe saber a la perfección para obtener éxito en sus objetivos</p>

                                    </div>


                                </div>
                            </section>

                            <hr className="my-5" />

                            <div class="row">


                                <div class="col-lg-7">


                                    <h3 class="font-weight-bold mb-3"><strong>¿Cuáles son las ventajas y desventajas de estudiar Gestión Empresarial?
</strong></h3>

                                    <p>Algunas de las ventajas que se destacan de la carrera es la corta duración que posee la cursada. En este sentido, como la gran mayoría de las tecnicaturas, el profesional puede poner en práctica rápidamente las destrezas adquiridas durante el dictado de la cursada o bien al finalizarla, ya que la misma no se extiende a lo largo del tiempo, y la obtención del título, con el esfuerzo necesario, se consigue  de manera temprana.
</p>
<p>
A la vez, muchos profesionales concuerdan en resaltar como beneficio, la buena salida laboral con la que cuenta esta carrera. De esta manera, como mencionamos anteriormente, los graduados cuentan con la ventaja de terminar una cursada que cuenta con una amplia gama de conocimientos que ayudan a insertarse en el mundo del trabajo con rapidez, y además pueden aplicar para diversos puestos que requieran de sus saberes, tanto en los negocios como en el manejo de una organización. 
</p>

<p>
Por otra parte, puede mencionarse una desventaja con la que se pueden encontrar los interesados en ingresar a la carrera de Gestión empresarial, la cual radica en que al momento de seleccionar la universidad para cursar la tecnicatura, no es usual encontrarla dentro de las carreras regulares que se dictan en las entidades educativas, por lo cual los alumnos no cuentan con una amplia gama de opciones al momento de elegir la institución
</p>

                              

                                </div>

                                <div class="col-lg-5">


                                    <div class="view overlay rounded z-depth-2 initial_height" 
                                    >
                                        <img class="img-fluid" src="../blog2.jpg" alt="Sample image" />
                                        <a>
                                            <div class="mask rgba-white-slight"></div>
                                        </a>
                                    </div>

                                </div>


                            </div>

                             <hr className="my-5" />

                               <section>

<div className="row">


    <div className="col-lg-5 col-xl-4">


        <div className="view overlay rounded z-depth-1-half mb-lg-0 mb-4 initial_height">
            <img className="img-fluid" src="../blog3.jpg" alt="Sample image" />
            <a>
                <div className="mask rgba-white-slight"></div>
            </a>
        </div>

    </div>
    <div className="col-lg-7 col-xl-8">


        <h3 className="font-weight-bold mb-3"><strong>¿Cuáles son las tareas que puede realizar un profesional de la carrera de Gestión Empresarial?
</strong></h3>

        <p className="dark-grey-text text-justify">
        Una de las tareas fundamentales que debe aprender todo profesional, durante el transcurso de la carrera de Gestión Empresarial, es procurar el logro particular de que la productividad aumente o pueda brindar mayores ganancias. De esta manera, el graduado de la carrera tendrá la destreza de reorganizar una empresa y utilizar todos los recursos con los que cuente en su entorno laboral para maximizar los beneficios de la misma, utilizando los conceptos de eficacia y eficiencia. 
        </p>
        <p className="dark-grey-text text-justify">
        El graduado de la carrera de Gestión Empresarial, puede desarrollarse en distintos rubros, ya que si bien las materias dictadas a lo largo de la misma se basan en cuestiones financieras y costos, están aptos para desenvolverse en el ámbito público.
        </p>
    </div>


</div>
</section>

      <hr className="my-5" />
                        </div>
                    </div>

                </Section>
            </div>
        )
    }

}


export default Blog;

