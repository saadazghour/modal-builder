import React, { useRef } from "react";
import Modal from "react-modal";
import IconImage from "./IconImage";

interface CustomModalProps {
  isOpen: boolean;

  // onRequestClose does not return anything (indicated by void)
  // The void keyword means that the function does not return any value.

  onRequestClose: () => void;
  contentLabel: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onRequestClose,
  contentLabel,
}) => {
  // Ref for the file Input element.
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
    >
      <p className="w-full pb-8 text-sm text-gray-800 fon">
        Our Support Team is ready to help!
      </p>

      <form action="/send-data-here" method="POST">
        <label className="text-sm font-semibold text-gray-500">
          Request Type
        </label>

        <div className="block py-2">
          <select className="w-full px-4 py-2 border border-gray-300 rounded">
            <option>Request Type</option>
            <option>Request Type</option>
            <option>Request Type</option>
            <option>Request Type</option>
          </select>
        </div>

        <div className="block py-2">
          <label className="py-2 text-sm font-semibold text-gray-500">
            Subject
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="block py-2">
          <label className="text-sm font-semibold text-gray-500">
            How we can help?
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded"
            rows={6}
          />
        </div>

        <div className="block py-2">
          <div className="mb-3">
            <label className="text-sm font-semibold text-gray-500 ">
              Attachments
            </label>
            <span className="ml-2 text-sm text-gray-500">Optional </span>
          </div>

          <div className="block w-full py-8 text-sm text-center border-2 border-dashed text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:text-sm file:font-semibold file:bg-violet-50 file:text-gray-500 hover:file:bg-violet-100">
            <label
              className="flex items-center justify-center w-full h-full font-semibold text-gray-500 cursor-pointer"
              htmlFor="file"
              onClick={handleFileInputClick}
            >
              <span className="flex items-center justify-center w-full h-full">
                <IconImage />
                <p className="text-sm font-semibold">Add up to 4 screenshot</p>
              </span>
            </label>
            <input
              type="file"
              className="hidden"
              ref={fileInputRef}
              onChange={(e) => {
                // Handle the file selection here
                console.log("Handle select!", e.target.files);
              }}
            />
          </div>
        </div>
      </form>

      <div className="flex justify-end mt-4 space-x-4 text-sm font-medium text-gray-600 cursor-pointer hover:text-gray-700">
        <button
          onClick={onRequestClose}
          className="mt-4 font-semibold text-gray-500 hover:text-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 mt-4 font-medium text-white bg-indigo-400 rounded-md "
        >
          Send
        </button>
      </div>
    </Modal>
  );
};

export default CustomModal;
