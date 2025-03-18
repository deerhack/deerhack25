"use client";
import MentorReviewSVG from "@/app/assets/images/MentorReview";
import VolunteerReviewSVG from "@/app/assets/images/VolunteerReview";
import MainExpCard from "@/app/components/TheDeerHackExp/MainExpCard";
import { useRef, useState, useEffect, ReactElement } from "react";

type Testimonial = {
  id: number;
  description: string;
  bottomText: string;
  finBottomText: string;
  svg: ReactElement;
}

export default function ExperienceCard(){
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const testimonials: Testimonial[] = [
        {
            id: 1,
            description: "Everything was pretty smooth. For the students to be able to organize something as amazing as this is pretty remarkable. So, take your time and pat yourself on the back maybe." ,
            bottomText: "Mentor",
            finBottomText: "DeerHack 2024",
            svg: <MentorReviewSVG />
        },
        {
            id: 2,
            description: "Nice learning experience. Workshops were mind refreshing. Organizers and volunteers were super friendly. Would love to join more events organized by them.",
            bottomText: "Volunteer",
            finBottomText: "DeerHack 2024",
            svg: <VolunteerReviewSVG />
        },
        {
            id: 3,
            description: "Everything was as well managed as it could be! From amazing coffee and food to the awesome group of motivating mentors and super helpful volunteers and the organizers. Thank you for an amazing experience!",
            bottomText: "Participant",
            finBottomText: "DeerHack 2024",
            svg: <MentorReviewSVG />
        }
    ];

    const scrollToSlide = (index: number) => {
        if(scrollRef.current){
            const slideWidth = scrollRef.current.offsetWidth;
            scrollRef.current.scrollTo({
                left: slideWidth * index,
                behavior: "smooth",
            })
            setActiveIndex(index);
        }
    }

    const nextSlide = () => {
        const newIndex = activeIndex === testimonials.length - 1 ? 0: activeIndex + 1;
        scrollToSlide(newIndex);
    }

    const prevSlide = () => {
        const newIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
        scrollToSlide(newIndex);
    }

    useEffect(() => {
        const handleScroll = () => {
            if(scrollRef.current){
                const scrollPosition = scrollRef.current.scrollLeft;
                const slideWidth = scrollRef.current.offsetWidth;
                const newIndex = Math.round(scrollPosition / slideWidth);

                if(newIndex !== activeIndex){
                    setActiveIndex(newIndex);
                }
            }
        }

        const scrollContainer = scrollRef.current;
        if(scrollContainer){
            scrollContainer.addEventListener("scroll", handleScroll);
            return () => scrollContainer.removeEventListener("scroll", handleScroll)
        }
    }, [activeIndex])

    return(
        <div
        ref = {scrollRef}
        className=" gap-6 mt-10 ml-[9vw]">
            <div className="flex flex-row gap-6" ref={scrollRef}>
            {testimonials.map((testimonial, index) =>
            <MainExpCard
            key={index}
            description={testimonial.description}
            bottomText={testimonial.bottomText}
            finBottomText={testimonial.finBottomText}
            svg = {testimonial.svg}
            />    
        )
            }
            </div>

            <div className="flex justify-center mt-4">
                {testimonials.map((_, index) => (
                    <button
                    key={index}
                    onClick={() => scrollToSlide(index)}
                    className={`h-2 mx-1 rounded-full transition-all ${
                      activeIndex === index ? "bg-white w-4" : "bg-gray-500 w-2 opacity-50"
                    }`}
                  >
                  </button>
                ))}
            </div>
        </div>
        
    );
}