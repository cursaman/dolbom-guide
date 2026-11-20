import Checklist from "./checklist";

export default function Page() {
  return (
    <>
<header><nav className="wrap" aria-label="주 메뉴"><a href="#"><strong>돌봄 준비 안내서</strong></a><div><a href="#center">센터 개설</a><a href="#license">자격증 취득</a><a href="#checklist">체크리스트</a></div></nav></header>
<main>
<section className="hero wrap">
<h1>방문요양센터 개설과<br /><span>요양보호사 자격 준비</span></h1>
<p>센터에 필요한 인력과 사무실 기준, 요양보호사 교육부터 시험까지. 내게 필요한 절차부터 확인하세요.</p>
<div className="actions"><a className="button primary" href="#center">센터 개설 절차 보기</a><a className="button" href="#license">자격증 취득 절차 보기</a></div>
</section>
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
  <li><strong>후보 사무실 확인</strong><p>주소, 건축물대장, 평면도를 가지고 관할 시·군·구에 먼저 문의하세요. 건축물 용도, 전용면적 산정 범위, 신청 일정과 현장확인 절차를 물어보세요.</p></li>
  <li><strong>인력과 예산 계획</strong><p>시설장 자격증과 해당 시 경력증명서를 확인하고, 요양보호사 근무 가능 지역과 시간대를 정리하세요. 임대료, 인건비, 사무실 집기 비용을 월별로 계산하세요.</p></li>
  <li><strong>제출서류 준비</strong><p>사업계획서와 운영규정, 시설·인력 현황, 임대차계약서 등 사용권 증빙, 종사자 자격증과 근로계약서를 준비하세요. 실제 제출 목록은 관할 지자체 안내를 따르세요.</p></li>
  <li><strong>설치신고 및 지정 신청</strong><p>담당 부서에서 안내한 일정에 맞춰 접수하고, 서류 보완이나 현장확인에 대비해 인력·시설 증빙을 한곳에 정리하세요.</p></li>
</ol>
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
<section className="panel check" id="operation">
  <h2>개설 후 하루 운영은 어떻게 돌아가나요?</h2>
  <ol className="steps workflow">
    <li><strong>상담·계약</strong><p>장기요양 인정 정보, 이용 희망 시간, 필요한 돌봄과 보호자 연락처를 확인합니다.</p></li>
    <li><strong>계획·인력 배정</strong><p>어르신 상태에 맞춰 제공할 서비스를 계획하고, 요양보호사의 이동 거리와 근무 가능 시간을 확인합니다.</p></li>
    <li><strong>방문·기록</strong><p>방문 시간과 실제 제공한 서비스를 기록합니다. 결근이나 일정 변경 시 누가 대체 인력을 배정하고 보호자에게 알릴지 정해둡니다.</p></li>
    <li><strong>점검·청구</strong><p>급여제공계획, 실제 제공기록, 청구 내역을 대조하고 상태 변화나 보호자 요청을 다음 계획에 반영합니다.</p></li>
  </ol>
</section>
<Checklist />
</div>
</main>
<footer className="wrap">방문요양 기준을 정리했습니다. 방문목욕·방문간호·주야간보호는 서비스별 시설·인력 요건을 확인하세요.</footer>
    </>
  );
}
