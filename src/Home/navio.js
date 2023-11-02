import React from 'react';



function Navio() {
    return (

        <div className='Menu_var items-center m-5 mx-20'>

            <div className='Bar_general  flex items-center justify-between'>

                <div class="text-cyan-600 text-[22px] font-normal font-['Inter'] leading-7">

                    <button >
                        <a href="/hipoteca">
                            Hipoteca
                        </a>
                    </button>
                </div>
                <div class="text-cyan-600 text-[22px] font-normal font-['Inter'] leading-7">

                <button >
                        <a href="/cuenta_bancarias">
                        Cuenta Bancarias
                        </a>
                    </button>
                 
                </div >

                <div class="text-cyan-600 text-[22px] font-normal font-['Inter'] leading-7">
                    Inversiones
                </div>

                <div class="text-cyan-600 text-[22px] font-normal font-['Inter'] leading-7">
                    Plan Pensiones
                </div>
                <div class="text-cyan-600 text-[22px] font-normal font-['Inter'] leading-7">
                    Seguros
                </div>

                <div class="text-cyan-600 text-[22px] font-normal font-['Inter'] leading-7">
                    Documento
                </div>
            </div>
            <div class="w-[1270px] h-[0px] left-[98px] top-[405px] border-2 border-cyan-600"></div>




        </div>

    )
}
export default Navio;