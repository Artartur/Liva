
export default function About() {
  return (
    <section className="px-5 py-14 space-y-6 bg-white">
      <h2 className="text-[28px] font-light">
        Construimos <br />
        confiança e <br />
        <span className="text-primary font-medium">
          realizamos sonhos!
        </span>
      </h2>
      <span className="font-light text-sm">
        Na Liva, cada projeto é planejado para
        facilitar a vida dos moradores, trazendo
        uma sensação máxima de bem-estar.
        Espaços que abrigam histórias de vida e
        que são desenvolvidos para que você viva
        momentos incríveis ao lado da sua família.
      </span>

      <div className="flex-center bottom-36 h-11 w-32 mt-6">
        <button className="full-size border-2 border-black text-sm text-black font-medium rounded-sm hover:bg-black hover:text-white hover:border-none">
          SAIBA MAIS
        </button>
      </div>
    </section>
  )
}
