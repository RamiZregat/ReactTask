import React from "react";

export default function Modal({ showModal, setShowModal, title, children }) {
  return (
    <>
      {showModal && (
        <>
          <div
            onClick={() => setShowModal(false)}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="relative w-auto my-6 mx-auto max-w-3xl"
            >
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold textColorFourth">
                    {title}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">{children}</div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
