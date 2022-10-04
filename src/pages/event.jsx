import React from "react";
//
import { List } from "../components";
import CalendarIcon from "../assets/CalendarIcon.svg";
import LocationIcon from "../assets/LocationIcon.svg";
import EventImage from "../assets/Eventimage.png";
const Event = () => {
  const [eventData, setEventData] = React.useState([]);

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem("event_data"));
    if (data) {
      setEventData(data);
    }
  }, []);

  console.log(eventData);

  return (
    <section className="flex flex-col sm:mx-auto sm:max-w-lg sm:px-8 sm:pt-16 md:mx-0 md:w-full md:max-w-none md:flex-row md:items-center md:justify-between">
      <div className="order-1 h-80 w-full sm:h-96 md:order-2 md:h-80 md:w-80 ">
        <img
          className="h-full w-full object-cover object-center"
          src={EventImage}
          alt=""
        />
      </div>
      <div className="order-2 md:order-1 md:w-full md:max-w-sm">
        {/* Heading */}
        <div className="mb-8 px-5 pt-3 sm:px-0">
          <h3 className="text-2xl font-bold text-envited-primary-blue-700 sm:text-5xl">
            {eventData.event_name}
          </h3>
          <span className="text-sm text-envited-nuetral-gray-500 sm:text-lg">
            Hosted by <span className="font-bold">{eventData.host_name}</span>
          </span>
        </div>
        {/* List */}
        <div className="mb-8">
          <List
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Iconly/Light-Outline/Calendar">
                  <g id="Calendar">
                    <path
                      id="Fill 1"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.6665 9.9043H2.84253C2.42853 9.9043 2.09253 9.5683 2.09253 9.1543C2.09253 8.7403 2.42853 8.4043 2.84253 8.4043H20.6665C21.0805 8.4043 21.4165 8.7403 21.4165 9.1543C21.4165 9.5683 21.0805 9.9043 20.6665 9.9043Z"
                      fill="#8456EC"
                    />
                    <path
                      id="Fill 3"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.2011 13.8096C15.7871 13.8096 15.4471 13.4736 15.4471 13.0596C15.4471 12.6456 15.7781 12.3096 16.1921 12.3096H16.2011C16.6151 12.3096 16.9511 12.6456 16.9511 13.0596C16.9511 13.4736 16.6151 13.8096 16.2011 13.8096Z"
                      fill="#8456EC"
                    />
                    <path
                      id="Fill 5"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.7636 13.8096C11.3496 13.8096 11.0096 13.4736 11.0096 13.0596C11.0096 12.6456 11.3406 12.3096 11.7546 12.3096H11.7636C12.1776 12.3096 12.5136 12.6456 12.5136 13.0596C12.5136 13.4736 12.1776 13.8096 11.7636 13.8096Z"
                      fill="#8456EC"
                    />
                    <path
                      id="Fill 7"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.31689 13.8096C6.90289 13.8096 6.56189 13.4736 6.56189 13.0596C6.56189 12.6456 6.89389 12.3096 7.30789 12.3096H7.31689C7.73089 12.3096 8.06689 12.6456 8.06689 13.0596C8.06689 13.4736 7.73089 13.8096 7.31689 13.8096Z"
                      fill="#8456EC"
                    />
                    <path
                      id="Fill 9"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.2011 17.6963C15.7871 17.6963 15.4471 17.3603 15.4471 16.9463C15.4471 16.5323 15.7781 16.1963 16.1921 16.1963H16.2011C16.6151 16.1963 16.9511 16.5323 16.9511 16.9463C16.9511 17.3603 16.6151 17.6963 16.2011 17.6963Z"
                      fill="#8456EC"
                    />
                    <path
                      id="Fill 11"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.7636 17.6963C11.3496 17.6963 11.0096 17.3603 11.0096 16.9463C11.0096 16.5323 11.3406 16.1963 11.7546 16.1963H11.7636C12.1776 16.1963 12.5136 16.5323 12.5136 16.9463C12.5136 17.3603 12.1776 17.6963 11.7636 17.6963Z"
                      fill="#8456EC"
                    />
                    <path
                      id="Fill 13"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.31689 17.6963C6.90289 17.6963 6.56189 17.3603 6.56189 16.9463C6.56189 16.5323 6.89389 16.1963 7.30789 16.1963H7.31689C7.73089 16.1963 8.06689 16.5323 8.06689 16.9463C8.06689 17.3603 7.73089 17.6963 7.31689 17.6963Z"
                      fill="#8456EC"
                    />
                    <path
                      id="Fill 15"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.7935 5.791C15.3795 5.791 15.0435 5.455 15.0435 5.041V1.75C15.0435 1.336 15.3795 1 15.7935 1C16.2075 1 16.5435 1.336 16.5435 1.75V5.041C16.5435 5.455 16.2075 5.791 15.7935 5.791Z"
                      fill="#8456EC"
                    />
                    <path
                      id="Fill 17"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.71533 5.791C7.30133 5.791 6.96533 5.455 6.96533 5.041V1.75C6.96533 1.336 7.30133 1 7.71533 1C8.12933 1 8.46533 1.336 8.46533 1.75V5.041C8.46533 5.455 8.12933 5.791 7.71533 5.791Z"
                      fill="#8456EC"
                    />
                    <g id="Group 21">
                      <mask
                        id="mask0_14_903"
                        maskUnits="userSpaceOnUse"
                        x="2"
                        y="2"
                        width="20"
                        height="21"
                      >
                        <path
                          id="Clip 20"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2 2.5791H21.5V22.5H2V2.5791Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_14_903)">
                        <path
                          id="Fill 19"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.521 4.0791C4.928 4.0791 3.5 5.4621 3.5 7.9731V17.0221C3.5 19.5881 4.928 21.0001 7.521 21.0001H15.979C18.572 21.0001 20 19.6141 20 17.0981V7.9731C20.004 6.7381 19.672 5.7781 19.013 5.1181C18.335 4.4381 17.29 4.0791 15.988 4.0791H7.521ZM15.979 22.5001H7.521C4.116 22.5001 2 20.4011 2 17.0221V7.9731C2 4.6451 4.116 2.5791 7.521 2.5791H15.988C17.697 2.5791 19.11 3.0911 20.075 4.0581C21.012 4.9991 21.505 6.3521 21.5 7.9751V17.0981C21.5 20.4301 19.384 22.5001 15.979 22.5001Z"
                          fill="#8456EC"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            }
            maintext={eventData.start_date}
            subtext={`to ${eventData.end_date}`}
          />
          <List
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Iconly/Light-Outline/Location">
                  <g id="Location">
                    <path
                      id="Fill 1"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.2505 8.5C11.2855 8.5 10.5005 9.285 10.5005 10.251C10.5005 11.216 11.2855 12 12.2505 12C13.2155 12 14.0005 11.216 14.0005 10.251C14.0005 9.285 13.2155 8.5 12.2505 8.5ZM12.2505 13.5C10.4585 13.5 9.00049 12.043 9.00049 10.251C9.00049 8.458 10.4585 7 12.2505 7C14.0425 7 15.5005 8.458 15.5005 10.251C15.5005 12.043 14.0425 13.5 12.2505 13.5Z"
                      fill="#8456EC"
                    />
                    <g id="Group 5">
                      <mask
                        id="mask0_14_920"
                        maskUnits="userSpaceOnUse"
                        x="4"
                        y="2"
                        width="17"
                        height="20"
                      >
                        <path
                          id="Clip 4"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4 2H20.4995V21.5H4V2Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_14_920)">
                        <path
                          id="Fill 3"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.2495 3.5C8.52751 3.5 5.49951 6.557 5.49951 10.313C5.49951 15.092 11.1235 19.748 12.2495 19.996C13.3755 19.747 18.9995 15.091 18.9995 10.313C18.9995 6.557 15.9715 3.5 12.2495 3.5ZM12.2495 21.5C10.4555 21.5 3.99951 15.948 3.99951 10.313C3.99951 5.729 7.70051 2 12.2495 2C16.7985 2 20.4995 5.729 20.4995 10.313C20.4995 15.948 14.0435 21.5 12.2495 21.5Z"
                          fill="#8456EC"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            }
            maintext={`${eventData.street_address} ${eventData.city}`}
            subtext={`${eventData.city}, ${eventData.state}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Event;
