import React, { useRef, useEffect, useState } from "react";
import domtoimage from 'dom-to-image';



const GithubApi = () => {
    const [userName, setUserName] = useState('');
    const [query, setQuery] = useState('');
    const [userData, setUserData] = useState({});
    const [error, setError] = useState('');
    const cardRef = useRef(null);

    const downloadCard = () => {
        const node = cardRef.current;
        if (!node) return;

        domtoimage.toPng(node)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'profile_card.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((error) => {
                console.error('Error generating image:', error);
            });
    };

    const openGit = () => {
        if (userData.html_url) {
            window.open(userData.html_url, "_blank");
        }
    };



    useEffect(() => {
        if (!query) return;

        const fetchData = async () => {
            const res = await fetch(`https://api.github.com/users/${query}`);
            console.log(res);
            if (!res.ok) {
                setUserData({});
                setError("❌ GitHub user not found. Please try again.");
                return;
            }

            const data = await res.json();
            setUserData(data);
            console.log(data);

            setError('');
        };

        fetchData();
    }, [query]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 flex items-center justify-center p-6">
            <div className="w-full max-w-xl bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 space-y-8 text-white border border-white/20">
                <h1 className="text-4xl font-extrabold text-center">🔍 GitHub User Finder</h1>

                <div className="flex items-center gap-4">
                    <input
                        type="text"
                        className="w-full bg-white/20 border border-white/30 text-white placeholder-white/70 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 backdrop-blur-sm transition"
                        placeholder="Enter GitHub username" value={userName}
                        onChange={(e) => { setUserName(e.target.value) }}
                    />
                    <button
                        type="button"
                        className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 rounded-xl font-semibold transition-all"
                        onClick={() => {
                            const trimmedName = userName.trim();

                         
                            if (trimmedName === "") {
                                setError("⚠️ Please enter a GitHub username.");
                                return;
                            }

                          
                            if (trimmedName.toLowerCase() === query.toLowerCase()) {
                                setError("⚠️ This user is already shown.");
                                return;
                            }

                            setQuery(trimmedName);   
                            setUserName("");           
                            setError("");

                        }}
                    >
                        Search
                    </button>
                </div>


                {
                    error
                        ? <p className="text-red-400 font-medium text-lg mt-1 text-center">{error}</p>
                        : ""
                }

                {
                    userData && userData.login
                        ? (
                            <div>
                                <div
                                    ref={cardRef}
                                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 text-center animate-fade-in"
                                >
                                    <img
                                        src={userData.avatar_url}
                                        alt={userData.login}
                                        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-pink-400 shadow-lg"
                                    />
                                    <h2 className="text-2xl font-bold">{userData.name || userData.login}</h2>
                                    <p className="text-pink-200">@{userData.login}</p>
                                    {
                                        userData.bio
                                            ? <p className="mt-2 text-pink-100 text-sm italic">"{userData.bio}"</p>
                                            : ""
                                    }

                                    <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-white/90">
                                        <div>
                                            <span className="block text-lg font-bold">{userData.followers}</span>
                                            Followers
                                        </div>
                                        <div>
                                            <span className="block text-lg font-bold">{userData.following}</span>
                                            Following
                                        </div>
                                        <div>
                                            <span className="block text-lg font-bold">{userData.public_repos}</span>
                                            Repos
                                        </div>
                                    </div>

                                </div>
                                <div className="flex justify-around">
                                    <button
                                        onClick={downloadCard}
                                        className="mt-6 bg-purple-800 hover:bg-pink-500 text-white px-6 py-2 rounded-xl shadow-md transition"
                                    >
                                        <p>📥 Download as PNG</p>
                                    </button>
                                    <button
                                        onClick={() => {
                                            openGit()
                                        }}
                                        className="mt-6 bg-black hover:bg-white text-white hover:text-black px-6 py-2 rounded-xl shadow-md transition"
                                    >
                                        <p><i class="fa-brands fa-github"></i> Open Github</p>
                                    </button>
                                </div>
                            </div>
                        )
                        : ""
                }
            </div>
        </div>
    );
};

export default GithubApi;
