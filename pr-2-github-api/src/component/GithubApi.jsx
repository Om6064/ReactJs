import React, { useRef, useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const GithubApi = () => {
    const [userName, setUserName] = useState('');
    const [query, setQuery] = useState('');
    const [userData, setUserData] = useState({});
    const [error, setError] = useState('');
    const cardRef = useRef(null);

    const downloadCard = async () => {
        const element = cardRef.current;
        if (!element) return;

        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: "a4"
        });

        const imgProps = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save("downloaded.pdf");
    };

    useEffect(() => {
       
        if (!query) return;

        const fetchData = async () => {
            const res = await fetch(`https://api.github.com/users/${query}`);
            if (!res.ok) {
                setUserData({});
                setError("❌ GitHub user not found. Please try again.");
                return;
            }

            const data = await res.json();
            setUserData(data);
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
                        placeholder="Enter GitHub username"
                        onChange={(e) =>{setUserName(e.target.value)} }
                    />
                    <button
                        type="button"
                        className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 rounded-xl font-semibold transition-all"
                        onClick={() => {setQuery(userName)}}
                    >
                        Search
                    </button>
                </div>

                {/* Show error message if any */}
                {error && (
                    <p className="text-red-400 font-medium text-sm mt-1 text-center">{error}</p>
                )}

                {/* Show user card only when data is valid */}
                {userData && userData.login && (
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
                        {userData.bio && (
                            <p className="mt-2 text-pink-100 text-sm italic">"{userData.bio}"</p>
                        )}

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

                        <button
                            onClick={downloadCard}
                            className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl shadow-md transition"
                        >
                            📥 Download as PDF
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GithubApi;
