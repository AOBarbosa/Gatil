import Image from 'next/image'
import Link from 'next/link'

import homeCat from '../assets/hero-cat.png'
import logo from '../assets/logo-home-heart.svg'
import { Button } from './ui/button'

export function IntroHero() {
  return (
    <div className="grid min-h-full grid-cols-3 antialiased">
      {/* Div da esquerda */}
      <div className="flex flex-col items-center space-y-6 bg-primary p-4">
        <nav className="flex flex-row items-center space-x-4">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <p className="text-3xl font-semibold text-muted">Gatil</p>
        </nav>

        <Image alt="home cat" src={homeCat} />
      </div>

      {/* Div da direita */}
      <div className="col-span-2 flex flex-col items-center bg-blue-950">
        <nav className="flex flex-row justify-center gap-2 p-4 text-muted">
          <Button className="text-lg font-semibold" variant={'ghost'} asChild>
            <Link href="/">Home</Link>
          </Button>

          <Button className="text-lg font-semibold" variant={'ghost'} asChild>
            <Link href="/">Contato</Link>
          </Button>

          <Button className="text-lg font-semibold" variant={'ghost'} asChild>
            <Link href="/">Adotar</Link>
          </Button>

          <Button className="text-lg font-semibold" variant={'ghost'} asChild>
            <Link href="/">Doações</Link>
          </Button>

          <Button className="text-lg font-semibold" variant={'ghost'} asChild>
            <Link href="/">Sobre nós</Link>
          </Button>
        </nav>

        <div className="mt-8 flex h-auto w-8/12 flex-col items-center space-x-1 px-4 font-semibold text-muted">
          <div>
            <p className="text-lg">Com a sua ajuda </p>
            <span className="text-4xl text-primary">
              Nós podemos salvar gatinhos que vivem em situação de rua
            </span>

            <p className="text-muted/50">
              O Gatil é um projeto que visa ajudar gatos de rua a encontrar um
              lar amoroso. Aqui você pode encontrar seu novo amiguinho de quatro
              patas e ajudar a manter o projeto.
            </p>
          </div>

          <div className="mt-20 flex w-5/12 flex-col gap-4">
            <Button asChild>
              <Link href="/">Adote um gatinho</Link>
            </Button>

            <Button asChild>
              <Link href="/">Doe uma quantia</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
