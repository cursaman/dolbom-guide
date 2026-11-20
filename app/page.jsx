import Checklist from "./checklist";
import VideoGuide from "./video-guide";

export default function Page() {
  return (
    <>
<header><nav className="wrap" aria-label="주 메뉴"><a href="#"><strong>돌봄 준비 안내서</strong></a><div><a href="#center">센터 개설</a><a href="#license">자격증 취득</a><a href="#videos">추천 영상</a><a href="#monthly-example">비용 사례</a><a href="#checklist">체크리스트</a></div></nav></header>
<main>
<VideoGuide />
<div className="wrap">
<div className="grid">
<section className="panel" id="center">
<h2>방문요양센터 개설</h2>
<dl>
<dt>인력</dt><dd>자격을 갖춘 상근 시설장 1명과 요양보호사 15명 이상을 둡니다. 법령상 농어촌지역은 요양보호사 5명 이상이며, 수급자가 15명 이상이면 사회복지사 1명을 배치합니다.</dd>
<dt>사무실</dt><dd>전용면적 16.5㎡ 이상에 통신설비와 업무용 집기를 갖춥니다. 계약 전에 관할 시·군·구에 건축물 용도와 면적을 확인하세요.</dd>
<dt>신고·지정</dt><dd>재가노인복지시설 설치신고와 장기요양기관 지정을 준비합니다. 사업계획서, 운영규정, 인력 현황 등은 관할 지자체의 제출서류와 심사 일정에 맞춰 준비하세요.</dd>
</dl>
<h3>계약부터 심사까지</h3>
<ol className="steps">
  <li><strong>후보 사무실 확인</strong><p>주소, 건축물대장, 평면도를 준비해 관할 시·군·구에 먼저 문의하세요.</p></li>
  <li><strong>인력과 예산 계획</strong><p>시설장 자격증과 해당 시 경력증명서를 확인하고, 요양보호사 근무 가능 지역과 시간대를 정리하세요. 임대료, 인건비, 사무실 집기 비용을 월별로 계산하세요.</p></li>
  <li><strong>제출서류 준비</strong><p>사업계획서와 운영규정, 시설·인력 현황, 임대차계약서 등 사용권 증빙, 종사자 자격증과 근로계약서를 준비하세요. 실제 제출 목록은 관할 지자체 안내를 따르세요.</p></li>
  <li><strong>설치신고 및 지정 신청</strong><p>담당 부서에서 안내한 일정에 맞춰 접수하고, 서류 보완이나 현장확인에 대비해 인력·시설 증빙을 한곳에 정리하세요.</p></li>
</ol>
<details className="guidance">
  <summary>계약 전 지자체에 물어볼 질문</summary>
  <ul>
    <li>이 주소와 건축물대장상 용도로 방문요양센터를 설치할 수 있나요?</li>
    <li>첨부한 도면에서 어디까지 전용면적으로 인정되나요?</li>
    <li>설치신고와 지정 신청은 함께 접수하나요? 다음 접수일과 현장확인 일정은 언제인가요?</li>
    <li>시설·인력 증빙과 운영규정은 어떤 서식에 맞춰 제출해야 하나요?</li>
  </ul>
</details>
<div className="sources"><a href="https://law.go.kr/LSW/flDownload.do?flSeq=159739839">법령상 시설·인력 기준</a> · <a href="https://www.icbp.go.kr/petition/petitionDetail.do?catecd=06&amp;peti_seq=1418">부평구 신청 안내 예시</a></div>
</section>
<section className="panel" id="license">
<h2>요양보호사 자격증 취득</h2>
<ol>
<li><strong>지정 교육기관 등록.</strong> 이론, 실기, 현장실습을 포함한 표준교육은 320시간입니다. 하루 8시간씩 주 5일이라면 약 8주 분량입니다.</li>
<li><strong>교육 이수.</strong> 사회복지사, 간호사, 간호조무사, 물리치료사, 작업치료사 자격·면허 소지자는 해당 과정이 40~50시간입니다.</li>
<li><strong>국시원 시험 응시.</strong> 필기와 실기 모두 컴퓨터로 보는 객관식이며, 두 과목에서 각각 60% 이상을 받으면 합격입니다.</li>
</ol>
<p>요양보호사 경력으로 방문요양 시설장 자격을 갖추려면, 법령상 인정되는 기관에서 5년 이상 근무하고 지정된 교육을 이수해야 합니다.</p>
<h3>등록 전에 확인할 것</h3>
<ul className="steps">
  <li><strong>내게 맞는 과정</strong><p>관련 자격·면허나 돌봄 경력이 있다면 증빙을 준비하고, 적용 가능한 교육과정과 이수시간을 먼저 문의하세요.</p></li>
  <li><strong>현장실습 일정</strong><p>수업 시간표와 함께 실습 장소, 실습 날짜, 이동시간, 결석 시 보강 가능 여부를 확인하세요.</p></li>
  <li><strong>전체 비용과 시험 일정</strong><p>교육비에 교재비나 실습비가 포함되는지 확인하고, 수료 예정일 이후 응시할 수 있는 시험장과 날짜를 국시원에서 확인하세요.</p></li>
</ul>
<div className="sources"><a href="https://www.kuksiwon.or.kr/subcnt/c_2027/2/view.do?itm_seq=35&amp;seq=7">국시원 응시자격</a> · <a href="https://www.kuksiwon.or.kr/ss/subcnt/c_8015/5/view.do?seq=7">국시원 합격 기준</a></div>
</section>
</div>
<section className="panel check" id="monthly-example">
  <h2>방문요양 한 달 이용 사례</h2>
  <p>2026년 수가 기준으로 어르신 한 분이 평일에 180분씩 주 3회, 4주간 총 12회 이용한다고 가정합니다. 일반 본인부담률 15%를 적용하고, 가산 없이 월 한도액 안에서 이용하는 사례입니다.</p>
  <dl className="cost-breakdown">
    <div><dt>총 급여비용</dt><dd><strong>684,240원</strong><span>57,020원 × 12회</span></dd></div>
    <div><dt>이용자 본인부담</dt><dd><strong>102,636원</strong><span>8,553원 × 12회</span></dd></div>
    <div><dt>공단 부담액</dt><dd><strong>581,604원</strong><span>48,467원 × 12회</span></dd></div>
  </dl>
  <p>실제 금액은 방문 횟수와 시간, 감경·면제 여부, 가산 여부에 따라 달라집니다. 같은 달 이용한 다른 재가급여도 함께 확인해 월 한도액을 계산하세요.</p>
  <p><strong>센터 운영비 계산</strong> 공단 부담액과 이용자 부담액을 합한 급여 수입에서 요양보호사 인건비와 임대료 등 운영비를 빼 월 손익을 예상하세요. 인건비 지출비율 기준과 급여 지급일도 따로 확인하세요.</p>
  <div className="sources"><a href="https://www.law.go.kr/LSW/admRulLsInfoP.do?admRulSeq=2100000285470">급여비용 산정 고시</a> · <a href="https://www.nhis.or.kr/static/html/wbda/c/wbdac05.html">공단 본인부담 안내</a></div>
</section>
<section className="panel check" id="operation">
  <h2>첫 이용자 상담부터 첫 청구까지</h2>
  <ol className="steps workflow">
    <li><strong>상담·계약</strong><p>장기요양인정서와 개인별장기요양이용계획서를 확인합니다. 원하는 방문 시간, 필요한 돌봄, 본인부담 예상액을 안내하고 계약 내용을 정리합니다.</p></li>
    <li><strong>계획·인력 배정</strong><p>사례처럼 주 3회 방문한다면 요일과 시간, 방문 중 제공할 서비스를 계획에 기록합니다. 요양보호사의 이동 거리와 근무 가능 시간을 확인해 배정합니다.</p></li>
    <li><strong>방문·기록</strong><p>실제 방문 시작·종료 시간과 제공 내용을 기록합니다. 이용자가 방문을 취소하면 일정과 청구 대상에서 제외하고, 담당자가 결근하면 대체 인력을 배정한 뒤 이용자에게 알립니다.</p></li>
    <li><strong>점검·청구</strong><p>월말에 계약과 계획, 방문기록, 청구 내역을 대조합니다. 사례에서 한 건이 취소됐다면 실제 제공한 11건을 기준으로 확인합니다.</p></li>
  </ol>
</section>
<Checklist />
</div>
</main>
<footer><div className="wrap">방문요양 기준을 정리했습니다. 방문목욕·방문간호·주야간보호는 서비스별 시설·인력 요건을 확인하세요.</div></footer>
    </>
  );
}
