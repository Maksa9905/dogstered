import logo from "../assets/logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex gap-[25px] p-[15px] items-center сontainer flex-wrap justify-between">
      <Image src={logo} className="w-[64px] rounded-[50%]"></Image>
      <button className="bg-[black] text-[#fff] w-[130px] h-[40px] rounded-[20px]">
        Главная
      </button>
      <button className="w-[130px] h-[40px] rounded-[20px]">Главная</button>
      <input
        type="text"
        className="w-[50%] bg-[#d7d7d7ee] h-[40px] rounded-[20px] px-[20px]"
        placeholder="Поиск"
      />
      <button className="w-[130px] h-[40px] rounded-[20px] border-[2px] border-[black]">
        Войти
      </button>
    </header>
  );
}
