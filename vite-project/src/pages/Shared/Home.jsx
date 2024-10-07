import React from "react";
import Particles from "@/components/magicui/particles";
import { Button } from "@/components/ui/button";
import "../../assets/css/Home.css"; // Importing the updated CSS file
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  const handleExploreNowClick = () => {
    window.location.href = "/services/list";
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particles />
      </div>

      <div className="relative z-10 flex flex-row items-center justify-between w-full h-full p-16">
        {/* Left Side: Text and Button */}
        <div className="text-left w-1/2">
          <h1 className="text-4xl">Welcome to Moto-genZ</h1>
          <p className="text-2xl mt-4">
            Your one-stop solution for all automotive needs.
          </p>
          <Button onClick={handleExploreNowClick} className="mt-4">
            Explore Now
          </Button>
        </div>

        {/* Right Side: Carousel */}
        <div className="w-1/2 h-auto">
          <Carousel className="w-full h-auto">
            <CarouselPrevious className="absolute left-0 z-20" />
            <CarouselContent>
              <CarouselItem>
                <img
                  src="/src/assets/img/hero.jpg" // Replace with your image path
                  alt="Car 1"
                  className="object-cover w-full h-70"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/src/assets/img/car2.png" // Replace with your image path
                  alt="Car 2"
                  className="object-cover w-full h-70"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/src/assets/img/car3.png" // Replace with your image path
                  alt="Car 3"
                  className="object-cover w-full h-70"
                />
              </CarouselItem>
              {/* Add more CarouselItems as needed */}
            </CarouselContent>
            <CarouselNext className="absolute right-0 z-20" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
