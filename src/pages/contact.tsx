import React from "react";
import NavBar from "../components/NavBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ContactPerson {
    name: string;
    role: string;
    email: string;
    phone: string;
    image: string;
}

const contactList: ContactPerson[] = [
    {
        name: "John Doe",
        role: "CEO",
        email: "john.doe@matrixmath.com",
        phone: "+1 (555) 123-4567",
        image: "/images/ceo.jpeg",
    },
    {
        name: "Jane Smith",
        role: "CTO",
        email: "jane.smith@matrixmath.com",
        phone: "+1 (555) 987-6543",
        image: "/images/cto.jpeg",
    },
    {
        name: "Alice Johnson",
        role: "HR Manager",
        email: "alice.johnson@matrixmath.com",
        phone: "+1 (555) 456-7890",
        image: "/images/hr.jpeg",
    },
];

const ContactCard: React.FC<ContactPerson> = ({ name, role, email, phone, image }) => (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-green-500 mb-2">{name}</h2>
        <p className="text-xl text-green-400 mb-2">{role}</p>
        <p className="text-green-300 mb-1">{email}</p>
        <p className="text-green-300">{phone}</p>
    </div>
);

export default function Contact() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div>
            <NavBar />
            <main className="flex min-h-screen flex-col items-center justify-center bg-black text-green-500 p-4">
                <h1 className="text-4xl mb-8">Contact Us</h1>
                <div className="w-full max-w-3xl">
                    <Slider {...settings}>
                        {contactList.map((contact, index) => (
                            <div key={index} className="px-4">
                                <ContactCard {...contact} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </main>
        </div>
    );
}