import Card from "./Card";
import bikini1 from "../../images/bikini2.png";
import bikini2 from "../../images/bikini3.png";
import bikini3 from "../../images/bikini4.png";

const Content = () => {
  const cards = [
    {
      id: 0,
      name: "LÂL SİYAH ",
      image: bikini1,
    },
    {
      id: 1,
      name: "LÂL SARI",
      image: bikini2,
    },
    {
      id: 2,
      name: "LÂL MAVİ",
      image: bikini3,
    },
  ];
  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-center ml-36 md:ml-0 m-12 p-12 h-fit">
      <div className="flex  flex-col gap-y-4 ml-16 md:ml-0">
        <h1 className="text-2xl">YENİ</h1>
        <h1 className="text-2xl bg-yellow-800 max-w-fit py-1 px-4 text-white">
          ÜRÜNLERİMİZ
        </h1>
        <blockquote class="text-2xl font-semibold italic text-center items-center  md:ml-0 text-slate-900 max-w-sm mt-14">
          <p className="mb-2">Yeni Ürünlerimiz</p>
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-800 relative inline-block">
            <span class="relative text-white ">İNDİRİMLİ </span>
          </span>
          <p className="mt-2">Fiyatlarla Hizmetinizde Olacaktır</p>
        </blockquote>

      </div>

      <div className="flex flex-col md:flex-row gap-x-8 ml-12 mt-8 md:ml-0 md:mt-0">
        <Card cards={cards} />
      </div>
    </div>
  );
};

export default Content;