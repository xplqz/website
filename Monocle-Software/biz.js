/* 모노클 소프트웨어 사업자 정보 — 모든 페이지 아래쪽과 약관·방침이 이 한 곳을 씀.
   빈칸('')은 화면에 나오지 않음. 통신판매업 신고 뒤 regno·mailorder·addr(상세 주소)를 채우면 전체에 반영됨. */
window.MONOCLE = {
  name: '모노클 소프트웨어 (MONOCLE SOFTWARE)',
  owner: '김건',
  regno: '698-08-03528',
  mailorder: '',    // 통신판매업 신고번호 예: 2026-부산금정-0000
  addr: '부산광역시 금정구 서동로66번길 27(부곡동)',
  email: 'monoclesoftware.support@gmail.com',
  tel: ''
};
// 투어디 약관·방침 시행일 (출시일). 비어 있으면 '정식 출시일부터 시행'으로 표시
window.TOURDY_EFFECTIVE = '';

(function () {
  const B = window.MONOCLE;
  const rows = [['상호', B.name], ['대표', B.owner], ['사업자등록번호', B.regno], ['통신판매업 신고', B.mailorder], ['주소', B.addr], ['이메일', B.email], ['전화', B.tel]].filter(r => r[1]);
  document.querySelectorAll('[data-biz]').forEach(el => {
    el.innerHTML = rows.map(([k, v]) => `<span><b>${k}</b> ${v}</span>`).join('<i aria-hidden="true">·</i>');
  });
  document.querySelectorAll('[data-biz-field]').forEach(el => {
    const v = B[el.dataset.bizField]; if (v) el.textContent = v; else el.closest('[data-biz-row]')?.remove();
  });
  document.querySelectorAll('[data-effective]').forEach(el => {
    const d = window.TOURDY_EFFECTIVE;
    el.textContent = d ? d.replace(/-/g, '. ') + '.' : '투어디 정식 출시일';
  });
})();
