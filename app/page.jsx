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
<div className="sources"><a href="https://www.kuksiwon.or.kr/subcnt/c_2027/2/view.do?itm_seq=35&amp;seq=7">국시원 응시자격</a> · <a href="https://www.kuksiwon.or.kr/ss/subcnt/c_8015/5/view.do?seq=7">국시원 합격 기준</a></div>
</section>
</div>
<Checklist />
</div>
</main>
<footer className="wrap">방문요양 기준을 정리했습니다. 방문목욕·방문간호·주야간보호는 서비스별 시설·인력 요건을 확인하세요.</footer>
    </>
  );
}
