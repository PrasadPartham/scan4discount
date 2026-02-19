import Image from "next/image";

export default function TrustedBy() {
  const businesses = [
    {
      title: "Tea Shops",
      image: "/teashop.jpg",
    },
    {
      title: "Retail Stores",
      image: "/retail.jpg",
    },
    {
      title: "Cafes",
      image: "/cafe.jpg",
    },
    {
      title: "Clothing Shops",
      image: "/cloth.jpg",
    },
    {
      title: "Local Businesses",
      image: "/veg.jpg",
    },
  ];

  return (
    // <section className="w-full px-6 pt-10">
    //   <div className="max-w-6xl mx-auto text-center">

    //     <p className="text-lg sm:text-xl md:text-2xl tracking-wider text-yellow-400 font-semibold">Trusted By</p>

    //     <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
    //       Local Businesses Across <span className="text-yellow-400">India</span> & <span className="text-yellow-400">USA</span>
    //     </h3>

    //     <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
    //       {businesses.map((item, index) => (
    //         <div
    //           key={index}
    //           className="relative h-40 rounded-2xl overflow-hidden 
    //                      border border-yellow-500 group"
    //         >
    //           <Image
    //             src={item.image}
    //             alt={item.title}
    //             fill
    //             className="object-cover transition-transform duration-500 
    //                        group-hover:scale-110"
    //           />

    //           {/* Dark Overlay */}
    //           <div className="absolute inset-0 bg-yellow-400/10 group-hover:bg-white/0 transition" />

    //           {/* Title */}
    //           <div className="absolute inset-0 flex items-end justify-center p-4">
    //             <p className="text-sm font-semibold text-white tracking-wide">
    //               {item.title}
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //   </div>
    // </section>
    <section className="w-full px-4 sm:px-6 pt-4 md:pt-12">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-base sm:text-lg md:text-2xl tracking-wider text-yellow-400 font-semibold">Trusted By</p>
        <h3 className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-snug">
          Local Businesses Across{" "}
          <span className="text-yellow-400">India</span> &{" "}
          <span className="text-yellow-400">USA</span>
        </h3>

        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {businesses.map((item, index) => (
            <div
              key={index}
              className="relative h-28 sm:h-32 md:h-40 rounded-2xl overflow-hidden 
                        border border-yellow-500 group">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 
                          group-hover:scale-110"/>

              <div className="absolute inset-0 bg-yellow-400/10 group-hover:bg-white/0 transition" />

                <div className="absolute inset-0 flex items-end justify-center p-2 sm:p-4">
                  <p className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                    {item.title}
                  </p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>

  );
}
