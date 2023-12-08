import Postcard from "./Postcard";
import image1 from "../images/Rectangle5.png";
import image2 from "../images/User.png";
import image3 from "../images/Rectangle3.png";
import image4 from "../images/User1.png";
import image5 from "../images/User2.png";
import image6 from "../images/Rectangle1.png";
import image7 from "../images/User3.png";

const Mainbody = () => {
  const Posts = [
    {
      id: 1,
      articleImage: image1,
      articleName: "✍️ Article",
      articleTitle:
        "What if famous brands had regular fonts? Meet RegulaBrands!",
      articleDescription:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      authorName: "Sarthak Kamra",
      authorImage: image2,
    },
    {
      id: 2,
      articleImage: image3,
      articleName: "🔬️ Education",
      articleTitle:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      articleDescription:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      authorName: "Sarah West",
      authorImage: image4,
    },
  ];

  return (
    <div className="maindoby-container mt-4">
      <div className="links w-full flex justify-between items-center border-b-2 pb-2">
        <div className="links-left">
          <a
            className="text-[#000] font-medium border-b-2 border-[#000] pb-4 "
            href=""
          >
            All post <span>(32)</span>
          </a>
          <a className="text-[#8a8a8a] font-normal" href="">
            Article
          </a>
          <a className="text-[#8a8a8a] font-normal" href="">
            Event
          </a>
          <a className="text-[#8a8a8a] font-normal" href="">
            Education
          </a>
          <a className="text-[#8a8a8a] font-normal" href="">
            Jobs
          </a>
        </div>
        <div className="links-right">
          <button className="post bg-[#edeef0] mr-3">Write a post</button>
          <button className="join bg-[#2F6CE5] text-[#fff]"> Join group</button>
        </div>
      </div>

      <div className="linkss-sm-device hidden">
        <div className="left font-semibold flex w-full justify-between items-center">
          Posts(39)
          <select
            required
            className="text-black/70 bg-[#F1F3F5] px-3 py-2 transition-all cursor-pointer rounded-lg w-[150px]"
          >
            <option value="" selected className="text-[#000]">
              Filter: All{" "}
            </option>
            <option value="option-1">Option 1</option>
            <option value="option-2">Option 2</option>
            <option value="option-3">Option 3</option>
          </select>
        </div>
        <div className="right"></div>
      </div>

      <div className="post-section flex w-full justify-between mt-5">
        <div className="post-section-left">
          {Posts.map((items) => {
            return <Postcard items={items} key={items.id} />;
          })}
          <div className="post-card-main-container border-2 bg-white w-[43.25rem] my-1">
            <img src={image6} alt="Post Image" />
            <div className="p-6">
              <h6 className="font-bold mb-2 text-2xl text-purple-800">
                🗓️ Meetup
              </h6>
              <div className="article-desc">
                <div className="w-full flex justify-between">
                  <h4 className="text-purple-700 mb-2">
                    Finance & Investment Elite Social Mixer @Lujiazui
                  </h4>
                  <span>
                    <button>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                      >
                        <path
                          d="M18.6667 14C18.6667 15.2833 19.7167 16.3333 21 16.3333C22.2834 16.3333 23.3334 15.2833 23.3334 14C23.3334 12.7166 22.2834 11.6666 21 11.6666C19.7167 11.6666 18.6667 12.7166 18.6667 14ZM16.3334 14C16.3334 12.7166 15.2834 11.6666 14 11.6666C12.7167 11.6666 11.6667 12.7166 11.6667 14C11.6667 15.2833 12.7167 16.3333 14 16.3333C15.2834 16.3333 16.3334 15.2833 16.3334 14ZM9.33337 14C9.33337 12.7166 8.28337 11.6666 7.00004 11.6666C5.71671 11.6666 4.66671 12.7166 4.66671 14C4.66671 15.2833 5.71671 16.3333 7.00004 16.3333C8.28337 16.3333 9.33337 15.2833 9.33337 14Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </span>
                </div>
                <div className="date-location">
                  <div className="date-location-inner mb-2 flex w-1/2 justify-between">
                    <p className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1_895)">
                          <path
                            d="M15.8333 2.49992H15V0.833252H13.3333V2.49992H6.66667V0.833252H5V2.49992H4.16667C3.24167 2.49992 2.50833 3.24992 2.50833 4.16659L2.5 15.8333C2.5 16.7499 3.24167 17.4999 4.16667 17.4999H15.8333C16.75 17.4999 17.5 16.7499 17.5 15.8333V4.16659C17.5 3.24992 16.75 2.49992 15.8333 2.49992ZM15.8333 15.8333H4.16667V6.66658H15.8333V15.8333ZM5.83333 8.33325H10V12.4999H5.83333V8.33325Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_895">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Fri, 12 Oct, 2018
                    </p>
                    <p className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1_886)">
                          <path
                            d="M9.99996 1.66675C6.77496 1.66675 4.16663 4.27508 4.16663 7.50008C4.16663 11.8751 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.8751 15.8333 7.50008C15.8333 4.27508 13.225 1.66675 9.99996 1.66675ZM5.83329 7.50008C5.83329 5.20008 7.69996 3.33342 9.99996 3.33342C12.3 3.33342 14.1666 5.20008 14.1666 7.50008C14.1666 9.90008 11.7666 13.4918 9.99996 15.7334C8.26663 13.5084 5.83329 9.87508 5.83329 7.50008Z"
                            fill="black"
                          />
                          <path
                            d="M9.99996 9.58341C11.1506 9.58341 12.0833 8.65067 12.0833 7.50008C12.0833 6.34949 11.1506 5.41675 9.99996 5.41675C8.84937 5.41675 7.91663 6.34949 7.91663 7.50008C7.91663 8.65067 8.84937 9.58341 9.99996 9.58341Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_886">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Ahmedabad, India
                    </p>
                  </div>
                  <button className="border-2 w-full my-3 rounded-lg text-[#E56135] py-2 font-semibold">
                    Visit website
                  </button>
                </div>
              </div>
              <div className="author-description mt-4 flex justify-between">
                <div className="author-description-left flex items-center">
                  <img src={image5} alt="author image" />
                  <h5 className="ml-2">Ronal Jones</h5>
                </div>
                <div className="author-description-right flex items-center">
                  <button>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z"
                        fill="#525252"
                      />
                    </svg>
                  </button>
                  <button>
                    <span className="mx-3">1.4k views</span>
                  </button>
                  <button>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1_968)">
                        <path
                          d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z"
                          fill="#2D2D2D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_968">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="post-card-main-container border-2 bg-white w-[43.25rem] my-1">
            <div className="p-6">
              <h6 className="font-bold mb-2 text-2xl text-purple-800">
                💼️ Job
              </h6>
              <div className="article-desc">
                <div className="w-full flex justify-between">
                  <h4 className="text-purple-700 mb-2">Software Developer</h4>
                  <span>
                    <button>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                      >
                        <path
                          d="M18.6667 14C18.6667 15.2833 19.7167 16.3333 21 16.3333C22.2834 16.3333 23.3334 15.2833 23.3334 14C23.3334 12.7166 22.2834 11.6666 21 11.6666C19.7167 11.6666 18.6667 12.7166 18.6667 14ZM16.3334 14C16.3334 12.7166 15.2834 11.6666 14 11.6666C12.7167 11.6666 11.6667 12.7166 11.6667 14C11.6667 15.2833 12.7167 16.3333 14 16.3333C15.2834 16.3333 16.3334 15.2833 16.3334 14ZM9.33337 14C9.33337 12.7166 8.28337 11.6666 7.00004 11.6666C5.71671 11.6666 4.66671 12.7166 4.66671 14C4.66671 15.2833 5.71671 16.3333 7.00004 16.3333C8.28337 16.3333 9.33337 15.2833 9.33337 14Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </span>
                </div>
                <div className="date-location">
                  <div className="date-location-inner mb-2 flex w-4/5 justify-between">
                    <p className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1_941)">
                          <path
                            d="M11.6667 5.00008V3.33341H8.33342V5.00008H11.6667ZM3.33341 6.66675V15.8334H16.6667V6.66675H3.33341ZM16.6667 5.00008C17.5917 5.00008 18.3334 5.74175 18.3334 6.66675V15.8334C18.3334 16.7584 17.5917 17.5001 16.6667 17.5001H3.33341C2.40841 17.5001 1.66675 16.7584 1.66675 15.8334L1.67508 6.66675C1.67508 5.74175 2.40841 5.00008 3.33341 5.00008H6.66675V3.33341C6.66675 2.40841 7.40841 1.66675 8.33342 1.66675H11.6667C12.5917 1.66675 13.3334 2.40841 13.3334 3.33341V5.00008H16.6667Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_941">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Innovaccer Analytics Private Ltd.
                    </p>
                    <p className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1_932)">
                          <path
                            d="M9.99996 1.66675C6.77496 1.66675 4.16663 4.27508 4.16663 7.50008C4.16663 11.8751 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.8751 15.8333 7.50008C15.8333 4.27508 13.225 1.66675 9.99996 1.66675ZM5.83329 7.50008C5.83329 5.20008 7.69996 3.33342 9.99996 3.33342C12.3 3.33342 14.1666 5.20008 14.1666 7.50008C14.1666 9.90008 11.7666 13.4918 9.99996 15.7334C8.26663 13.5084 5.83329 9.87508 5.83329 7.50008Z"
                            fill="black"
                          />
                          <path
                            d="M9.99996 9.58341C11.1506 9.58341 12.0833 8.65067 12.0833 7.50008C12.0833 6.34949 11.1506 5.41675 9.99996 5.41675C8.84937 5.41675 7.91663 6.34949 7.91663 7.50008C7.91663 8.65067 8.84937 9.58341 9.99996 9.58341Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_932">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Noida, India
                    </p>
                  </div>
                  <button className="border-2 w-full my-3 rounded-lg text-[#02B875] py-2 font-semibold">
                    Apply on Timesjobs
                  </button>
                </div>
              </div>
              <div className="author-description mt-4 flex justify-between">
                <div className="author-description-left flex items-center">
                  <img src={image7} alt="author image" />
                  <h5 className="ml-2">Joseph Gray</h5>
                </div>
                <div className="author-description-right flex items-center">
                  <button>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z"
                        fill="#525252"
                      />
                    </svg>
                  </button>
                  <button>
                    <span className="mx-3">1.4k views</span>
                  </button>
                  <button>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1_968)">
                        <path
                          d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z"
                          fill="#2D2D2D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_968">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="post-section-right w-full flex flex-col items-center h-[50%] pl-4">
          <div className="flex border-b-2 pb-2 mt-5 items-center mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
            >
              <path
                d="M6 0.5C3.0975 0.5 0.75 2.8475 0.75 5.75C0.75 9.6875 6 15.5 6 15.5C6 15.5 11.25 9.6875 11.25 5.75C11.25 2.8475 8.9025 0.5 6 0.5ZM2.25 5.75C2.25 3.68 3.93 2 6 2C8.07 2 9.75 3.68 9.75 5.75C9.75 7.91 7.59 11.1425 6 13.16C4.44 11.1575 2.25 7.8875 2.25 5.75Z"
                fill="black"
              />
            </svg>
            <input type="search" className="px-2" value="Noida, India" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_1_848)">
                <path
                  d="M2.5 14.375V17.5H5.625L14.8417 8.28334L11.7167 5.15834L2.5 14.375ZM17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C14.9833 2.41667 14.4583 2.41667 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_848">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex mt-[10%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g opacity="0.5" clipPath="url(#clip0_1_853)">
                <path
                  d="M7.33337 10H8.66671V11.3334H7.33337V10ZM7.33337 4.66671H8.66671V8.66671H7.33337V4.66671ZM7.99337 1.33337C4.31337 1.33337 1.33337 4.32004 1.33337 8.00004C1.33337 11.68 4.31337 14.6667 7.99337 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 7.99337 1.33337ZM8.00004 13.3334C5.05337 13.3334 2.66671 10.9467 2.66671 8.00004C2.66671 5.05337 5.05337 2.66671 8.00004 2.66671C10.9467 2.66671 13.3334 5.05337 13.3334 8.00004C13.3334 10.9467 10.9467 13.3334 8.00004 13.3334Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_853">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="text-sm	pl-1">
              Your location will help us serve better <br /> and extend a
              personalised experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbody;
