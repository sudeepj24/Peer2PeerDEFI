import Image from "next/image";
import React, { useState } from "react";
import { ModalBorderLayout, ModalSupply } from "../components";

const RowSupplyAssets = ({ name, image, balance, apy, isCollateral }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <tr key={name} className="align-middle text-left text-xs">
        <td className="md:px-4 px-1 align-middle border-b-[1px] border-blueGrey-100 md:whitespace-nowrap md:p-4">
          <div className="flex items-center">
            <Image
              src={image}
              width={28}
              height={28}
              className="card-img-top"
              alt="coin-image"
            />
            <p className="pl-[8px] font-semibold text-[13px]">{name}</p>
          </div>
        </td>
        <td className="md:px-4 px-1 align-middle border-b-[1px] border-blueGrey-100  md:whitespace-nowrap md:p-4">
          <p className="text-center text-[12px] text-gray-600 font-semibold">
            {Number(balance).toFixed(2).toString(2).length < 10
              ? Number(balance).toFixed(2).toString().slice(0, 10)
              : `${Number(balance).toFixed(2).toString().slice(0, 10)}...`}
          </p>
        </td>
        <td className="md:px-4 px-1 align-middle border-b-[1px] border-blueGrey-100 md:whitespace-nowrap md:p-4">
          <p className="text-center text-[12px] text-gray-600 font-semibold">
            {apy} %
          </p>
        </td>
        <td className="md:px-4 px-1 align-middle border-b-[1px] border-blueGrey-100 md:whitespace-nowrap md:p-4">
          {isCollateral ? (
            <p className="text-green-700 text-lg font-large text-center">
              {" "}
              &#10004;{" "}
            </p>
          ) : (
            <p className="text-red-700 text-lg font-large text-center">
              {" "}
              &#10006;{" "}
            </p>
          )}
        </td>
        <td className="md:px-4 px-1 align-middle border-b-[1px] border-blueGrey-100 md:whitespace-nowrap md:p-4">
          <button
            className="border-spacing-1 py-[6px] ml-1 rounded-[4px] outline-none text-[13px] text-black bg-slate-50 border border-slate-200 p-2 hover:border-slate-500"
            onClick={() => setShowModal(true)}
          >
            Lend
          </button>
        </td>
      </tr>
      <ModalBorderLayout
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      >
        <ModalSupply
          name={name}
          balance={balance}
          image={image}
          apy={apy}
          isCollateral={isCollateral}
          onClose={() => setShowModal(false)}
        />
      </ModalBorderLayout>
    </>
  );
};

export default RowSupplyAssets;