import { Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<div className="p-4">메인 페이지</div>} />
      <Route path="/about" element={<div className="p-4">소개 페이지</div>} />
      <Route path="*" element={<div className="p-4">404 - 페이지를 찾을 수 없습니다</div>} />
    </Routes>
  );
};
