import React from 'react';
import { ArrowRight, CheckCircle, Ticket } from 'lucide-react';
import Herologo from '../assets/Hero.svg';

const ticketUrl = 'https://www.tickettailor.com/events/mixmastersclub/2286051?utm_source=ig&utm_medium=social&utm_content=link_in_bio';

const RegisterView = ({ navigateTo = () => {} }) => {
    return (
        <div className="pt-20 sm:pt-28 md:pt-36 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#C5A059] blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900 blur-[120px] rounded-full animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
                <div className="flex flex-col items-center mb-8 sm:mb-12 md:mb-16 text-center">
                    <img
                        src={Herologo}
                        alt="MixMasters Club Logo"
                        className="w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 object-contain opacity-90"
                    />
                    <p className="mt-2 sm:mt-4 font-['Montserrat'] text-[9px] sm:text-[10px] text-[#C5A059] uppercase tracking-[0.4em]">
                        DJ Registration Closed
                    </p>
                    <h1 className="mt-3 font-['Cinzel'] text-[clamp(1.5rem,4vw,3.25rem)] text-white tracking-[0.06em] max-w-[34rem] leading-tight">
                        MixMasters Club International Tamil DJ Battle
                    </h1>
                    <span className="font-['Cinzel'] text-[#C5A059] text-base sm:text-lg md:text-xl tracking-[0.3em] mt-2">
                        2026
                    </span>
                    <div className="h-px w-16 bg-[#C5A059]/50 mt-3 sm:mt-4" />
                </div>

                <div className="bg-[#0a0a0a] border-2 border-white/5 p-6 sm:p-8 md:p-10 lg:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative backdrop-blur-sm text-center">
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C5A059]/30" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C5A059]/30" />

                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 shadow-[0_0_20px_rgba(197,160,89,0.2)] mb-6">
                        <Ticket className="text-[#C5A059]" size={30} />
                    </div>

                    <h2 className="font-['Cinzel'] text-2xl sm:text-3xl md:text-4xl text-white tracking-[0.12em]">
                        Registration is now closed
                    </h2>

                    <p className="mt-4 font-['Montserrat'] text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed uppercase tracking-[0.18em]">
                        Tickets for the DJ battle can still be purchased using the link below.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                        <a
                            href={ticketUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="uppercase tracking-[0.3em] text-[9px] sm:text-[10px] font-['Montserrat'] inline-flex items-center justify-center gap-2 transition-all px-6 sm:px-8 py-3 sm:py-4 bg-[#C5A059] text-black shadow-[0_0_12px_rgba(197,160,89,0.35)] hover:bg-[#E5C580]"
                        >
                            BUY TICKETS <ArrowRight size={14} />
                        </a>

                        <button
                            onClick={() => navigateTo('home')}
                            className="uppercase tracking-[0.3em] text-[9px] sm:text-[10px] font-['Montserrat'] inline-flex items-center justify-center gap-2 transition-all px-6 sm:px-8 py-3 sm:py-4 border border-white/10 text-white hover:border-[#C5A059]/50 hover:text-[#C5A059]"
                        >
                            <CheckCircle size={14} /> RETURN HOME
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RegisterView;