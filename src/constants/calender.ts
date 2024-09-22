/** Byimaan */


const days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
] as const;

const months =  [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
] as const;

export type Calender = Year;

export type Year = {
    [key : string] : Month
};

export type Month = Partial<{
    [key in (typeof months)[number]] : Week
}>;

export type Week = {
    [K: string] : AnimationLog[]
};

export type AnimationLog = {
    timeStamp: number;
    name: string;
    href: string;
};

export const dummyData2024: Calender = {
    "2024": {
        "January": {
            "Week 1": [
                    { timeStamp: 1704067200000, name: "FadeIn", href: "/animations/fadein" },
                    { timeStamp: 1704070800000, name: "SlideUp", href: "/animations/slideup" },
                    { timeStamp: 1704153600000, name: "ZoomIn", href: "/animations/zoomin" },
                    { timeStamp: 1704236400000, name: "Bounce", href: "/animations/bounce" },
                ],
                "Week 2":  [
                        { timeStamp: 1704504000000, name: "Shake", href: "/animations/shake" },
                        { timeStamp: 1704507600000, name: "Flip", href: "/animations/flip" },
                        { timeStamp: 1704590400000, name: "Rotate", href: "/animations/rotate" },
                    ],
        },
        "February": {
            "week 1": [
                { timeStamp: 1704676800000, name: "Flash", href: "/animations/flash" },
                { timeStamp: 1704763200000, name: "Wobble", href: "/animations/wobble" }
            ],
        },
        "March": {
            "Week 1": [
                    { timeStamp: 1704067200000, name: "FadeIn", href: "/animations/fadein" },
                    { timeStamp: 1704070800000, name: "SlideUp", href: "/animations/slideup" },
                    { timeStamp: 1704153600000, name: "ZoomIn", href: "/animations/zoomin" },
                    { timeStamp: 1704236400000, name: "Bounce", href: "/animations/bounce" },
                ],
                "Week 2":  [
                        { timeStamp: 1704504000000, name: "Shake", href: "/animations/shake" },
                        { timeStamp: 1704507600000, name: "Flip", href: "/animations/flip" },
                        { timeStamp: 1704590400000, name: "Rotate", href: "/animations/rotate" },
                    ],
        },
        "April": {
            "week 1": [
                { timeStamp: 1704676800000, name: "Flash", href: "/animations/flash" },
                { timeStamp: 1704763200000, name: "Wobble", href: "/animations/wobble" }
            ],
        },
        "May": {
            "week 1": [
                { timeStamp: 1704676800000, name: "Flash", href: "/animations/flash" },
                { timeStamp: 1704763200000, name: "Wobble", href: "/animations/wobble" }
            ],
        },
        "June": {
            "week 1": [
                { timeStamp: 1704676800000, name: "Flash", href: "/animations/flash" },
                { timeStamp: 1704763200000, name: "Wobble", href: "/animations/wobble" }
            ],
        },
    },
    "2025": {
        "January": {
            "Week 1": [
                    { timeStamp: 1704067200000, name: "FadeIn", href: "/animations/fadein" },
                    { timeStamp: 1704070800000, name: "SlideUp", href: "/animations/slideup" },
                    { timeStamp: 1704153600000, name: "ZoomIn", href: "/animations/zoomin" },
                    { timeStamp: 1704236400000, name: "Bounce", href: "/animations/bounce" },
                ],
                "Week 2":  [
                        { timeStamp: 1704504000000, name: "Shake", href: "/animations/shake" },
                        { timeStamp: 1704507600000, name: "Flip", href: "/animations/flip" },
                        { timeStamp: 1704590400000, name: "Rotate", href: "/animations/rotate" },
                    ],
        },
        "February": {
            "week 1": [
                { timeStamp: 1704676800000, name: "Flash", href: "/animations/flash" },
                { timeStamp: 1704763200000, name: "Wobble", href: "/animations/wobble" }
            ],
        },
        "March": {
            "Week 1": [
                    { timeStamp: 1704067200000, name: "FadeIn", href: "/animations/fadein" },
                    { timeStamp: 1704070800000, name: "SlideUp", href: "/animations/slideup" },
                    { timeStamp: 1704153600000, name: "ZoomIn", href: "/animations/zoomin" },
                    { timeStamp: 1704236400000, name: "Bounce", href: "/animations/bounce" },
                ],
                "Week 2":  [
                        { timeStamp: 1704504000000, name: "Shake", href: "/animations/shake" },
                        { timeStamp: 1704507600000, name: "Flip", href: "/animations/flip" },
                        { timeStamp: 1704590400000, name: "Rotate", href: "/animations/rotate" },
                    ],
        },
        "April": {
            "week 1": [
                { timeStamp: 1704676800000, name: "Flash", href: "/animations/flash" },
                { timeStamp: 1704763200000, name: "Wobble", href: "/animations/wobble" }
            ],
        },
        "May": {
            "week 1": [
                { timeStamp: 1704676800000, name: "Flash", href: "/animations/flash" },
                { timeStamp: 1704763200000, name: "Wobble", href: "/animations/wobble" }
            ],
        },
        "June": {
            "week 1": [
                { timeStamp: 1704676800000, name: "Flash", href: "/animations/flash" },
                { timeStamp: 1704763200000, name: "Wobble", href: "/animations/wobble" }
            ],
        },
    },
}


export const calender: Calender = {
    '2024': {
        'September': {
            'Week 4': [],
        },
    }
};
