import React from "react";

const Card = ({ name, username, title, body }) => {
  return (
    <div className="w-72 h-[420px] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 
                    shadow-xl hover:shadow-2xl transition-shadow duration-300 
                    flex flex-col overflow-hidden">

      {/* Header */}
      <header className="flex items-center gap-4 px-5 py-6">
        <div className="w-16 h-16 rounded-full bg-slate-600 overflow-hidden flex-shrink-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-lg font-semibold text-white leading-tight">
            {name}
          </h1>
          <span className="text-sm text-slate-400">
            @{username}
          </span>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 bg-slate-100 px-5 py-4 flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">
          {title}
        </h2>

        <p className="text-sm text-slate-600 leading-relaxed overflow-hidden">
          {body}
        </p>
      </main>

      {/* Footer (optional but adds polish) */}
      <footer className="px-5 py-3 bg-slate-200 text-xs text-slate-500 text-right">
        View profile →
      </footer>
    </div>
  );
};

export default Card;
