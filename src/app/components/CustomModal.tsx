import React, { useRef } from "react";
import Modal from "react-modal";
import IconImage from "./IconImage";
import { ErrorMessage, Field, Formik } from "formik";

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
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
    >
      <p className="w-full pb-8 text-sm text-gray-800 fon">
        Our Support Team is ready to help!
      </p>

      <Formik
        initialValues={{
          requestType: "",
          subject: "",
          helps: "",
          file: null as File | null,
        }}
        validate={({ subject, helps, requestType, file }) => {
          const errors: any = {};

          if (!requestType) {
            errors.requestType = "Required";
          }

          if (!file) {
            errors.file = "Required";
          } else if (file.size > 1000000) {
            errors.file = "File size is too large";
          }

          if (!subject) {
            errors.subject = "Required";
          } else if (subject.length < 3) {
            errors.subject = "Must be at least 3 characters";
          }

          if (!helps) {
            errors.helps = "Required";
          } else if (helps.length < 6) {
            errors.helps = "Must be at least 6 characters";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const result = { ...values };
            // console.log(result); // The is the result object for the form.
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="block py-2">
              <label className="text-sm font-semibold text-gray-500 ">
                Request Type
              </label>

              <Field
                as="select"
                name="requestType"
                onChange={handleChange}
                value={values.requestType}
                className="w-full px-4 py-2 border border-gray-300 rounded "
              >
                <option value="">Select Request Type</option>
                <option value="General">General</option>
                <option value="Technical">Technical</option>
                <option value="Financial">Financial</option>
                <option value="Other">Other</option>
              </Field>

              <ErrorMessage
                name="requestType"
                component="div"
                className="py-1 text-sm italic font-semibold text-red-500"
              />
            </div>

            <div className="block py-2">
              <label className="py-2 text-sm font-semibold text-gray-500">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                value={values.subject}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <ErrorMessage
                name="subject"
                component="div"
                className="py-1 text-sm italic font-semibold text-red-500"
              />
            </div>
            <div className="block py-2">
              <label className="text-sm font-semibold text-gray-500">
                How we can help?
              </label>
              <textarea
                name="helps"
                onChange={handleChange}
                value={values.helps}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                rows={6}
              />

              <ErrorMessage
                name="helps"
                component="div"
                className="py-1 text-sm italic font-semibold text-red-500"
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
                    <p className="text-sm font-semibold">
                      Add up to 4 screenshot
                    </p>
                  </span>
                </label>
                <input
                  type="file"
                  className="hidden"
                  name="file"
                  ref={fileInputRef}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const selectedValue = e.target.files && e.target.files[0];
                    setFieldValue("file", selectedValue);
                  }}
                />
              </div>
              <ErrorMessage
                name="file"
                component="div"
                className="py-1 text-sm italic font-semibold text-red-500 "
              />
            </div>
            <div className="flex justify-end mt-4 space-x-4 text-sm font-medium text-gray-600 cursor-pointer hover:text-gray-700">
              <button
                onClick={onRequestClose}
                className="mt-4 font-semibold text-gray-500 hover:text-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 mt-4 font-medium text-white bg-indigo-400 rounded-md "
              >
                Send
              </button>
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default CustomModal;
