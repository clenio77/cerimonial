export default function Test() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-blue-500">
        Teste do Tailwind CSS
      </h1>
      <p className="mt-4 text-xl text-gray-600">
        Se você estiver vendo este texto em cinza e o título em azul, o Tailwind CSS está funcionando!
      </p>
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="rounded-lg bg-red-500 p-4 text-white">Vermelho</div>
        <div className="rounded-lg bg-green-500 p-4 text-white">Verde</div>
        <div className="rounded-lg bg-blue-500 p-4 text-white">Azul</div>
      </div>
    </div>
  );
}