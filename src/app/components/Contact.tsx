import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-5 pt-14 pb-12 space-y-5 bg-[#03110D]"
    >
      <h2 className="text-white text-[28px] font-semibold">
        Fale agora <br />
        com um consultor <br />
        de vendas
      </h2>
      <p className="text-white font-light">
        Tire suas dúvidas e conheça de perto o seu
        <span className="font-medium ms-1">
          novo jeito de morar.
        </span>
      </p>

      <form className="flex-center col bg-white rounded-sm w-full pt-5 pb-8">
        <div className="w-full px-5 space-y-4 mt-4">
          <p className="font-medium mb-5">
            Fale agora mesmo com a Liva
          </p>
          <div className="col space-y-4">
            <div className="col">
              {/*<label
                className="ms-1"
                htmlFor="name"
              >
                Nome
              </label>*/}
              <input
                className="h-12 border-2 rounded-sm px-4 outline-none"
                id="name"
                name="name"
                placeholder="Nome"
                type="text"
              />
            </div>
            <div className="col">
              <input
                className="h-12 border-2 rounded-sm px-4 outline-none"
                id="phone"
                name="phone"
                placeholder="Telefone"
                type="tel"
              />
            </div>
            <div className="col">
              <input
                className="h-12 border-2 rounded-sm px-4 outline-none"
                id="email"
                name="email"
                placeholder="E-mail"
                type="email"
              />
            </div>
            <div className="col">
              <textarea
                className="h-32 border-2 rounded-sm px-4 outline-none resize-none"
                id="message"
                name="message"
                placeholder="Mensagem"
                rows={4}
                cols={50}
                maxLength={120}
              >
              </textarea>
            </div>
            <button
              className="h-[46px] space-x-2 bg-primary rounded-sm text-white"
              type="submit"
            >
              ENVIAR MENSAGEM
            </button>
          </div>
        </div>
      </form>

      <div className="flex-center col space-y-3 mt-10 text-white">
        <p className="text-xs font-light">Consultores online</p>
        <Image
          src="/consultants.png"
          alt="consultores online"
          height={0}
          width={137}
        />
      </div>
    </section>
  )
}
