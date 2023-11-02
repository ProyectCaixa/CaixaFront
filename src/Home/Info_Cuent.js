import React from "react";
import "./informacion.css";
import tar1 from "./../assets/4tarjetasdecredito 2.png";
import tar2 from "./../assets/4tarjetasdecredito 3.png";
import Img3 from "./../assets/4tarjetasdecredito 4.png";
import Img4 from "./../assets/4tarjetasdecredito 5.png";
function Info_Cuenta() {
  return (
    <div className="Inform_general text-justify">
      <div class="w-[auto] left-[190px] top-[890px] flex m-5 mx-12">
        <div class="w-[235.47px] h-11  mx-5 px-[39px] py-2 left-0 top-0 rounded-[60px] border border-cyan-600 justify-center items-center gap-2.5 inline-flex">
          <button class="text-cyan-600  text-lg font-normal font-['Roboto'] leading-7 tracking-widest">
            Cuenta Corriente
          </button>
        </div>
        <div>
          <div class="w-[231.47px] h-11  mx-5 px-[39px] py-2 left-0 top-0 rounded-[60px] border border-cyan-600 justify-center items-center gap-2.5 inline-flex">
            <button class="text-cyan-600 text-lg font-normal font-['Roboto'] leading-7 tracking-widest">
              Cuenta ahorros
            </button>
          </div>
        </div>
        <div>
          <div class="w-[231.47px] h-11   mx-5 px-[39px] py-2 left-0 top-0 rounded-[60px] border border-cyan-600 justify-center items-center gap-2.5 inline-flex">
            <button class="text-cyan-600 text-lg font-normal font-['Roboto'] leading-7 tracking-widest">
              Cuenta imagin
            </button>
          </div>
        </div>
        <div>
          <div class="w-[291.77px] h-11 mx-5 px-[39px] py-2 left-[771.23px] top-0 rounded-[60px] border border-cyan-600 justify-center items-center gap-2.5 inline-flex">
            <button class="text-cyan-600 text-lg font-normal font-['Roboto'] leading-7 tracking-widest">
              Cuenta CaixaBank Now
            </button>
          </div>
        </div>
      </div>

      <div className=" m-5">
        <div class="w-[354.16px] left-0 top-0 text-teal-950 text-3xl font-semibold font-['Inter'] capitalize leading-[30px]">
          Cuenta ahorros básica
        </div>
        <div className="flex">
          <div class="w-[704px] left-[1px] top-[45px] opacity-80 text-black text-lg font-normal font-['Inter'] leading-7">
            Incluye:
            <br />
            -Tarjeta de crédito <br />
            -Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>

          <div class="w-[320.84px] h-[306px] mx-10 left-[939px] top-[1049px] ">
            <img
              class="w-[256.93px] h-[136.02px] left-[45.34px] top-[41.45px]  origin-top-left rotate-[-9.28deg]"
              src={tar1}
            />
            <img
              class="w-[256.93px] h-[136.02px] left-[35.20px] top-[108.12px] origin-top-left rotate-[15deg] "
              src={tar2}
            />
          </div>
        </div>
        <div class="w-[130px] h-[50px] px-[39px] py-2 left-[476px] top-[1346px]  rounded-[60px] border border-cyan-600 justify-center items-center gap-2.5 inline-flex">
          <div class="text-cyan-600 text-lg font-normal font-['Roboto'] leading-7 tracking-widest">
            Abrir
          </div>
        </div>
      </div>

      <div className=" m-10 flex">
        <div class="w-[342.25px] h-[329.71px] left-[204px] top-[1484px] ">
          <img
            class="w-[256.93px] h-[176.02px] left-[55px] top-[220.72px] origin-top-left rotate-[20.75deg]"
            src={Img3}
          />
          <img
            class="w-[256.93px] h-[196.02px] left-0 top-[66.50px] origin-top-left rotate-[-20deg]"
            src={Img4}
          />
        </div>

        <div>
          <div class="w-[478px] left-0 top-0 text-teal-950 text-3xl font-semibold font-['Inter'] capitalize leading-[30px]">
            Cuenta ahorros Premium
          </div>

          <div class="w-[629px] left-0 top-[45px] opacity-80 text-black text-lg font-normal font-['Inter'] leading-7">
            Incluye:
            <br />
            -Tarjeta de crédito <br />
            -Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
      <div class="w-[130px] h-[50px] px-[39px] py-2 left-[476px] top-[1346px]  rounded-[60px] border border-cyan-600 justify-center items-center gap-2.5 inline-flex">
        <div class="text-cyan-600 text-lg font-normal font-['Roboto'] leading-7 tracking-widest">
          Abrir
        </div>
      </div>
    </div>
  );
}

export default Info_Cuenta;
