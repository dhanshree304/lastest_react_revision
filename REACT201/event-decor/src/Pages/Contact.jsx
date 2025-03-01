import axios from "axios";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    location: "",
    guests: "",
    selectedOptions: [],
    msg: "",
  });

  const form = useRef()
  console.log(form.current)

  const handleSubmit = (e) => {
    e.preventDefault();
    
     emailjs
        .sendForm("service_6fooekt", "template_eeloeh7", form.current, {
          publicKey: "B1zsdntg-_nhtpGER",
        })
        .then(
          () => {
            console.log("SUCCESS!");
           
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        )
    
    axios
      .post("http://localhost:8081/customerInfo", info)
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name) {
      if (["lets_chat", "full_planning", "custom_celebration"].includes(name)) {
        setInfo((prev) => ({
          ...prev,
          selectedOptions: checked
            ? [...prev.selectedOptions, name]
            : prev.selectedOptions.filter((p) => p != name),
        }));
      } else {
        setInfo((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    }
  };
  console.log(info);
  return (
    <div>
      <div className="m-auto p-[50px] w-[70%] border">
        <form onSubmit={handleSubmit} ref={form}>
          <label className="font-medium text-lg ">First & Last Name</label>
          <br />
          <input
            name="name"
            type="text"
            className="border border-gray-300 rounded-md h-8 w-4/5 outline-none mt-2"
            value={info.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <label className="font-medium text-lg ">Email Address</label>
          <br />
          <input
            name="email"
            type="email"
            value={info.email}
            className="border border-gray-300 rounded-md h-8 w-4/5 outline-none mt-2"
            onChange={handleChange}
          />
          <br />
          <br />
          <label className="font-medium text-lg ">Phone Number</label>
          <br />
          <input
            name="number"
            type="number"
            value={info.number}
            className="border border-gray-300 rounded-md h-8 w-4/5 outline-none mt-2"
            onChange={handleChange}
          />
          <br />
          <br />
          <label className="font-medium text-lg ">
            Wedding or Special Event Date
          </label>
          <br />
          <input
            name="date"
            type="date"
            value={info.date}
            className="border border-gray-300 rounded-md h-8 w-4/5 outline-none mt-2"
            onChange={handleChange}
          />
          <br />
          <br />
          <label className="font-medium text-lg ">Event Location</label>
          <br />
          <input
            name="location"
            type="text"
            value={info.location}
            className="border border-gray-300 rounded-md h-8 w-4/5 outline-none mt-2"
            onChange={handleChange}
          />
          <br />
          <br />
          <label className="font-medium text-lg ">
            How many guests are you anticipating ?
          </label>
          <br />
          <input
            name="guests"
            type="number"
            value={info.guests}
            className="border border-gray-300 rounded-md h-8 w-4/5 outline-none mt-2"
            onChange={handleChange}
          />
          <br />
          <br />

          <label className="font-medium text-lg ">
            Package Interested In ? (select all that apply)
          </label>
          <br />
          <br />
          <div>
            <input
              type="checkbox"
              name="full_planning"
              className="h-4 w-4 mr-2"
              checked={info.selectedOptions.includes("full_planning")}
              onChange={handleChange}
            />
            <label>Full Planning + Design-Wedding</label>
            <br />
          </div>
          <div>
            <input
              name="custom_celebration"
              type="checkbox"
              className="h-4 w-4 mr-2"
              checked={info.selectedOptions.includes("custom_celebration")}
              onChange={handleChange}
            />
            <label>
              Custom Quote Celebration-Corporate Party, Engagement
              Party,Birthday,Reception,Special Celebration
            </label>
            <br />
          </div>
          <div>
            <input
              name="lets_chat"
              type="checkbox"
              className="h-4 w-4 mr-2"
              checked={info.selectedOptions.includes("lets_chat")}
              onChange={handleChange}
            />
            <label>Unsure,Lets Chat</label>
            <br />
          </div>

          <br />
          <label className="font-medium text-lg ">
            More Details the Better - Tell us more of how we can help Your
            vision , and any details you know now
          </label>
          <br />

          <textarea
            name="msg"
            className="border border-gray-300 rounded-md h-8 w-4/5 outline-none mt-2"
            value={info.msg}
            rows="40"
            cols="50"
            placeholder="Write your description here..."
            onChange={handleChange}
          ></textarea>
          <br />
          <input
            type="submit"
            value="Submit"
            className="border p-2 font-bold"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
