import React from 'react'

const Cookies = (props: any) => {
    return (
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={55}
                height={55}
                fill="none"
                viewBox="0 0 55 55"
                {...props}
            >
                <circle cx={27.5} cy={27.5} r={27.5} fill="#E58829" />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                fill="none"
                viewBox="0 0 28 28"
                {...props}
            >
                <path
                    fill="#fff"
                    d="M14 2.333c.834 0 1.656.087 2.457.26a.875.875 0 0 1 .437 1.473A2.918 2.918 0 0 0 18.3 8.967c.431.1.72.506.673.946a2.917 2.917 0 0 0 5.087 2.226.875.875 0 0 1 1.525.477c.054.456.081.918.081 1.384 0 6.443-5.223 11.666-11.666 11.666-6.444 0-11.667-5.223-11.667-11.666 0-6.444 5.223-11.667 11.667-11.667Zm0 1.75c-5.476 0-9.916 4.44-9.916 9.917 0 5.477 4.44 9.916 9.917 9.916 5.176 0 9.426-3.965 9.877-9.024l.022-.3.008-.183-.226.103a4.649 4.649 0 0 1-1.217.326l-.32.029-.27.008a4.668 4.668 0 0 1-4.614-3.97l-.03-.234-.016-.218-.17-.07a4.671 4.671 0 0 1-2.728-3.773l-.019-.252-.006-.233c0-.522.086-1.03.25-1.508l.107-.283.098-.222-.322-.02-.424-.009Zm3.5 14.583a1.167 1.167 0 1 1 0 2.334 1.167 1.167 0 0 1 0-2.334ZM9.335 17.5a1.167 1.167 0 1 1 0 2.333 1.167 1.167 0 0 1 0-2.333Zm4.667-4.667a1.167 1.167 0 1 1 0 2.333 1.167 1.167 0 0 1 0-2.333Zm-5.834-3.5a1.167 1.167 0 1 1 0 2.333 1.167 1.167 0 0 1 0-2.333Z"
                />
            </svg>
        </div>
    )
}

export default Cookies