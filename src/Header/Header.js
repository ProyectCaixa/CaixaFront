import React, { useState, useEffect } from "react";
import "./header.css";
import logo_caixa from "../assets/2560px-Logo_CaixaBank 2.png";
import axios from "axios";
import { useLocation } from "react-router-dom";
function Header() {
  const [tareasEventosToday, setEventosToday] = useState([]);
  const [tareas_lista, setTarea_Lista] = useState([]);
  let location = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:3004/calendar/today`)
      .then((response) => {
        setEventosToday(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get(`http://localhost:3004/task/getall`)
      .then((response) => {
        setTarea_Lista(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const changeBotto = () => {
    if (location.pathname === "/") {
      return (
        <div className="H_I w-auto h-[78px] bg-cyan-600">
          <div class="w-[0px] h-[18px] left-0 top-[20px] bg-cyan-600"></div>
          <div class="w-[310px] h-[18px] left-[96px] top-[269px] text-neutral-100 text-lg font-bold items-center font-['Inter'] uppercase leading-tight">
            FRANCISCO LÓPEZ FERRÁN
          </div>
          <div></div>

          <div className="flex justify-between">
            <div class="w-[68px] h-7 m-5 pb-[3px] left-[754px] top-[26px] justify-center items-center inline-flex">
              <div class="text-white text-xl font-normal font-['Outfit'] underline">
                Archivo
              </div>
            </div>
            <div class="text-white m-5 text-xl font-normal font-['Outfit']">
              Productos
            </div>
            <div class="w-[71px] h-[27.39px] m-5 left-[1102px] top-[25.44px] text-neutral-100 text-xl font-normal font-['Outfit'] leading-7">
              Clientes
            </div>
            <div class="w-[90px] h-[27.39px] m-5 left-[1257px] top-[25.44px] text-neutral-100 text-xl font-normal font-['Outfit'] leading-7">
              <button>
                <a class=" " href="/gestor/perfil">
                  Mi perfil
                </a>
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="H_I w-auto h-[78px] bg-cyan-600">
            <div class="w-[0px] h-[18px] left-0 top-[20px] bg-cyan-600"></div>
            <div class="text-white text-lg mx-[-600px] font-semibold font-['Inter'] uppercase leading-tight">
              KAIbot - Tu asistente virtual
            </div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div class="w-[1224px] justify-start m-5 mx-20 items-start inline-flex">
              <div class="grow shrink basis-0 h-10 px-4 py-2 border-b-2 border-cyan-600 justify-center items-center gap-2.5 flex">
                <div class="justify-center items-center gap-2.5 flex">
                  <button>
                    <a
                      class="text-cyan-600 text-xl font-normal font-['Inter']"
                      href="/gestor/citas"
                    >
                      Citas
                    </a>
                  </button>
                </div>
                <div class="px-2 py-1 bg-red-500 rounded-[60px] justify-center items-center gap-2.5 flex">
                  <div class="text-center text-white text-sm font-normal font-['Roboto'] tracking-wider">
                    {tareasEventosToday.length}
                  </div>
                </div>
              </div>
              <div class="grow shrink basis-0 h-10 px-4 py-2 border-b-2 border-neutral-400 justify-center items-center gap-2.5 flex">
                <div class="justify-center items-center gap-2.5 flex">
                  <button>
                    <a
                      class="text-cyan-600 text-xl font-normal font-['Inter']"
                      href="/gestor/tareas_pendientes"
                    >
                      Tareas pendientes
                    </a>
                  </button>
                </div>
                <div class="px-2 py-1 bg-red-500 rounded-[60px] justify-center items-center gap-2.5 flex">
                  <div class="text-center text-white text-sm font-normal font-['Roboto'] tracking-wider">
                    {tareas_lista.length}
                  </div>
                </div>
              </div>

              <div class="grow shrink basis-0 h-10 px-4 py-2 border-b-2 border-neutral-400 justify-center items-center gap-2.5 flex">
                <div class="justify-center items-center gap-2.5 flex">
                  <button>
                    <a
                      class="text-cyan-600 text-xl font-normal font-['Inter']"
                      href="/gestor/perfil"
                    >
                      Mi perfil
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="Header_container " class="w-[1440px] h-[250px bg-stone-50 ">
      <div className="H_S">
        <div className="Menu_H ">
          <div class="w-[17px] m-5 h-[11px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="11"
              viewBox="0 0 17 13"
              fill="none"
            >
              <line
                x1="0.65"
                y1="1.35"
                x2="16.35"
                y2="1.35"
                stroke="#343434"
                stroke-width="1.3"
                stroke-linecap="round"
              />
              <line
                x1="0.65"
                y1="6.85"
                x2="16.35"
                y2="6.85"
                stroke="#343434"
                stroke-width="1.3"
                stroke-linecap="round"
              />
              <line
                x1="0.65"
                y1="12.35"
                x2="16.35"
                y2="12.35"
                stroke="#343434"
                stroke-width="1.3"
                stroke-linecap="round"
              />
            </svg>
          </div>

          <button class="left-[21px] flex m-0 top-0 text-neutral-700 text-lg font-normal font-['Roboto'] leading-7 tracking-widest">
            <a href="/">
              <div className="text-neutral-700 text-lg font-normal font-['Roboto'] leading-7 tracking-widest">
                Menú
              </div>
            </a>
          </button>
        </div>

        <div className="Logo_Caixa w-[243px] h-[50px] left-0 top-0">
          <img class="w-[243px] h-[50px] left-0 top-0 " src={logo_caixa} />
          <div class="left-[154px] top-[46px]  text-black text-[17px] font-bold font-['Weiss Std'] uppercase leading-7">
            gestores
          </div>
        </div>

        <div
          className="Button_entrar"
          class="w-[135px] h-11 px-[39px] py-2 left-[294px] top-[25px]  bg-cyan-600 rounded-[60px] justify-center items-center gap-2.5 inline-flex"
        >
          <button class="text-white text-lg font-normal font-['Roboto'] leading-7 tracking-widest">
            <a href="/">Salir</a>
          </button>
        </div>
      </div>

      <div className="navbar">
        <div>
          <div>{changeBotto()} </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
