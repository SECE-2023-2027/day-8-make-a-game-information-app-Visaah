"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faGamepad,
  faCheckCircle,
  faStar as solidStar,
} from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans mx-[185px]">
      <nav className="bg-gray-100 border-b border-gray-300 px-8 py-3 flex items-center justify-between sticky top-0 z-50">
        <ul className="flex space-x-8 font-semibold text-gray-700">
          <li>
            <a className="text-purple-600 border-b-2 border-purple-600 pb-2">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-gray-900 transition">Community</a>
          </li>
          <li>
            <a className="hover:text-gray-900 transition">Media</a>
          </li>
          <li>
            <a className="hover:text-gray-900 transition">Related Content</a>
          </li>
          <li>
            <a className="hover:text-gray-900 transition">Releases</a>
          </li>
        </ul>
        <button className="flex items-center gap-2 text-purple-600 border border-purple-600 rounded-md px-4 py-1 text-sm font-medium hover:bg-purple-50 transition">
          <FontAwesomeIcon icon={faCheckCircle} />
          Edit
        </button>
      </nav>

      <div className="px-12 py-8 grid grid-cols-12 gap-6">
        <div className="col-span-9 space-y-6">
          <div className="bg-white border rounded-md shadow-sm p-6">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <h3 className="font-bold">Main Developers</h3>
                <p className="text-purple-600">Amazing Seasun</p>
              </div>
              <div>
                <h3 className="font-bold">Publishers</h3>
                <p className="text-purple-600">Amazing Seasun</p>
              </div>
              <div>
                <h3 className="font-bold">Genres</h3>
                <p className="text-purple-600">Shooter</p>
              </div>
              <div>
                <h3 className="font-bold">Game Modes</h3>
                <p className="text-purple-600">
                  Multiplayer, Co-operative, Battle Royale
                </p>
              </div>
              <div>
                <h3 className="font-bold">Themes</h3>
                <p className="text-purple-600">
                  Action, Science fiction, Warfare
                </p>
              </div>
              <div>
                <h3 className="font-bold">Player Perspectives</h3>
                <p className="text-purple-600">Third person</p>
              </div>
              <div>
                <h3 className="font-bold">Series</h3>
                <p>-</p>
              </div>
              <div>
                <h3 className="font-bold">Is a spin-off of</h3>
                <p>-</p>
              </div>
              <div>
                <h3 className="font-bold">Franchises</h3>
                <p>-</p>
              </div>
              <div>
                <h3 className="font-bold">Game Engine</h3>
                <p className="text-purple-600">Unity</p>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-md shadow-sm p-6">
            <h3 className="font-bold text-sm mb-2">Story</h3>
            <p className="text-sm leading-relaxed">
              Discover an array of assault, melee, sniper, reconnaissance, and
              support mechs, each with unique playstyles. Engage in immersive
              aerial and ground combat, employing strategic tactics for close
              and long-range encounters. Unleash devastating firepower, scorch
              foes with precision beams, and rain missil...
              <span className="text-purple-600 ml-1 cursor-pointer">More</span>
            </p>
          </div>

          <div className="bg-white border rounded-md shadow-sm p-6">
            <div className="grid grid-cols-2 text-sm gap-4">
              <div>
                <h3 className="font-bold">Localized Titles</h3>
                <p>-</p>
              </div>
              <div>
                <h3 className="font-bold">Alternative Titles</h3>
                <p>
                  <strong>Stylized title:</strong> Mecha BREAK
                </p>
                <p>
                  <strong>Chinese title – simplified:</strong> 解限机
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 space-y-6">
          <div className="bg-white border rounded-md shadow-sm p-4 text-sm">
            <h3 className="font-bold">IGDB ID:</h3>
            <p>279526</p>
          </div>

          <div className="bg-white border rounded-md shadow-sm p-4 text-sm">
            <h3 className="font-bold mb-2">Releases</h3>
            <p>
              <strong>PC:</strong> 2025-7-1
            </p>
            <p>
              <strong>Xbox Series X|S:</strong> 2025-7-1
            </p>
            <p className="text-purple-600 mt-1 text-xs underline cursor-pointer">
              Detailed view
            </p>
          </div>

          <div className="bg-white border rounded-md shadow-sm p-4 text-sm">
            <h3 className="font-bold mb-2">Time to beat</h3>
            <div className="flex justify-between items-center text-center">
              <div>
                <p className="text-xs text-gray-600">Hastily</p>
                <div className="text-purple-800 font-bold">N/A</div>
              </div>
              <div>
                <p className="text-xs text-gray-600">Normally</p>
                <div className="text-purple-800 font-bold">N/A</div>
              </div>
              <div>
                <p className="text-xs text-gray-600">Completely</p>
                <div className="text-purple-800 font-bold">N/A</div>
              </div>
            </div>
            <p className="text-xs mt-2 text-gray-500">No times submitted yet</p>
            <button className="mt-2 text-sm text-purple-600 border rounded px-3 py-1 hover:bg-purple-50 transition">
              Add times
            </button>
          </div>

          <div className="bg-white border rounded-md shadow-sm p-4 text-sm">
            <h3 className="font-bold">Links</h3>
            <p>-</p>
          </div>
        </div>
      </div>
    </div>
  );
}
