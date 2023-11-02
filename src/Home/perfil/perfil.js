import React, { useState, useEffect, useContext } from "react";
import Gestor from '../../assets/Captura de pantalla 2023-10-24 193942 1.png'

function Info_Perfil() {
  return (
    <div class="w-[1440px] h-[250px] bg-white">
      <div className="Forms_perfil flex m-5  items-center flex justify-center">
        <div class="w-[508px] h-[193px] flex Sleft-[129px] top-[276px]">
          <div class="left-0 top-0  m-5 items-center gap-2.5 ">
            <div>
              <img
                class="w-[164px] h-[164px] relative rounded-[120px] border-2 border-green-500"
                src={Gestor}
              />
            </div>

            <div class="text-neutral-700 text-base m-5 font-medium font-['Inter']">
              Operativo
            </div>
          </div>

          <div className="flex-column">
            <div class="left-[200px] top-0 m-2 flex items-center gap-2">
              <div class="text-black text-xl font-semibold font-['Inter']">
                ID2834
              </div>
              <div class="w-1 h-1 bg-black m-2  rounded-full"></div>
              <div class="text-black text-xl font-semibold font-['Inter']">
                Francisco Pérez H.
              </div>
            </div>
            <div class="left-[200px] top-[40px] m-2 items-start gap-2">
              <div class="text-neutral-950 text-base font-semibold font-['Inter']">
                Especialización:
              </div>
              <div class="text-black text-base font-medium font-['Inter']">
                Hipotecas
              </div>
            </div>
            <div class="left-[200px] top-[75px] m-2 items-start gap-2 ">
              <div class="text-neutral-950 text-base font-semibold font-['Inter']">
                Años de experiencia:
              </div>
              <div class="text-black text-base font-medium font-['Inter']">
                5 años
              </div>
            </div>
            <div class="left-[200px] top-[110px] m-2 items-start gap-2 ">
              <div class="text-neutral-950 text-base font-semibold font-['Inter']">
                Correo electrónico:
              </div>
              <div class="text-black text-base font-medium font-['Inter']">
                FranPH@gmail.com
              </div>
            </div>

            <div class="px-4 py-1 left-[200px] top-[145px] bg-orange-600 rounded-[20px] gap-2.5 inline-flex">
              <div class="text-white text-base font-medium font-['Inter']">
                ¡Empleado del mes!
              </div>
            </div>
          </div>
        </div>
        <div className="Confirmacion_tareas">
          <div class="left-[734px] top-[275px] gap-7 inline-flex">
            <div class="w-[180.52px] h-[174.25px] relative">
              <div class="w-[180.52px] h-[174.25px] left-0 top-0 absolute flex-col justify-start items-center inline-flex">
                <div class="w-[156.60px] h-[156.60px] relative">
                  <div class="w-[110.73px] h-[110.73px] left-[78.30px] top-0 absolute origin-top-left rotate-45 bg-zinc-100 rounded-full"></div>
                  <div class="w-[110.73px] h-[110.73px] left-[22.72px] top-[133.67px] absolute origin-top-left -rotate-90 bg-gradient-to-r from-emerald-300 via-sky-500 to-sky-600 rounded-full"></div>
                  <div class="w-[88.65px] h-[88.65px] left-[33.97px] top-[33.97px] absolute bg-white rounded-full"></div>
                </div>
                <div class="w-[180.52px] text-center text-neutral-700 text-sm font-semibold font-['Inter'] leading-snug">
                  Captación nuevos clientes
                </div>
              </div>
              <div class="left-[69.60px] top-[69.60px] absolute text-neutral-700 text-base font-semibold font-['Inter'] leading-[17.40px]">
                21/50
              </div>
            </div>
            <div class="w-[180.52px] h-[174.25px] relative">
              <div class="w-[180.52px] h-[174.25px] left-0 top-0 absolute flex-col justify-start items-center inline-flex">
                <div class="w-[156.60px] h-[156.60px] relative">
                  <div class="w-[110.73px] h-[110.73px] left-[78.30px] top-0 absolute origin-top-left rotate-45 bg-zinc-100 rounded-full"></div>
                  <div class="w-[110.73px] h-[110.73px] left-[22.72px] top-[133.67px] absolute origin-top-left -rotate-90 bg-gradient-to-t from-emerald-300 via-sky-500 to-sky-600 rounded-full"></div>
                  <div class="w-[88.65px] h-[88.65px] left-[33.97px] top-[33.97px] absolute bg-white rounded-full"></div>
                </div>
                <div class="w-[180.52px] text-center text-neutral-700 text-sm font-semibold font-['Inter'] leading-snug">
                  Venta de Hipotecas
                </div>
              </div>
              <div class="left-[68.51px] top-[69.60px] absolute text-neutral-700 text-base font-semibold font-['Inter'] leading-[17.40px]">
                19/25
              </div>
            </div>
            <div class="w-[180.52px] h-[174.25px] relative">
              <div class="w-[180.52px] h-[174.25px] left-0 top-0 absolute flex-col justify-start items-center inline-flex">
                <div class="w-[156.60px] h-[156.60px] relative">
                  <div class="w-[110.73px] h-[110.73px] left-[78.30px] top-0 absolute origin-top-left rotate-45 bg-zinc-100 rounded-full"></div>
                  <div class="w-[110.73px] h-[110.73px] left-[22.72px] top-[133.67px] absolute origin-top-left -rotate-90 bg-gradient-to-tr from-emerald-300 via-sky-500 to-sky-600 rounded-full"></div>
                  <div class="w-[88.65px] h-[88.65px] left-[33.97px] top-[33.97px] absolute bg-white rounded-full"></div>
                </div>
                <div class="w-[180.52px] text-center text-neutral-700 text-sm font-semibold font-['Inter'] leading-snug">
                  Venta de Seguros
                </div>
              </div>
              <div class="left-[77.21px] top-[69.60px] absolute text-neutral-700 text-base font-semibold font-['Inter'] leading-[17.40px]">
                5/8
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Body_Perfil m-20">
        <div class="w-[1224px] m-5 h-px bg-zinc-300 rounded-sm"></div>


    <div className="flex ">
    <div class="  m-10  flex-col justify-start items-start gap-9 inline-flex">
        <div class="justify-start items-center gap-1.5 inline-flex">
            <div class="text-neutral-700 text-base font-medium font-['Inter'] leading-none">Resumen del día</div>
        </div>
        <div class="justify-start items-center gap-1.5 inline-flex">
            <div class="text-cyan-600 text-base font-medium font-['Inter'] underline leading-none">Venta hipotecas </div>
        </div>
        <div class="justify-start items-center gap-1.5 inline-flex">
            <div class="text-neutral-700 text-base font-medium font-['Inter'] leading-none">Venta seguros </div>
        </div>
        <div class="justify-start items-center gap-1.5 inline-flex">
            <div class="text-neutral-700 text-base font-medium font-['Inter'] leading-none">Informe clientes </div>
        </div>
        <div class="justify-start items-center gap-1.5 inline-flex">
            <div class="text-neutral-700 text-base font-medium font-['Inter'] leading-none">Otros productos</div>
        </div>
        <div class="justify-start items-center gap-1.5 inline-flex">
            <div class="text-neutral-700 text-base font-medium font-['Inter'] leading-none">Estadísticas</div>
        </div>
    </div>
    <div>

    <div class="  justify-start items-start gap-6 inline-flex">
        <div class="flex-col justify-start items-start gap-[18px] inline-flex">
            <div class="h-28 p-4 bg-white rounded shadow flex-col justify-center items-end gap-2 flex">
                <div class="self-stretch justify-start items-center gap-2 inline-flex">
                    <div class="grow shrink basis-0 text-neutral-700 text-xl font-semibold font-['Inter'] leading-none">Hipotecas enero</div>
                    <div class="w-6 h-6 relative"></div>
                </div>
                <div class="self-stretch text-neutral-500 text-base font-normal font-['Inter'] leading-normal">Contratos de hipoteca  - enero 2023</div>
            </div>
            <div class="h-28 p-4 bg-white rounded shadow flex-col justify-center items-end gap-2 flex">
                <div class="self-stretch justify-start items-center gap-2 inline-flex">
                    <div class="grow shrink basis-0 text-neutral-700 text-xl font-semibold font-['Inter'] leading-none">Hipotecas abril</div>
                    <div class="w-6 h-6 relative"></div>
                </div>
                <div class="self-stretch text-neutral-500 text-base font-normal font-['Inter'] leading-normal">Contratos de hipoteca - abril <br/>2023</div>
            </div>
            <div class="h-28 p-4 bg-white rounded shadow flex-col justify-center items-end gap-2 flex">
                <div class="self-stretch justify-start items-center gap-2 inline-flex">
                    <div class="grow shrink basis-0 text-neutral-700 text-xl font-semibold font-['Inter'] leading-none">Hipotecas julio</div>
                    <div class="w-6 h-6 relative"></div>
                </div>
                <div class="self-stretch text-neutral-500 text-base font-normal font-['Inter'] leading-normal">Contratos de hipoteca - <br/>julio 2023</div>
            </div>
            <div class="h-28 p-4 bg-white rounded shadow flex-col justify-center items-end gap-2 flex">
                <div class="self-stretch justify-start items-center gap-2 inline-flex">
                    <div class="grow shrink basis-0 text-neutral-700 text-xl font-semibold font-['Inter'] leading-none">Hipotecas octubre</div>
                    <div class="w-6 h-6 relative"></div>
                </div>
                <div class="self-stretch text-neutral-500 text-base font-normal font-['Inter'] leading-normal">Contratos de hipoteca - octubre 2023</div>
            </div>
        </div>
        <div class="flex-col justify-start items-start gap-[18px] inline-flex">
            <div class="h-28 p-4 bg-white rounded shadow flex-col justify-center items-end gap-2 flex">
                <div class="self-stretch justify-start items-center gap-2 inline-flex">
                    <div class="grow shrink basis-0 text-neutral-700 text-xl font-semibold font-['Inter'] leading-none">Hipotecas febrero</div>
                    <div class="w-6 h-6 relative"></div>
                </div>
                <div class="self-stretch text-neutral-500 text-base font-normal font-['Inter'] leading-normal">Contratos de hipoteca - febrero 2023</div>
            </div>
            <div class="h-28 p-4 bg-white rounded shadow flex-col justify-center items-end gap-2 flex">
                <div class="self-stretch justify-start items-center gap-2 inline-flex">
                    <div class="grow shrink basis-0 text-neutral-700 text-xl font-semibold font-['Inter'] leading-none">Hipotecas mayo</div>
                    <div class="w-6 h-6 relative"></div>
                </div>
                <div class="self-stretch text-neutral-500 text-base font-normal font-['Inter'] leading-normal">Contratos de hipoteca - mayo 2023</div>
            </div>
            <div class="h-28 p-4 bg-white rounded shadow flex-col justify-center items-end gap-2 flex">
                <div class="self-stretch justify-start items-center gap-2 inline-flex">
                    <div class="grow shrink basis-0 text-neutral-700 text-xl font-semibold font-['Inter'] leading-none">Hipotecas agosto</div>
                    <div class="w-6 h-6 relative"></div>
                </div>
                <div class="self-stretch text-neutral-500 text-base font-normal font-['Inter'] leading-normal">Contratos de hipoteca - agosto 2023</div>
            </div>
            <div class="h-28 p-4 bg-white rounded shadow flex-col justify-center items-end gap-2 flex">
                <div class="self-stretch justify-start items-center gap-2 inline-flex">
                    <div class="grow shrink basis-0 text-neutral-700 text-xl font-semibold font-['Inter'] leading-none">Hipotecas noviembre</div>
                    <div class="w-6 h-6 relative"></div>
                </div>
                <div class="self-stretch text-neutral-500 text-base font-normal font-['Inter'] leading-normal">Contratos de hipoteca - noviembre 2023</div>
            </div>
        </div>
        <div class="flex-col justify-start items-start gap-[18px] inline-flex">
            <div class="h-28 p-4 bg-white rounded shadow flex-col justify-center items-end gap-2 flex">
                <div class="self-stretch justify-start items-center gap-2 inline-flex">
                    <div class="grow shrink basis-0 text-neutral-700 text-xl font-semibold font-['Inter'] leading-none">Hipotecas marzo</div>
                    <div class="w-6 h-6 relative"></div>
                </div>
                <div class="self-stretch text-neutral-500 text-base font-normal font-['Inter'] leading-normal">Contratos de hipoteca - marzo 2023</div>
            </div>
            <div class="h-28 p-4 bg-white rounded shadow flex-col justify-center items-end gap-2 flex">
                <div class="self-stretch justify-start items-center gap-2 inline-flex">
                    <div class="grow shrink basis-0 text-neutral-700 text-xl font-semibold font-['Inter'] leading-none">Hipotecas junio</div>
                    <div class="w-6 h-6 relative"></div>
                </div>
                <div class="self-stretch text-neutral-500 text-base font-normal font-['Inter'] leading-normal">Contratos de hipoteca - junio<br/>2023</div>
            </div>
            <div class="h-28 p-4 bg-white rounded shadow flex-col justify-center items-end gap-2 flex">
                <div class="self-stretch justify-start items-center gap-2 inline-flex">
                    <div class="grow shrink basis-0 text-neutral-700 text-xl font-semibold font-['Inter'] leading-none">Hipotecas septiembre</div>
                    <div class="w-6 h-6 relative"></div>
                </div>
                <div class="self-stretch text-neutral-500 text-base font-normal font-['Inter'] leading-normal">Contratos de hipoteca - septiembre 2023</div>
            </div>
            <div class="h-28 p-4 bg-white rounded shadow flex-col justify-center items-end gap-2 flex">
                <div class="self-stretch justify-start items-center gap-2 inline-flex">
                    <div class="grow shrink basis-0 text-neutral-700 text-xl font-semibold font-['Inter'] leading-none">Hipotecas diciembre</div>
                    <div class="w-6 h-6 relative"></div>
                </div>
                <div class="self-stretch text-neutral-500 text-base font-normal font-['Inter'] leading-normal">Contratos de hipoteca - diciembre 2023</div>
            </div>
        </div>
    </div>
    

    </div>

    </div>



      </div>
    </div>
  );
}

export default Info_Perfil;
