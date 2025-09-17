'use client';

import { useState } from "react";
import Image from "next/image";

const initialValue = {
  name: '',
  phone: '',
  email: '',
  message: '',
}

export default function Contact() {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(value);
    setData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.name || !data.phone || !data.email || !data.message) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsLoading(true);

    try {
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setData(initialValue);
      }, 3000);

    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="px-5 pt-14 pb-12 space-y-5 bg-[#03110D]"
    >
      <div className="col xl:flex-row xl:items-center xl:justify-center xl:max-w-[1200px] xl:mx-auto">
        <div className="col space-y-6 xl:w-[50%]">
          <h2 className="text-white text-[28px] font-semibold xl:text-4xl">
            Fale agora <br />
            com um consultor <br />
            de vendas
          </h2>
          <p className="text-white font-light xl:text-lg">
            Tire suas dúvidas e conheça de perto o seu <br />
            <span className="font-medium">
              novo jeito de morar.
            </span>
          </p>

          <div className="hidden space-y-3 mt-10 text-white xl:flex xl:flex-col xl:mt-4">
            <p className="text-xs font-light">Consultores online</p>
            <Image
              src="/consultants.png"
              alt="consultores online"
              height={0}
              width={137}
            />
          </div>
        </div>

        {isSubmitted ? (
          <div className="flex-center col bg-[#F5F5F5] rounded-sm w-full pt-5 pb-8 space-y-4 h-[490px] xl:max-w-[470px] xl:h-[524px]">
            <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="46.5" cy="46.5" r="46.5" fill="#D1EDE6" />
              <path d="M60.2719 30.2085L41.1453 49.335L32.7283 40.918L26 47.6465L41.1453 62.7915L67 36.9368L60.2719 30.2085Z" fill="#1AA584" />
            </svg>
            <p className="text-sm text-primary font-semibold xl:text-lg">Mensagem enviada com sucesso!</p>
            <p className="text-xs text-[#6F6F6F] font-medium xl:text-base">Aguarde que em instantes entraremos em contato.</p>
          </div>
        ) : (
          <form
            className="flex-center col bg-white rounded-sm w-full pt-5 pb-8 xl:max-w-[470px]"
            onSubmit={handleSubmit}
          >
            <div className="w-full px-5 space-y-4 mt-4">
              <p className="font-medium mb-5">
                Fale agora mesmo com a Liva
              </p>
              <div className="col space-y-4">
                <div className="col">
                  <input
                    className="h-12 border-2 rounded-sm px-4 outline-none"
                    id="name"
                    name="name"
                    placeholder="Nome"
                    value={data.name}
                    onChange={handleOnChange}
                    type="text"
                    required
                    disabled={isLoading || isSubmitted}
                  />
                </div>
                <div className="col">
                  <input
                    className="h-12 border-2 rounded-sm px-4 outline-none"
                    id="phone"
                    name="phone"
                    placeholder="Telefone"
                    value={data.phone}
                    onChange={handleOnChange}
                    type="tel"
                    required
                    disabled={isLoading || isSubmitted}
                  />
                </div>
                <div className="col">
                  <input
                    className="h-12 border-2 rounded-sm px-4 outline-none"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    value={data.email}
                    onChange={handleOnChange}
                    type="email"
                    required
                    disabled={isLoading || isSubmitted}
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
                    onChange={handleOnChange}
                    value={data.message}
                    required
                    disabled={isLoading || isSubmitted}
                  >
                  </textarea>
                </div>
                <button
                  className={`h-[46px] space-x-2 rounded-sm text-white transition-colors cursor-pointer ${isLoading || isSubmitted
                    ? 'bg-[#76C9B5] cursor-not-allowed'
                    : 'bg-primary hover:bg-primary-dark'
                    }`}
                  type="submit"
                  disabled={isLoading || isSubmitted}
                >
                  {isLoading
                    ? 'ENVIANDO MENSAGEM...'
                    : isSubmitted
                      ? 'MENSAGEM ENVIADA'
                      : 'ENVIAR MENSAGEM'
                  }
                </button>
              </div>
            </div>
          </form>
        )}

        <div className="flex-center col space-y-3 mt-10 text-white xl:hidden">
          <p className="text-xs font-light">Consultores online</p>
          <Image
            src="/consultants.png"
            alt="consultores online"
            height={0}
            width={137}
          />
        </div>
      </div >
    </section>
  )
}
