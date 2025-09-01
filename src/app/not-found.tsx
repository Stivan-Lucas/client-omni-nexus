import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: "noindex, follow",
};

export default function NotFound() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white dark:bg-gray-900"
      role="main"
    >
      <Image
        src="/assets/404-cute-animal-rafiki.svg"
        alt="Gato fofo ilustrando erro 404: página não encontrada"
        width={300}
        height={300}
        priority
      />

      <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
        Oops! Página não encontrada
      </h1>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        A página que você tentou acessar não existe ou foi removida.
      </p>

      <Link
        href="/"
        className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
      >
        Voltar para a Home
      </Link>
    </main>
  );
}
