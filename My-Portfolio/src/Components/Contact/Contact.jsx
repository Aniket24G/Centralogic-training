import React from "react";

function Contact() {
  return (
    <div id="contact" classname="max-w-[1040px] m-auto p-4 md:pl-20 py-16">
      <h1 className="py-4 text-4xl font-cambay text-center text-primaryText">
        Reach me here
      </h1>
      <form action="" method="POST" className="px-20">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm font-noto">Name</label>
            <input className="border-2 rounded-lg p-3 border-gray-200 flex" type="text" name="name" />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm font-noto">Phone Number</label>
            <input className="border-2 rounded-lg p-3 border-gray-200 flex"  type="text" name="phone" />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm font-noto">Email</label>
          <input className="border-2 rounded-lg p-3 border-gray-200 flex"  type="email" name="email" />
        </div>
        <div>
          <label className="uppercase text-sm font-noto">Subject</label>
          <input className="border-2 rounded-lg p-3 border-gray-200 flex"  type="text" name="subject" />
        </div>
        <div>
          <label className="uppercase text-sm font-noto">Message</label>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
        </div>
      </form>
    </div>
  );
}

export default Contact;
