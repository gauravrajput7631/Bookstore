import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../assets/list.json";

function Freebook() {
    // Filter data based on the "Free" category
    const filterData = list.filter((data) => data.category === "Free");

    // Slider settings
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
                <p>
                    Explore our free offered courses. Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Sapiente expedita autem a corporis illum quis animi error
                    culpa libero doloribus.
                </p>
            </div>
            <div className="mt-6">
                <Slider {...settings}>
                    {/* Dynamically rendering the filtered data */}
                    {filterData.map((item) => (
                        <div key={item.id} className="p-4">
                            <div className="shadow-lg rounded-md overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-600">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default Freebook;
