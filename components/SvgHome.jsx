import { useEffect, useRef, forwardRef } from "react";
import { useLanguage } from '../context/LanguageContext';
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);

// ForwardRef SVG component

const MainSvg = forwardRef(({ onClick, ...props }, ref) =>
  <svg
    ref={ref}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
      outline: "#020617 SOLID 3PX",
      outlineOffset: "-2PX",
    }}
    viewBox="0 0 518 486"
    {...props}
  >
    <g transform="matrix(.86904 0 0 .93853 -351.203 -217.586)">
      <path
        d="M404.129 231.836h595.522v517.477H404.129z"
        style={{
          fill: "#00d2df",
        }}
      />
      <clipPath id="a">
        <path d="M404.129 231.836h595.522v517.477H404.129z" />
      </clipPath>
      <g clipPath="url(#a)">
        <g id="ShadowLayer">
          <path
            d="M1075.869 1521.817c-51.028-11.05-89.306-56.495-89.306-110.811 0-38.416 19.148-72.395 48.413-92.906-5.548-13.367-8.611-28.021-8.611-43.385 0-62.574 50.802-113.376 113.375-113.376 21.535 0 41.675 6.017 58.83 16.46a89.493 89.493 0 0 1-.333-7.715c0-48.761 39.588-88.348 88.348-88.348 18.542 0 35.756 5.723 49.973 15.499 15.246-26.549 43.884-44.446 76.67-44.446 29.565 0 55.757 14.553 71.798 36.881 14.453-10.31 32.136-16.377 51.226-16.377 30.183 0 56.851 15.168 72.79 38.291 16.028-22.443 42.29-37.085 71.944-37.085 48.306 0 87.609 38.852 88.338 86.986 46.384 2.654 83.233 41.159 83.233 88.203 0 21.445-7.657 41.115-20.385 56.424 16.301 16.032 26.415 38.335 26.415 62.981 0 35.757-21.287 66.58-51.869 80.478 36.189 12.899 62.121 47.484 62.121 88.078 0 31.085-15.206 58.646-38.58 75.644 6.167 12.469 9.633 26.508 9.633 41.349 0 51.59-41.884 93.474-93.474 93.474-16.056 0-31.171-4.057-44.377-11.2.234 2.697.354 5.427.354 8.185 0 51.59-41.884 93.474-93.474 93.474-31.479 0-59.344-15.594-76.286-39.472-10.748 7.58-23.855 12.033-37.994 12.033-19.971 0-37.883-8.885-49.997-22.914-11.693 10.496-27.147 16.883-44.08 16.883-15.966 0-30.615-5.678-42.038-15.123-12.064 13.008-29.299 21.154-48.421 21.154-34.579 0-62.985-26.635-65.805-60.49a65.8 65.8 0 0 1-23.448 4.291c-36.446 0-66.035-29.589-66.035-66.035l.001-.302h-.303c-36.445 0-66.035-29.589-66.035-66.035 0-11.032 2.712-21.436 7.504-30.582-14.185-12.116-23.183-30.129-23.183-50.228a65.92 65.92 0 0 1 3.068-19.938Zm128.834-154.197c5.548 13.367 8.611 28.022 8.611 43.386 0 31.019-12.485 59.146-32.699 79.625 14.802 12.114 24.256 30.524 24.256 51.124 0 11.033-2.712 21.437-7.504 30.582 14.185 12.116 23.183 30.13 23.183 50.228v.303l.302-.001c34.578 0 62.985 26.635 65.805 60.49a65.8 65.8 0 0 1 23.448-4.291c15.965 0 30.614 5.678 42.037 15.123 12.064-13.008 29.299-21.154 48.422-21.154 19.971 0 37.883 8.885 49.996 22.914 11.693-10.495 27.147-16.883 44.081-16.883 14.139 0 27.246 4.453 37.994 12.033 16.942-23.878 44.807-39.472 76.286-39.472 16.056 0 31.171 4.057 44.377 11.2a94.677 94.677 0 0 1-.354-8.185c0-31.085 15.206-58.646 38.58-75.645-6.167-12.469-9.633-26.507-9.633-41.348 0-12.867 2.605-25.13 7.317-36.29-13.568-9.871-22.394-25.872-22.394-43.917 0-19.507 10.313-36.624 25.779-46.191-6.824-12.532-10.702-26.896-10.702-42.158 0-21.445 7.657-41.115 20.384-56.424-16-15.736-26.039-37.514-26.404-61.62-28.067-1.605-52.642-16.337-67.675-38.145-16.027 22.443-42.289 37.085-71.944 37.085-29.565 0-55.758-14.554-71.798-36.881-14.453 10.31-32.137 16.377-51.226 16.377-18.541 0-35.756-5.724-49.972-15.499-15.246 26.549-43.885 44.446-76.671 44.446-12.82 0-25.007-2.737-36.006-7.657a113.62 113.62 0 0 1 2.537 23.94c0 38.416-19.148 72.395-48.413 92.905Z"
            style={{
              fill: "#009cdf",
            }}
            transform="matrix(1.07777 0 0 .99797 -857.54 -961.773)"
          />
          <circle id="Circle1"
            cx={1632.781}
            cy={1370.433}
            r={20.501}
            style={{
              fill: "#009cdf",
            }}
            transform="matrix(.50526 0 0 .46784 113.962 -297.607)"
          />
          <circle id="Circle2"
            cx={1632.781}
            cy={1370.433}
            r={20.501}
            style={{
              fill: "#009cdf",
            }}
            transform="matrix(.92188 0 0 .85361 -1008.449 -829.303)"
          />
          <circle id="Circle3"
            cx={1632.781}
            cy={1370.433}
            r={20.501}
            style={{
              fill: "#009cdf",
            }}
            transform="matrix(.84266 0 0 .78026 -447.3 -523.853)"
          />
        </g>
        <g id="CharacterOffset">
          <g
            id="Character"
            style={{
              filter: "drop-shadow(2px 4px 0#009cdf)",
            }}
          >
            <g id="Head" transformOrigin="350px 450px" >
              <g transform="matrix(1.23123 .4636 -.50068 1.14006 -3853.762 -1702.636)">
                <path
                  d="M3702.14 497.935s-36.155-32.281-28.838-70.157 30.99-36.585 40.029-24.103c9.038 12.482-30.129-48.636-8.178-79.195 21.951-30.559 31.85 3.873 31.85 3.873s-3.013-54.662 17.217-61.118c20.229-6.456 23.242 8.608 24.963 12.912 1.722 4.305 2.112 13.226 1.722 9.9-4.376-37.302 59.703-142.538 111.476-83.93 24.35 27.564-27.115 96.412-27.115 96.412s25.394-30.129 38.736-17.647c12.387 11.587-12.912 31.85-12.912 31.85s12.912-11.19 21.951-3.873c9.039 7.317 6.887 30.128-19.368 46.484s27.546-20.66 39.597 6.456c12.052 27.116-25.824 59.397-25.824 59.397s16.786-6.026 26.255 4.734c9.469 10.761 15.064 30.129-22.382 58.106-37.445 27.976-209.179 9.899-209.179 9.899Z"
                  style={{
                    fill: "url(#b)",
                  }}
                />
                <clipPath id="c">
                  <path d="M3702.14 497.935s-36.155-32.281-28.838-70.157 30.99-36.585 40.029-24.103c9.038 12.482-30.129-48.636-8.178-79.195 21.951-30.559 31.85 3.873 31.85 3.873s-3.013-54.662 17.217-61.118c20.229-6.456 23.242 8.608 24.963 12.912 1.722 4.305 2.112 13.226 1.722 9.9-4.376-37.302 59.703-142.538 111.476-83.93 24.35 27.564-27.115 96.412-27.115 96.412s25.394-30.129 38.736-17.647c12.387 11.587-12.912 31.85-12.912 31.85s12.912-11.19 21.951-3.873c9.039 7.317 6.887 30.128-19.368 46.484s27.546-20.66 39.597 6.456c12.052 27.116-25.824 59.397-25.824 59.397s16.786-6.026 26.255 4.734c9.469 10.761 15.064 30.129-22.382 58.106-37.445 27.976-209.179 9.899-209.179 9.899Z" />
                </clipPath>
                <g clipPath="url(#c)">
                  <path
                    d="m3697.856 495.712 26.092 110.009 147.384-3.526 43.721-114.24s-58.946-2.9-108.542-.608c-46.567 2.151-108.655 8.365-108.655 8.365Z"
                    style={{
                      fill: "#0e212a",
                      fillOpacity: 0.21,
                    }}
                    transform="matrix(1.13996 0 0 1.04638 -532.76 -28.095)"
                  />
                  <use
                    xlinkHref="#d"
                    width={334}
                    height={337}
                    x={33.254}
                    y={67.666}
                    transform="matrix(.80198 -.32612 .32612 .80198 3559.622 249.291)"
                  />
                </g>
              </g>
              <g transform="matrix(1.23123 .4636 -.50068 1.14006 -3851.481 -1698.763)">
                <path d="M3829.098 431.231c13.016-.597 8.623-7.961 19.872-4.852 9.009 2.489 16.156 33.408-20.334 31.888-33.275-1.387-26.343-27.267-18.024-30.271 7.619-2.751 7.811 3.725 18.486 3.235Z" />
                <clipPath id="e">
                  <path d="M3829.098 431.231c13.016-.597 8.623-7.961 19.872-4.852 9.009 2.489 16.156 33.408-20.334 31.888-33.275-1.387-26.343-27.267-18.024-30.271 7.619-2.751 7.811 3.725 18.486 3.235Z" />
                </clipPath>
                <g clipPath="url(#e)">
                  <path
                    d="m3813.769 421.401.473 19.522 50.755-4.023-1.42-17.51-49.808 2.011Z"
                    style={{
                      fill: "#fff",
                    }}
                  />
                  <ellipse
                    cx={3847.842}
                    cy={451.866}
                    rx={23.899}
                    ry={13.192}
                    style={{
                      fill: "#ff005d",
                    }}
                    transform="translate(-4.732 3.294)"
                  />
                </g>
              </g>
              <path
                d="M3883.831 234.332s2.958 24.106-21 45.254"
                style={{
                  fill: "#fff",
                  stroke: "#fff",
                  strokeWidth: "2.89px",
                }}
                transform="matrix(1.23123 .4636 -.50068 1.14006 -3853.762 -1702.636)"
              />
              <ellipse
                cx={3857.528}
                cy={292.748}
                rx={2.683}
                ry={5.324}
                style={{
                  fill: "#fff",
                  stroke: "#fff",
                  strokeWidth: "2.97px",
                }}
                transform="matrix(.49397 .9615 -1.2836 .5654 -782.369 -3461.492)"
              />
              <path
                d="M3723.526 328.981s-13.336 3.169-13.336 24.692"
                style={{
                  fill: "#fff",
                  stroke: "#fff",
                  strokeWidth: "2.89px",
                }}
                transform="matrix(1.23123 .4636 -.50068 1.14006 -3853.762 -1702.636)"
              />
              <path
                d="M3689.895 415.86s-7.83 8.456-1.228 35.789"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: "2.02px",
                }}
                transform="matrix(-1.81543 -1.35821 -.83532 .9573 7825.38 5148.92)"
              />

              <g id="PupilR" transform="matrix(1.23123 .4636 -.50068 1.14006 -3856.394 -1701.615)" transformOrigin="0px 8px">
                <ellipse cx={3839.804} cy={414.18} rx={4.827} ry={7.572} />
                <clipPath id="f">
                  <ellipse cx={3839.804} cy={414.18} rx={4.827} ry={7.572} />
                </clipPath>
                <g clipPath="url(#f)">
                  <ellipse id="PupilLightR"
                    cx={3839.804}
                    cy={414.18}
                    rx={4.827}
                    ry={7.572}
                    style={{
                      fill: "#fff",
                    }}
                    transform="matrix(.61765 0 0 .55625 1468.066 181.284)"
                  />
                </g>
              </g>
              <g id="PupilL" transform="matrix(1.23123 .4636 -.50068 1.14006 -3937.705 -1733.238)" transformOrigin="0px 8px">
                <ellipse cx={3839.804} cy={414.18} rx={4.827} ry={7.572} />
                <clipPath id="g">
                  <ellipse cx={3839.804} cy={414.18} rx={4.827} ry={7.572} />
                </clipPath>
                <g clipPath="url(#g)">
                  <ellipse id="PupilLightL"
                    cx={3839.804}
                    cy={414.18}
                    rx={4.827}
                    ry={7.572}
                    style={{
                      fill: "#fff",
                    }}
                    transform="matrix(.61765 0 0 .55625 1468.16 182.041)"
                  />
                </g>
              </g>
              <path d="M672.749 530.604s14.35 13.43 19.376 27.421c.162.45 11.31-27.535-19.376-27.42ZM602.403 496.38s-22.487-.44-37.783 5.899c-.493.204 12.734-27 37.783-5.899Z" />
            </g>



            <path
              d="M3702.667 499.467s-21.196 52.225-12.195 116.726"
              style={{
                fill: "none",
                stroke: "#000",
                strokeWidth: "2.89px",
              }}
              transform="matrix(1.23123 .4636 -.50068 1.14006 -3853.762 -1702.636)"
            />
            <g id="HandUp" transformOrigin="0px 100px">
              <path id="ArmUp"
              d="M3702.667 499.467s-81.196 52.225-12.195 116.726"
                
                style={{
                  fill: "none",
                  stroke: "#000",
                  strokeWidth: "2.89px",
                }}
                transform="matrix(-.77244 -1.00155 1.08164 -.71524 3021.734 4747.012)"
              />
               <path id="ArmUp_Target1"
                d="M3702.667 499.467s-21.196 52.225-12.195 116.726"
                style={{
                  fill: "none",
                  stroke: "transparent",
                  strokeWidth: "2.89px",
                }}
                transform="matrix(-.77244 -1.00155 1.08164 -.71524 3021.734 4747.012)"
              />
              
              <ellipse
                cx={3690.535}
                cy={624.799}
                rx={7.322}
                ry={14.954}
                style={{
                  stroke: "#000",
                  strokeWidth: "2.89px",
                }}
                transform="matrix(-.9611 -.85011 .9181 -.88993 3824.978 4290.495)"
              />
            </g>
            <path
              d="M3704.774 495.04a6.064 6.064 0 0 0-5.314 7.434l24.488 103.247 147.384-3.526 40.711-106.374a6.066 6.066 0 0 0-5.406-8.225c-18.031-.695-61.861-2.017-100.126-.249-37.191 1.718-84.282 6.027-101.737 7.693Z"
              style={{
                fill: "url(#h)",
              }}
              transform="matrix(1.23123 .4636 -.50068 1.14006 -3853.762 -1702.636)"
            />
          </g>
        </g>
        <path id="FrontLayer" 
          d="M1075.869 1521.817c-51.028-11.05-89.306-56.495-89.306-110.811 0-38.416 19.148-72.395 48.413-92.906-5.548-13.367-8.611-28.021-8.611-43.385 0-62.574 50.802-113.376 113.375-113.376 21.535 0 41.675 6.017 58.83 16.46a89.493 89.493 0 0 1-.333-7.715c0-48.761 39.588-88.348 88.348-88.348 18.542 0 35.756 5.723 49.973 15.499 15.246-26.549 43.884-44.446 76.67-44.446 29.565 0 55.757 14.553 71.798 36.881 14.453-10.31 32.136-16.377 51.226-16.377 30.183 0 56.851 15.168 72.79 38.291 16.028-22.443 42.29-37.085 71.944-37.085 48.306 0 87.609 38.852 88.338 86.986 46.384 2.654 83.233 41.159 83.233 88.203 0 21.445-7.657 41.115-20.385 56.424 16.301 16.032 26.415 38.335 26.415 62.981 0 35.757-21.287 66.58-51.869 80.478 36.189 12.899 62.121 47.484 62.121 88.078 0 31.085-15.206 58.646-38.58 75.644 6.167 12.469 9.633 26.508 9.633 41.349 0 51.59-41.884 93.474-93.474 93.474-16.056 0-31.171-4.057-44.377-11.2.234 2.697.354 5.427.354 8.185 0 51.59-41.884 93.474-93.474 93.474-31.479 0-59.344-15.594-76.286-39.472-10.748 7.58-23.855 12.033-37.994 12.033-19.971 0-37.883-8.885-49.997-22.914-11.693 10.496-27.147 16.883-44.08 16.883-15.966 0-30.615-5.678-42.038-15.123-12.064 13.008-29.299 21.154-48.421 21.154-34.579 0-62.985-26.635-65.805-60.49a65.8 65.8 0 0 1-23.448 4.291c-36.446 0-66.035-29.589-66.035-66.035l.001-.302h-.303c-36.445 0-66.035-29.589-66.035-66.035 0-11.032 2.712-21.436 7.504-30.582-14.185-12.116-23.183-30.129-23.183-50.228a65.92 65.92 0 0 1 3.068-19.938Zm128.834-154.197c5.548 13.367 8.611 28.022 8.611 43.386 0 31.019-12.485 59.146-32.699 79.625 14.802 12.114 24.256 30.524 24.256 51.124 0 11.033-2.712 21.437-7.504 30.582 14.185 12.116 23.183 30.13 23.183 50.228v.303l.302-.001c34.578 0 62.985 26.635 65.805 60.49a65.8 65.8 0 0 1 23.448-4.291c15.965 0 30.614 5.678 42.037 15.123 12.064-13.008 29.299-21.154 48.422-21.154 19.971 0 37.883 8.885 49.996 22.914 11.693-10.495 27.147-16.883 44.081-16.883 14.139 0 27.246 4.453 37.994 12.033 16.942-23.878 44.807-39.472 76.286-39.472 16.056 0 31.171 4.057 44.377 11.2a94.677 94.677 0 0 1-.354-8.185c0-31.085 15.206-58.646 38.58-75.645-6.167-12.469-9.633-26.507-9.633-41.348 0-12.867 2.605-25.13 7.317-36.29-13.568-9.871-22.394-25.872-22.394-43.917 0-19.507 10.313-36.624 25.779-46.191-6.824-12.532-10.702-26.896-10.702-42.158 0-21.445 7.657-41.115 20.384-56.424-16-15.736-26.039-37.514-26.404-61.62-28.067-1.605-52.642-16.337-67.675-38.145-16.027 22.443-42.289 37.085-71.944 37.085-29.565 0-55.758-14.554-71.798-36.881-14.453 10.31-32.137 16.377-51.226 16.377-18.541 0-35.756-5.724-49.972-15.499-15.246 26.549-43.885 44.446-76.671 44.446-12.82 0-25.007-2.737-36.006-7.657a113.62 113.62 0 0 1 2.537 23.94c0 38.416-19.148 72.395-48.413 92.905Z"
          style={{
            fill: "#020617",
            transform: "matrix(1.1507,0,0,1.0655,-951.92004,-1059.39195)"
          }}
          transform="matrix(1.1507 0 0 1.0655 -961.654 -1059.392)"
        />
      </g>
    </g>
    <defs>
      <radialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-72.55 2220.747 -2344.303) scale(284.56421)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#ff9600",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#f6ff36",
            stopOpacity: 1,
          }}
        />
      </radialGradient>
      <linearGradient
        id="h"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="rotate(131.835 1806.738 1113.377) scale(149.17612)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#5b8499",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#24546c",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <image
        xlinkHref="data:image/png;base64,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"
        id="d"
        width={334}
        height={337}
      />
    </defs>
  </svg>
)


export default function SvgHome() {
  const { t, getLocalized } = useLanguage();
  const svgRef = useRef(null);
  const loopTl = useRef(null);
  const loopYoyo = useRef(null);
  const clickTl = useRef(null);
  const mouseLr = useRef(null);
  const mouseTb = useRef(null);
  const handAni = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const Character = svg.querySelector("#Character");
    const ShadowLayer = svg.querySelector('#ShadowLayer')
    const FrontLayer = svg.querySelector('#FrontLayer')
    const Head = svg.querySelector('#Head')
    const HandUp = svg.querySelector('#HandUp')
    const ArmUp = svg.querySelector('#ArmUp')
    const ArmUp_Target1 = svg.querySelector('#ArmUp_Target1')
    const PupilR = svg.querySelector('#PupilR')
    const PupilL = svg.querySelector('#PupilL')
    const PupilLightR = svg.querySelector('#PupilLightR')
    const PupilLightL = svg.querySelector('#PupilLightL')
    const CharacterOffset = svg.querySelector('#CharacterOffset')
    const Circle1 = svg.querySelector('#Circle1')
    const Circle2 = svg.querySelector('#Circle2')
    const Circle3 = svg.querySelector('#Circle3')

    // 🔁 LOOPING TIMELINE - circle pulses and moves back/forth
    loopTl.current = gsap.timeline({ repeat: -1, yoyo: false })
      .set(PupilR, { scaleY: 1.2 })
      .set(PupilL, { scaleY: 1.2 })
      .set(Head, { rotate: -1 })
      .to(PupilR, {
        keyframes: [
          { scaleY: 1.2, duration: 0.3, ease: "power2.out" },
          { scaleY: 1.2, duration: 0.1, ease: "power2.out" },
          { scaleY: 0.1, duration: 0.2, ease: "power2.out" },
          { scaleY: 1.2, duration: 0.2 },
          { scaleY: 1.2, duration: 1.2 },
        ]
      })
      .to(PupilL, {
        keyframes: [
          { scaleY: 1.2, duration: 0.3, ease: "power2.out" },
          { scaleY: 1.2, duration: 0.16, ease: "power2.out" },
          { scaleY: 0.1, duration: 0.2, ease: "power2.out" },
          { scaleY: 1.2, duration: 0.2 },
          { scaleY: 1.2, duration: 1.2 },
        ]
      }, "<")
      .to(Head, {
        keyframes: [
          { rotate: 1, duration: 1.03, ease: "none" },
          { rotate: -1, duration: 1.03, ease: "none" }
        ]
      }, "<")
      ;

    handAni.current = gsap.timeline({ repeat: -1, yoyo: true })
      .set(HandUp, { rotate: -50 })
      .to(ArmUp, {
        morphSVG: ArmUp_Target1, duration: 2, ease: "sine.out",
      }, "<")
      .to(HandUp, { rotate: 5, duration: 2, ease: "sine.out"}, "<");


    loopYoyo.current = gsap.timeline({ repeat: -1, yoyo: true })
      .to(Circle1, {
        y: -1050,
        duration: 1.5,
        ease: "power1.inOut"
      }, "<")
      .to(Circle2, {
        y: -1000,
        duration: 1.5,
        ease: "power1.inOut"
      }, "<")
      .to(Circle3, {
        y: -800,
        duration: 1.5,
        ease: "power1.inOut"
      }, "<")
      ;

    // ▶ CLICK TIMELINE - star spins and grows
    clickTl.current = gsap.timeline({ paused: true })
      ;


    mouseLr.current = gsap.timeline({ paused: true })
      .set(ShadowLayer, { x: -5 })
      .set(CharacterOffset, { x: -10 })
      .set(PupilLightR, { x: -1 })
      .set(PupilLightL, { x: -1 })
      .to(ShadowLayer, {
        x: 20, duration: 0.5, ease: "none"
      }, "<")
      .to(CharacterOffset, {
        x: 5, duration: 0.5, ease: "none"
      }, "<")
      .to(PupilLightR, {
        x: 5, duration: 0.5, ease: "none"
      }, "<")
      .to(PupilLightL, {
        x: 5, duration: 0.5, ease: "none"
      }, "<")
      ;

    mouseTb.current = gsap.timeline({ paused: true })
      .set(ShadowLayer, { y: -15 })
      .set(CharacterOffset, { y: -10 })
      .set(PupilLightR, { y: -1 })
      .set(PupilLightL, { y: -1 })
      .to(ShadowLayer, {
        y: 15, duration: 0.5, ease: "none"
      }, "<")
      .to(CharacterOffset, {
        y: 5, duration: 0.5, ease: "none"
      }, "<")
      .to(PupilLightR, {
        y: 9, duration: 0.5, ease: "none"
      }, "<")
      .to(PupilLightL, {
        y: 9, duration: 0.5, ease: "none"
      }, "<");


    const handleMouseMove = (e) => {
      if (!svgRef.current) return;

      const rect = svgRef.current.getBoundingClientRect();

      // mouse position relative to the element
      const localX = e.clientX - rect.left;
      const localY = e.clientY - rect.top;

      // normalize (0 → 1)
      let progressX = localX / rect.width;
      let progressY = localY / rect.height;

      // clamp to avoid negative / >1 values
      progressX = Math.max(0, Math.min(1, progressX));
      progressY = Math.max(0, Math.min(1, progressY));
      console.log("x: ", progressX, " y: ", progressY);

      mouseLr.current.progress(progressX);
      mouseTb.current.progress(progressY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  let isOpen = false;

  const handleClick = () => {
    if (!isOpen) {
      clickTl.current.restart();
    } else {
      clickTl.current.reverse();
    }
    isOpen = !isOpen;
  };

  return (
    <div
      style={{margin: "0 auto", cursor: "pointer" }}
      class="max-w-[450px] w-[100%]"
    >
      <MainSvg ref={svgRef} onClick={handleClick} />
    </div>
  );
}
