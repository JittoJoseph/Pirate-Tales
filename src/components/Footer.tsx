"use client";

import {
  GiPirateSkull,
  GiTreasureMap,
  GiPirateHat,
  GiAnchor,
} from "react-icons/gi";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-amber-900 border-t-4 border-amber-600 mt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="text-center space-y-6">
          {/* Funny Quote */}
          <div className="bg-parchment rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <GiPirateSkull className="text-3xl text-red-800 mr-3" />
              <p className="font-pirate-title text-2xl text-red-900">
                "Dead men tell no tales, but they sure buy a lot of stuff!"
              </p>
              <GiTreasureMap className="text-3xl text-amber-600 ml-3" />
            </div>
            <p className="font-pirate-body text-amber-800 italic">
              - Captain Checkout McPurchasebeard
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-amber-200">
            <div className="flex items-center space-x-2">
              <GiAnchor className="text-xl" />
              <span className="font-pirate-body">
                Satisfaction Guaranteed or Ye Walk the Plank!
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <GiPirateHat className="text-xl" />
              <span className="font-pirate-body">
                Free Shipping on Orders Over 100 Doubloons
              </span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border-t-2 border-amber-600 pt-6 space-y-3">
            <p className="font-pirate-body text-amber-300 text-sm">
              Warning: Cutlasses may cause sudden urges to say "Arrr!" and
              search for buried treasure.
            </p>
            <p className="font-pirate-body text-amber-300 text-sm">
              Side effects of shopping here may include: Parrot acquisition,
              tricorn hat addiction, and an inexplicable need to talk like a
              pirate.
            </p>
            <p className="font-pirate-body text-amber-300 text-sm">
              No actual pirates were harmed in the making of this website. Some
              may have been mildly inconvenienced.
            </p>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-amber-600 pt-4">
            <p className="font-pirate-body text-amber-200 flex items-center justify-center space-x-2">
              <span>© 2025 The Captain's Treasure Shop - Made with</span>
              <FaHeart className="text-red-500" />
              <span>and a bottle of rum</span>
              <GiPirateSkull className="text-amber-300" />
            </p>
            <p className="font-pirate-body text-amber-400 text-xs mt-2">
              "Where every purchase is a treasure and every customer is a
              matey!"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
