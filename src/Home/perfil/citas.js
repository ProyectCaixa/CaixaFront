import { useState } from "react";
import "../../App.css";
import axios from "axios";
import Popup from "reactjs-popup";
import Kai_final from "../../assets/kai final 1.png";
const initInfo = {
  summary: "",
  description: "",
  start: "",
  end: "",
};
function Diseño_Cal() {
  const [inputInfo, setInputInfo] = useState(initInfo);
  const addEvento = () => {
    axios
      .post(`http://localhost:3004/calendar/create`, inputInfo)
      .then(function (response) {
        console.log("success");
        setInputInfo(initInfo);
        setTimeout(() => {
          console.log("redirect");
        }, 2000);
      })
      .catch(function (error) {
        console.log(error);
        setInputInfo(initInfo);
      });
  };
  const handlerChangeForm = (field) => (e) =>
    setInputInfo({ ...inputInfo, [field]: e.target.value });
  return (
    <div class="w-[1440px] h-sceen bg-white">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=601&wkst=2&bgcolor=%234285F4&ctz=Europe%2/Madrid&mode=WEEK&showTitle=0&showNav=0&showPrint=0&showTabs=1&showTz=0&src=cmV0b2NhaXhhYmFua0BnbWFpbC5jb20&color=%23039BE5"
        style={{ borderWidth: "0" }} // Nota el cambio en la propiedad de estilo
        width="100%"
        height="601"
        title="reto"
      ></iframe>
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
        <div class="w-[438px] h-[338px] px-4 pb-5 bg-white rounded-lg shadow flex-col justify-center items-end gap-3 inline-flex">
          <div class="w-[417px] h-[43px] pl-3 justify-between items-center inline-flex">
            <div class="text-red-700 text-base font-normal font-['Inter']">
              Cancelar
            </div>
            <div>Nuevo Tarea</div>
            <div class="text-zinc-600 text-base font-normal font-['Inter']">
              <button onClick={addEvento}>Añadir</button>
            </div>
          </div>
          <div class="self-stretch h-[200px] px-3 py-1 bg-gray-200 rounded-[10px] flex-col justify-center items-end gap-0.5 flex">
            <div class="w-[382px] pr-[339px] pt-3 pb-1.5 justify-start items-center inline-flex">
              <div class="text-zinc-600 text-base font-normal font-['Inter']">
                <input
                  type="text"
                  value={inputInfo.summary}
                  placeholder="Titulo"
                  onChange={handlerChangeForm("summary")}
                />
              </div>
            </div>
            <div class="w-[382px] pr-[339px] pt-3 pb-1.5 justify-start items-center inline-flex">
              <div class="text-zinc-600 text-base font-normal font-['Inter']">
                <input
                  type="text"
                  value={inputInfo.start}
                  placeholder="2023-11-02T10:00:00"
                  onChange={handlerChangeForm("start")}
                />
              </div>
            </div>
            <div class="w-[382px] pr-[339px] pt-3 pb-1.5 justify-start items-center inline-flex">
              <div class="text-zinc-600 text-base font-normal font-['Inter']">
                <input
                  type="text"
                  value={inputInfo.end}
                  placeholder="2023-11-02T10:00:00"
                  onChange={handlerChangeForm("end")}
                />
              </div>
            </div>
            <div class="self-stretch h-px bg-neutral-200"></div>
            <div class=" justify-start items-center inline-flex">
              <div class="w-[382px] pr-[339px] pt-3 pb-1.5 justify-start items-center inline-flex">
                <div class="text-zinc-600 text-base font-normal font-['Inter']">
                  <input
                    type="text"
                    value={inputInfo.description}
                    placeholder="Descripción"
                    onChange={handlerChangeForm("description")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="self-stretch h-px bg-neutral-100"></div>
          <div class="self-stretch h-[135.02px] px-3 py-1 bg-gray-200 rounded-[10px] flex-col justify-center items-end gap-0.5 flex">
            <div class="self-stretch h-px bg-neutral-100"></div>
            <div class="self-stretch justify-between items-center inline-flex">
              <div class="text-center text-neutral-700 text-base font-normal font-['Inter']">
                Motivo
              </div>
              <div class="h-[31.02px] px-2 py-1 bg-white rounded-sm justify-between items-center flex">
                <select
                  class="text-center text-neutral-700 text-base font-normal font-['Inter']"
                  value="selectOption"
                >
                  <option value="volvo">Trabajo</option>
                  <option value="saab">Hipotecas</option>
                  <option value="mercedes">Consultas</option>
                  <option value="audi">Citas</option>
                </select>
                <div class="flex-col justify-end items-end inline-flex">
                  <div class="w-[14.93px] h-[23.02px] relative">
                    <div class="w-[14.93px] h-[14.93px] left-0 top-0 absolute">
                      <div class="w-[14.93px] h-[14.93px] left-0 top-0 absolute bg-zinc-300"></div>
                    </div>
                    <div class="w-[14.93px] h-[14.93px] left-[-0px] top-[8.09px] absolute">
                      <div class="w-[14.93px] h-[14.93px] left-0 top-0 absolute bg-zinc-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default Diseño_Cal;
