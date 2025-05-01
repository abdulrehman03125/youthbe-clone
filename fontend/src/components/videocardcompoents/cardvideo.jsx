import React from 'react'

const cardvideo = () => {
    const videoData = [
        {
          title: "Geo Headlines 10AM | 29 April 2025 | Pakistan News",
          imageUrl: "/images/thumb1.jpg",
          channel: "Geo News",
          date: "29-Apr-2025",
        },
        {
          title: "Pak Army Reacts to Air Strike | Breaking News 10AM",
          imageUrl: "/images/thumb2.jpg",
          channel: "ARY News",
          date: "29-Apr-2025",
        },
        {
          title: "Cabinet's Urgent Meeting After Air Attack",
          imageUrl: "/images/thumb3.jpg",
          channel: "Express News",
          date: "29-Apr-2025",
        },
        {
          title: "India-Pak Tensions: What's Next?",
          imageUrl: "/images/thumb4.jpg",
          channel: "Dunya News",
          date: "29-Apr-2025",
        },
        {
          title: "MERN Project For Your Job Resume",
          imageUrl: "/images/thumb5.jpg",
          channel: "DevTips",
          date: "April 2025",
        },
        {
          title: "Top News Discussion by Analysts",
          imageUrl: "/images/thumb6.jpg",
          channel: "Talk Show",
          date: "April 2025",
        },
        {
          title: "Romantic Urdu Web Series",
          imageUrl: "/images/thumb7.jpg",
          channel: "UrduFlix",
          date: "New Release",
        },
        {
          title: "JavaScript 5 Real World Projects",
          imageUrl: "/images/thumb8.jpg",
          channel: "FullStack Dev",
          date: "April 2025",
        },
      ];
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gray-50">
    {videoData.map((video, index) => (
      <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-200">
        <img
          src={video.imageUrl}
          alt={video.title}
          className="w-full h-40 object-cover rounded-t-xl"
        />
        <div className="p-4">
          <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">{video.title}</h2>
          <p className="text-xs text-gray-500 mt-1">{video.channel}</p>
          <p className="text-xs text-gray-400">{video.date}</p>
        </div>
      </div>
    ))}
  </div>
  )
}

export default cardvideo
