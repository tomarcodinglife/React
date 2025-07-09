const Data = [
    {
        id : 1,
        collegeName : "IIT Delhi",
        location : "Delhi",
        courses : ["B.Tech", "M.Tech", "PhD"],
        established : 1961,
        ranking : 1,
        type : "Public",
        website : "https://www.iitd.ac.in",
        logo : "https://www.iitd.ac.in/sites/default/files/2023-01/IIT%20Delhi%20Logo.png",
        description : "IIT Delhi is one of the premier engineering institutes in India, known for its rigorous academic programs and research excellence.",
        students : [
            {
                name : "Sujit Tomar",
                age : 21,
                course : "B.Tech",
                year : 3,
                hobbies : ["Coding", "Reading", "Traveling"],
                achievements : ["National Level Coding Competition Winner", "Published Research Paper"]
            },
            {
                name : "Aman Singh",
                age : 22,
                course : "M.Tech",
                year : 1,
                hobbies : ["Gaming", "Photography"],
                achievements : ["State Level Photography Contest Winner"]
            }
        ]
    },
    {
        id : 2,
        collegeName : "IIT Bombay",
        location : "Mumbai",
        courses : ["B.Tech", "M.Tech", "PhD"],
        established : 1958,
        ranking : 2,
        type : "Public",
        website : "https://www.iitb.ac.in",
        logo : "https://www.iitb.ac.in/sites/default/files/2023-01/IIT%20Bombay%20Logo.png",
        description : "IIT Bombay is renowned for its cutting-edge research and innovation in various fields of engineering and technology.",
        students : [
            {
                name : "Rahul Verma",
                age : 23,
                course : "B.Tech",
                year : 4,
                hobbies : ["Music", "Sports"],
                achievements : ["Inter-College Sports Championship Winner"]
            },
            {
                name : "Priya Sharma",
                age : 21,
                course : "M.Tech",
                year : 2,
                hobbies : ["Dancing", "Painting"],
                achievements : ["National Level Dance Competition Runner-up"]
            }
        ]
    },
    {
        id : 3,
        collegeName : "IIT Kanpur",
        location : "Kanpur",
        courses : ["B.Tech", "M.Tech", "PhD"],
        established : 1959,
        ranking : 3,
        type : "Public",
        website : "https://www.iitk.ac.in",
        logo : "https://www.iitk.ac.in/sites/default/files/2023-01/IIT%20Kanpur%20Logo.png",
        description : "IIT Kanpur is known for its strong emphasis on research and innovation, producing some of the best engineers in the country.",
        students : [
            {
                name : "Anjali Gupta",
                age : 22,
                course : "B.Tech",
                year : 3,
                hobbies : ["Writing", "Cooking"],
                achievements : ["Published Short Story Collection"]
            },
            {
                name : "Vikram Singh",
                age : 24,
                course : "M.Tech",
                year : 1,
                hobbies : ["Robotics", "Electronics"],
                achievements : ["National Level Robotics Competition Winner"]
            }
        ]
    },
    {
        id : 4,
        collegeName : "IIT Kharagpur",
        location : "Kharagpur",
        courses : ["B.Tech", "M.Tech", "PhD"],
        established : 1951,
        ranking : 4,
        type : "Public",
        website : "https://www.iitkgp.ac.in",
        logo : "https://www.iitkgp.ac.in/sites/default/files/2023-01/IIT%20Kharagpur%20Logo.png",
        description : "IIT Kharagpur is the first IIT established in India and is known for its diverse academic programs and vibrant campus life.",
        students : [
            {
                name : "Rohit Mehta",
                age : 23,
                course : "B.Tech",
                year : 4,
                hobbies : ["Traveling", "Photography"],
                achievements : ["International Travel Photography Award"]
            },
            {
                name : "Sneha Patel",
                age : 21,
                course : "M.Tech",
                year : 2,
                hobbies : ["Music", "Dance"],
                achievements : ["State Level Dance Competition Winner"]
            }
        ]
    },
    {
        id : 5,
        collegeName : "IIT Madras",
        location : "Chennai",
        courses : ["B.Tech", "M.Tech", "PhD"],
        established : 1959,
        ranking : 5,
        type : "Public",
        website : "https://www.iitm.ac.in",
        logo : "https://www.iitm.ac.in/sites/default/files/2023-01/IIT%20Madras%20Logo.png",
        description : "IIT Madras is known for its strong research programs and has a vibrant campus with a diverse student community.",
        students : [
            {
                name : "Karthik Reddy",
                age : 22,
                course : "B.Tech",
                year : 3,
                hobbies : ["Coding", "Gaming"],
                achievements : ["State Level Coding Competition Winner"]
            },
            {
                name : "Lakshmi Nair",
                age : 21,
                course : "M.Tech",
                year : 2,
                hobbies : ["Painting", "Writing"],
                achievements : ["Published Novel"]
            }
        ]
    },
    {
        id : 6,
        collegeName : "IIT Roorkee",
        location : "Roorkee",
        courses : ["B.Tech", "M.Tech", "PhD"],
        established : 1847,
        ranking : 6,
        type : "Public",
        website : "https://www.iitr.ac.in",
        logo : "https://www.iitr.ac.in/sites/default/files/2023-01/IIT%20Roorkee%20Logo.png",
        description : "IIT Roorkee is one of the oldest engineering institutes in India and is known for its strong academic programs and research.",
        students : [
            {
                name : "Amit Kumar",
                age : 23,
                course : "B.Tech",
                year : 4,
                hobbies : ["Sports", "Music"],
                achievements : ["National Level Sports Championship Winner"]
            },
            {
                name : "Neha Singh",
                age : 21,
                course : "M.Tech",
                year : 2,
                hobbies : ["Dancing", "Photography"],
                achievements : ["State Level Dance Competition Winner"]
            }
        ]
    },
    {
        id : 7,
        collegeName : "IIT Guwahati",
        location : "Guwahati",
        courses : ["B.Tech", "M.Tech", "PhD"],
        established : 1994,
        ranking : 7,
        type : "Public",
        website : "https://www.iitg.ac.in",
        logo : "https://www.iitg.ac.in/sites/default/files/2023-01/IIT%20Guwahati%20Logo.png",
        description : "IIT Guwahati is known for its scenic campus and strong academic programs in engineering and technology.",
        students : [
            {
                name : "Arjun Das",
                age : 22,
                course : "B.Tech",
                year : 3,
                hobbies : ["Traveling", "Photography"],
                achievements : ["Published Travel Blog"]
            },
            {
                name : "Riya Sharma",
                age : 21,
                course : "M.Tech",
                year : 2,
                hobbies : ["Music", "Dance"],
                achievements : ["State Level Dance Competition Winner"]
            }
        ]
    },
    {
        id : 8,
        collegeName : "IIT Bhubaneswar",
        location : "Bhubaneswar",
        courses : ["B.Tech", "M.Tech", "PhD"],
        established : 2008,
        ranking : 8,
        type : "Public",
        website : "https://www.iitbbs.ac.in",
        logo : "https://www.iitbbs.ac.in/sites/default/files/2023-01/IIT%20Bhubaneswar%20Logo.png",
        description : "IIT Bhubaneswar is known for its modern campus and strong academic programs in engineering and technology.",
        students : [
            {
                name : "Sourav Sahoo",
                age : 22,
                course : "B.Tech",
                year : 3,
                hobbies : ["Coding", "Gaming"],
                achievements : ["State Level Coding Competition Winner"]
            },
            {
                name : "Ananya Das",
                age : 21,
                course : "M.Tech",
                year : 2,
                hobbies : ["Painting", "Writing"],
                achievements : ["Published Novel"]
            }
        ]
    },
    {
        id : 9,
        collegeName : "IIT Mandi",
        location : "Mandi",
        courses : ["B.Tech", "M.Tech", "PhD"],
        established : 2009,
        ranking : 9,
        type : "Public",
        website : "https://www.iitmandi.ac.in",
        logo : "https://www.iitmandi.ac.in/sites/default/files/2023-01/IIT%20Mandi%20Logo.png",
        description : "IIT Mandi is known for its scenic campus and strong academic programs in engineering and technology.",
        students : [
            {
                name : "Rohit Kumar",
                age : 22,
                course : "B.Tech",
                year : 3,
                hobbies : ["Traveling", "Photography"],
                achievements : ["Published Travel Blog"]
            },
            {
                name : "Pooja Verma",
                age : 21,
                course : "M.Tech",
                year : 2,
                hobbies : ["Music", "Dance"],
                achievements : ["State Level Dance Competition Winner"]
            }
        ]
    },
    {
        id : 10,
        collegeName : "IIT Jammu",
        location : "Jammu",
        courses : ["B.Tech", "M.Tech", "PhD"],
        established : 2016,
        ranking : 10,
        type : "Public",
        website : "https://www.iitjammu.ac.in",
        logo : "https://www.iitjammu.ac.in/sites/default/files/2023-01/IIT%20Jammu%20Logo.png",
        description : "IIT Jammu is one of the newest IITs in India and is known for its modern campus and strong academic programs.",
        students : [
            {
                name : "Aakash Singh",
                age : 22,
                course : "B.Tech",
                year : 3,
                hobbies : ["Coding", "Gaming"],
                achievements : ["State Level Coding Competition Winner"]
            },
            {
                name : "Neha Gupta",
                age : 21,
                course : "M.Tech",
                year : 2,
                hobbies : ["Painting", "Writing"],
                achievements : ["Published Novel"]
            }
        ]
    },
    {
        id : 11,
        collegeName : "IIT Dharwad",
        location : "Dharwad",
        courses : ["B.Tech", "M.Tech", "PhD"],
        established : 2016,
        ranking : 11,
        type : "Public",
        website : "https://www.iitdh.ac.in",
        logo : "https://www.iitdh.ac.in/sites/default/files/2023-01/IIT%20Dharwad%20Logo.png",
        description : "IIT Dharwad is known for its modern campus and strong academic programs in engineering and technology.",
        students : [
            {
                name : "Suresh Patil",
                age : 22,
                course : "B.Tech",
                year : 3,
                hobbies : ["Traveling", "Photography"],
                achievements : ["Published Travel Blog"]
            },
            {
                name : "Anjali Desai",
                age : 21,
                course : "M.Tech",
                year : 2,
                hobbies : ["Music", "Dance"],
                achievements : ["State Level Dance Competition Winner"]
            }
        ]
    },
    {
        id : 12,
        collegeName : "IIT Tirupati",
        location : "Tirupati",
        courses : ["B.Tech", "M.Tech", "PhD"],
        established : 2015,
        ranking : 12,
        type : "Public",
        website : "https://www.iittp.ac.in",
        logo : "https://www.iittp.ac.in/sites/default/files/2023-01/IIT%20Tirupati%20Logo.png",
        description : "IIT Tirupati is known for its modern campus and strong academic programs in engineering and technology.",
        students : [
            {
                name : "Ravi Kumar",
                age : 22,
                course : "B.Tech",
                year : 3,
                hobbies : ["Coding", "Gaming"],
                achievements : ["State Level Coding Competition Winner"]
            },
            {
                name : "Priya Reddy",
                age : 21,
                course : "M.Tech",
                year : 2,
                hobbies : ["Painting", "Writing"],
                achievements : ["Published Novel"]
            }
        ]
    },
    {
        id : 13,
        collegeName : "IIT Bhilai",
        location : "Bhilai",
        courses : ["B.Tech", "M.Tech", "PhD"],
        established : 2016,
        ranking : 13,
        type : "Public",
        website : "https://www.iitbhilai.ac.in",
        logo : "https://www.iitbhilai.ac.in/sites/default/files/2023-01/IIT%20Bhilai%20Logo.png",
        description : "IIT Bhilai is known for its modern campus and strong academic programs in engineering and technology.",
        students : [
            {
                name : "Sanjay Yadav",
                age : 22,
                course : "B.Tech",
                year : 3,
                hobbies : ["Traveling", "Photography"],
                achievements : ["Published Travel Blog"]
            },
            {
                name : "Ritika Singh",
                age : 21,
                course : "M.Tech",
                year : 2,
                hobbies : ["Music", "Dance"],
                achievements : ["State Level Dance Competition Winner"]
            }
        ]
    }
]

export default Data;