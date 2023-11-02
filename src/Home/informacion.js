import React from "react";
import "./informacion.css";
import img_14 from "./../assets/image 14.png";
import h_jove from "./../assets/8633804 1.png";
import Popup from "reactjs-popup";
import Kai_final from "../assets/kai final 1.png";
function Informacion() {
  return (
    <Popup
      trigger={
        <div className="Inform_general text-justify">
          <div class="flex m-5 mx-12">
            <div class="w-[194px] h-11 px-[39px] py-2 left-0 top-0  mx-5 bg-cyan-600 rounded-[60px] justify-center items-center gap-2.5 inline-flex">
              <button class="text-white text-lg font-normal font-['Roboto'] leading-7 tracking-widest">
                Informacion
              </button>
            </div>
            <div>
              <div class="w-[214px] h-11 px-[39px] py-2 left-[259px] top-0 mx-5 rounded-[60px] border border-cyan-600 justify-center items-center gap-2.5 inline-flex">
                <button class="text-cyan-600 text-lg font-normal font-['Roboto'] leading-7 tracking-widest">
                  Abrir hipoteca
                </button>
              </div>
            </div>
          </div>

          <div className="flex w-[1064.28px] left-[0.72px] top-[45px] m-5 ">
            <div>
              <div class="w-[486.42px] text-teal-950  text-[50px] font-bold font-['Inter'] capitalize leading-[50px]">
                Tipos de hipoteca
              </div>
              <div class="w-[613.01px] opacity-80 text-zinc-700 text-base font-medium font-['Inter'] leading-7">
                El tipo de interés de una hipoteca puede permanecer fijo o
                variable dependiendo de la modalidad y el perfil de cada
                cliente.{" "}
              </div>
            </div>
            <img
              class="w-[306px] h-[294px] left-[90px] top-[534px] "
              src={img_14}
            />
          </div>

          <div>
            <div
              className="Tex_1"
              class="text-teal-950 text-3xl font-semibold font-['Inter'] capitalize leading-[30px]"
            >
              Hipoteca variable
            </div>
            <div class="w-[1064.28px] left-[0.72px] top-[45px] opacity-80 text-black text-lg font-normal font-['Inter'] leading-7">
              La mayoría de las hipotecas que se firman en España son de interés
              variable. Su cuota varía en función de las fluctuaciones del
              euríbor. Lo habitual es que se aplique el dato del euríbor del mes
              en el que se firma la hipoteca y cada vez que se realiza la
              revisión, se actualiza el tipo de interés en función del euríbor.
              <br />
              De esta forma, si el tipo de interés baja, las cuotas también se
              reducirán, pero si sube, se encarecerán. Las hipotecas variables
              tienen periodos de amortización, por lo general, más amplios, ya
              que pueden llegar hasta los 40 años y suelen tener comisiones más
              bajas que otros tipos de hipotecas.
            </div>
          </div>
          <div class="w-[1065px] h-[238px] left-[188px] top-[1065px]">
            <div class="w-[295px] left-[2px] top-0  text-teal-950 text-3xl font-semibold font-['Inter'] capitalize leading-[30px]">
              Hipoteca fija
            </div>
            <div class="w-[1065px] left-0 top-[45px] opacity-80 text-black text-lg font-normal font-['Inter'] leading-7">
              La entidad financiera ofrece la hipoteca a un tipo de interés fijo
              que solo variaría si se incumplen las condiciones pactadas
              (vinculación de nómina, seguros, planes…).
              <br />
              El plazo máximo de amortización de la hipoteca fija es más corto
              que las de interés variable. Además, el tipo de interés en el
              momento de contratar la hipoteca es más elevado. Cabe destacar
              que, en algunos casos, las comisiones por amortización parcial y
              total también son más altas, por lo que cancelar la hipoteca de
              forma anticipada es más caro.
              <br />
              La ventaja de este tipo de hipoteca es que se evitan sorpresas
              derivados de las fluctuaciones de euríbor, ya que la cuota es
              constante durante todo el periodo del crédito hipotecario.
            </div>
          </div>

          <div>
            <div class="w-[416.78px] left-0 top-0  text-teal-950 text-3xl font-semibold font-['Inter'] capitalize leading-[30px]">
              Hipoteca mixta
            </div>
            <div class="w-[1063.29px] left-[1.71px] top-[45px] opacity-80 text-black text-lg font-normal font-['Inter'] leading-7">
              Aunque se comporta como una hipoteca variable, la hipoteca mixta
              combina el funcionamiento de una fija y una variable. Por lo
              general, los primeros años las cuotas son estables, es decir, la
              entidad financiera ofrece una hipoteca que funciona a un tipo de
              interés fijo. Durante el resto de años de amortización de la
              hipoteca, se aplica un tipo de interés en función del euríbor.
              <br />
              Un ejemplo de ellos sería una hipoteca a 30 años, en la que los
              primeros 10 se paga una cuota fija y los 20 años restantes de
              amortización se tendría aplicado un interés variable en función
              del euríbor. De esta forma, la hipoteca variable permite
              beneficiarse de no sufrir subidas en las cuotas durante los
              primeros años y en el futuro, se adapta a la situación del
              euríbor.
            </div>
          </div>

          <div class="w-[1087px] h-[272px] left-[188px] top-[1596px] flex">
            <div class="w-[592px] h-[155px] left-0 top-[46px] ">
              <div class="w-[424px] left-0 top-0 text-teal-950 text-3xl font-semibold font-['Inter'] capitalize leading-[30px]">
                Hipoteca para jóvenes
              </div>
              <div class="w-[592px] left-0 top-[45px] opacity-80 text-black text-lg font-normal font-['Inter'] leading-7">
                La mayor parte de las entidades bancarias cuentan con una
                modalidad de hipoteca para el público joven, que normalmente han
                podido gestionar sus primeros ahorros tras alguna mejora
                salarial en su empleo, y que cuenta con una edad de entre 30 a
                35 años.
              </div>
            </div>
            <img
              class="w-[408px] h-[272px] left-[679px] top-0 m-4"
              src={h_jove}
            />
          </div>

          <div class="h-[155px] left-[188px] top-[1868px] ">
            <div class="w-[416.78px] left-0 top-0  text-teal-950 text-3xl font-semibold font-['Inter'] capitalize leading-[30px]">
              Hipoteca no-residentes
            </div>
            <div class="w-[1063.29px] left-[1.71px] top-[45px] opacity-80 text-black text-lg font-normal font-['Inter'] leading-7">
              Esta tipología de hipotecas está enfocada a público que no es
              residente en España. Están destinadas principalmente a financiar
              la compra de segundas residencias o residencias vacacionales de
              personas residentes en el extranjero que reparten su tiempo entre
              ambos países. Al no residir en nuestro país, estos clientes suelen
              encontrarse con criterios más estrictos a la hora de pedir el
              préstamo, como pagar el 50% del total del inmueble (en lugar del
              20%) o justificar sus ingresos.
            </div>
          </div>
          <div class="h-32 left-[188px] top-[2058px] ">
            <div class="w-[422.65px] left-0 top-0  text-teal-950 text-3xl font-semibold font-['Inter'] capitalize leading-[30px]">
              Hipoteca para colectivos
            </div>
            <div class="w-[1065px] left-0 top-[45px]  opacity-80 text-black text-lg font-normal font-['Inter'] leading-7">
              Existen colectivos que tienen algunas ventajas a la hora de
              solicitar un préstamo hipotecario, como pueden ser los colectivos
              pertenecientes a funcionarios públicos, personal militar, de
              aviación o empleados de determinadas grandes compañías. Es
              importante dejarse asesorar por nuestros asesores para conocer si
              pertenecemos a uno de estos grupos de interés.
            </div>
          </div>

          <div class="w-[202px] h-[50px] px-[39px] py-2 left-[619.50px] top-[2236px] rounded-[60px] border border-cyan-600 justify-center items-center gap-2.5 inline-flex">
            <button class="text-cyan-600 text-lg font-normal font-['Roboto'] leading-7 tracking-widest">
              Presupuesto
            </button>
          </div>
        </div>
      }
      modal
      nested
    >
      <div class="w-[496px] h-[331px] relative bg-stone-50 shadow">
        <div class="w-[63px] h-[69px] left-[216.50px] top-[32px] absolute flex-col justify-center items-center inline-flex">
          <img class="w-[63px] h-[69px]" src={Kai_final} />
        </div>
        <div class="w-[432px] left-[32px] top-[109px] absolute text-center">
          <span>
            ¡Encantado de conocerte!
            <br />
          </span>
          <span>Soy KAI</span>
          <span>, tu asistente virtual</span>
        </div>
        <div class="left-[33.50px] top-[195px] absolute text-center text-neutral-700 text-base font-normal font-['Inter'] leading-tight">
          Estoy recopilando toda la información de tu ID de gestor.
          <br />
          Un momento, por favor.
        </div>
        <div class="left-[225px] top-[271px] absolute justify-start items-start gap-[11px] inline-flex">
          <div class="w-2 h-2 bg-zinc-300 rounded-full">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle id="Ellipse 24" cx="4" cy="4" r="4" fill="#A9A9A9" />
            </svg>
          </div>
          <div class="w-2 h-2 bg-neutral-400 rounded-full">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle id="Ellipse 24" cx="4" cy="4" r="4" fill="#A9A9A9" />
            </svg>
          </div>
          <div class="w-2 h-2 bg-neutral-500 rounded-full">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle id="Ellipse 24" cx="4" cy="4" r="4" fill="#A9A9A9" />
            </svg>
          </div>
        </div>
      </div>
    </Popup>
  );
}

export default Informacion;
