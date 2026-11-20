"use client";

import { useState } from "react";

const videos = [
  { id: "dRGPlFTNMxQ", title: "요양보호사는 어떤 일을 할까요?", channel: "보노랜드_시니어스토리", views: "약 73만 회" },
  { id: "s79lij0SBiU", title: "오! 나라가 인정하는 노인장기요양보험", channel: "국민건강보험공단", views: "약 153만 회" },
  { id: "PIvS6SChcyk", title: "아줌마 NO! 요양보호사!", channel: "국민건강보험공단", views: "약 488만 회" },
];

export default function VideoGuide() {
  const [selected, setSelected] = useState(0);
  const video = videos[selected];

  return (
    <section className="video-hero" id="videos" aria-labelledby="video-heading">
      <div className="wrap">
        <h1 id="video-heading">영상으로 보는 <span>요양과 돌봄</span></h1>
        <div className="video-layout">
          <div>
            <iframe
              className="video-player"
              title={video.title}
              src={`https://www.youtube-nocookie.com/embed/${video.id}?playsinline=1`}
              allow="encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <a className="video-link" href={`https://www.youtube.com/watch?v=${video.id}`}>YouTube에서 보기</a>
          </div>
          <div className="video-queue">
            <h2>추천 영상</h2>
            <ul className="video-list">
              {videos.map((item, index) => (
                <li key={item.id}>
                  <button type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>
                    <strong>{item.title}</strong>
                    <span>{item.channel} · {item.views}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
