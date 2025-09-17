import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="px-5 py-14 space-y-6 bg-white xl:flex xl:items-center xl:justify-center xl:max-w-[1200px] xl:mx-auto"
    >
      <div className="col xl:flex xl:flex-row xl:items-center xl:justify-center xl:space-x-40 xl:w-full">
        <div className="hidden xl:block xl:ms-32">
          <Image
            src="/about-image.png"
            alt="imagem do sobre"
            width={472}
            height={0}
          />
        </div>
        <div className="xl:max-w-[543px] xl:space-y-6">
          <h2 className="font-light">
            <p className="block text-[28px] xl:hidden">
              Construimos <br />
              confiança e <br />
              <span className="text-primary font-medium">
                realizamos sonhos!
              </span>
            </p>
            <p className="hidden xl:block xl:text-4xl">
              Construimos confiança <br />
              e <span className="text-primary font-medium">
                realizamos sonhos!
              </span>
            </p>
          </h2>
          <span className="font-light text-sm xl:text-lg">
            Na Liva, cada projeto é planejado para
            facilitar a vida dos moradores, trazendo
            uma sensação máxima de bem-estar.
            Espaços que abrigam histórias de vida e
            que são desenvolvidos para que você viva
            momentos incríveis ao lado da sua família.
          </span>
          <div className="flex-center bottom-36 h-11 w-32 mt-6 xl:mt-8">
            <button className="full-size border-2 border-black text-sm text-black font-medium rounded-sm cursor-pointer hover:bg-black hover:text-white hover:border-none">
              SAIBA MAIS
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
