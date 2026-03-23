import React from 'react';
import { motion } from 'framer-motion';
import rootTopImage from '../assets/images/roof-top.jpeg';
import clubHouse from '../assets/images/club-house.png';
import {
    DoorOpen,
    Presentation,
    Sparkles,
    Gamepad2,
    Flower2,
    Dumbbell,
    Car,
    PartyPopper,
    Lock,
    IndianRupee,
    BookOpen
} from 'lucide-react';

const amenities = [
    { id: 1, name: "Entrance Plaza", icon: DoorOpen },
    { id: 2, name: "300 Seater Conference Hall", icon: Presentation },
    { id: 3, name: "Beauty Parlor", icon: Sparkles },
    { id: 4, name: "Indoor games", icon: Gamepad2 },
    { id: 5, name: "Ayurveda Spa", icon: Flower2 },
    { id: 6, name: "Fitness Center", icon: Dumbbell },
    { id: 7, name: "Drivers Accommodation", icon: Car },
    { id: 8, name: "Roof Top Party Hall", icon: PartyPopper },
    { id: 9, name: "Locker Facilities", icon: Lock },
    { id: 10, name: "Money Exchange", icon: IndianRupee },
    { id: 11, name: "Library", icon: BookOpen },
];

const images = [
    {
        src: rootTopImage,
        alt: "Elegant pavilion dining setup at Lantana Aqua Dine"
    },
    {
        src: clubHouse,
        alt: "Intimate outdoor dining experience at Lantana Aqua Dine"
    }
];

export default function LantanaClouds() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };


    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A961]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1B5E5E]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-[#1B5E5E] mb-4 tracking-tight"
                    >
                        Lantana CLOUDS
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-24 h-1 bg-[#C9A961] mx-auto mb-6"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Lantana Clouds is an apt platform for corporate conferences, events and destination weddings. The amphitheater, mini conference hall and the 300-seater conference hall facilities are best suitable for official gatherings and entertainments. The Club House, Restaurant, Cafeteria, Entrance Plaza, Indoor Games, Meditation - Yoga Centre, Fitness Centre, Infinity Pool and Swimming Pools are the key factors that attract the young minds. Lantana CLOUDS is a luxurious hub designed to elevate every aspect of your stay. Whether you're seeking relaxation, celebration, or productivity, this beautifully curated space offers it all. Indulge in pure bliss at the full-service spa, where expert therapists provide rejuvenating treatments, or refresh your look at the elegant beauty parlour offering a range of grooming and salon services. For events and professional gatherings, the clubhouse features a state-of-the-art 300-seater conference hall ideal for grand functions, as well as a mini conference hall perfect for more intimate meetings or private sessions. As the sun sets, head to the stunning rooftop party area, where panoramic views and a sophisticated ambiance create the perfect backdrop for romantic evenings, social gatherings, or unforgettable celebrations under the stars.
                    </motion.p>
                </div>

                {/* Image Gallery */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
                >
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                            className="relative overflow-hidden rounded-xl shadow-lg group aspect-[4/3] md:aspect-[3/2]"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 group-hover:ring-black/20 transition-all duration-300 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Amenities Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {amenities.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            className="bg-[#F5F7F7] p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-[#1B5E5E] transition-colors duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transform"
                        >
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="w-6 h-6 text-[#C9A961]" strokeWidth={2} />
                            </div>
                            <h3 className="font-semibold text-[#1B5E5E] group-hover:text-white transition-colors duration-300">
                                {item.name}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
        // <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //     <div className='mb-16'>
        //         <motion.div
        //             initial={{ opacity: 0, y: 40 }}
        //             whileInView={{ opacity: 1, y: 0 }}
        //             viewport={{ once: true, margin: "-100px" }}
        //             transition={{ duration: 0.8 }}
        //             className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center`}
        //         >
        //             {/* Image Section */}
        //             <div className="w-full lg:w-1/2">
        //                 <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[4/3] lg:aspect-auto lg:h-[450px]">
        //                     <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
        //                     <img
        //                         src={rootTopImage}
        //                         alt={`Exterior view of cottage`}
        //                         loading="lazy"
        //                         decoding="async"
        //                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        //                     />
        //                 </div>
        //             </div>

        //             {/* Content Section */}
        //             <div className="w-full lg:w-1/2 flex flex-col justify-center">
        //                 <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl relative overflow-hidden">
        //                     <div className="absolute top-0 left-0 w-1.5 h-full bg-[#C9A961]"></div>
        //                     <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[#1B5E5E] mb-3 tracking-wide">
        //                         LANTANA CLOUDS
        //                     </h3>
        //                     <p className="text-[#C9A961] font-semibold mb-6 tracking-wide text-sm uppercase">
        //                         Conference & Event Hub | Spa & Rooftop Party Area
        //                     </p>
        //                     <p className="text-gray-600 leading-relaxed text-justify">
        //                         Lantana Clouds is an apt platform for corporate conferences, events and destination weddings. The amphitheater, mini conference hall and the 300-seater conference hall facilities are best suitable for official gatherings and entertainments. The Club House, Restaurant, Cafeteria, Entrance Plaza, Indoor Games, Meditation - Yoga Centre, Fitness Centre, Infinity Pool and Swimming Pools are the key factors that attract the young minds. Lantana CLOUDS is a luxurious hub designed to elevate every aspect of your stay. Whether you're seeking relaxation, celebration, or productivity, this beautifully curated space offers it all. Indulge in pure bliss at the full-service spa, where expert therapists provide rejuvenating treatments, or refresh your look at the elegant beauty parlour offering a range of grooming and salon services. For events and professional gatherings, the clubhouse features a state-of-the-art 300-seater conference hall ideal for grand functions, as well as a mini conference hall perfect for more intimate meetings or private sessions. As the sun sets, head to the stunning rooftop party area, where panoramic views and a sophisticated ambiance create the perfect backdrop for romantic evenings, social gatherings, or unforgettable celebrations under the stars.
        //                     </p>
        //                 </div>
        //             </div>
        //         </motion.div>
        //     </div>
        //     {/* CLouds Grid */}
        //     <motion.div
        //         variants={containerVariants}
        //         initial="hidden"
        //         whileInView="visible"
        //         viewport={{ once: true, margin: "-50px" }}
        //         className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        //     >
        //         {amenities.map((item) => (
        //             <motion.div
        //                 key={item.id}
        //                 variants={itemVariants}
        //                 className="bg-[#F5F7F7] p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-[#1B5E5E] transition-colors duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transform"
        //             >
        //                 <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
        //                     <item.icon className="w-6 h-6 text-[#C9A961]" strokeWidth={2} />
        //                 </div>
        //                 <h3 className="font-semibold text-[#1B5E5E] group-hover:text-white transition-colors duration-300">
        //                     {item.name}
        //                 </h3>
        //             </motion.div>
        //         ))}
        //     </motion.div>
        // </section>
    );
}
