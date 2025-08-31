import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <Image
        src={"/404 Error with a cute animal-rafiki.svg"}
        alt={
          "Imagem ilustrativa com um gato fofo informando o erro 404 de rota não encontrada!"
        }
      />
      <Link href="/">Return Home</Link>
    </section>
  );
}
