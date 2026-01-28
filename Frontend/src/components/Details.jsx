import { React, useState } from "react";
import Rating from "./Rating";
import { FaShoppingCart, FaRegHeart, FaHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import Items from "./Items";
import Reviews from "./Reviews";
import Form from "./Form";

function Details(rating) {
  const [count, setCount] = useState(1);
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => Math.max(1, prev - 1));
  return (
    <>
      <div className="w-[1320px] mt-[69px] mx-auto flex gap-6">
        <div className="flex flex-col items-center">
          <div className="bg-[#EDEDED] rounded-[10px] w-[536px] h-[368px] flex items-center justify-center">
            <img
              className="w-[365px] h-[315px] object-contain"
              src="/—Pngtree—broccoli healthy vegetables_6329035 1.png"
              alt="Broccoli"
            />
          </div>

          <div className="flex mt-4 gap-3">
            <div className="h-[86px] w-[125px] flex items-center justify-center border-2 border-[#33B44A] rounded-[10px]">
              <img
                className="w-[80px] h-[69px] object-contain"
                src="/—Pngtree—broccoli healthy vegetables_6329035 1.png"
                alt=""
              />
            </div>

            <div className="h-[86px] w-[125px] flex items-center justify-center border-2 border-gray-200 rounded-[10px]">
              <img
                className="w-[80px] h-[69px] object-contain"
                src="/—Pngtree—broccoli healthy vegetables_6329035 1.png"
                alt=""
              />
            </div>

            <div className="h-[86px] w-[125px] flex items-center justify-center border-2 border-gray-200 rounded-[10px]">
              <img
                className="w-[80px] h-[69px] object-contain"
                src="/—Pngtree—broccoli healthy vegetables_6329035 1.png"
                alt=""
              />
            </div>

            <div className="h-[86px] w-[125px] flex items-center justify-center border-2 border-gray-200 rounded-[10px]">
              <img
                className="w-[80px] h-[69px] object-contain"
                src="/—Pngtree—broccoli healthy vegetables_6329035 1.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="w-[738px] h-[470px] ml-[46px] font-poppins">
          <p className="font-bold text-[36px]">Broccoli</p>
          <p className="mt-[28px] text-[24px] font-bold text-[#33B44A]">
            $ 25.00 <span className="text-black"> / KG </span>
          </p>
          <p className="h-[80px] mt-[24px] text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            veritatis totam quod placeat blanditiis quasi facere nesciunt,
            molestiae atque modi ipsum optio suscipit quisquam deleniti maxime
            excepturi exercitationem unde illum.
          </p>
          <p className="text-[16px] mt-[5px]">
            Category:{" "}
            <span className="text-[#33B44A] text-[16px]">Vegetables</span>
          </p>
          <p className="text-[16px] mt-[5px]">
            Tags:{" "}
            <span className="text-[#33B44A] text-[16px]">
              Berries, Farm Product, Fresh
            </span>
          </p>
          <p className="text-[16px] mt-[5px]">
            Availability:{" "}
            <span className="text-[#33B44A] text-[16px]">In Stock</span>
          </p>
          <Rating reviews="102" className="mt-[11px]"></Rating>
          <div className="flex mt-[18px]">
            <p className="mt-[5px]">Size:</p>
            <select className="border-2 rounded-lg px-2 border-[#3A3A3A] h-[36px] w-[98px] ml-[19px]">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="flex items-center shadow-md rounded-[8px] w-[97px] bg-[#EDEDED] mt-[21px]">
            <button onClick={decrease} className="px-2 py-1 text-lg font-bold">
              −
            </button>
            <span className="px-4">{count}</span>
            <button onClick={increase} className="px-2 py-1 text-lg font-bold">
              +
            </button>
          </div>
          {liked ? (
            <FaHeart
              onClick={() => setLiked(false)}
              className="absolute mt-[15px] w-[35px] h-[35px] bg-[#EDEDED] text-red-500 shadow-md rounded-full p-2 cursor-pointer"
            />
          ) : (
            <FaRegHeart
              onClick={() => setLiked(true)}
              className="absolute mt-[15px] w-[35px] h-[35px] bg-[#EDEDED] shadow-md rounded-full p-2 cursor-pointer"
            />
          )}
          <button className="ml-[50px] mt-[15px] flex items-center gap-2 px-3 py-2 text-[14px] border-2 border-[#33B44A] text-[#33B44A] rounded-[8px] shadow-md hover:bg-[#33B44A] hover:text-white">
            <FaShoppingCart size={20} />
            Cart
          </button>
        </div>
      </div>
      <div className="mt-[86px] w-[1320px] mx-auto font-poppins">
        <div className="flex gap-8 border-b">
          <button
            onClick={() => setActiveTab("description")}
            className={`pb-3 font-bold text-[16px] ${
              activeTab === "description"
                ? "text-[#33B44A] border-b-2 border-[#33B44A]"
                : "text-black"
            }`}
          >
            Description
          </button>

          <button
            onClick={() => setActiveTab("info")}
            className={`pb-3 font-bold text-[16px] ${
              activeTab === "info"
                ? "text-[#33B44A] border-b-2 border-[#33B44A]"
                : "text-black"
            }`}
          >
            Additional Info
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-3 font-bold text-[16px] ${
              activeTab === "reviews"
                ? "text-[#33B44A] border-b-2 border-[#33B44A]"
                : "text-black"
            }`}
          >
            Reviews (03)
          </button>
        </div>

        {activeTab === "description" && (
          <div className="mt-[23px]">
            <div className="mt-[23px]">
              <p className="text-[14px] leading-[28px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Blanditiis ea provident optio? Iusto vel tempora optio
                recusandae vitae voluptatibus quia aut nam commodi. Ex
                perspiciatis laboriosam, voluptatibus quidem repellat delectus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                corrupti, nobis eaque iusto in sunt natus suscipit repellendus
                accusamus autem dolores sequi dolorem, nemo optio, porro fugiat
                explicabo eum inventore. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Sequi ipsam, illo mollitia obcaecati
                doloremque assumenda, quis quisquam, soluta molestiae qui modi
                laudantium officia ipsa culpa? Odio, temporibus sapiente! Vero,
                consequatur? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Molestiae recusandae sunt, consectetur ducimus praesentium
                laboriosam doloremque nostrum nulla tenetur tempora architecto
                nihil voluptas mollitia dicta corporis impedit, nesciunt officia
                obcaecati?
              </p>
              <p className="font-bold mt-[25px] text-[16px]">Product Feature</p>

              <div className="mt-[15px] flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <FaCheck className="text-[#33B44A] mt-[4px]" />
                  <p className="text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheck className="text-[#33B44A] mt-[4px]" />
                  <p className="text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheck className="text-[#33B44A] mt-[4px]" />
                  <p className="text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheck className="text-[#33B44A] mt-[4px]" />
                  <p className="text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <p className="mt-[29px] text-[14px] leading-[28px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        )}

        {activeTab === "info" && (
          <div className="mt-[23px]">
            <table className="border-2 font-poppins max-w-[714px] justify-center items-center">
              <tr className="border-2">
                <td className="border-2 font-semibold text-[12px] w-[179px] h-[46px] pl-[20px] pt-[15px]">Weight</td>
                <td className="text-[12px] w-[536px] h-[46px] pl-[20px]" >0.5 Kg</td>
              </tr>
              <tr className="border-2">
                <td className="border-2 font-semibold text-[12px] w-[179px] h-[46px] pl-[20px] pt-[15px]">Dimension</td>
                <td className="text-[12px] w-[536px] h-[46px] pl-[20px]">24 X 1 X 2 cm</td>
              </tr>
              <tr className="border-2">
                <td className="border-2 font-semibold text-[12px] w-[179px] h-[46px] pl-[20px] pt-[15px]">Weight</td>
                <td className="text-[12px] w-[536px] h-[46px] pl-[20px]">0.5 Kg, 1.5Kg, 1Kg, 2.5Kg, 2Kg, 3Kg</td>
              </tr>
            </table>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="mt-[45px]">
            <Reviews></Reviews>
            <div className="mt-[75px]">
            <Form></Form>
            </div>
          </div>
        )}

        <Items limit={4} />
      </div>
    </>
  );
}

export default Details;
