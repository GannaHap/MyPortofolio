import React, { Component } from "react";
import Swal from "sweetalert2";

import "./ContactMe.css";

export default class ContactMe extends Component {
  sendMessage = (event) => {
    event.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzg5w_6azxfs3mwjpi9B9l7uMb4y0d5NJy-cztEg3Fwy1PeGPjKhsjOlio12WNZ9SFf/exec";
    const form = document.forms["form-contact-me"];

    const btnKirim = document.querySelector(".btn-kirim");
    btnKirim.setAttribute("disable", true);
    btnKirim.classList.add("disabled");
    btnKirim.innerHTML = "Loading...";

    const company = document.getElementById("company");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const pesan = document.getElementById("pesan");

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        console.log("Success!", response);

        company.value = "";
        email.value = "";
        subject.value = "";
        pesan.value = "";

        const btnKirimDisabled = document.querySelector(".btn-kirim.disabled");
        btnKirimDisabled.setAttribute("disable", false);
        btnKirimDisabled.classList.remove("disabled");
        btnKirimDisabled.innerHTML = "Kirim";

        Swal.fire({
          icon: "success",
          title: "Berhasil Mengirim",
          text: "Terima kasih telah menghubungi saya. Saya akan segera merespons melalui email.",
        });
      })
      .catch((error) => {
        console.error("Error!", error.message);
        const btnKirimDisabled = document.querySelector(".btn-kirim.disabled");
        btnKirimDisabled.setAttribute("disable", false);
        btnKirimDisabled.classList.remove("disabled");
        btnKirimDisabled.innerHTML = "Kirim";

        Swal.fire({
          icon: "error",
          title: "Gagal Mengirim",
          text: "Mohon pastikan format email yang anda masukan benar",
        });
      });
  };

  render() {
    return (
      <div className="contact-me">
        <h3>HUBUNGI SAYA</h3>

        <form
          name="form-contact-me"
          className="form-contact-me"
          onSubmit={(e) => this.sendMessage(e)}
        >
          <label htmlFor="company">Nama Perusahaan</label>
          <input
            type="text"
            name="company"
            id="company"
            className="input"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="input"
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="input"
            required
          />

          <label htmlFor="pesan">Pesan</label>
          <textarea
            id="pesan"
            name="message"
            cols="30"
            rows="10"
            className="input"
            required
          ></textarea>

          <button type="submit" className="btn-kirim">
            Kirim
          </button>
        </form>
      </div>
    );
  }
}
