"use client";

import { useEffect } from "react";
import { StyledGeneralInfo } from "./GeneralInfo.styles";

export default function GeneralInfo() {

    function fillSVGPaths() {
        console.log("scrollPercentage:");
        if (typeof window !== 'undefined') {
            let pathElements = document.querySelectorAll('path');
            const generalInfo = document.getElementsByClassName('general-info')[0];
            let rect = generalInfo.getBoundingClientRect();
            let scrollPercentage = (window.scrollY - rect.y) / (rect.height);
            console.log("scrollPercentage:", scrollPercentage);
            for (var i = 0; i < pathElements.length; i++) {
                let path = pathElements[i];

                let pathLength = path.getTotalLength();

                path.style.strokeDasharray = pathLength.toString();
                path.style.strokeDashoffset = pathLength.toString();
                let drawLength = pathLength * Math.max(scrollPercentage + 0.3, 0);

                path.style.strokeDashoffset = (pathLength - drawLength).toString();
            }
        }
    }

    useEffect(() => {
        const tulirSite = document.getElementsByClassName('tulir-site')[0];

        tulirSite.addEventListener('scroll', fillSVGPaths);

        return () => {
            tulirSite.removeEventListener('scroll', fillSVGPaths);
        };
    }, []);

    return (
        <section className="general-info p-0">
            <StyledGeneralInfo>
                <div className="svg-container">
                    <svg
                        viewBox="0 0 2360 1640"
                        >
                        <path
                            fillRule="evenodd"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="20"
                            strokeWidth="5"
                            d="M708.571 448.571c-.864.865-1.571 1.958-1.571 2.429 0 1.111 2.889 4 4 4 1.111 0 4-2.889 4-4 0-1.111-2.889-4-4-4-.471 0-1.564.707-2.429 1.571m370.888 14.851c-1.347 2.056-1.429 3.532-.543 9.75 1.552 10.9 5.561 24.821 11.104 38.557 2.714 6.725 6.086 16.77 7.493 22.322 6.019 23.744 14.984 40.386 36.35 67.474 3.894 4.936 10.298 14.652 14.232 21.591 7.914 13.958 15.066 23.078 33.102 42.209 19.88 21.087 26.037 28.599 25.441 31.039-.287 1.175-.794 8.886-1.128 17.136-.334 8.25-1.321 25.35-2.194 38-1.254 18.159-1.412 28.788-.754 50.5.459 15.125.94 32.675 1.07 39 .328 16.016-.8 53-1.616 53-1.366 0-5.779-11.204-14.769-37.5-.564-1.65-2.029-5.925-3.255-9.5-7.803-22.75-9.291-28.685-8.567-34.149.811-6.11-3.03-20.85-8.43-32.351-3.233-6.886-5.199-9.392-14.115-18-5.697-5.5-12.116-11.288-14.264-12.862-5.187-3.799-35.785-18.977-47.116-23.371-25.619-9.934-33.958-11.318-69.703-11.569L993.5 714.5l-5.219 3.38c-4.558 2.952-5.833 3.321-10.065 2.915-2.665-.256-9.091-2.077-14.281-4.045-22.52-8.544-25.755-9.639-31.563-10.687-7.302-1.319-10.954-.291-12.39 3.484-.54 1.421-.982 3.023-.982 3.561 0 2.085 10 11.517 20.659 19.486 6.137 4.589 17.032 14.025 24.21 20.969 12.636 12.223 33.081 28.539 51.631 41.203 4.95 3.38 12.573 8.902 16.94 12.271 4.368 3.37 10.46 7.398 13.54 8.953 3.079 1.554 9.181 5.474 13.56 8.71 4.378 3.236 13.81 9.883 20.96 14.77 19.929 13.623 30.641 21.167 47 33.102 8.25 6.018 18.375 13.175 22.5 15.905 12.295 8.135 31.145 22.909 36.56 28.654 9.854 10.454 11.677 17.62 12.94 50.869.324 8.525 1.005 19.55 1.514 24.5 1.871 18.21 3.008 58.617 3.447 122.5.248 36.025.928 71.183 1.512 78.129.583 6.946 1.166 22.021 1.294 33.5.251 22.444-1.074 33.178-4.519 36.623-1.448 1.448-1.577 2.199-.67 3.894 1.161 2.169 3.497 2.214 20.867.401 5.056-.528 6.048-2.449 4.562-8.838-.674-2.901-1.54-14.034-1.925-24.741-.661-18.385-.343-25.737 2.423-55.968.528-5.775 1.265-24.338 1.637-41.25.372-16.912.836-30.75 1.031-30.75.195 0 1.136.391 2.091.87 9.506 4.763 11.913 5.317 28.683 6.603 14.732 1.13 17.87 1.677 23.053 4.022 3.3 1.494 8.7 3.105 12 3.581 11.409 1.645 33.471-2.345 46.88-8.478 8.891-4.067 13.233-4.335 19.425-1.197 6.764 3.428 17.327 5.591 27.51 5.633 4.502.019 13.36.673 19.685 1.454 33.304 4.111 44.189 4.827 54 3.55 13.52-1.759 23.593-5.214 32.242-11.057 10.775-7.279 12.25-7.448 52.935-6.039 18.877.653 36.874 1.423 39.992 1.711 5.231.482 5.797.328 7.315-1.989 1.468-2.24 1.488-2.817.181-5.338-.806-1.554-3.039-4.444-4.963-6.421-5.285-5.433-25.292-19.194-41.202-28.34-7.91-4.548-12.22-8.316-18.247-15.952-10.335-13.095-25.994-29.173-32.977-33.858-19.869-13.331-48.338-23.077-89.885-30.772-21.3-3.944-29.204-3.924-40.391.105-4.675 1.683-15.025 4.834-23 7.001-27.953 7.596-32.547 9.111-38.417 12.671-8.505 5.157-18.101 12.563-25.583 19.745-3.575 3.431-9.13 8.342-12.345 10.913-10.682 8.541-18.817 18.351-28.057 33.832-3.201 5.362-6.115 9.75-6.475 9.75-1.294 0-5.263-26.798-6.146-41.5-.496-8.25-1.396-28.05-2.001-44s-1.535-34.85-2.066-42c-1.679-22.612-2.836-56.158-2.809-81.5.03-28.146 1.917-63.078 3.518-65.114.6-.762 2.349-4.641 3.887-8.619 2.5-6.465 3.126-7.295 5.895-7.814 4.566-.855 29.377 2.771 48.599 7.102 5.576 1.256 13.4 1.764 30.5 1.978 12.65.158 28.175.775 34.5 1.369 6.325.595 21.659 1.085 34.075 1.089 21.414.009 22.949-.118 29.863-2.47 9.743-3.314 15.052-7.591 28.359-22.848 19.248-22.069 30.791-28.846 77.203-45.326 4.938-1.753 9.946-2.637 17-3.002 11.689-.604 16.105-1.738 17.593-4.518 1.686-3.151.323-6.577-2.898-7.284-1.588-.349-3.526-1.833-4.461-3.416-2.378-4.026-8.413-7.868-15.809-10.065-3.534-1.049-17-5.588-29.925-10.087s-27.958-9.503-33.407-11.12c-13.309-3.95-27.187-9.206-38.093-14.428-12.515-5.993-25.358-10.102-37.855-12.113-10.191-1.639-11.04-1.632-20.389.156-12.125 2.319-19.776 5.275-40.456 15.63-20.98 10.506-36.556 20.708-50.3 32.947-14.336 12.767-19.24 17.929-37 38.953-8.131 9.625-15.561 18.329-16.512 19.342-1.639 1.747-1.655 1.362-.318-7.5 3.161-20.939 11.565-50.433 18.405-64.597 8.01-16.585 29.23-39.398 66.425-71.411 14.44-12.428 26.006-21.18 40.313-30.502 18.587-12.113 19.185-12.54 21.706-15.537 1.808-2.148 2.196-3.395 1.579-5.072-1.356-3.688-5.03-4.28-14.297-2.301-13.307 2.84-16.418 4.007-35.895 13.461-15.987 7.759-19.161 9.694-23.593 14.38-2.817 2.978-6.491 8.128-8.165 11.444-3.484 6.902-7.926 10.31-22.419 17.2-6.966 3.312-10.386 5.766-16.628 11.933-4.322 4.27-8.839 9.686-10.038 12.036-1.754 3.438-2.45 4.048-3.566 3.121-2.79-2.315-5.852-.735-7.757 4.003l-1.809 4.5.508-6.145c.44-5.319.244-6.328-1.456-7.5-1.771-1.221-2.063-3.229-2.959-20.355-2.184-41.735-7.817-70.627-16.863-86.5-4.795-8.412-8.646-12.212-20.161-19.893-10.814-7.214-13.174-8.316-23.692-11.059-2.534-.661-7.476-3.69-12.5-7.661-10.258-8.109-13.122-9.601-24.64-12.84-9.928-2.791-25.777-10.3-36.302-17.199-7.568-4.96-10.156-5.362-12.407-1.926m9.021 13.828c1.714 8.714 6.916 25.317 10.578 33.762 2.247 5.181 5.174 14.024 6.504 19.652 5.424 22.956 13.331 37.525 36.549 67.345 3.636 4.67 8.764 12.316 11.396 16.991 10.039 17.832 16.429 26.227 34.636 45.5 13.751 14.557 23.771 26.443 26.065 30.923 1.845 3.602 1.919 4.625.913 12.5-2.483 19.413-3.616 58.503-3.338 115.077.156 31.625-.084 64.827-.534 73.782-.816 16.266-.82 16.285-3.688 18.75-1.58 1.358-3.282 2.468-3.782 2.468-2.622 0-4.869-2.563-6.212-7.088-.826-2.78-2.808-7.384-4.406-10.233-1.597-2.848-4.817-10.804-7.156-17.679-2.338-6.875-5.035-14.075-5.993-16-.958-1.925-2.067-5.3-2.465-7.5-.397-2.2-1.981-6.961-3.518-10.581-1.538-3.619-3.114-8.119-3.504-10-.39-1.88-1.624-6.5-2.743-10.265-1.481-4.983-1.867-8.27-1.42-12.081.468-3.978.026-7.27-1.839-13.702-4.521-15.596-6.779-19.46-17.37-29.733-13.843-13.427-15.157-14.321-35.369-24.082-37.894-18.3-52.101-21.725-91.284-22.006-8.25-.059-16.466-.37-18.257-.691-2.598-.466-4.508.161-9.438 3.098-10.934 6.513-13.112 6.27-43.614-4.867-8.419-3.075-15.844-5.578-16.5-5.563-1.538.035 3.813 4.583 13.446 11.431 4.2 2.985 14.327 11.866 22.504 19.735 13.732 13.215 32.492 28.273 48.359 38.819 3.575 2.376 10.373 7.354 15.106 11.063 4.734 3.709 12.609 9.008 17.5 11.776 4.892 2.768 12.332 7.646 16.534 10.841 4.202 3.194 11.402 8.358 16 11.474 21.89 14.835 33.771 23.166 50.36 35.313 9.9 7.249 21.375 15.453 25.5 18.23 15.233 10.256 44.872 36.267 45.077 39.56.124 2.008.664 4.407 1.78 7.921 1.538 4.842 3.139 21.27 3.169 32.521.014 5.384.483 14.289 1.043 19.789 2.48 24.376 3.098 42.595 3.882 114.5.459 42.075 1.421 91.634 2.138 110.132 1.281 33.079 1.114 38.099-1.673 50.06-.595 2.554-.481 2.652 2.229 1.925l2.855-.766-.5-10.425c-.92-19.191-.42-57.314.892-67.926.714-5.775 1.593-25.502 1.953-43.839l.655-33.338 2.394-1.938c2.075-1.681 2.663-1.759 4.426-.588 1.758 1.167 2.278 1.105 3.836-.453 2.066-2.066 6.058-1.655 11.844 1.219 2.503 1.243 7.239 1.926 16.631 2.397 13.768.69 19.274 1.78 28.369 5.617 4.497 1.896 7.232 2.31 15 2.267 10.917-.06 27.906-3.743 35.862-7.774 2.684-1.36 7.764-3.004 11.289-3.654 6.212-1.144 6.628-1.085 13.442 1.905 9.679 4.248 13.67 4.99 33.049 6.138 9.272.55 21.808 1.672 27.858 2.494 33.762 4.585 52.808 2.175 66.906-8.47 3.918-2.958 7.473-4.554 13.582-6.099 8.028-2.03 9.288-2.062 42.393-1.074 18.765.56 34.229.909 34.364.776.575-.57-17.359-12.767-30.742-20.909-15.088-9.179-20.638-13.743-26.965-22.177-2.063-2.75-8.156-9.852-13.54-15.783-10.375-11.429-21.367-19.736-31.268-23.631-2.899-1.14-7.624-3.265-10.5-4.723-10.759-5.453-26.953-9.875-60.145-16.421-21.134-4.169-29.532-4.043-41.749.625-5.135 1.962-18.062 5.811-28.726 8.554-10.665 2.743-21.569 6.091-24.232 7.441-6.249 3.166-20.713 14.088-28.378 21.426-3.3 3.16-8.475 7.656-11.5 9.992-6.379 4.926-19.438 19.03-21.732 23.473-.866 1.676-4.476 7.644-8.022 13.262-6.269 9.93-9.287 12.644-11.547 10.384-.604-.604-1.919-1.099-2.92-1.099-2.485 0-3.287-2.354-6.139-18-3.758-20.622-4.579-28.043-5.142-46.5-.716-23.448-2.225-53.7-4.041-81-2.064-31.044-2.355-95.807-.556-123.796 1.366-21.261 1.462-21.844 3.889-23.753 1.368-1.077 3.516-4.177 4.773-6.889 3.129-6.754 6.451-8.351 17.066-8.207 7.035.096 32.756 4.224 45.871 7.361 4.229 1.012 40.472 2.377 89.5 3.372 28.505.578 29.692.526 35.202-1.549 6.883-2.591 12.319-7.347 25.921-22.677 5.674-6.395 13.242-13.842 16.819-16.55 14.798-11.203 58.983-29.799 76.366-32.14l8.808-1.187-2.821-2.702c-1.764-1.69-5.251-3.322-9.308-4.356-3.568-.91-7.612-2.226-8.987-2.926-1.375-.7-20.132-7.147-41.682-14.328-21.625-7.206-44.478-15.5-51-18.508-14.393-6.64-25.413-10.188-36.719-11.822-7.519-1.087-9.659-1.016-17.822.591-11.918 2.348-18.567 4.97-38.729 15.274-38.074 19.457-53.498 33.037-99.07 87.226-3.037 3.611-6.065 7.803-6.729 9.316-1.493 3.403-6.213 3.786-9.249.75-2.678-2.678-2.584-6.884.589-26.357 4.832-29.664 14.813-59.806 24.788-74.863 5.254-7.931 31.791-37.78 33.588-37.78.477 0 5.517-4.388 11.201-9.75 19.847-18.725 38.355-33.718 56.324-45.629 5.838-3.869 9.162-6.614 8-6.604-3.2.028-38.583 17.66-43.259 21.556-2.402 2.003-5.545 6.086-7.189 9.343-1.606 3.182-4.097 7.184-5.534 8.892-2.723 3.237-14.456 10.777-20.508 13.179-10.781 4.281-21.19 14.357-26.589 25.738-4.268 8.995-6.905 12.275-9.873 12.275-1.795 0-2.618 1.543-5.47 10.25-1.846 5.638-3.988 11.215-4.759 12.396-2.031 3.107-5.081 3.582-7.496 1.167-1.636-1.636-1.902-2.755-1.346-5.676.381-2 .866-7.687 1.079-12.637.212-4.95.655-10.922.984-13.27.419-2.986.016-5.843-1.337-9.5-1.428-3.859-2.111-9.163-2.602-20.23-2.208-49.784-9.507-82.546-21.295-95.594-5.825-6.448-21.765-16.481-29.236-18.403-8.505-2.187-12.375-4.257-20.657-11.047-8.471-6.946-9.76-7.604-20.403-10.411-7.315-1.929-32.574-13.436-35.45-16.149-1.877-1.771-2.697-.838-2.07 2.354"
                        ></path>
                    </svg>
                    <div className="general-info-bubble famous-quote">
                        <div className="bubble-content">
                        "The world is a dangerous
                            place to live, not because of the
                            people who are evil but because of the people who don't do anything about it."

                            -Albert Einstein
                        </div>
                    </div>
                    <div className="general-info-bubble it-takes-a-vaillage">
                        <div className="bubble-heading">
                            It takes a village to protect a child
                        </div>
                        <div className="bubble-content">
                            <ul className="bubble-list">
                                <li className="list-item">
                                    Role of Parents: As a parent, you are the most important adult in your child's...	 
                                </li>
                                <li className="list-item">
                                    Role of Schools: Schools are at the frontline of child protection...
                                </li>
                                <li className="list-item">
                                    Role of the Community: Here are some of the things as a community we can do...
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="general-info-bubble about-tulir">
                        <div className="bubble-heading">
                            About Tulir
                        </div>
                        <div className="bubble-content">
                            Tulir - Centre for the Prevention and Healing of Child Sexual Abuse (CPHCSA) is a registered, nongovernmental, non-profit organization committed to working against child sexual abuse in India.

                            Contrary to a widely held perception, a society's integrity and worth is not based on whether cases of child sexual abuse exist. They do exist, sadly they exist in silence due to a host of factors headed by the discomfort it generates if acknowledged. Instead Tulir - Centre for the Prevention and Healing of Child Sexual Abuse believes a society's integrity is based on the acceptance of the problem and proactive steps taken to respond in a timely and appropriate way ensuring that its children may benefit from its caring and foresight, and truly have the right to feel safe all the time.

                            While in India we are just beginning to acknowledge the existence of CSA, Tulir-CPHCSA has the audacity of hope that it will not be before long that the larger community realizes the prevalence, with the subsequent significant impact (and accompanying physical, social and health costs) for it to be considered a serious public health concern which needs to prevented and addressed.

                            It is a long journey, from just this acknowledgment to the actual empowering of the child and the adult stakeholders, and this website serves as just one more platform to break the silence around the issue. We hope that besides being a source of information it will link and network with individuals and organizations interested in creating a world where every child enjoys the right to feel safe all the time.
                        </div>
                    </div>
                    <div className="general-info-bubble myths-facts">
                        <div className="bubble-heading">
                            Myths and facts
                        </div>
                        <div className="bubble-content">
                            <ul className="bubble-list">
                                <li className="list-item">
                                    Myth: Children are rarely abused in India, as the Indian socio-cultural system inherently does not allow for its children 
                                </li>
                                <li className="list-item">
                                    Fact: Statistical data from available research and reported incidents (from children and adult survivors) clearly indicates that child sexual abuse is a widespread problem affecting an extremely large number of children in the country.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="general-info-bubble personal-safety-rules">
                        <div className="bubble-heading">
                            Personal Safety Rules
                        </div>
                        <div className="bubble-content">
                            <ul className="bubble-list">
                                <li className="list-item">
                                    Its never alright for someone to touch your private body parts except to keep you clean and healthy.
                                </li>
                                <li className="list-item">
                                If this happens or if you feel confused, uncomfortable or unsafe about any touch say 'NO' and get away. Remember, IT'S NEVER YOUR FAULT.
                                </li>
                                <li className="list-item">
                                    Never keep a secret about a touching problem. Tell a trusted adult and keep telling till you get the help you need. ...more
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </StyledGeneralInfo>
        </section>
    );
}
