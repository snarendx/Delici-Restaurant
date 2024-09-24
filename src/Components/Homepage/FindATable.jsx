import React, { useState } from "react";

function FindATable() {
  const [formData, setFormData] = useState({
    persons: 1,
    date: "",
    time: "08:00 am",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const personsOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <>
      <div
        className="bg-black text-white min-h-screen w-full"
        style={{
          backgroundImage: `url('/SpecialDishBackground.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-gray-900 bg-opacity-70 min-h-screen w-full">
          <div className="py-16 text-center font-[DM Sans]">
            RESERVATION
            <h1 className="text-5xl font-extrabold mb-6 tracking-wider">
              Book A Table
            </h1>
            <p className="text-lg flex-wrap text-gray-400 mb-4">
              Restaurant will be open for all days, Sunday night will be closed,
              All booking payment is secured with <br /> credit card, no charges
              will be applied for online booking. non-refundable.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Booking: <span className="text-[#E4C590]">+88-123-123456</span> or
              use the form below
            </p>
            <div className="flex justify-center mt-8">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <select
                  name="persons"
                  className="bg-gray-900 text-white py-3 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#E4C590]"
                  value={formData.persons}
                  onChange={handleChange}
                >
                  {personsOptions.map((num) => (
                    <option key={num} value={num}>
                      {`${num} Person${num > 1 ? "s" : ""}`}
                    </option>
                  ))}
                </select>

                <input
                  type="date"
                  name="date"
                  className="bg-gray-900 text-white py-3 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#E4C590]"
                  value={formData.date}
                  onChange={handleChange}
                />

                <select
                  name="time"
                  className="bg-gray-900 text-white py-3 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#E4C590]"
                  value={formData.time}
                  onChange={handleChange}
                >
                  <option value="08:00 am">08:00 am</option>
                  <option value="09:00 am">09:00 am</option>
                </select>

                <button
                  type="submit"
                  className="relative inline-block px-6 py-2 md:px-10 md:py-2 text-xs md:text-lg bg-[#E4C590] text-black hover:text-white transition-all duration-500 ease-in border-2 border-[#E4C590] rounded-none shadow-[inset_0_0_0_0_#E4C590] hover:shadow-[inset_0_-100px_0_0_#000000] active:scale-90"
                >
                  BOOK A TABLE
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-8 mx-auto max-w-6xl">
            <div className="p-6 rounded-lg bg-opacity-90 shadow-lg">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4708784999343!2d73.94672727501393!3d18.552798082547003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c34a95da0099%3A0x66edab93b328b0be!2sWorld%20Trade%20Center%2C%20Tower%201!5e0!3m2!1sen!2sin!4v1717405232723!5m2!1sen!2sin"
                width="100%"
                height="500"
                className="rounded-lg shadow-lg"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div
              className="text-white p-8 rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('/Table-Book-Background.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2 className="text-3xl font-bold mb-4">New York</h2>
              <p>Restaurant St, Delicious City, London 9578, UK</p>
              <p>Call: +88-123-123456</p>
              <p>Email: booking@domainname.com</p>

              <div className="mt-6">
                <p className="font-bold">Lunch Time</p>
                <p>Monday to Sunday - 11.00 am - 2.30 pm</p>

                <p className="font-bold mt-6">Dinner Time</p>
                <p>Monday to Sunday - 5.00 pm - 10.00 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#171819] text-white py-16 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "New York", src: "NewYork.png" },
              { title: "Dubai", src: "Dubai.png" },
              { title: "Paris", src: "Paris.png" },
              { title: "Toronto", src: "Toronto.png" },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg text-center flex flex-col items-center justify-center bg-[#151616]`}
              >
                <img
                  className="w-20 h-30 mb-4 transition-transform transform hover:rotate-[360deg] duration-500 ease-in-out"
                  src={item.src}
                  alt={item.title}
                />
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 mb-4">
                  Restaurant St, Delicious City, NY. +88-123-123456
                  booking@domainname.com
                </p>
                <button className="relative py-2 px-4 text-white rounded overflow-hidden group">
                  <span className="relative z-10">GET DIRECTION</span>
                  <div>
                    <span className="absolute inset-x-0 bottom-0 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
                    <span className="absolute m-1 inset-x-0 bottom-0 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FindATable;
