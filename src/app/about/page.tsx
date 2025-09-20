"use client";

import Image from "next/image";
import Link from "next/link";
import {
  GiPirateSkull,
  GiTreasureMap,
  GiPirateHat,
  GiAnchor,
  GiPirateFlag,
  GiSailboat,
} from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";

export default function AboutCaptain() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center space-x-2 bg-red-800 hover:bg-red-700 text-amber-100 px-4 py-2 rounded-md font-pirate-body mb-8 transition-colors"
      >
        <FaArrowLeft />
        <span>Back to Shop</span>
      </Link>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="bg-parchment rounded-lg p-8 shadow-lg text-center">
          <div className="flex items-center justify-center mb-6">
            <GiPirateFlag className="text-6xl text-red-800 mr-4" />
            <div>
              <h1 className="font-pirate-title text-5xl lg:text-7xl text-red-900">
                Meet the Captain
              </h1>
              <p className="font-pirate-body text-xl text-amber-800 mt-2">
                Captain Silvias "Clickbeard" McCommerce
              </p>
            </div>
            <GiSailboat className="text-6xl text-amber-600 ml-4" />
          </div>
        </div>

        {/* Captain's Portrait & Story */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Portrait */}
          <div className="bg-parchment rounded-lg p-6 shadow-lg">
            <div className="relative h-80 w-full mb-4 bg-amber-800 rounded-lg flex items-center justify-center">
              <GiPirateHat className="text-8xl text-amber-200" />
              <p className="absolute bottom-2 left-2 right-2 text-center font-pirate-body text-amber-700 text-sm">
                Portrait lost in the great rum spill of '23
              </p>
            </div>
            <div className="text-center space-y-2">
              <h3 className="font-pirate-title text-2xl text-red-900">
                The Captain
              </h3>
              <p className="font-pirate-body text-amber-800">
                "Best treasure hunter this side of the Caribbean!"
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="bg-parchment rounded-lg p-6 shadow-lg">
            <h2 className="font-pirate-title text-3xl text-red-900 mb-4 flex items-center">
              <GiTreasureMap className="mr-3" />
              The Legend
            </h2>
            <div className="space-y-4 font-pirate-body text-amber-800">
              <p>
                Born on a stormy night in 1647, Captain Silvias earned the
                nickname "Clickbeard" not from the sound of his facial hair, but
                from his legendary ability to click "Add to Cart" faster than
                any pirate in the seven seas.
              </p>
              <p>
                After 30 years of sailing and collecting the finest treasures,
                the Captain decided to hang up his cutlass and open the most
                magnificent online treasure shop the world has ever seen.
              </p>
              <p className="italic text-amber-700">
                "Why bury treasure when you can sell it for a fair price and
                excellent customer service?" - Captain Clickbeard
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-parchment rounded-lg p-8 shadow-lg">
          <h2 className="font-pirate-title text-4xl text-red-900 mb-6 text-center flex items-center justify-center">
            <GiPirateSkull className="mr-3" />
            Notable Achievements
            <GiAnchor className="ml-3" />
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <GiTreasureMap className="text-2xl text-amber-600 mt-1" />
                <div>
                  <h3 className="font-pirate-title text-xl text-red-800">
                    Treasure Hunter Extraordinaire
                  </h3>
                  <p className="font-pirate-body text-amber-800">
                    Discovered over 500 treasure chests, including the legendary
                    Golden Shopping Cart of El Dorado
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <GiSailboat className="text-2xl text-amber-600 mt-1" />
                <div>
                  <h3 className="font-pirate-title text-xl text-red-800">
                    Master Navigator
                  </h3>
                  <p className="font-pirate-body text-amber-800">
                    Sailed to all seven seas and three imaginary oceans
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <GiPirateFlag className="text-2xl text-amber-600 mt-1" />
                <div>
                  <h3 className="font-pirate-title text-xl text-red-800">
                    Diplomatic Pirate
                  </h3>
                  <p className="font-pirate-body text-amber-800">
                    First pirate to negotiate a peace treaty using only puns and
                    dad jokes
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <GiAnchor className="text-2xl text-amber-600 mt-1" />
                <div>
                  <h3 className="font-pirate-title text-xl text-red-800">
                    Customer Service Champion
                  </h3>
                  <p className="font-pirate-body text-amber-800">
                    Maintains a 99.9% customer satisfaction rate (the 0.1% were
                    sea monsters)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-parchment rounded-lg p-8 shadow-lg">
          <h2 className="font-pirate-title text-4xl text-red-900 mb-6 text-center">
            Fun Facts About the Captain
          </h2>

          <div className="grid md:grid-cols-2 gap-4 font-pirate-body text-amber-800">
            <ul className="space-y-2">
              <li>• Has a pet parrot named "Return Policy"</li>
              <li>• Can tie 47 different types of sailor knots</li>
              <li>• Once defeated a kraken in a staring contest</li>
              <li>• Collects vintage treasure maps as a hobby</li>
            </ul>
            <ul className="space-y-2">
              <li>• Speaks fluent Parrot and basic Dolphin</li>
              <li>• Has never met a treasure they couldn't appraise</li>
              <li>• Secretly enjoys romantic comedies</li>
              <li>• Makes the world's best fish and chips</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-red-800 rounded-lg p-8 shadow-lg text-center">
          <h2 className="font-pirate-title text-4xl text-amber-100 mb-4">
            Ready to Start Your Own Treasure Hunt?
          </h2>
          <p className="font-pirate-body text-amber-200 text-xl mb-6">
            Browse our carefully curated collection of authentic pirate
            treasures!
          </p>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-500 text-red-900 px-8 py-3 rounded-md font-pirate-body text-lg font-bold transition-colors"
          >
            <GiTreasureMap />
            <span>Explore Treasures</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
