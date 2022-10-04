import React from "react";
//
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
//
import { FileUpload, Spinner } from "../components";

const maxFileInBytes = 2000000;
const kiloBytesPerFile = 1000;

const convertBytesToKB = (bytes) => Math.round(bytes / kiloBytesPerFile);

const Create = () => {
  const [disabled, setDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [file, setFile] = React.useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  let isImageFile = file && file.type.split("/")[0] === "image";

  const submitForm = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDisabled(false);
    }, 2000);
    localStorage.setItem("event_data", JSON.stringify(data));
  };

  return (
    <section className="px-12 pb-8 pt-7 sm:pt-16">
      {/* Event Details Header */}
      <div className="mb-10">
        <h3 className="mb-2 text-3xl font-bold text-envited-primary-blue-700 sm:text-5xl">
          Event Details
        </h3>
        <p className="text-sm font-normal text-envited-nuetral-gray-600 sm:text-lg">
          Kindly fill in your event details.
        </p>
      </div>
      {/* Form input */}
      <form
        onSubmit={handleSubmit(submitForm)}
        className="bg-white px-4 py-5 shadow sm:rounded-md sm:p-6"
      >
        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="">
                <h3 className="text-lg font-medium leading-6 text-envited-primary-blue-700">
                  Basic Information
                </h3>
                <p className="mt-1 text-sm text-envited-nuetral-gray-600">
                  This section contains basic event information.
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="sm:overflow-hidden">
                <div className="space-y-6 px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label
                        htmlFor="event_name"
                        className="block text-sm font-medium text-envited-nuetral-gray-600"
                      >
                        Event Name
                      </label>
                      <input
                        {...register("event_name", { required: true })}
                        type="text"
                        name="event_name"
                        id="event_name"
                        className="mt-1 block w-full rounded-sm border-envited-nuetral-gray-600 p-2 shadow-sm focus:border-envited-primary-pink-500 focus:ring-envited-primary-pink-500 sm:text-sm"
                      />
                      {errors.event_name && (
                        <p className=" text-envited-alert-red-500">
                          Event name is required.
                        </p>
                      )}
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="host_name"
                        className="block text-sm font-medium text-envited-nuetral-gray-600"
                      >
                        Host Name
                      </label>
                      <input
                        {...register("host_name", { required: true })}
                        type="text"
                        name="host_name"
                        id="host_name"
                        className="mt-1 block w-full rounded-sm border-envited-nuetral-gray-600 p-2 shadow-sm focus:border-envited-primary-pink-500 focus:ring-envited-primary-pink-500 sm:text-sm"
                      />
                      {errors.host_name && (
                        <p className=" text-envited-alert-red-500">
                          Host name is required.
                        </p>
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-3 ">
                      <label
                        htmlFor="start_date"
                        className="block text-sm font-medium text-envited-nuetral-gray-600"
                      >
                        Start Date
                      </label>
                      <input
                        {...register("start_date", { required: true })}
                        type="text"
                        name="start_date"
                        id="start_date"
                        placeholder="03/09/2022"
                        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      {errors.start_date && (
                        <p className=" text-envited-alert-red-500">
                          Start date is required.
                        </p>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="end_date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        End Date
                      </label>
                      <input
                        {...register("end_date", { required: true })}
                        type="text"
                        name="end_date"
                        id="end_date"
                        placeholder="06/09/2022"
                        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      {errors.end_date && (
                        <p className=" text-envited-alert-red-500">
                          End date is required.
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Event Photo */}
                  <div className="col-span-6">
                    <>
                      <label
                        htmlFor="fileupload"
                        className="relative mt-1 mb-4 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
                      >
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <div className="text-takke-green hover:text-takke-green focus-within:ring-takke-green cursor-pointer rounded-md font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2">
                              <span>Click</span>
                              <input
                                {...register("fileupload", { required: true })}
                                id="fileupload"
                                name="fileupload"
                                type="file"
                                className="absolute top-0 left-0 right-0 bottom-0 h-full w-full opacity-0"
                                onChange={handleChange}
                                accept="image/png, image/jpg, image/jpeg, image/gif"
                              />
                            </div>
                            <p className="pl-1">
                              or drop files here to upload ID
                            </p>
                          </div>
                          <p className="text-xs text-gray-500">PNG or JPG </p>
                        </div>
                      </label>
                      {file && (
                        <div className=" mb-4 flex flex-col justify-center">
                          <div
                            className={`${
                              file.size < maxFileInBytes && "h-44"
                            } flex justify-center`}
                          >
                            {file.size < maxFileInBytes ? (
                              isImageFile ? (
                                <img
                                  className="h-full"
                                  src={URL.createObjectURL(file)}
                                  alt="document preview"
                                />
                              ) : (
                                <div className="flex w-full items-center justify-center rounded-md bg-gray-300">
                                  This is a File
                                </div>
                              )
                            ) : (
                              <div className="flex justify-center text-red-400">
                                File too big, Please select another file
                              </div>
                            )}
                          </div>
                          {file.size < maxFileInBytes && (
                            <div className="mb-4 flex w-full flex-col items-center text-center">
                              <span className="mt-2 block w-32 truncate text-sm font-bold text-gray-500">
                                {file.name}
                              </span>
                              <span className=" text-sm text-gray-500 ">
                                {convertBytesToKB(file.size)} kb
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  </div>
                  {errors.fileupload && (
                    <p className=" text-envited-alert-red-500">
                      Event photo is required.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Location
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Let everyone know where you'll hold your event.
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="overflow-hidden">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label
                        htmlFor="street_address"
                        className="block text-sm font-medium text-envited-nuetral-gray-600"
                      >
                        Street address
                      </label>
                      <input
                        {...register("street_address", { required: true })}
                        type="text"
                        name="street_address"
                        id="street_address"
                        autoComplete="street-address"
                        className="mt-1 block w-full rounded-md border-envited-nuetral-gray-600 p-2 shadow-sm focus:border-envited-primary-pink-500 focus:ring-envited-primary-pink-500 sm:text-sm"
                      />
                      {errors.street_address && (
                        <p className=" text-envited-alert-red-500">
                          Street Address is required.
                        </p>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-3 ">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-envited-nuetral-gray-600"
                      >
                        City
                      </label>
                      <input
                        {...register("city", { required: true })}
                        type="text"
                        name="city"
                        id="city"
                        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      {errors.city && (
                        <p className=" text-envited-alert-red-500">
                          City is required.
                        </p>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State
                      </label>
                      <input
                        {...register("state", { required: true })}
                        type="text"
                        name="state"
                        id="state"
                        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      {errors.state && (
                        <p className=" text-envited-alert-red-500">
                          State is required.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-white px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-envited-primary-purple-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    {loading ? <Spinner /> : <span>Save</span>}
                  </button>
                </div>
                <div className="px-4 py-3 text-right sm:px-6">
                  {disabled ? (
                    <Link
                      to="/event"
                      className="text-base font-semibold text-envited-secondary-purple-200"
                      onClick={(event) => event.preventDefault()}
                    >
                      Next
                    </Link>
                  ) : (
                    <Link
                      to="/event"
                      className="text-base font-semibold text-envited-primary-purple-500"
                    >
                      Next
                    </Link>
                  )}
                </div>
                <div className="animate-bounce px-4 py-3 text-center sm:px-6">
                  {!disabled && (
                    <p className="text-base font-semibold text-envited-alert-green-500">
                      File upload successful...
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Create;
