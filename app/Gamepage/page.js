"use client";
import Navbar from "@/app/Components/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faGamepad,
  faCheckCircle,
  faStar as solidStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import Gamescopeui from "../Components/Gamescopepage"
const page = () => {
  const [play, setPlay] = useState(false);
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-[#181c2b] via-[#232946] to-[#0f111a] min-h-screen pt-[10px] pb-[100px]">
        <div className="mx-auto max-w-7xl mt-[120px] px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-[40px]">
            {/* Game Cover Card */}
            <div className="relative w-full max-w-[270px] h-[370px] rounded-2xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20 overflow-hidden flex flex-col items-center justify-end group transition-transform duration-300 hover:scale-105">
              <Image
                src="/co9zu1.webp"
                alt="image"
                width={253}
                height={337}
                className="w-full h-[85%] object-cover rounded-t-2xl group-hover:brightness-110 transition duration-300"
              />
              <div className="absolute top-4 left-4 text-white font-extrabold text-3xl drop-shadow-lg font-[Roboto]">
                Mecha Break
              </div>
              <div className="absolute top-20 left-4 text-white font-semibold text-lg font-[Roboto] bg-black/40 px-2 py-1 rounded-lg">
                7/1/2025 <span className="text-xs text-gray-200">(11 days ago)</span>
              </div>
            </div>
            {/* Video/Trailer Card */}
            <div className="relative w-full max-w-[650px] h-[370px] rounded-2xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20 flex items-center justify-center overflow-hidden">
              <div className="absolute top-4 left-4 text-white font-semibold text-lg font-[Roboto] bg-black/40 px-3 py-1 rounded-lg shadow">
                Full release
              </div>
              {!play ? (
                <>
                  <Image
                    src="/your-thumbnail.jpg"
                    alt="Mecha Break Cover"
                    width={620}
                    height={260}
                    className="h-[320px] w-full object-cover rounded-2xl transition duration-300 group-hover:brightness-110"
                    unoptimized
                  />
                  <button
                    onClick={() => setPlay(true)}
                    className="absolute inset-0 flex justify-center items-center bg-black/30 hover:bg-black/50 transition duration-300"
                  >
                    <Image
                      src="/youtubePlay.jpeg"
                      alt="Play Button"
                      width={80}
                      height={80}
                      className="rounded-full shadow-lg border-4 border-white/40 hover:scale-110 transition duration-300"
                    />
                  </button>
                </>
              ) : (
                <iframe
                  className="w-full h-[320px] rounded-2xl shadow-lg"
                  src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            {/* Stats & Ratings Card */}
            <div className="relative w-full max-w-[370px] flex flex-col gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 px-6 py-6 text-white flex flex-col gap-6">
                <div className="border border-white/30 p-4 rounded-xl bg-black/30">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={solidStar}
                        className="text-green-400 text-2xl drop-shadow"
                      />
                      <span className="text-2xl font-bold">8.0</span>
                    </div>
                    <div className="text-sm text-gray-200">15 user ratings</div>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={solidStar}
                        className="text-yellow-400 text-2xl drop-shadow"
                      />
                      <span className="text-2xl font-bold">4.5</span>
                    </div>
                    <div className="text-sm text-gray-200">1 critic ratings</div>
                  </div>
                  <div className="flex gap-1 my-2">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={solidStar}
                        className={`text-white text-lg ${i < 8 ? "opacity-100" : "opacity-30"}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  <div className="flex flex-col items-center border border-white/30 bg-black/30 py-3 rounded-xl shadow">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-white text-2xl mb-1 drop-shadow"
                    />
                    <div className="text-xs">WANT</div>
                    <div className="font-bold text-lg">115</div>
                  </div>
                  <div className="flex flex-col items-center border border-white/30 bg-black/30 py-3 rounded-xl shadow">
                    <FontAwesomeIcon
                      icon={faGamepad}
                      className="text-white text-2xl mb-1 drop-shadow"
                    />
                    <div className="text-xs">PLAYING</div>
                    <div className="font-bold text-lg">27</div>
                  </div>
                  <div className="flex flex-col items-center border border-white/30 bg-black/30 py-3 rounded-xl shadow">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-white text-2xl mb-1 drop-shadow"
                    />
                    <div className="text-xs">PLAYED</div>
                    <div className="font-bold text-lg">24</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 text-white font-extrabold text-2xl font-[Roboto] bg-gradient-to-r from-pink-500/80 to-yellow-400/80 px-4 py-2 rounded-xl shadow-lg -translate-y-1/2">
                Amazing Season
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Gamescopeui/>
      </div>
    </>
  );
};

export default page;
