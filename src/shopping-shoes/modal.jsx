import React, { useState } from 'react';

export default function Modal({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  // Hàm mở Modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Hàm đóng Modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="gap-5" width="100%" src={data.image} alt={data.name} />
      </a>
      <div className="p-5">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.name}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.price}$</p>
        <button
          onClick={openModal}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Xem chi tiết
        </button>
      </div>

      {/* Main modal */}
      {isOpen && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="overflow-y-auto fixed top-0 right-0 left-0 z-50  "
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Thông tin chi tiết
                </h3>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Modal body */}
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <strong>Tên sản phẩm: </strong> {data.name}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <strong>Giá: </strong> {data.price}$
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <strong>Mô tả: </strong> {data.description}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <strong>Mô tả: </strong> {data.description}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <strong>Mô tả ngắn: </strong> {data.shortDescription}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <strong>Số lượng: </strong> {data.quantity}
                </p>
              </div>

              {/* Modal footer */}
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={closeModal}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
