"use client";

import { useSyncExternalStore } from "react";

const storageKey = "dolbom-guide-checklist-v1";
const groups = [
  {
    title: "센터 개설",
    items: [
      ["office", "관할 지자체에 후보 사무실 용도와 면적 확인"],
      ["staff", "시설장 자격 및 요양보호사 인력 확보"],
      ["documents", "설치신고·지정심사 일정과 제출서류 확인"],
    ],
  },
  {
    title: "자격증 취득",
    items: [
      ["course", "내게 적용되는 교육시간 확인"],
      ["practice", "교육기관 등록 및 현장실습 일정 확인"],
      ["exam", "교육 이수 후 국시원 시험 접수"],
    ],
  },
];
const itemIds = groups.flatMap(group => group.items.map(([id]) => id));
const changeEvent = "dolbom-checklist-change";
let temporaryProgress;

function subscribe(callback) {
  window.addEventListener("storage", callback);
  window.addEventListener(changeEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(changeEvent, callback);
  };
}

function readProgress() {
  try {
    return temporaryProgress ?? localStorage.getItem(storageKey) ?? "[]";
  } catch {
    return temporaryProgress ?? "[]";
  }
}

function parseProgress(snapshot) {
  try {
    const saved = JSON.parse(snapshot);
    if (Array.isArray(saved)) return new Set(saved.filter(id => itemIds.includes(id)));
  } catch {
    // Treat damaged entries as an empty checklist.
  }
  return new Set();
}

function toggleItem(id, checked) {
  const selected = parseProgress(readProgress());
  if (checked) selected.add(id);
  else selected.delete(id);
  const snapshot = JSON.stringify([...selected]);
  try {
    localStorage.setItem(storageKey, snapshot);
    temporaryProgress = undefined;
  } catch {
    temporaryProgress = snapshot;
  }
  window.dispatchEvent(new Event(changeEvent));
}

export default function Checklist() {
  const snapshot = useSyncExternalStore(subscribe, readProgress, () => "[]");
  const selected = parseProgress(snapshot);
  return (
    <section className="panel check" id="checklist">
      <h2>준비 체크리스트</h2>
      <div className="grid">
        {groups.map(({ title, items }) => (
          <fieldset key={title}>
            <legend><strong>{title}</strong></legend>
            {items.map(([id, label]) => (
              <label key={id}>
                <input type="checkbox" checked={selected.has(id)}
                  onChange={event => toggleItem(id, event.target.checked)} />
                {label}
              </label>
            ))}
          </fieldset>
        ))}
      </div>
      <p aria-live="polite">전체 {itemIds.length}개 중 {selected.size}개 완료</p>
      <progress aria-label="전체 준비 진행률" max={itemIds.length} value={selected.size} />
    </section>
  );
}
