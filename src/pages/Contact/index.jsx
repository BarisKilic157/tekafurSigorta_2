function Contact() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full h-[300px]">
        {" "}
        <img className="w-full h-full rounded" src="images/5.jpg" alt="" />
      </div>
      <div className="flex  items-center font-bold text-2xl">İletişim</div>
      <div className="flex justify-between items-center w-[1300px] h-auto p-10 ">
        <div className=" w-[590px] h-[400px] border-solid border-2  rounded shadow-[0_-5px_20px_-10px_rgba(0,0,0,0.4)]">
          <div className="p-5">
            <p>
              <b className="text-xl font-semibold ">Adres</b>
            </p>
            <p className="text-sm m-2 ">
              AKABE MAH. SAÇLI KASAP CAD. NO:157A1 KAT:2
            </p>
            <p className="text-sm m-2 ">KARATAY/KONYA</p>
            <div className="mt-5 pt-5 border-solid border-t-2">
              <p>
                <b className="text-base font-semibold ">Telefon Numarası</b>
              </p>
              <p>
                <a type="phone" href="tel:+905551234567" className="m-2">
                  0555 123 45 67
                </a>
              </p>
            </div>
            <div className="mt-5">
              <p>
                <b className="text-base font-medium mt-5">Faks</b>
              </p>
              <p>
                <a href=" " className="m-2">
                  0555 123 45 67
                </a>
              </p>
            </div>
            <div className="mt-5">
              <p>
                <b className="text-base font-medium mt-5">E-mail</b>
              </p>
              <p>
                <a href=" " className="m-2">
                  tekafülsigortaciliği@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[590px] h-[400px] border-solid border-2 rounded shadow-[0_-5px_20px_-10px_rgba(0,0,0,0.4)]">
          <iframe
            title={"map"}
            className="w-[590px] h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d393.755697969256!2d32.53871871415984!3d37.859223823130975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085da2d1e08b7%3A0x5f87710882bc58b3!2sEmiray%20Sigorta%20Arac%C4%B1l%C4%B1k%20Hizmetleri!5e0!3m2!1str!2str!4v1709886763448!5m2!1str!2str"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col  items-center w-[1220px] h-auto p-2 border-solid border-2 rounded shadow-[0_-5px_20px_-10px_rgba(0,0,0,0.2)]">
        <div className=" font-medium">
          <p>Tekafül SİGORTACILIK</p>
        </div>
        <div className="flex px-10 py-5 justify-between w-[1220px]">
          <div className="w-[590px] h-[250px] border-solid border-2">
            <p className="text-lg font-semibold"> Tekafül Sigorta Bilgileri</p>
            <p className="m-1"> Şirket Ünvanı: Tekafül Sigorta Hizm. A.Ş.</p>
            <p className="m-1"> Sorumlu Kişi: Seyfettin Kurt</p>
            <p className="m-1">Ticaret Sicil No: 113456</p>
            <p className="m-1"> Vergi Dairesi: Karatay</p>
            <p className="m-1"> Vergi No: 1134567890</p>
            <p className="m-1">Mersis No: 1234567894567895201</p>
          </div>
          <div className="flex flex-col w-[590px] h-[250px] border-solid border-2">
            <div className="flex justify-center  items-center  w-[590px] h-5 text-lg font-semibold ">
              Bizimle iletişime geçin
            </div>
            <div className="flex flex-col justify-center items-center  w-full">
              <div className="flex justify-between items-center w-3/5 m-2 ">
                <div className="border-solid border-2 rounded w-auto mr-5">
                  <input
                    type="text"
                    className="w-full p-[2px]"
                    placeholder="Ad"
                  />
                </div>
                <div className="border-solid border-2 rounded w-auto ">
                  <input
                    type="text"
                    className="w-full p-[2px]"
                    placeholder="Soyad"
                  />
                </div>
              </div>
              <div className="border-solid border-2 rounded w-3/5 m-2 ">
                <input
                  type="email"
                  className="w-full p-[2px]"
                  placeholder="E-posta"
                />
              </div>
              <div className="border-solid border-2 rounded w-3/5 m-2 ">
                <input
                  type="tel"
                  className="w-full p-[2px]"
                  placeholder="Telefonunuz"
                />
              </div>{" "}
              <div className="border-solid border-2 rounded w-3/5 m-2 ">
                <textarea
                  cols="45"
                  rows="0_"
                  className="resize-none"
                  placeholder="Mesajınız"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
