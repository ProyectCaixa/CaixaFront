import React, { useState, useEffect, useContext } from "react";
import GlobalContext from "../calendar_google/context/GlobalContext";
import axios from "axios";
import Popup from "reactjs-popup";
import dayjs from "dayjs";
import Kai_final from "../../assets/kai final 1.png";

function Tareas_Pendientes() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const [tareas_lista_baja, setTarea_Lista_baja] = useState([]);
  const [tareas_lista_alta, setTarea_Lista_Alta] = useState([]);
  const [tareas_lista_media, setTarea_Lista_Media] = useState([]);
  const [tareas_lista, setTarea_Lista] = useState([]);
  const [tareas_lista_compl, setTarea_Lista_Compl] = useState([]);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("baja");
  const [refresh, setRefresh] = useState(true);

  const initInfo = {
    title: title,
    description: description,
    priority: priority,
  };
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3004/task/priority/alta`)
      .then((response) => {
        setTarea_Lista_Alta(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get(`http://localhost:3004/task/priority/media`)
      .then((response) => {
        setTarea_Lista_Media(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get(`http://localhost:3004/task/priority/baja`)
      .then((response) => {
        setTarea_Lista_baja(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get(`http://localhost:3004/task/completed`)
      .then((response) => {
        setTarea_Lista_Compl(response.data);
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

  const addTareas = () => {
    axios
      .post(`http://localhost:3004/task/create`, initInfo)
      .then(function (response) {
        console.log("success");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const Completar_Tarea = (Id) => {
    axios.patch(`http://localhost:3004/task/complete/${Id}`);
    setRefresh(!refresh);
  };

  return (
    <div class="w-[1440px] h-[1508px] relative bg-white">
      <div class="w-[1224px] left-[108px] top-[263px]  justify-between items-center inline-flex">
        <div class="justify-center items-center flex">
          <div class="justify-start items-start gap-px flex">
            <div class="justify-start items-start flex">
              <div class="p-1 bg-zinc-100 rounded-tl-md rounded-bl-md justify-center items-center gap-[7.91px] flex">
                <div class="w-[19.78px] h-[19.78px] relative"></div>
              </div>
            </div>
            <div class="justify-start items-start flex">
              <div class="px-[15.83px] py-[5.94px] bg-zinc-100 justify-start items-center gap-[7.91px] flex">
                <div class="text-zinc-900 text-base font-normal font-['Inter'] leading-none">
                  <button onClick={handleReset()}>
                    {dayjs(new Date(dayjs().year(), monthIndex)).format(
                      "DD MMMM YYYY"
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div class="justify-start items-start flex"></div>
          </div>
        </div>
        <div class="w-[396.54px] h-[62px] p-5 flex-col justify-between items-center inline-flex"></div>
      </div>

      <div class="m-2 gap-6 flex justify-center items-start">
        <div class="grow shrink basis-0 flex-col justify-start items-start gap-[18px] inline-flex w-1/4">
          <div class="self-stretch text-teal-950 text-3xl font-semibold font-['Inter'] leading-[30px]">
            Priodidad Alta
          </div>
          {tareas_lista_alta.map((tarea, index) => {
            return (
              <div>
                {tarea ? (
                  <div>
                    <div class="p-4 bg-white rounded shadow flex-col justify-center items-end gap-2 inline-flex">
                      <div class="self-stretch flex justify-start items-center gap-2">
                        <div class="w-[9px] h-[9px] bg-orange-600 rounded-full"></div>
                        <div class="w-[200px] h-[auto] grow shrink basis-0 text-neutral-700 text-xl font-semibold font-['Inter'] leading-none">
                          {tarea.title}
                        </div>

                        
                      </div><div class="self-stretch  justify-start items-center gap-2 ">
                          <div class="w-[387px] h-[auto] shrink basis-0 text-neutral-500 text-xl font-semibold font-['Inter'] leading-none">
                            {tarea.description}
                          </div>
                        </div>

                      <button onClick={() => Completar_Tarea(tarea._id)}>
                        <div class="w-6 h-6 relative">
                          <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="more_horiz_FILL0_wght400_GRAD0_opsz24 1">
                              <path
                                id="Vector"
                                d="M6.5 14C5.95 14 5.47917 13.8042 5.0875 13.4125C4.69583 13.0208 4.5 12.55 4.5 12C4.5 11.45 4.69583 10.9792 5.0875 10.5875C5.47917 10.1958 5.95 10 6.5 10C7.05 10 7.52083 10.1958 7.9125 10.5875C8.30417 10.9792 8.5 11.45 8.5 12C8.5 12.55 8.30417 13.0208 7.9125 13.4125C7.52083 13.8042 7.05 14 6.5 14ZM12.5 14C11.95 14 11.4792 13.8042 11.0875 13.4125C10.6958 13.0208 10.5 12.55 10.5 12C10.5 11.45 10.6958 10.9792 11.0875 10.5875C11.4792 10.1958 11.95 10 12.5 10C13.05 10 13.5208 10.1958 13.9125 10.5875C14.3042 10.9792 14.5 11.45 14.5 12C14.5 12.55 14.3042 13.0208 13.9125 13.4125C13.5208 13.8042 13.05 14 12.5 14ZM18.5 14C17.95 14 17.4792 13.8042 17.0875 13.4125C16.6958 13.0208 16.5 12.55 16.5 12C16.5 11.45 16.6958 10.9792 17.0875 10.5875C17.4792 10.1958 17.95 10 18.5 10C19.05 10 19.5208 10.1958 19.9125 10.5875C20.3042 10.9792 20.5 11.45 20.5 12C20.5 12.55 20.3042 13.0208 19.9125 13.4125C19.5208 13.8042 19.05 14 18.5 14Z"
                                fill="black"
                              />
                            </g>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            );
          })}
        </div>
        <div class="m-2 grow shrink basis-0 flex-col justify-start items-start gap-[18px] inline-flex w-1/4">
          <div class="self-stretch text-teal-950 text-3xl font-semibold font-['Inter'] leading-[30px]">
            Priodidad media
          </div>
          {tareas_lista_media.map((tarea, index) => {
            return (
              <div>
                {tarea ? (
                  <div>
                    <div class="p-4 bg-white rounded shadow flex-col justify-center items-end gap-2 inline-flex">
                      <div class="self-stretch flex justify-start items-center gap-2">
                        <div class="w-[9px] h-[9px] bg-green-700 rounded-full"></div>
                        <div class="w-[200px] h-[auto] grow shrink basis-0 text-neutral-700 text-xl font-semibold font-['Inter'] leading-none">
                          {tarea.title}
                        </div>

                        
                      </div><div class="self-stretch justify-start items-center gap-2 ">
                          <div class="w-[387px] h-[auto] shrink basis-0 text-neutral-500 text-xl font-semibold font-['Inter'] leading-none">
                            {tarea.description}
                          </div>
                        </div>

                      <button onClick={() => Completar_Tarea(tarea._id)}>
                        <div class="w-6 h-6 relative">
                          <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="more_horiz_FILL0_wght400_GRAD0_opsz24 1">
                              <path
                                id="Vector"
                                d="M6.5 14C5.95 14 5.47917 13.8042 5.0875 13.4125C4.69583 13.0208 4.5 12.55 4.5 12C4.5 11.45 4.69583 10.9792 5.0875 10.5875C5.47917 10.1958 5.95 10 6.5 10C7.05 10 7.52083 10.1958 7.9125 10.5875C8.30417 10.9792 8.5 11.45 8.5 12C8.5 12.55 8.30417 13.0208 7.9125 13.4125C7.52083 13.8042 7.05 14 6.5 14ZM12.5 14C11.95 14 11.4792 13.8042 11.0875 13.4125C10.6958 13.0208 10.5 12.55 10.5 12C10.5 11.45 10.6958 10.9792 11.0875 10.5875C11.4792 10.1958 11.95 10 12.5 10C13.05 10 13.5208 10.1958 13.9125 10.5875C14.3042 10.9792 14.5 11.45 14.5 12C14.5 12.55 14.3042 13.0208 13.9125 13.4125C13.5208 13.8042 13.05 14 12.5 14ZM18.5 14C17.95 14 17.4792 13.8042 17.0875 13.4125C16.6958 13.0208 16.5 12.55 16.5 12C16.5 11.45 16.6958 10.9792 17.0875 10.5875C17.4792 10.1958 17.95 10 18.5 10C19.05 10 19.5208 10.1958 19.9125 10.5875C20.3042 10.9792 20.5 11.45 20.5 12C20.5 12.55 20.3042 13.0208 19.9125 13.4125C19.5208 13.8042 19.05 14 18.5 14Z"
                                fill="black"
                              />
                            </g>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            );
          })}
        </div>

        <div class="m-2 grow shrink basis-0 flex-col justify-start items-start gap-[18px] inline-flex w-1/4">
          <div class="self-stretch text-teal-950 text-3xl font-semibold font-['Inter'] leading-[30px]">
            Priodidad baja
          </div>
          {tareas_lista_baja.map((tarea, index) => {
            return (
              <div>
                <div class="p-4 bg-white rounded shadow flex-col justify-center items-end gap-2 inline-flex">
                  <div class="self-stretch flex justify-start items-center gap-2">
                    <div class="w-[9px] h-[9px] bg-blue-600 rounded-full"></div>
                    <div class="w-[200px] h-[auto] grow shrink basis-0 text-neutral-700 text-xl font-semibold font-['Inter'] leading-none">
                      {tarea.title}
                    </div>
                    
                  </div>
                  <div class="self-stretch justify-start items-center gap-2 ">
                      <div class="w-[387px] h-[auto] shrink basis-0 text-neutral-500 text-xl font-semibold font-['Inter'] leading-none">
                        {tarea.description}
                      </div>
                    </div>

                  <button onClick={() => Completar_Tarea(tarea._id)}>
                    <div class="w-6 h-6 relative">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="more_horiz_FILL0_wght400_GRAD0_opsz24 1">
                          <path
                            id="Vector"
                            d="M6.5 14C5.95 14 5.47917 13.8042 5.0875 13.4125C4.69583 13.0208 4.5 12.55 4.5 12C4.5 11.45 4.69583 10.9792 5.0875 10.5875C5.47917 10.1958 5.95 10 6.5 10C7.05 10 7.52083 10.1958 7.9125 10.5875C8.30417 10.9792 8.5 11.45 8.5 12C8.5 12.55 8.30417 13.0208 7.9125 13.4125C7.52083 13.8042 7.05 14 6.5 14ZM12.5 14C11.95 14 11.4792 13.8042 11.0875 13.4125C10.6958 13.0208 10.5 12.55 10.5 12C10.5 11.45 10.6958 10.9792 11.0875 10.5875C11.4792 10.1958 11.95 10 12.5 10C13.05 10 13.5208 10.1958 13.9125 10.5875C14.3042 10.9792 14.5 11.45 14.5 12C14.5 12.55 14.3042 13.0208 13.9125 13.4125C13.5208 13.8042 13.05 14 12.5 14ZM18.5 14C17.95 14 17.4792 13.8042 17.0875 13.4125C16.6958 13.0208 16.5 12.55 16.5 12C16.5 11.45 16.6958 10.9792 17.0875 10.5875C17.4792 10.1958 17.95 10 18.5 10C19.05 10 19.5208 10.1958 19.9125 10.5875C20.3042 10.9792 20.5 11.45 20.5 12C20.5 12.55 20.3042 13.0208 19.9125 13.4125C19.5208 13.8042 19.05 14 18.5 14Z"
                            fill="black"
                          />
                        </g>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div class="w-[85px] h-[151.27px] top-[1000px] absolute flex-col justify-start items-center gap-2 inline-flex">
          <Popup
            trigger={
              <div class="fixed top-1/2 right-10 transform -translate-y-1/2 flex flex-col align-center">
                <svg
                  width="51"
                  height="50"
                  viewBox="0 0 51 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Component 27">
                    <path
                      id="Vector"
                      d="M25.5 45.8334C37.0059 45.8334 46.3333 36.506 46.3333 25.0001C46.3333 13.4941 37.0059 4.16675 25.5 4.16675C13.9941 4.16675 4.66667 13.4941 4.66667 25.0001C4.66667 36.506 13.9941 45.8334 25.5 45.8334Z"
                      stroke="#007EAE"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M25.5 45.8332C37.0059 45.8332 46.3333 36.5058 46.3333 24.9998C46.3333 13.4939 37.0059 4.1665 25.5 4.1665C13.9941 4.1665 4.66667 13.4939 4.66667 24.9998C4.66667 36.5058 13.9941 45.8332 25.5 45.8332Z"
                      stroke="#007EAE"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M25.5 16.6667V33.3334"
                      stroke="#007EAE"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_4"
                      d="M17.1667 25H33.8333"
                      stroke="#007EAE"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
                <div class="w-[85px] h-[93.27px] flex-col justify-center items-center flex">
                  <img class="w-[85px] h-[93.27px]" src={Kai_final} />
                </div>
              </div>
            }
            modal
            nested
          >
            <div class="w-[438px] h-auto px-4 pb-5 bg-gray-200  rounded-lg flex-col justify-center items-end gap-3 inline-flex z-[999]">
              
              
              <div class="w-[417px] h-[43px] pl-3 justify-between items-center inline-flex">
                <div class="w-[121px] text-black text-base font-semibold font-['Inter']">
                  Nueva Tarea
                </div>
                <div class=" text-zinc-600 text-base font-normal font-['Inter']">
                  <button onClick={addTareas}>Añadir</button>
                </div>
              </div>
              <div class="self-stretch h-auto px-3 py-1 bg-gray-200 rounded-[10px] flex-col justify-center items-end gap-0.5 flex">
                <div class="w-[382px] pr-[339px] pt-3 pb-1.5 justify-start items-center inline-flex">
                  <div class="text-zinc-600 text-base font-normal font-['Inter']">
                    <input
                      type="text"
                      value={title}
                      placeholder="Titulo"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </div>
                
                <div class=" justify-start items-center inline-flex">
                  <div class="w-[382px] h-[37px] pr-[188px] pt-3 pb-1.5 justify-start items-center inline-flex">
                    <div class="text-zinc-600 text-base font-normal font-['Inter']">
                      <input
                        type="text"
                        value={description}
                        placeholder="Descripcion"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div class="self-stretch justify-between items-center inline-flex">
                  <div class="text-center text-neutral-700 text-base font-normal font-['Inter']">
                    Prioridad
                  </div>
                  <div class="h-[31.02px] px-2 py-1 bg-white rounded-sm justify-between items-center flex">
                    <select
                      className="text-center text-neutral-700 text-base font-normal font-['Inter']"
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                    >
                      <option value="alta">alta</option>
                      <option value="media">media</option>
                      <option value="baja">baja</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </Popup>
        </div>
      </div>

      <hr class="w-2 w-full border border-gray-400 m-4" />

      <div class="w-[auto] h-[100%] left-[1249px] top-[1316px] ">
        <div class="m-2 grow shrink basis-0  gap-[18px] ">
          <div class="self-stretch text-teal-950 text-3xl font-semibold font-['Inter'] leading-[30px]">
            Tareas completadas
          </div>
          <div className="flex flex-wrap">
             {tareas_lista_compl.map((tarea, index) => {
            return (
              <div class='flex flex-column' >
                {tarea ? (
                  <div >
                    <div class="m-2  p-4 bg-white rounded shadow  justify-center items-end gap-2">
                      <div class="self-stretch justify-start items-center gap-2 inline-flex">
                        <div class="w-[387px] h-[auto]  w-[200px] h-[auto] grow shrink basis-0 text-neutral-700 text-xl font-semibold font-['Inter'] leading-none">
                          {tarea.title}
                        </div>
                        <div class="w-6 h-6 relative"></div>
                      </div>
                      <div class="self-stretch text-neutral-500 text-base font-normal font-['Inter'] leading-normal">
                        {tarea.description}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            );
          })}
          </div>
         
        </div>
      </div>
    </div>
  );
}
export default Tareas_Pendientes;
