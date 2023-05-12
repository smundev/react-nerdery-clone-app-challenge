export const CustomSearch = ({ w = 32, h = 32, color = '#FF385C' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            fill="none"
            viewBox="0 0 32 32"
        >
            <circle cx="16" cy="16" r="16" fill={color}></circle>
            <circle
                cx="15"
                cy="15"
                r="4"
                stroke="#fff"
                strokeWidth="2"
            ></circle>
            <path
                stroke="#fff"
                strokeWidth="2"
                d="M21.293 21.707L17.05 17.465"
            ></path>
        </svg>
    );
};

export const Globe = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 18 18"
        >
            <circle
                cx="9"
                cy="9"
                r="8"
                stroke="#222"
                strokeWidth="1.5"
            ></circle>
            <ellipse
                cx="9"
                cy="9"
                stroke="#222"
                strokeWidth="1.5"
                rx="3"
                ry="8"
            ></ellipse>
            <path stroke="#222" strokeWidth="1.5" d="M1 9.25L17 9.25"></path>
        </svg>
    );
};
